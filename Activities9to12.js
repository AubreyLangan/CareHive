import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const activities9To12 = [
    {title: "Science Experiments", description: "Conduct fun and safe science experiments."},
    {title: "Board Games", description: "Play board games that require strategy and thinking."}
];

const Activities9To12 = () => {
    return (
        <Container>
            <h1>Activities for Ages 9-12</h1>
            <Row>
                {activities9To12.map((activity, index) => (
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

export default Activities9To12;