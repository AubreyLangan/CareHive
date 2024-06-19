import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Tips.css';

const tips = [
    {title: "Tip 1", description: "Establish a routine for your child to create a sense of security and stability."},
    {title: "Tip 2", description: "Encourage open communication by listening to your child's thoughts and feelings."},
    {title: "Tip 3", description: "Promote physical activity to keep your child healthy and energetic."},
    {title: "Tip 4", description: "Limit screen time and encourage more face-to-face interactions."},
    {title: "Tip 5", description: "Teach your child the importance of empathy and kindness."}
];

const Tips = () => {
    return (
        <Container className="tips-page">
            <h1>Parenting Tips</h1>
            <Row>
                {tips.map((tip, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <Card className="tip-card">
                            <Card.Body>
                                <Card.Title>{tip.title}</Card.Title>
                                <Card.Text>{tip.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Tips;