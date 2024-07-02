import React from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css';
import RandomTipGenerator from "../Components/RandomTipGenerator";
import { Link, useNavigate } from 'react-router-dom';
import './JoinNowButton.css';

const Home = () => {
    const navigate = useNavigate();

    const handleJoinNowClick = () => {
        navigate('/register');
    };

    return (
        <Container className="home">
            <div className="welcome-banner">
            <h1>Welcome to CareHive</h1>
                <p>
                    Your one-stop solution for parenting tips, activities, and community support.
                </p>
                <button className="join-now-btn" onClick={handleJoinNowClick}>Join Now</button>
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
                                <Link to="/tips">
                                    <button className="btn btn-primary" aria-label="Read more about the tip of the day">Read More</button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="latest-card">
                            <Card.Body>
                                <Card.Title>Activity of the Day</Card.Title>
                                <Card.Text>Check out our latest activity for something to do as a family.</Card.Text>
                                <Link to="/activities">
                                    <button className="btn btn-primary" aria-label="Read more about the activity of the day">Read More</button>
                                </Link>
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
                                <Card.Text>"As a first time mom, CareHive has been a lifesaver! The tips and activities are not only fun and engaging but also educational. It's great to have a community of parents to share experiences and advice with. Highly recommend!"</Card.Text>
                                <Card.Footer>-Sarah M.</Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="testimonial-card">
                            <Card.Body>
                                <Card.Text>"I've tried several parenting apps, but CareHive stands out. The age-specific activities are perfect for keeping my kids entertained and learning. The community is a fantastic way to connect with other parents. A must have for any parent!"</Card.Text>
                                <Card.Footer>-John D.</Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="testimonial-card">
                            <Card.Body>
                                <Card.Text>"CareHive is an amazing resource for parents. The activities are perfectly suited for my kids' age groups and keep them entertained for hours. The tips have helped me become a more confident and informed parent. I can't recommend this app enough!"</Card.Text>
                                <Card.Footer>-Jessica T.</Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className="newsletter-signup">
                <h2>Stay Updated</h2>
                <p>Sign up for our newsletter to get the latest updates amd tips straight to your inbox.</p>
                <Link to="/newsletter-signup">
                    <Button variant="primary">Sign Up</Button>
                </Link>
            </section>
        </Container>
    );
};

export default Home;