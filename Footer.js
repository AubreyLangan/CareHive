import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-left mb-2 mb-md-0">
                        <p className="mb-0"> 2024 CareHive. All Rights Reserved.</p>
                    </Col>
                    <Col md={6} className="text-center text-md-right">
                        <a href="/privacy" className="text-light mx-2">Privacy Policy</a>
                        <a href="/terms" className="text-light mx-2">Terms of Service</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;