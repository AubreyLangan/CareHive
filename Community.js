import React, { useEffect, useState } from "react";
import firebase from './firebase';
import './Community.css';
import { Await } from "react-router-dom";

const Community = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            const messagesCollection = await firebase.firestore().collection('messages').get();
            setMessages(messagesCollection.docs.map(doc => doc.data()));
        };
        fetchMessages();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.firestore().collection('messages').add({
            text: newMessage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setNewMessage('');
        const messagesCollection = await firebase.firestore().collection('messages').get();
        setMessages(messagesCollection.docs.map(doc => doc.data()));
    };

    return (
        <div>
            <div>
                <h1>Community</h1>
                <p>
                    Join our community to connect with other parents and share your experiences.
                </p>
            </div>
            <div className="community-page">
                <h2>Community Chat</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button type="submit">Post</button>
                </form>
                <div className="messages">
                    {messages.map((message, index) => (
                        <div key={index} className="message">
                            {message.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Community;