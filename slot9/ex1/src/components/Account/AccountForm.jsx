import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const AccountForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Username <span className="text-danger">*</span></Form.Label>
        <InputGroup>
          <InputGroup.Text><i className="bi bi-person-circle"></i></InputGroup.Text>
          <Form.Control type="text" isInvalid />
        </InputGroup>
        <Form.Control.Feedback type="invalid">Vui lòng nhập Username</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password <span className="text-danger">*</span></Form.Label>
        <InputGroup>
          <InputGroup.Text><i className="bi bi-lock"></i></InputGroup.Text>
          <Form.Control type="password" isInvalid />
        </InputGroup>
        <Form.Control.Feedback type="invalid">Vui lòng nhập Password</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password <span className="text-danger">*</span></Form.Label>
        <InputGroup>
          <InputGroup.Text><i className="bi bi-lock"></i></InputGroup.Text>
          <Form.Control type="password" isInvalid />
        </InputGroup>
        <Form.Control.Feedback type="invalid">Vui lòng xác nhận Password</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Secret Question <span className="text-danger">*</span></Form.Label>
        <Form.Control type="text" isInvalid />
        <Form.Control.Feedback type="invalid">Vui lòng nhập câu hỏi bảo mật</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Answer <span className="text-danger">*</span></Form.Label>
        <Form.Control type="text" isInvalid />
        <Form.Control.Feedback type="invalid">Vui lòng nhập câu trả lời</Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default AccountForm;
