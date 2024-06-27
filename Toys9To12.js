import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const toyData = [
    {title: "Board Games", description: "Fun and engaging board games."},
    {title: "Science Kits", description: "Kits for conducting fun experiments."}
];

const Toys9To12 = () => {
    return (
        <Container>
            <h1>Toys for Ages 9-12</h1>
            <Row>
                {toyData.map((toy, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <Card className="toy-name">
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

export default Toys9To12;