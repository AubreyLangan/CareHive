import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

const activities6To8 = () => {
    return (
        <Container>
            <h1>Activities for Ages 6-8</h1>
            <Row>
                {activities6To8.map((activity, index) => (
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
        </Container>
    );
};

export default activities6To8;