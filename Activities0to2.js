import React from "react";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const activities0To2 = [
    { title: "Sensory Play", description: "Engage in sensory play with safe household items."},
    { title: "Story Time", description: "Read colorful picture books together."}
];

const Activities0To2 = () => {
    return (
        <Container>
            <h1>Activities for Ages 0-2</h1>
            <Row>
                {activities0To2.map((activity, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <Card className="activity-card">
                            <Card.Body>
                                <Card.Title>{activity.title}</Card.Title>
                                <Card.Text>{activity.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="text-center mt-4">
                <Link to="/activities">
                    <Button variant="primary">Back to Activities</Button>
                </Link>
            </div>
        </Container>
    );
};

export default Activities0To2;