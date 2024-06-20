import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const activities3To5 = [
    {title: "Building Blocks", description: "Build towers and structures with blocks."},
    {title: "Arts and Crafts", description: "Create simple art projects with crayons and paper."}
];

const Activities3To5 = () => {
    return (
        <Container>
            <h1>Activities for Ages 3-5</h1>
            <Row>
                {activities3To5.map((activity, index) => (
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

export default Activities3To5;