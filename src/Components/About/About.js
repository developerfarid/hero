import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        <section>
            <Container>
                <Row className='offset-lg-3 offset-md-2'>
                    <Col md={8} lg={6}>
                        <h1 className='heading text-center mt-5'>About Us</h1>
                        <p className='text-center'>Reviewly is one of the most popular for product reivew in online market. Here people get idea about product. </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;