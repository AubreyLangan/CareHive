import React, { useEffect, useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import { collection, addDoc, onSnapshot } from 'firebase/firestore'; 
import { db } from "../Firebase/firebase";
import './Community.css';


const Community = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
            const fetchedMessages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(fetchedMessages);
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            await addDoc(collection(db, 'messages'), { 
                text: newMessage,
                username: username 
            });
            setNewMessage('');
            setUsername('');
        }
    };

    return (
        <Container className="community-container">
            <h1>Community</h1>
            <p>Join our community to connect with other parents and share your experiences.</p>
            <h2>Community Chat</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        aria-label="Username"
                    />
                </Form.Group>
            </Form>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="newMessage">
                    <Form.Label>Type your message</Form.Label>
                    <Form.Control
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        aria-label="New message"
                    />
                </Form.Group>
                <Button type="submit" className="mt-2">Post</Button>
            </Form>
            <ListGroup className="mt-4">
                {messages.map((message) => (
                    <ListGroup.Item key={message.id}>
                        <strong>{message.username}</strong> {message.text}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default Community;