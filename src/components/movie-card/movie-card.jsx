import React from 'react';
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
=======
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
>>>>>>> Stashed changes
>>>>>>> parent of d3470a2 (transferred changes from branch 3.4 to main branch)
=======
import PropTypes from 'prop-types';
>>>>>>> Stashed changes

export class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;

<<<<<<< Updated upstream
<<<<<<< Updated upstream
        return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
<<<<<<< HEAD
=======
=======
        return (
            <Card>
                <Card.Img variant="top" src={movie.ImagePath} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
                </Card.Body>
            </Card>
        );
>>>>>>> Stashed changes
>>>>>>> parent of d3470a2 (transferred changes from branch 3.4 to main branch)
=======
        return (
            <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
        );
>>>>>>> Stashed changes
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