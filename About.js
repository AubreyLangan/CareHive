import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container className="about-page">
            <section className="intro">
                <h1>About CareHive</h1>
                <p>
                    Welcome to CareHive, your go-to resource for parenting tips, fun activities, and community support. Our mission is to make parenting a joyful and enriching experience for you and your family.  
                </p>
            </section>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    As a first time mom and as someone who has worked with kids for most of my life, I want to be able to share what I know and have learned with others. Parenting is hard enough, if I can make it any easier with CareHive being a hub of information that's what I want to do.
                </p>
            </section>

            <section className="features">
                <h2>Key Features</h2>
                <Row>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>Parenting Tips</Card.Title>
                                <Card.Text>Daily tips to help you navigate the challenges of parenting.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>Fun Activities</Card.Title>
                                <Card.Text>Ideas and activities to keep your kids engaged and learning.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>Community Support</Card.Title>
                                <Card.Text>Connect with other parents, share experiences, and find support.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className="contact">
                <h2>Contact Us</h2>
                <p>
                    If you have any questions or feedback, feel free to contact us.
                </p>
            </section>
        </Container>
    );
};

export default About; 