import React from "react";
import { Container,Col,Row} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col lg={8}>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={require('../images/pizza-1.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fire Pizza</h3>
            <p className="d-none d-sm-block">using a wood-fired oven heated to a very high temperature—and served hot..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
            className="d-block w-100"
            src={require('../images/pizza-3.jpg')}
            alt="Seccond slide"
          />
          <Carousel.Caption>
            <h3>Domino's Pizza</h3>
            <p className="d-none d-sm-block">Taste the recipe.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={require('../images/pizza-2.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Neapolitan pizza</h3>
            <p className="d-none d-sm-block">
            Italy pizza.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
      </Row>
      <h2 className="display-5 text-center mt-3">Pizza For Every Occasion</h2>
      <div className="lead text-muted text-center fs-4">One of the simplest and most traditional pizza</div>
    </Container>


  )

}

export default Banner;