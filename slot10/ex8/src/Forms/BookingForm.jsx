import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import "./BookingForm.css";

const cities = ["Hà Nội", "Đà Nẵng", "TP. HCM", "Huế", "Nha Trang", "Cần Thơ"];

export default function BookingForm() {
  return (
    <Card className="booking-card">
      <Card.Header className="booking-header">Form đặt vé máy bay</Card.Header>
      <Card.Body>
        <Form>
          {/* Họ tên */}
          <Form.Group className="mb-3">
            <Form.Label>Họ tên</Form.Label>
            <InputGroup>
              <InputGroup.Text aria-label="icon">👤</InputGroup.Text>
              <Form.Control placeholder="Họ tên" />
              <InputGroup.Text>vnd</InputGroup.Text>
            </InputGroup>
            <Form.Text className="text-muted">Phải nhập 5 ký tự, in hoa…</Form.Text>
          </Form.Group>

          {/* Địa chỉ */}
          <Form.Group className="mb-3">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control placeholder="Địa chỉ" />
            <Form.Text className="text-muted">Phải nhập 5 ký tự, in hoa…</Form.Text>
          </Form.Group>

          {/* Đi từ / Đến */}
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Đi từ</Form.Label>
              <Form.Select defaultValue="Hà Nội">
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Đến</Form.Label>
              <Form.Select defaultValue="Hà Nội">
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>

          {/* Chiều đi / về */}
          <Form.Group className="mb-3">
            <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>
            <div>
              <Form.Check inline type="checkbox" label="Đi" />
              <Form.Check inline type="checkbox" label="Về" />
            </div>
          </Form.Group>

          <Button className="w-100" variant="primary">Đặt vé</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
