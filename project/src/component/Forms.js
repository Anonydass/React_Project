import React from "react";
import { Container, Form, InputGroup, Row,Col } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Froms() {
  return (
   <div>
    <section id ='contact'>
    <Container>
      <div className="text-center text-primary my-3"><h2><i className="bi bi-calendar3-week-fill"></i>Command</h2></div>
    <Form>
      <Row className="justify-content-center">
        <Col md={7}>
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      </InputGroup>
      </Col>

      <Col md={7}>
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className="bi bi-person"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Password"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      </InputGroup>
      </Col>
      </Row> 
    </Form>
    </Container>
   </section>
   </div>
  );
}
export default Froms;