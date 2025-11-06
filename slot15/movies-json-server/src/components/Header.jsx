import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/movies">Movie Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies">Danh sách</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            {isAuthenticated ? (
              <>
                <div className="text-light text-end me-2">
                  <div>Xin chào, <strong>{user?.name}</strong></div>
                </div>
                <Button size="sm" variant="outline-light" onClick={handleLogout}>Đăng xuất</Button>
              </>
            ) : (
              <Button size="sm" as={Link} to="/login" variant="outline-light">Đăng nhập</Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
