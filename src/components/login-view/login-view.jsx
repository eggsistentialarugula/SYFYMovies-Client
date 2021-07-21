<<<<<<< Updated upstream
=======
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import './login-view.scss';

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
        <Form className="text-center">

            <h5 className="signIn font-weight-bolder text-center">Sign In</h5>
            <hr></hr>
            <Form.Group controlId="formUsername">
                <Form.Label className="font-weight-bold">Username:</Form.Label>
                <Form.Control className="inputBox" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label className="font-weight-bold">Password:</Form.Label>
                <Form.Control className="inputBox" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button className="font-weight-bold formButton" type="submit" onClick={handleSubmit}>
                Log In
            </Button>
        </Form>
    );
}

LoginView.propTypes = {
    regUser: PropTypes.func,
    onLoggedIn: PropTypes.func.isRequired
};
>>>>>>> Stashed changes
