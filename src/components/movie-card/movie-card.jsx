import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
=======
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
>>>>>>> Stashed changes
>>>>>>> parent of d3470a2 (transferred changes from branch 3.4 to main branch)

export class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;

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
    }
}