import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <Container className="p-4">
                <Row>
                    <Col lg="6" className="mb-4 mb-lg-0">
                        <h5 className="text-uppercase">CareHive</h5>
                        <p>
                            A great place for parents to find tips, activities, and connect with the community.
                        </p>
                    </Col>
                    <Col lg="6" className="text-center text-lg-end">
                        <ul className="list-unstyled mb-0">
                            <li><a href="/" className="text-dark">Home</a></li>
                            <li><a href="/about" className="text-dark">About</a></li>
                            <li><a href="/tips" className="text-dark">Tips</a></li>
                            <li><a href="/activities" className="text-dark">Activities</a></li>
                            <li><a href="/community" className="text-dark">Community</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;