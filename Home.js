import React from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css';
import RandomTipGenerator from "../Components/RandomTipGenerator";

const Home = () => {
    return (
        <Container className="home">
            <div className="welcome-banner">
            <h1>Welcome to CareHive</h1>
                <p>
                    Your one-stop solution for parenting tips, activities, and community support.
                </p>
                <Button variant="primary">Join Now</Button>
            </div>
            <section className="introduction">
                <h2>About CareHive</h2>
                <p>Discover the best parenting tips, fun activities, and join a community of supportive parents.</p>
            </section>
            <RandomTipGenerator />
            <section className="features">
                <h2>Key Features</h2>
                <Row>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>Parenting Tips</Card.Title>
                                <Card.Text>Get daily tips on how to handle various parenting challenges.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>Fun Activities</Card.Title>
                                <Card.Text>Engage your kids with fun and educational activities.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>Community Support</Card.Title>
                                <Card.Text>Connect with other parents and share your experiences.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className="latest-tips">
                <h2>Latest Tips and Activities</h2>
                <Row>
                    <Col md={6}>
                        <Card className="latest-card">
                            <Card.Body>
                                <Card.Title>Tip of the Day</Card.Title>
                                <Card.Text>Check out our latest parenting tip to make your life easier.</Card.Text>
                                <Button variant="link">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className="testimonials">
                <h2>What Our Users Say</h2>
                <Row>
                    <Col md={4}>
                        <Card className="testimonial-card">
                            <Card.Body>
                                <Card.Text></Card.Text>
                                <Card.Footer></Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="testimonial-card">
                            <Card.Body>
                                <Card.Text></Card.Text>
                                <Card.Footer></Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="testimonial-card">
                            <Card.Body>
                                <Card.Text></Card.Text>
                                <Card.Footer></Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className="newsletter-signup">
                <h2>Stay Updated</h2>
                <p>Sign up for our newsletter to get the latest updates amd tips straight to your inbox.</p>
                <Button variant="primary">Sign Up</Button>
            </section>
        </Container>
    );
};

export default Home;