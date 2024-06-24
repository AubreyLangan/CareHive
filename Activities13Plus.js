import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const activities13Plus = [
    {title: "Sports", description: "Join a sports team or play pickup games with friends."},
    {title: "Creative Writing", description: "Write stories, poems, or keep a journal."}
];

const Activities13Plus = () => {
    return (
        <Container>
            <h1>Activities for Ages 13 and Up</h1>
            <Row>
                {activities13Plus.map((activity, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <Card className="activity-card">
                            <Card.Body>
                                <Card.Title>{activity.title}</Card.Title>
                                <Card.Text>{activity.text}</Card.Text>
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

export default Activities13Plus;