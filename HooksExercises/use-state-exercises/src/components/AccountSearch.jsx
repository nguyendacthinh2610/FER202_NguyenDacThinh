import { useState, useMemo } from "react";
import { Card, Form, InputGroup, ListGroup, Container } from "react-bootstrap";

const PUBLIC = process.env.PUBLIC_URL || '';
const accountsData = [
    // use images in public/images
  { id: 1, username: "thinh.nd", password: "Ww@@123", avatar: `${PUBLIC}/images/image1.jpg` },
  { id: 2, username: "an.ng", password: "zzzZ@111", avatar: `${PUBLIC}/images/image2.jpg` },
  { id: 3, username: "linh.tr", password: "zD@@23", avatar: `${PUBLIC}/images/image3.jpg` },
  { id: 4, username: "khang.vo", password: "ddD@123", avatar: `${PUBLIC}/images/image4.jpg` },
];

export default function AccountSearch() {
  const [username, setUsername] = useState("");

  // Lọc danh sách theo username nhập vào
  const filtered = useMemo(() => {
    const q = username.trim().toLowerCase();
    if (!q) return accountsData;
    return accountsData.filter(a => a.username.toLowerCase().includes(q));
  }, [username]);

  return (
    <Container className="my-5">
      <Card className="shadow-lg">
        <Card.Header className="bg-primary text-white text-center py-3">
          <h4 className="m-0">🔍 Tìm kiếm Account theo Username</h4>
        </Card.Header>

        <Card.Body className="p-4 bg-light">
          {/* Ô nhập tìm kiếm */}
          <InputGroup className="mb-4">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              placeholder="Nhập username cần tìm..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>

          {/* Danh sách kết quả */}
          {filtered.length === 0 ? (
            <p className="text-center text-muted fst-italic">Không tìm thấy kết quả nào.</p>
          ) : (
            <ListGroup variant="flush">
              {filtered.map((acc, index) => (
                <ListGroup.Item
                  key={acc.id}
                  className={`d-flex align-items-center gap-3 py-3 ${
                    index % 2 === 0 ? "bg-white" : "bg-body-secondary"
                  }`}
                >
                  <img
                    src={acc.avatar}
                    alt={acc.username}
                    className="rounded-circle border border-2"
                    width={65}
                    height={65}
                  />
                  <div>
                    <div className="fw-bold fs-6">@{acc.username}</div>
                    <div className="text-muted small">ID: {acc.id}</div>
                    <div className="text-muted small">Password: {acc.password}</div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
