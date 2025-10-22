import { useReducer, useMemo } from "react";
import { Form, Button, Card, Container, Row, Col, Toast, Modal } from "react-bootstrap";

const usernameRegex = /^[A-Za-z0-9._]{3,}$/; // >=3, chỉ chữ/số/._ 
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const passwordRules = [
  { key: "len",    test: (s) => s.length >= 8,       label: "≥ 8 ký tự" },
  { key: "upper",  test: (s) => /[A-Z]/.test(s),     label: "Có chữ hoa" },
  { key: "lower",  test: (s) => /[a-z]/.test(s),     label: "Có chữ thường" },
  { key: "digit",  test: (s) => /\d/.test(s),        label: "Có chữ số" },
  { key: "special",test: (s) => /[^A-Za-z0-9]/.test(s), label: "Có ký tự đặc biệt" },
];

// --- validate helpers --- 
const validate = (f) => {
  const e = {};
  // username
  if (f.username.trim() !== f.username) {
    e.username = "Không có khoảng trắng đầu/cuối.";
  } else if (!usernameRegex.test(f.username)) {
    e.username = "Username ≥ 3 ký tự, chỉ chữ/số/._";
  }
  // email
  if (!emailRegex.test(f.email)) e.email = "Email không hợp lệ.";
  // password
  const failed = passwordRules.filter((r) => !r.test(f.password));
  if (failed.length) e.password = "Mật khẩu chưa đạt yêu cầu.";
  // confirm
  if (f.confirm !== f.password) e.confirm = "Confirm không khớp password.";
  return e;
};

// --- reducer ---
const initialState = {
  form: { username: "", email: "", password: "", confirm: "" },
  errors: {},
  showToast: false,
  showModal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD": {
      const nextForm = { ...state.form, [action.name]: action.value };
      const nextErrors = validate(nextForm);
      return { ...state, form: nextForm, errors: nextErrors };
    }
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SUCCESS_SUBMIT":
      return { ...state, showToast: true, showModal: true };
    case "CANCEL":
      return { ...initialState };
    case "CLOSE_TOAST":
      return { ...state, showToast: false };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    default:
      return state;
  }
}

export default function SignUpForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const allValid = useMemo(() => {
    const e = validate(state.form);
    return Object.keys(e).length === 0;
  }, [state.form]);

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FIELD", name, value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const eMap = validate(state.form);
    dispatch({ type: "SET_ERRORS", errors: eMap });
    if (Object.keys(eMap).length === 0) {
      dispatch({ type: "SUCCESS_SUBMIT" });
    }
  };

  const onCancel = () => dispatch({ type: "CANCEL" });

  const passChecks = passwordRules.map((r) => ({
    key: r.key,
    ok: r.test(state.form.password),
    label: r.label,
  }));

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={7}>
          <Card className="shadow-sm">
            <Card.Header>
              <h3 className="text-center m-0">Đăng ký tài khoản</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={onSubmit} noValidate>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    value={state.form.username}
                    onChange={onChange}
                    isInvalid={!!state.errors.username}
                    placeholder="vd: thinh.nd"
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    value={state.form.email}
                    onChange={onChange}
                    isInvalid={!!state.errors.email}
                    placeholder="vd: you@example.com"
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={state.form.password}
                    onChange={onChange}
                    isInvalid={!!state.errors.password}
                    placeholder="Mật khẩu mạnh"
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.password}
                  </Form.Control.Feedback>

                  <ul className="small mt-2 mb-0">
                    {passChecks.map((c) => (
                      <li key={c.key} className={c.ok ? "text-success" : "text-muted"}>
                        {c.ok ? "✓ " : "• "}{c.label}
                      </li>
                    ))}
                  </ul>
                </Form.Group>

                <Form.Group className="mb-4" controlId="confirm">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm"
                    value={state.form.confirm}
                    onChange={onChange}
                    isInvalid={!!state.errors.confirm}
                    placeholder="Nhập lại mật khẩu"
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.confirm}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex gap-2">
                  <Button type="submit" variant="primary" disabled={!allValid} className="flex-grow-1">
                    Submit
                  </Button>
                  <Button type="button" variant="secondary" onClick={onCancel}>
                    Cancel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Toast */}
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1080 }}>
        <Toast
          onClose={() => dispatch({ type: "CLOSE_TOAST" })}
          show={state.showToast}
          autohide
          delay={2500}
        >
          <Toast.Header>
            <strong className="me-auto">Thông báo</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body>Submitted successfully!</Toast.Body>
        </Toast>
      </div>

      {/* Modal kết quả */}
      <Modal show={state.showModal} onHide={() => dispatch({ type: "CLOSE_MODAL" })} centered>
        <Card className="m-0">
          <Card.Header className="fw-bold">Đăng ký thành công</Card.Header>
          <Card.Body>
            <p><strong>Username:</strong> {state.form.username}</p>
            <p><strong>Email:</strong> {state.form.email}</p>
            <p className="text-muted small mb-0">
              (Mật khẩu không được hiển thị vì lý do bảo mật)
            </p>
          </Card.Body>
        </Card>
      </Modal>
    </Container>
  );
}
