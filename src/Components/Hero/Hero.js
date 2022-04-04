import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./Hero.css"

const Hero = () => {
    return (
        <section>
            <Container>
                <Row style={{height:"calc(100vh - 56px)"}} className='align-items-center' sm={1} lg={2}>
                    <Col>
                        <div className="hero-left">
                            <h1 className='mb-3 fs-1'>XPS 13 Laptop is best laptop for high school students 2022</h1>
                            <p className='fw-bold fs-6 text-black-50'>The best laptops for high school students need to be powerful, offer great value, be rigid enough for daily use, and have a sound design that younger consumers would want to use. The Dell XPS 13 (9310) ticks all these boxes and is one of the best 13-inch laptops you can buy. </p>
                            <button className='btn-my btn'>Live Demo</button>
                        </div>
                    </Col>
                    <Col>
                        <div className="hero-right">
                            <img className='img-fluid' src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9310/general/xps-13_black_open-up-left-v2.jpg?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=664&qlt=100,0&resMode=sharp2&size=664,402" alt="laptop" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;