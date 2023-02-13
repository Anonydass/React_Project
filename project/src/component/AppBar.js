import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';


const AppBar = () => {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h2 className='text-primary'><span className="bi bi-yelp">Pizza Shop</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className='fw-bold ' >Home</Nav.Link>
            <Nav.Link href="#must" className='fw-bold'>Must Try</Nav.Link>
            <Nav.Link href="#menu" className='fw-bold'>Menu</Nav.Link>
            <Nav.Link href="#contact" className='fw-bold'>Contact us</Nav.Link>
            <Cart/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default AppBar;