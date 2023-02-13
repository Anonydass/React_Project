import React,{useState} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function ImageText() {
    const [show, setShow] = useState(false);
    return (
        <section id ='must'>
        <Container>
            <div className="text-center my-3 text-primary  "><h2><i className="bi bi-search-heart pe-2"  ></i>Pick Of The Week!</h2></div>
            <Row className="align-items-center">
               <Col md={8}>
               <img  className="d-block w-100 my-4 "
            src={require('../images/card2.jpg')}
            alt="First slide"
          /> </Col>
          <Col>
          <div className="text-center">
            <h1>Double Cheese Fjita</h1>
            <p className="lead">this pizza tasteeeeeeee ...</p>
            <Button variant="danger" onClick={()=>setShow(true)}><i className="bi bi-basket-fill pe-2"></i>Buy Now</Button>
          </div>
          </Col>
            </Row>

            <ToastContainer className="position-fixed bottom-0 end-0 p-3" position='bottom-end'>
          <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added</strong>
              <small>Enjoy<i className="bi bi-chat-heart"></i></small>
            </Toast.Header>
            <Toast.Body>Added To Your Card.</Toast.Body>
          </Toast>
        </ToastContainer>
       

        </Container>
        </section>
    );
}