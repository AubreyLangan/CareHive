import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Activities.css';

const Activities = () => {
    return (
        <Container>
            <h1>Activities by Age Group</h1>
            <Row>
                <Col sm={12} md={6} lg={4} className="mb-4">
                    <Card className="activity-card">
                        <Card.Body>
                            <Card.Title>0-2 Years</Card.Title>
                            <Card.Text>Discover activities for children 0 to 2 years old. </Card.Text>
                            <Link to="/activities/0-2" className="btn btn-primary">Explore</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="mb-4">
                    <Card className="activity-card">
                        <Card.Body>
                            <Card.Title>3-5 Years</Card.Title>
                            <Card.Text>Discover activities for cildren 3 to 5 years old.</Card.Text>
                            <Link to="/activities/3-5" className="btn btn-primary">Explore</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="mb-4">
                    <Card className="activity-card">
                        <Card.Body>
                            <Card.Title>6-8 Years</Card.Title>
                            <Card.Text>Discover activities for children 6 to 8 years old.</Card.Text>
                            <Link to="/activities/6-8" className="btn btn-primary">Explore</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="mb-4">
                    <Card className="activity-card">
                        <Card.Body>
                            <Card.Title>9-12 Years</Card.Title>
                            <Card.Text>Discover activities for children 9 to 12 years old.</Card.Text>
                            <Link to="/activities/9-12" className="btn btn-primary">Explore</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4} className="mb-4">
                    <Card className="activity-card">
                        <Card.Body>
                            <Card.Title>13+ Years</Card.Title>
                            <Card.Text>Discover activities for children 13 years and older.</Card.Text>
                            <Link to="/activities/13plus" className="btn btn-primary">Explore</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Activities;