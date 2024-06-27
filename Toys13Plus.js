import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const toysData = [
    { title: "Advanced Model Kits", description: "Challenging model kits for older children."},
    { title: "Tech Gadgets", description: "Cool tech gadgets and toys."}
];

const Toys13Plus = () => {
    return (
        <Container>
            <h1>Toys for Ages 13+</h1>
            <Row>
                {toysData.map((toy, index) => (
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
            <div className="text-center mt-4">
                <Link to="/toys">
                    <Button variant="primary">Back to Toys</Button>
                </Link>
            </div>
        </Container>
    );
};

export default Toys13Plus;