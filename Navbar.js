import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CustomNavbar = () => {
    return (
        <Container>
            <Navbar.Brand href='/'>Parenting App</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tips">
                        <Nav.Link>Tips</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/activities">
                        <Nav.Link>Activities</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/community">
                        <Nav.Link>Community</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    );
};

export default CustomNavbar;