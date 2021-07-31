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
import Container from 'react-bootstrap/Container'

import './profile-view.scss';

export class ProfileView extends React.Component {
    constructor() {
        super();
        this.state = {
            FavoriteMovies: [],
            Username: null,
            Password: null,
            Email: null,
            Birthday: null
        }
    }

    componentDidMount() {
        const accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.getUser(accessToken);
        }
    }

    getUser(token) {
        axios.get(`https://mysyfymovies.herokuapp.com/users/` + localStorage.getItem('user'), {
            headers: { Authorization: `Bearer ${token}` }
        }).then((response) => {
            this.setState({
                FavoriteMovies: response.data.FavoriteMovies,
                Username: response.data.Username,
                Password: response.data.Password,
                Email: response.data.Email,
                Birthday: response.data.Birthday
            });
        }).catch(function (error) {
            console.log(error);
        });
    }

    // Remove movie from favorites
    removeFavMovie(movie) {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        axios.delete(`https://mysyfymovies.herokuapp.com/users/${username}/Movies/${movie._id}`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(() => {
            alert('Removed from favorites');
            location.reload();
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

        axios.put(`https://mysyfymovies.herokuapp.com/users/${username}`, {
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
    setPassword(userInput) { this.Username = userInput; }
    setEmail(userInput) { this.Username = userInput; }
    setBirthday(userInput) { this.Username = userInput; }

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

    render() {
        const { FavoriteMovies, validated } = this.state;
        const username = localStorage.getItem('user');
        const { movies } = this.props;

        return (
            <Container className="profileContainer">
                <Row className="justify-content-md-center">
                    <Card className="profileCard">
                        <Card.Text><h1>{username}'s Favorite Movies</h1></Card.Text>
                        <Card.Body>
                            {FavoriteMovies.length === 0 && <div className="text-center">You have not added any favorite movies.</div>}

                        </Card.Body>
                    </Card>
                </Row>

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