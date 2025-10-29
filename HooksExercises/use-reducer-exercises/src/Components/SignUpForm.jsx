import React, { useReducer, useMemo } from 'react';
import { Form, Button, Card, Container, Row, Col, Modal, Toast } from 'react-bootstrap';
import ModalComponent from './ModalComponent';
import ToastComponent from './ToastComponent';
// Regex helpers
const isEmail = (v) => /\S+@\S+\.[A-Za-z]{2,}/.test(v);
const isUsername = (v) => /^[A-Za-z0-9._]{3,}$/.test(v.trim());
const isStrongPassword = (v) =>
  /[A-Z]/.test(v) &&        // có chữ hoa
  /[a-z]/.test(v) &&        // có chữ thường
  /\d/.test(v) &&           // có số
  /[^A-Za-z0-9]/.test(v) && // có ký tự đặc biệt
  v.length >= 8;            // độ dài

// Action types
const ACTION_TYPES = {
  SET_FORM_FIELD: 'SET_FORM_FIELD',
  SET_ERROR: 'SET_ERROR',
  SET_ERRORS: 'SET_ERRORS',
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
  SHOW_TOAST: 'SHOW_TOAST',
  HIDE_TOAST: 'HIDE_TOAST',
  RESET_FORM: 'RESET_FORM'
};

// Initial state
const initialState = {
  form: {
    username: '',
    email: '',
    password: '',
    confirm: '',
  },
  errors: {},
  showModal: false,
  showToast: false
};

// Reducer function
const signUpReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_FORM_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value
        }
      };
    case ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.field]: action.payload.message
        }
      };
    case ACTION_TYPES.SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    case ACTION_TYPES.SHOW_MODAL:
      return {
        ...state,
        showModal: true
      };
    case ACTION_TYPES.HIDE_MODAL:
      return {
        ...state,
        showModal: false
      };
    case ACTION_TYPES.SHOW_TOAST:
      return {
        ...state,
        showToast: true
      };
    case ACTION_TYPES.HIDE_TOAST:
      return {
        ...state,
        showToast: false
      };
    case ACTION_TYPES.RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

function SignUpForm() {
  // Sử dụng useReducer thay vì useState
  const [state, dispatch] = useReducer(signUpReducer, initialState);
  const { form, errors, showModal, showToast } = state;

  // Validate từng trường
  const validate = (field, value, currentForm = form) => {
    switch (field) {
      case 'username':
        if (!value.trim()) return 'Username is required';
        if (!isUsername(value)) return '≥ 3 chars, letters/numbers/._ only, no spaces';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!isEmail(value)) return 'Invalid email format';
        return '';
      case 'password':
        if (!value) return 'Password is required';
        if (!isStrongPassword(value)) return '≥8 chars, upper, lower, number, special';
        return '';
case 'confirm':
        if (!value) return 'Please confirm password';
        if (value !== currentForm.password) return 'Passwords do not match';
        return '';
      default:
        return '';
    }
  };

  // Memo hóa lỗi cho toàn bộ form
  const formErrors = useMemo(() => {
    const e = {};
    Object.keys(form).forEach((field) => {
      const err = validate(field, form[field], form);
      if (err) e[field] = err;
    });
    return e;
  }, [form]);

  // Form hợp lệ khi không có lỗi
  const isValid = Object.keys(formErrors).length === 0;

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Cập nhật form field
    dispatch({
      type: ACTION_TYPES.SET_FORM_FIELD,
      payload: { name, value }
    });
    
    // Cập nhật error cho field này
    // Tạo form tạm thời với giá trị mới để validate
    const tempForm = { ...form, [name]: value };
    dispatch({
      type: ACTION_TYPES.SET_ERROR,
      payload: { field: name, message: validate(name, value, tempForm) }
    });
    
    // Nếu đang thay đổi password và confirm đã có giá trị, validate lại confirm với password mới
    if (name === 'password' && form.confirm) {
      const confirmError = form.confirm !== value ? 'Passwords do not match' : '';
      dispatch({
        type: ACTION_TYPES.SET_ERROR,
        payload: { field: 'confirm', message: confirmError }
      });
    }
  };

  // Xử lý submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra lại toàn bộ lỗi
    const newErrors = {};
    Object.keys(form).forEach((field) => {
      const err = validate(field, form[field], form);
      if (err) newErrors[field] = err;
    });
    
    dispatch({
      type: ACTION_TYPES.SET_ERRORS,
      payload: newErrors
    });
    
    if (Object.keys(newErrors).length === 0) {
      dispatch({ type: ACTION_TYPES.SHOW_TOAST });
      dispatch({ type: ACTION_TYPES.SHOW_MODAL });
    }
  };

  // Xử lý reset form
  const handleCancel = () => {
    dispatch({ type: ACTION_TYPES.RESET_FORM });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={7}>
          <Card>
<Card.Header>
              <h3 className="text-center">Sign Up</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className="text-start mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                    placeholder="Enter username"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
<Form.Group controlId="email" className="text-start mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="Enter email"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password" className="text-start mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="confirm" className="text-start mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm"
                    value={form.confirm}
                    onChange={handleChange}
                    isInvalid={!!errors.confirm}
                    placeholder="Confirm password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirm}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="d-flex gap-2">
                  <Button variant="primary" type="submit" disabled={!isValid} className="w-100">
                    Submit
                  </Button>
                  <Button variant="outline-secondary" type="button" onClick={handleCancel} className="w-100">
                    Cancel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
</Col>
      </Row>
      {/* Toast thông báo submit thành công */}
      
      {/* Gọi ToastComponent () */}
        <ToastComponent
          show={showToast}
          message="Submitted successfully!"
          handleClose={() => dispatch({ type: ACTION_TYPES.HIDE_TOAST })}
        />
      {/* Gọi ModalComponent */}
      <ModalComponent
        show={showModal}
        handleClose={() => dispatch({ type: ACTION_TYPES.HIDE_MODAL })}

        title="Sign Up Info"
        body={
          <Card>
            <Card.Body>
              <p><strong>Username:</strong> {form.username}</p>
              <p><strong>Email:</strong> {form.email}</p>
              <p><strong>Password:</strong> {form.password}</p>
            </Card.Body>
          </Card>
        }
      />
</Container>
  );
}

export default SignUpForm;