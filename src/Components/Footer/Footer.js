import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='bg-dark text-white text-center pt-3'>
            <Container>
                <Row>
                    <Col>
                    <p >© 2021-2022 <a className='text-decoration-none text-info' target='_blank' rel="noreferrer" href="https://www.facebook.com/faiza.tasnim.31">Faiza Tasnim</a> All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;