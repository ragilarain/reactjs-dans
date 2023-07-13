import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavLink from "../NavAccess";
import { useNavigate } from "react-router-dom";

function SNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink action={() => navigate("/dashboard")}>Home</NavLink>
          <NavLink action={() => navigate("/jobs")}>Jobs</NavLink>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SNavbar;
