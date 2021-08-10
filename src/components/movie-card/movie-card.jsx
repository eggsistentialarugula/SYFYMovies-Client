import React from 'react';
import PropTypes from 'prop-types';

// React Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './movie-card.css'

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
    render() {
        const { movie, user } = this.props;

        return (
            <>
                <Card className="movieCard movieCardTitle h-100 bg-transparent card">
                    <Card.Img variant="top" src={movie.Image} />
                    <Card.Body>
                        <Card.Title><h4>{movie.Title}</h4></Card.Title>
                        <Link to={`/movies/${movie._id}`}>
                            <Button variant="dark" className="movie-card">More Info</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

MovieCard.propTypes = {
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
};