import React, { useMemo, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

/*
Props:
- genres: [{id, name}]
- onChange(filters): callback when filters change
  filters: { q, genreId, durationMin, durationMax, sort }
*/
const FilterBar = ({ genres = [], onChange }) => {
  const [filters, setFilters] = useState({
    q: '',
    genreId: '',
    durationMin: '',
    durationMax: '',
    sort: 'title-asc',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...filters, [name]: value };
    setFilters(next);
    onChange?.(next);
  };

  const genreOptions = useMemo(() => [{ id: '', name: 'Tất cả' }, ...genres], [genres]);

  return (
    <Form className="p-3 border rounded bg-light">
      <Row className="g-3 align-items-end">
        <Col md={4}>
          <Form.Label>Tìm kiếm</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên phim..."
            name="q"
            value={filters.q}
            onChange={handleChange}
          />
        </Col>
        <Col md={3}>
          <Form.Label>Thể loại</Form.Label>
          <Form.Select name="genreId" value={filters.genreId} onChange={handleChange}>
            {genreOptions.map((g) => (
              <option key={g.id || 'all'} value={g.id}>
                {g.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Label>Thời lượng tối thiểu</Form.Label>
          <Form.Control
            type="number"
            name="durationMin"
            min={0}
            value={filters.durationMin}
            onChange={handleChange}
            placeholder="0"
          />
        </Col>
        <Col md={2}>
          <Form.Label>Thời lượng tối đa</Form.Label>
          <Form.Control
            type="number"
            name="durationMax"
            min={0}
            value={filters.durationMax}
            onChange={handleChange}
            placeholder=""
          />
        </Col>
        <Col md={3}>
          <Form.Label>Sắp xếp</Form.Label>
          <Form.Select name="sort" value={filters.sort} onChange={handleChange}>
            <option value="title-asc">Tên phim (A-Z)</option>
            <option value="title-desc">Tên phim (Z-A)</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterBar;
