import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

// React Bootstrap components
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './registration-view.scss';

export function RegistrationView(props) {
    //useState('') is the initial value of my login variable
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const validated = useState(null);

    const registerUser = (e) => {
        e.preventDefault();
        axios.post('https://mysyfymovies.herokuapp.com/users', {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        }).then(response => {
            const data = response.data;
            console.log(data);
            window.open('/', '_self');
            alert("Your registration has been completed.")
        }).catch(e => {
            if (e.response && e.response.status === 400) {
                alert('Invalid input.')
            }
        });
        console.log(username, password, email, birthday);
    };

    return (
        <Container className="loginContainer" >
            <Row className="justify-content-md-center">
                <Form noValidate validated={validated}
                    onSubmit={registerUser}>
                    <Form.Group controlId="formUsername">
                        <Form.Label className="formLabel"> Username: </Form.Label>
                        <Form.Control type="text" placeholder="Create your username" onChange={e => setUsername(e.target.value)} pattern="[A-Za-z0-9]{5,}" required minLength="5" value={username} />
                        <Form.Control.Feedback type="invalid">Must contain numbers and/or letters and be at least 5 characters.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label> Password: *</Form.Label>
                        <Form.Control type="password" placeholder="Create a password" onChange={e => setPassword(e.target.value)} pattern=".{5,}" required minLength="5" value={password} />
                        <Form.Control.Feedback type="invalid">Must be at least 5 characters.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label> Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter an email" onChange={e => setEmail(e.target.value)} required value={email} />
                        <Form.Control.Feedback type="invalid">Email is not valid, please try again.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBirthday">
                        <Form.Label> Birthday: </Form.Label>
                        <Form.Control type="date" placeholder="Set Birthday" onChange={e => setBirthday(e.target.value)} required value={birthday} />
                        <Form.Control.Feedback type="invalid">Please enter valid birthday!</Form.Control.Feedback>
                    </Form.Group>

                    <Button className="registerButton" variant="warning" type="submit">Submit</Button>
                    <hr />
                    <Link to="/">
                        <Button className="formButton" variant="warning" type="submit">Back to login menu</Button>
                    </Link>
                </Form>
            </Row>
        </Container>


    );
}

RegistrationView.propTypes = {
    register: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthdate: PropTypes.string.isRequired
    }),
};