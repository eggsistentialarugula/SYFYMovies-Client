import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function RegistrationView(props) {
    //useState('') is the initial value of my login variable
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidReg = validateReg();
        if (isValidReg) {
            axios.post('https://mysyfymovies.herokuapp.com/users', {
                Username: username,
                Password: password,
                Email: email,
                Birthday: birthday
            }).then(response => {
                const data = response.data;
                console.log(data);
                window.open('/', '_self');
            }).catch(e => {
                console.log('error registering the user.')
            });
        }
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label>
                    Set Username:
                </Form.Label>
                <Form.Control
                    type="text" value={username} onChange={e => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Create Password:
                </Form.Label>
                <Form.Control
                    type="password" value={password} onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Email:
                </Form.Label>
                <Form.Control
                    type="password" value={email} onChange={e => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Birthday:
                </Form.Label>
                <Form.Control
                    type="password" value={Date} onChange={e => setBirthday(e.target.value)}
                />
            </Form.Group>

            <Button variant="warning " type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}

RegistrationView.propTypes = {
    register: PropTypes.shape({
        // Name: PropTypes.string.isRequired,
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthdate: PropTypes.string.isRequired
    }),
};