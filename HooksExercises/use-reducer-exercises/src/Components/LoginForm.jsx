import { useReducer } from "react";
import { Form, Button, Card, Container, Row, Col, Modal } from "react-bootstrap";

// -----------------------------
// 1️⃣ Khai báo initial state
// -----------------------------
const initialState = {
  username: "",
  password: "",
  errors: {},
  showModal: false,
};

// -----------------------------
// 2️⃣ Định nghĩa reducer
// -----------------------------
function reducer(state, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
        errors: {
          ...state.errors,
          username:
            action.payload.trim() === "" ? "Username is required" : undefined,
        },
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
        errors: {
          ...state.errors,
          password:
            action.payload.trim() === "" ? "Password is required" : undefined,
        },
      };

    case "SET_ERRORS":
      return { ...state, errors: action.payload };

    case "SHOW_MODAL":
      return { ...state, showModal: true };

    case "HIDE_MODAL":
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

// -----------------------------
// 3️⃣ Component LoginForm
// -----------------------------
function LoginForm({ onSubmit }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { username, password, errors, showModal } = state;

  // Xử lý khi thay đổi username
  const handleUsernameChange = (e) => {
    dispatch({ type: "SET_USERNAME", payload: e.target.value });
  };

  // Xử lý khi thay đổi password
  const handlePasswordChange = (e) => {
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  };

  // Xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (username.trim() === "") newErrors.username = "Username is required";
    if (password.trim() === "") newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: newErrors });
    } else {
      // Nếu cần gửi dữ liệu cho backend thì bật dòng này
      // onSubmit({ username, password });
      dispatch({ type: "SHOW_MODAL" });
    }
  };

  // Đóng modal và reset form
  const handleCloseModal = () => {
    dispatch({ type: "HIDE_MODAL" });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h3 className="text-center">Login</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                {/* Username */}
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    isInvalid={!!errors.username}
                    placeholder="Enter username"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Password */}
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    isInvalid={!!errors.password}
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal khi đăng nhập thành công */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Welcome, {username}!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default LoginForm;
