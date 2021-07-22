import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function RegistrationView(props) {
    //useState('') is the initial value of my login variable
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = userState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, birthday);
        props.onRegistration(username);
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
                    type="password" value={date} onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button variant="warning " type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}

RegistrationView.propTypes = {
    onRegistration: PropTypes.func.isRequired
};