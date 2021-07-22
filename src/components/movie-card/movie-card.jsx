import React from 'react';
import PropTypes from 'prop-types';

// React Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './movie-card.scss'

export class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;

        return (
            <Card className="h-100 bg-transparent card">
                <Card.Img variant="top" src={movie.Image} />
                <Card.Body>
                    <Card.Title><h4>{movie.Title}</h4></Card.Title>
                    <Button variant="warning" onClick={() => onMovieClick(movie)} className="movie-card">More Info</Button>
                </Card.Body>
            </Card>
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
    onMovieClick: PropTypes.func.isRequired
};