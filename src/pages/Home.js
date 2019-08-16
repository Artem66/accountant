import React, { Component } from 'react';
import FirstSlide from '../img/sl-1.png';
import { Container, Row, Carousel } from 'react-bootstrap';

export default class Home extends Component {
  render () {
    return(
      <Container>
        <Row>
          <Carousel style={ {marginTop:10} }>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ FirstSlide }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ FirstSlide }
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ FirstSlide }
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    );
  }
}