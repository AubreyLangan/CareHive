import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { db } from "../Firebase/firebase";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import './Community.css';


const Community = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'messages'), {
                text: newMessage,
                timestamp: serverTimestamp()
            });
            setNewMessage('');
        } catch (error) {
            console.error('Error adding message: ', error);
        }
    };

    return (
        <Container className="community-container">
            <div className="community-header">
                <h1>Community</h1>
                <p>Join our community to connect with other parents and share your experiences.</p>
            </div>
            <div className="community-page">
                <Row>
                    <Col md={6} className="mb-4">
                        <Card className="community-card">
                            <Card.Header as="h5">Community Chat</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit} aria-label="Community chat form">
                                    <Form.Label className="sr-only">New Message</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        placeholder="Type your message..."
                                        aria-required="true"
                                        className="mb-2"
                                    />
                                    <Button type="submit" className="btn btn-primary" aria-label="Post message">Post</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    {messages.map((message, index) => (
                        <Col md={6} lg={4} key={index} className="mb-4">
                            <Card className="message-card">
                                <Card.Body>
                                    <Card.Text>{message.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default Community;