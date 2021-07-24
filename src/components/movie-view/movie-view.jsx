import React from 'react';
import PropTypes from 'prop-types';

// react components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import './movie-view.scss'

export class MovieView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props;

        return (
            <Card className="bg-dark text-white">
                <Card.Img variant="top" src={movie.Image} alt="movie image" />
                <Card.Body>
                    <Card.Title><h1>{movie.Title}</h1></Card.Title>
                    <Card.Text>
                        <h4>
                            {movie.Description}
                        </h4>

                        <hr></hr>
                        <h6>Release year: {movie.ReleaseYear}</h6>

                        <hr></hr>
                        <h6>Starring: </h6>
                        <ul>
                            {movie.Filmstars.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>

                    </Card.Text>

                </Card.Body>

                <Button className="buttonSub" variant="warning" onClick={() => { onBackClick(null); }}>Back to list</Button>
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