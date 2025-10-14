import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const AddressForm = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Street <span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" isInvalid />
            <Form.Control.Feedback type="invalid">Vui lòng nhập tên đường</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>City <span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" isInvalid />
            <Form.Control.Feedback type="invalid">Vui lòng nhập thành phố</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Country <span className="text-danger">*</span></Form.Label>
            <Form.Select isInvalid>
              <option value="">Chọn quốc gia</option>
              <option value="VN">Việt Nam</option>
              <option value="US">Hoa Kỳ</option>
              <option value="JP">Nhật Bản</option>
              <option value="KR">Hàn Quốc</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">Vui lòng chọn quốc gia</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Zip Code <span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" isInvalid />
            <Form.Control.Feedback type="invalid">Vui lòng nhập mã bưu điện</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default AddressForm;
