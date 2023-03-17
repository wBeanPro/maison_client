import React from 'react';
import './TopBar.css';
import topLogo from '../../../Images/logotop.jpg'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const TopBar = () => {
     return (
          <Navbar collapseOnSelect expand="lg" className="my-3" bg="#fff" variant="light">
          <Container>
          <Navbar.Brand as={Link} to="" className="d-flex">
          <img
          src={topLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
          /> <h3 className="ms-2">Maison</h3>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} className="link-text" to="/">Home</Nav.Link>
                <Nav.Link as={Link} className="link-text" to="shop">Shop</Nav.Link>
                <Nav.Link as={Link} className="link-text" to="dashBoard">Dash Board</Nav.Link>
                <Nav.Link as={Link} className="link-text" to="login">Login</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     );
};

export default TopBar;