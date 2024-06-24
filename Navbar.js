import React, { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';
import './ColorblindMode.css';

const CustomNavbar = () => {
    const [colorblindMode, setColorblindMode] = useState(false);

    const toggleColorblindMode = () => {
        setColorblindMode(!colorblindMode);
        document.body.classList.toggle('colorblind-mode', !colorblindMode);
    };
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='/'></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
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
                    </Nav>
                    <Button variant="outline-secoondary" onClick={toggleColorblindMode}>
                        {colorblindMode ? 'Default Mode' : 'Colorblind Mode'}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;