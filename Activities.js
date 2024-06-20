import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './Activities.css';

const ageGroups = [
    {ageRange: '0-2', label: 'Ages 0-2', link: '/activities/0-2'},
    {ageRange: '3-5', label: 'Ages 3-5', link: '/activities/3-5'},
    {ageRange: '6-8', label: 'Ages 6-8', link: '/activities/6-8'},
    {ageRange: '9-12', label: 'Ages 9-12', link: '/activities/9-12'},
    {ageRange: '13+', label: 'Ages 13+', link: '/activities/13+'}
];

const Activities = () => {
    return (
        <Container>
            <h1>Activities by Age Group</h1>
            <Row>
                {ageGroups.map((group, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <LinkContainer to={group.link}>
                            <Card className="age-group-card">
                                <Card.Title>{group.label}</Card.Title>
                            </Card>
                        </LinkContainer>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Activities;