import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import flexgnlogo from "../Assests/flexgn.jpg";
import { useNavigate, Link } from "react-router-dom";
import FloatingIcon from "./FloatingIcon";
import "./Header.css";

export default function HeaderComponent() {
  let navigate = useNavigate();
  const [active, setActive] = useState("Home");

  return (
    <div className="sticky-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        fixed="top"
        className="header-card "
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={flexgnlogo} className="logoimg" alt="#" />
            <span className="brandText">Flexgn</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav
              activeKey={active}
              onSelect={(selectedKey) => setActive(selectedKey)}
            >
              <Nav.Link onClick={() => navigate("/Home")} eventKey="Home">
                Home
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/Aboutus")} eventKey="Aboutus">
                About Us
              </Nav.Link>
              <Nav.Link href="" eventKey="Teacher-Login">
                Teacher Login
              </Nav.Link>
              <Nav.Link href="" eventKey="Parent-Login">
                Parent Login
              </Nav.Link>

              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <FloatingIcon />
    </div>
  );
}
