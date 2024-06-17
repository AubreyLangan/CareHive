import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Activities.css';

const activities = () => {
    "o-2" [
        { title: "Sensory Play", description: "Engage in sensory play with safe household items." },
        { title: "Story Time", description: "Read colorful picture books together." }
    ],
    "3-5" [
        {title: "Building Blocks", description: "Build towers and structures with blocks."},
        {title: "Arts and Crafts", description: "Create simple art projects with crayons and paper."}
    ],
    "6-8" [
        {title: "Outdoor Games", description: "Play tag, hide and seek, and other outdoor games."},
        {title: "Simple Cooking", description: "Make easy recipes like sandwiches or fruit salad."}
    ],
    "9-12" [
        {title: "Science Experiments", description: "Conduct fun and safe science experiments."},
        {title: "Board Games", description: "Play board games that require strategy and thinking."}
    ],
    "13+" [
        {title: "Sports", description: "Join a sports team or play pickup games with friends."},
        {title: "Creative Writing", description: "Write stories, poems, or keep a journal."}
    ]
};

const Activities = () => {
    return (
        <Container>
            <h1>Activities by Age Group</h1>
            {Object.keys(activities).map(ageGroup => (
                <div key={ageGroup} className="age-group-section">
                    <h2>Age {ageGroup}</h2>
                    <Row>
                        {activities[ageGroup].map((activity, index) => (
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
                </div>
            ))}
        </Container>
    );
};

export default Activities;