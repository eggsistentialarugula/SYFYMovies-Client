import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../actions/actions'
import PropTypes from 'prop-types';

// React Bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';

import './login-view.css';
// import Logo from 'url:~/src/images/logo1.png';

export function LoginView(props) {
    //useState('') is the initial value of my login variable
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const validated = useState(false);

    const handleSubmit = (e) => {
        const showSpinner = document.getElementById('loginSpinner');
        showSpinner.hidden = false;
        e.preventDefault();
        /* Send a request to the server for authentication */
        axios.post('https://mysyfymovies.herokuapp.com/login', {
            Username: username,
            Password: password
        }).then(response => {
            const data = response.data;
            props.onLoggedIn(data);
            console.log('login successful', data);
        }).catch(e => {
            console.log('no such user');
            showSpinner.hidden = true;
            alert('Invalid Username or Password');
        });
    };

    return (
        <Container className="loginContainer">
            <Row className="justify-content-md-center">
                <Form noValidate validated={validated} className="loginForm form text-center">
                    {/* <Figure.Image
                        className="logo"
                        width={171}
                        height={180}
                        alt="171x180"
                    src={Logo}
                    /> */}
                    <h1><span className="welcome-text">Welcome to </span> <span className="syfy-title">mySyfy Movies</span> </h1>
                    <Form.Text>Please login to continue</Form.Text>
                    <Form.Group controlId="formUsername">
                        <Form.Label> Username: </Form.Label>
                        <Form.Control type="text" placeholder="Use testuser as a username" value={username} onChange={e => setUsername(e.target.value)} pattern="[A-Za-z0-9]{5,}" required minLength="5" />
                        <Form.Control.Feedback type="invalid">Must contain numbers and/or letters and be at least 5 characters.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label> Password: </Form.Label>
                        <Form.Control type="password" placeholder="Use testuserpw as a password" value={password} onChange={e => setPassword(e.target.value)} required minLength="5" />
                        <Form.Control.Feedback type="invalid">Must be at least 5 characters.</Form.Control.Feedback>
                    </Form.Group>
                    <Button className="formButton" type="submit" variant="warning" onClick={handleSubmit}><Spinner className="mx-1" id="loginSpinner" as="span" animation="border" size="sm" role="status" aria-hidden="true" hidden />Login</Button>
                    <span>
                        <Form.Text><h5>Don't have an account?</h5></Form.Text>
                        <Link to={`/register`}>
                            <Button className="registerButton" variant="danger">Register</Button>
                        </Link>
                    </span>
                    <span>
                        <Form.Text><h5>Use this login information to take a look:</h5></Form.Text>
                        <h6>
                            Username: testuser <br></br>
                            Password: testuserpw
                        </h6>
                    </span>
                </Form>
            </Row>
        </Container>
    );
}

LoginView.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }),
    onLoggedIn: PropTypes.func.isRequired
};

let mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, { setUser })(LoginView);

