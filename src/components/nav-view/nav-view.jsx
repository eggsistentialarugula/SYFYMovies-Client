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
        const moviePath = `/`;
        const profilePath = `users/${user}`;

        if (!user) return null;

        return (
            // <Container>
            //     <Navbar>
            //         <Navbar.Collapse id="navbarScroll">

            //             <Form className="d-flex">
            //                 <Form.Control
            //                     type="search"
            //                     placeholder="Search for movie"
            //                     className="mr-2"
            //                     aria-label="Search"
            //                 />
            //                 <Button variant="dark">Search</Button>
            //             </Form>
            //         </Navbar.Collapse>

            //         <Navbar.Collapse className="justify-content-end">

            //             <Nav.Link as={Link} to={moviePath}>See List of Movies</Nav.Link>
            //             <hr />

            //             Signed in as: <Nav.Link as={Link} to={profilePath}>{user}</Nav.Link>
            //             <Button variant="dark" onClick={() => this.onLoggedOut()}>Logout</Button>
            //         </Navbar.Collapse>

            //     </Navbar>
            // </Container>

            <Navbar
                collapseOnSelect
                expand="lg"
                fixed="top">
                {/* 
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className='logo'
                        alt='mySyfy logo' />
                </Navbar.Brand> */}

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">

                        <Nav.Link as={Link} to={moviePath} className="link-text">
                            Movies
                        </Nav.Link>

                        <Nav.Link as={Link} to={profilePath} className="link-text">
                            {user}'s Profile
                        </Nav.Link>

                        <Button className="logoutButton" variant="dark" onClick={() => this.onLoggedOut()}>Logout</Button>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        )
    }
}