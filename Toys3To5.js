import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

const toyData = [
    { title: "Building Sets", description: "Simple building sets to encourage creativity."},
        { title: "Stuffed Animals", description: "Cuddly stuffed animals"}
];

const Toys3To5 = () => {
    return (
        <Container>
            <h1>Toys for Ages 3-5</h1>
            <Row>
                {toyData.map((toy, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <Card className="toy-card">
                            <Card.Body>
                                <Card.Title>{toy.title}</Card.Title>
                                <Card.Text>{toy.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Toys3To5;