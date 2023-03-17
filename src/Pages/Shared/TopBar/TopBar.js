import React, { useEffect } from 'react';
import './TopBar.css';
import topLogo from '../../../Images/logotop.jpg'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';
import Aos from "aos";
import "aos/dist/aos.css";

const TopBar = () => {
  const {user, logOut} = useAuth()

    useEffect(()=>{
      Aos.init({duration: 2000})
    },[])

     return (
          <Navbar data-aos="fade-down" collapseOnSelect expand="lg" className="my-3" bg="#fff" variant="light">
          <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex">
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
                {user.email && <Nav.Link as={Link} className="link-text" to="dashBoard">Dash Board</Nav.Link>}
                {user.email ?
                  <Button onClick={logOut} variant="inherit" className="link-text"> Logout </Button>
                 :
                <Nav.Link as={Link} className="link-text" to="login">Login</Nav.Link>}
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     );
};

export default TopBar;