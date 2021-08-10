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

import './movie-view.css'

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
                    <Card.Title><h1 className="leftCol">{movie.Title}</h1></Card.Title>
                    <Card.Text>
                        <p className="rightCol">
                            {movie.Description}
                        </p>
                        <hr />
                    </Card.Text>
                    <Card.Text>
                        <Container>
                            <Row>
                                <Col><h2 className="leftCol">Directed By</h2></Col>
                                <Col>
                                    <Link to={`/directors/${movie.Director.Name}`}>
                                        <Button variant="dark"><p className="rightCol">{movie.Director.Name}</p></Button>
                                    </Link>
                                </Col>
                            </Row>

                            <hr />
                            <Row>
                                <Col><h2 className="leftCol">Genre</h2></Col>
                                <Col>
                                    <Link to={`/genres/${movie.Genre.Name}`}>
                                        <Button variant="dark"><p className="rightCol">{movie.Genre.Name}</p></Button>
                                    </Link>
                                </Col>

                            </Row>
                            <hr />
                            <Row>
                                <Col><h3 className="leftCol">Starring</h3></Col>
                                <Col>
                                    {movie.Filmstars.map((item, i) => {
                                        return <p className="rightCol" key={i}>{item}</p>
                                    })}
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col><h4 className="leftCol">Original Release</h4></Col>
                                <Col>
                                    <p className="rightCol">{movie.ReleaseYear}</p>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col><h4 className="leftCol">IMDb Rating</h4></Col>
                                <Col>
                                    <p className="rightCol">{movie.IMDbRating}</p>
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