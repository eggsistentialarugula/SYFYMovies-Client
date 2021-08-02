// Allow a user to update their user info (username, password, email, date of birth)
// Allow a user to deregister
// Display a user's favorite movies
// Allow a user to remove a movie from their list of favorites

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Link } from 'react-router-dom';
// React Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './profile-view.scss';

export class ProfileView extends React.Component {
    constructor() {
        super();
        this.state = {
            Username: null,
            Password: null,
            Email: null,
            Birthday: null,
            FavoriteMovies: [],
            validated: null,
        };
    }

    componentDidMount() {
        const accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.getUser(accessToken);
        }
    }

    getUser(token) {
        const username = localStorage.getItem('user');
        axios.get(`https://mysyfymovies.herokuapp.com/users/${username}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((response) => {
            this.setState({
                Username: response.data.Username,
                Password: response.data.Password,
                Email: response.data.Email,
                Birthday: response.data.Birthday,
                FavoriteMovies: response.data.FavoriteMovies,
            });
        }).catch(function (error) {
            console.log(error);
        });
    }

    // update user information
    updateUser(e, newUsername, newPassword, newEmail, newBirthday) {
        this.setState({
            validated: null,
        });

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            this.setState({
                validated: true
            });
            return;
        }
        e.preventDefault();
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');

        axios({
            method: 'put',
            url: `https://mysyfymovies.herokuapp.com/users/${username}`,
            headers: { Authorization: `Bearer ${token}` },
            data: {
                Username: newUsername ? newUsername : this.state.Username,
                Password: newPassword ? newPassword : this.state.Password,
                Email: newEmail ? newEmail : this.state.Email,
                Birthday: newBirthday ? newBirthday : this.state.Birthday,
            },
        }).then((response) => {
            alert('Profile has been updated');
            this.setState({
                Username: response.data.Username,
                Password: response.data.Password,
                Email: response.data.Email,
                Birthday: response.data.Birthday
            });
            localStorage.setItem('user', this.state.Username);
            window.open(`/users/${username}`, '_self');
        }).catch(function (error) {
            console.log(error);
        });

    }
    setUsername(userInput) { this.Username = userInput; }
    setPassword(userInput) { this.Password = userInput; }
    setEmail(userInput) { this.Email = userInput; }
    setBirthday(userInput) { this.Birthday = userInput; }

    // Deregister user
    deleteUser(e) {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        axios.delete(`https://mysyfymovies.herokuapp.com/users/${username}`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            alert('{user}\'s account has been deleted.');
            location.reload();
        }).catch((e) => {
            console.log(e)
        })
    }

    // Remove movie from favorites
    removeFavMovie(e, movie) {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        e.preventDefault();
        axios.delete(`https://mysyfymovies.herokuapp.com/users/${username}/Movies/${movie}`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(() => {
            alert('Removed from favorites.');
            this.componentDidMount();
            location.reload();
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { FavoriteMovies, validated } = this.state;
        const username = localStorage.getItem('user');
        const { movies } = this.props;

        return (
            <Container className="profileContainer">
                <Card className="profileCard text-center">
                    <Card.Header as="h1" className="favMovieTitle">{username}'s Favorite Movies</Card.Header>
                    <Card.Body>
                        {FavoriteMovies.length === 0 &&
                            <Card.Text>
                                You have not favorited any movies.
                            </Card.Text>
                        }
                        <Row className="favMoviesContainer">
                            {FavoriteMovies.length > 0
                                &&
                                movies.map((m) => {
                                    const findFavMovie = FavoriteMovies.find(element => element === m._id)
                                    if (findFavMovie === m._id) {
                                        return (
                                            <Col xs={12} lg={4}>
                                                <Card border="secondary">
                                                    <Card.Body>
                                                        <Card.Img variant="top" src={m.Image} />
                                                    </Card.Body>
                                                    <Card.Body>
                                                        <Card.Title>{m.Title}</Card.Title>
                                                        <Button variant="warning" className="removeFavMovie" onClick={(e) => this.removeFavMovie(e, m._id)}>Remove From Favorites</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    }
                                })}
                        </Row>
                    </Card.Body>
                </Card>

                <hr />
                <Card>
                    <Card.Body>
                        <Card.Header as="h2" className="text-center">Update Your Profile</Card.Header>
                        <Form noValidate validated={validated} className="updateProfile-form"
                            onSubmit={(e) => this.updateUser(e, this.Username, this.Password, this.Email, this.Birthday)}>
                            <Form.Group controlId="formUsername">
                                <Form.Label className="formLabel"> Username: </Form.Label>
                                <Form.Control type="text" placeholder="Change your username" onChange={e => this.setUsername(e.target.value)} pattern="[A-Za-z0-9]{5,}" required minLength="5" />
                                <Form.Control.Feedback type="invalid">Must contain numbers and/or letters and be at least 5 characters.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label> Password: *</Form.Label>
                                <Form.Control type="password" placeholder="Enter new (or current) password" onChange={e => this.setPassword(e.target.value)} pattern=".{5,}" required minLength="5" />
                                <Form.Control.Feedback type="invalid">Must be at least 5 characters.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label> Email: </Form.Label>
                                <Form.Control type="email" placeholder="Enter new email" onChange={e => this.setEmail(e.target.value)} />
                                <Form.Control.Feedback type="invalid">Email is not valid, please try again.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBirthday">
                                <Form.Label> Birthday: </Form.Label>
                                <Form.Control type="date" placeholder="Change B-Day" onChange={e => this.setBirthday(e.target.value)} />
                                <Form.Control.Feedback type="invalid">Please enter valid birthday!</Form.Control.Feedback>
                            </Form.Group>

                            <Button className="updateOrDeleteButton" variant="danger" type="submit" >Update Profile</Button>
                            <hr />
                        </Form>
                    </Card.Body>
                </Card>
                <hr />
                <Card>
                    <Card.Header as="h4" className="text-center">Delete Your Profile</Card.Header>
                    <Button className="updateOrDeleteButton" variant="danger" onClick={(e) => this.deleteUser(e)}>Delete Account</Button>
                </Card>
            </Container>
        )
    }
}

ProfileView.propTypes = {
    user: PropTypes.shape({
        FavoriteMovies: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string.isRequired,
                Title: PropTypes.string.isRequired,
            })
        ),
        Username: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthday: PropTypes.string,
    }),
};