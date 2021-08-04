import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// react components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { Link } from "react-router-dom";

import './movie-view.scss'

export class MovieView extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    addFav(e, movie) {
        e.preventDefault();
        const username = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        axios({
            method: 'post',
            url: `https://mysyfymovies.herokuapp.com/users/${username}/Movies/${movie._id}`,
            headers: { Authorization: `Bearer ${token}` },
        }).then(() => {
            alert(`${movie.Title} was added to your Favorites`);
        }).catch(function (err) {
            console.log(err);
        });
    }
    render() {
        const { movie, onBackClick } = this.props;
        if (!movie) return null;
        return (
            <Card className="bg-dark movie-view">
                <Card.Img className="moviePoster" variant="top" src={movie.Image} alt="movie image" />

                <Card.Body>
                    <Card.Title><h1>{movie.Title}</h1></Card.Title>
                    <Card.Text>
                        <h4>
                            {movie.Description}
                        </h4>
                        <hr />
                    </Card.Text>
                    <Card.Text>
                        <Container>
                            <Row>
                                <Col><h4>Directed By</h4></Col>
                                <Col>
                                    <Link to={`/directors/${movie.Director.Name}`}>
                                        <Button variant="dark"><h5>{movie.Director.Name}</h5></Button>
                                    </Link>
                                </Col>
                            </Row>

                            <hr />
                            <Row>
                                <Col><h4>Genre</h4></Col>
                                <Col>
                                    <Link to={`/genres/${movie.Genre.Name}`}>
                                        <Button variant="dark"><h5>{movie.Genre.Name}</h5></Button>
                                    </Link>
                                </Col>

                            </Row>
                            <hr />
                            <Row>
                                <Col><h4>Starring</h4></Col>
                                <Col>
                                    {movie.Filmstars.map((item, i) => {
                                        return <h5 key={i}>{item}</h5>
                                    })}
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col><h4>Original Release</h4></Col>
                                <Col>
                                    <h5>{movie.ReleaseYear}</h5>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col><h4>IMDb Rating</h4></Col>
                                <Col>
                                    <h5>{movie.IMDbRating}</h5>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>

                </Card.Body>

                <Button className="buttonSub" variant="dark" onClick={() => { onBackClick(null); }}>Back</Button>
                <hr />

                <Button variant="danger" className="favoritesButton" value={movie._id} onClick={(e) => this.addFav(e, movie)}>Add to Favorites</Button>
            </Card>
        );
    }
}

MovieView.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired
        }),
        Filmstars: PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string.isRequired
            ])
        ),
        ReleaseYear: PropTypes.number,
        IMDbRating: PropTypes.string.isRequired,
        Image: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};