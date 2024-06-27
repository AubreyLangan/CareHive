import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Toys.css';
    
const Toys = () => {
    return (
        <Container>
            <h1>Toys by Age Group</h1>
            <Row>
                <Col sm={12} md={6} lg={4} className="mb-4">
                    <Card className="toy-card">
                        <Card.Body>
                            <Card.Title>0-2 Years</Card.Title>
                            <Card.Text>Discover toys for children aged 0 to 2 years.</Card.Text>
                            <Link to="/toys/0-2" className="btn btn-primary">Explore</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="mb-4">
                    <Card className="toy-card">
                        <Card.Body>
                            <Card.Title>3-5 Years</Card.Title>
                            <Card.Text>Discover toys for children aged 3 to 5 years.</Card.Text>
                            <Link to="/toys/3-5" className="btn btn-primary">Explore</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="mb-4">
                    <Card className="toy-card">
                        <Card.Body>
                            <Card.Title>6-8 Years</Card.Title>
                            <Card.Text>Discover toys for children aged 6 to 8 years.</Card.Text>
                            <Link to="/toys/6-8" className="btn btn-primary">Explore</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="mb-4">
                    <Card className="toy-card">
                        <Card.Body>
                            <Card.Title>9-12 Years</Card.Title>
                            <Card.Text>Discover toys for children aged 9 to 12 years.</Card.Text>
                            <Link to="/toys/9-12" className="btn btn-primary">Explore</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="mb-4">
                    <Card className="toy-card">
                        <Card.Body>
                            <Card.Title>13+</Card.Title>
                            <Card.Text>Discover toys for children aged 13 and up.</Card.Text>
                            <Link to="/toys/13plus" className="btn btn-primary">Explore</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Toys;