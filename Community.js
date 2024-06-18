import React, { useEffect, useState } from "react";
import { db, firebase } from "../Firebase/firebase";
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
        <div className="community-page">
            <h1>Community</h1>
            <p>
                Join our community to connect with other parensts and share your experiences.
            </p>
            <h2>Community Chat</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                />
            </form>
            <div className="messages">
                {messages.map((message) => (
                    <div key={message.id} className="message">
                        {message.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;