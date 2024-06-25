import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './Toys.css';

const toysData = {
    "0-2": [
        { title: "Soft Blocks", description: "Safe and soft blocks for building"},
        { title: "Rattles", description: "Colorful rattles that make soothing sounds."}
    ],
    "3-5": [
        { title: "Building Sets", description: "Simple building sets to encourage creativity."},
        { title: "Stuffed Animals", description: "Cuddly stuffed animals"}
    ],
    "6-8": [
        {title: "Puzzle Games", description: "Interactive puzzle games."},
        {title: "Action Figures", description: "Action figures from favorite shows."}
    ],
    "9-12": [
        {title: "Board Games", description: "Fun and engaging board games."},
        {title: "Science Kits", description: "Kits for conducting fun experiments."}
    ],
    "13+": [
        { title: "Advanced Model Kits", description: "Challenging model kits for older children."},
        { title: "Tech Gadgets", description: "Cool tech gadgets and toys."}
    ]
};

const Toys = () => {
    return (
        <Container>
            <h1>Toys by Age Group</h1>
            {Object.keys(toysData).map(ageGroup => (
                <div key={ageGroup} className="age-group-section">
                    <h2>Age {ageGroup}</h2>
                    <Row>
                        {toysData[ageGroup].map((toy, index) => (
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
                </div>
            ))}
        </Container>
    );
};

export default Toys;