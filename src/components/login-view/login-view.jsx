import React, { useState } from 'react';
import PropTypes from 'prop-types';

// React Bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

import './login-view.scss';
// import Logo from '../../assets/logo.svg';

export function LoginView(props) {
    //useState('') is the initial value of my login variable
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Form className="form text-center">
                    {/* <img src={Logo} /> */}
                    <h1>Welcome to mySyfy Movies</h1>
                    <Form.Text>Please login to continue</Form.Text>
                    <Form.Group controlId="formUsername">
                        <Form.Label> Username: </Form.Label>
                        <Form.Control type="text" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label> Password: </Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button className="formButton" type="submit" variant="warning" onClick={handleSubmit}>Login</Button>
                    {/* registration button */}
                </Form>
            </Row>
        </Container>
    );
}

LoginView.propTypes = {
    regUser: PropTypes.func,
    onLoggedIn: PropTypes.func.isRequired
};