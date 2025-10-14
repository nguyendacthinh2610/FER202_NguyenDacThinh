import React from "react";
import { Form } from "react-bootstrap";

const AboutForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
        <Form.Control type="text" isInvalid />
        <Form.Control.Feedback type="invalid">Vui lòng nhập First Name</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
        <Form.Control type="text" isInvalid />
        <Form.Control.Feedback type="invalid">Vui lòng nhập Last Name</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email <span className="text-danger">*</span></Form.Label>
        <Form.Control type="email" isInvalid />
        <Form.Control.Feedback type="invalid">Vui lòng nhập Email hợp lệ</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone <span className="text-danger">*</span></Form.Label>
        <Form.Control type="text" isInvalid />
        <Form.Control.Feedback type="invalid">Vui lòng nhập số điện thoại</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age <span className="text-danger">*</span></Form.Label>
        <Form.Control type="number" min={0} isInvalid />
        <Form.Control.Feedback type="invalid">Vui lòng nhập tuổi</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Avatar <span className="text-danger">*</span></Form.Label>
        <Form.Control type="file" isInvalid />
        <Form.Control.Feedback type="invalid">Vui lòng chọn file ảnh</Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default AboutForm;
