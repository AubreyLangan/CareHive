import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

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
        </Container>
    );
};

export default Activities13Plus;