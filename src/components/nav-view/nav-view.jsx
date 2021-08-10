import React from 'react';
import { Link } from 'react-router-dom';

//React Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';

import './nav-view.scss';

export class NavView extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    onLoggedOut = () => {
        localStorage.clear();
        window.open('/', '_self');
    }
    render() {
        const { user } = this.props;
        if (!user) return null;
        return (
            <Navbar
                collapseOnSelect
                className="nav-view"
                expand="lg"
                fixed="top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to={`/`} className="link-text">
                            Movies
                        </Nav.Link>
                        <Nav.Link as={Link} to={`/users/${user}`} className="link-text">
                            Profile
                        </Nav.Link>
                        <Button className="logoutButton" variant="dark" onClick={() => this.onLoggedOut()}>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}