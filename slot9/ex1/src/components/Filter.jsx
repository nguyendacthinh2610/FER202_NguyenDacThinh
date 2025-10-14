import React from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import './Filter.css';

const Filter = () => {
  return (
    <Card className="filter-card mb-1">
      <Card.Body>
        <div className="filter-row d-flex align-items-end flex-wrap gap-3">
          <Form.Group className="mb-0">
            <Form.Label className="mb-1">Tìm kiếm</Form.Label>
            <Form.Control type="text" placeholder="Nhập tiêu đề hoặc mô tả..." style={{ minWidth: 180 }} />
          </Form.Group>
          <Form.Group className="mb-0">
            <Form.Label className="mb-1">Năm</Form.Label>
            <Form.Select style={{ minWidth: 140 }}>
              <option value="all">Tất cả</option>
              <option value="<=2000">Trước hoặc bằng 2000</option>
              <option value="2001-2015">2001-2015</option>
              <option value=">2015">Sau 2015</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-0">
            <Form.Label className="mb-1">Sắp xếp</Form.Label>
            <Form.Select style={{ minWidth: 140 }}>
              <option value="year-asc">Năm ↑</option>
              <option value="year-desc">Năm ↓</option>
              <option value="title-asc">Tiêu đề A→Z</option>
              <option value="title-desc">Tiêu đề Z→A</option>
              <option value="duration-asc">Thời lượng ↑</option>
              <option value="duration-desc">Thời lượng ↓</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" style={{ minWidth: 120, height: 40 }}>Áp dụng</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Filter;
