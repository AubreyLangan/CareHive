import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
    return (
        <Navbar bg='dark' expand='lg' role='navigation'>
            <Container>
                <Navbar.Brand href='/' aria-label="CareHive Home"></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' aria-label="Toggle navigation" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <LinkContainer to="/">
                            <Nav.Link><i className='fas fa-home'></i>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link><i className='fas fa-info-circle'></i>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/tips">
                            <Nav.Link><i className='fas fa-lightbulb'></i>Tips</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/activities">
                            <Nav.Link><i className='fas fa-gamepad'></i>Activities</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/community">
                            <Nav.Link><i className='fas fa-users'></i>Community</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/toys">
                            <Nav.Link><i className='fas fa-cube'></i>Toys</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;