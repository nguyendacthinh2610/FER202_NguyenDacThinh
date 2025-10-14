import React from "react";
import { Navbar, Nav, Container, Form, Button, InputGroup, Dropdown } from "react-bootstrap";
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-3 navbar-custom">
      <Container>
        <Navbar.Brand href="/">MovieApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center me-3">
            <InputGroup>
              <Form.Control type="text" placeholder="Quick search..." />
              <Button variant="outline-primary"><i className="bi bi-search"></i></Button>
            </InputGroup>
          </Form>
          <Dropdown className="me-2">
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-accounts">
              <i className="bi bi-person-circle me-1"></i> Accounts
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/manage-profile"><i className="bi bi-person-lines-fill me-1"></i> Manage Your Profiles</Dropdown.Item>
              <Dropdown.Item href="/account"><i className="bi bi-person-plus me-1"></i> Build your Account</Dropdown.Item>
              <Dropdown.Item href="/change-password"><i className="bi bi-key me-1"></i> Change Password</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="/login" className="me-2"><i className="bi bi-box-arrow-in-right me-1"></i> Login</Nav.Link>
          <Nav.Link href="/favourites"><i className="bi bi-heart me-1"></i> Favourites</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
