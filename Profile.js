import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const Profile = () => {
    const [profileData, setProfileData] = useState({
        username:'',
        email:'',
        bio:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(profileData);
    };

    return (
        <Container>
            <h1>Profile</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={profileData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </Form.Group>
                <Form.Group controlId="formBio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="bio"
                        value={profileData.bio}
                        onChange={handleChange}
                        placeholder="Tell us about yourself"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save Profile
                </Button>
            </Form>
        </Container>
    );
};

export default Profile;