import React from 'react';
import PropTypes from 'prop-types';

// react components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


export class MovieView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props;

        return (
            // <Card className="bg-dark text-white">
            //     <Card.Img src={movie.Image} alt="movie image" />
            //     <Card.ImgOverlay>
            //         <Card.Title>{movie.Title}</Card.Title>
            //         <Card.Text>
            //             {movie.Description}
            //         </Card.Text>
            //         <Card.Text>
            //             Release year: {movie.ReleaseYear}
            //         </Card.Text>
            //     </Card.ImgOverlay>
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.Image} />
                </div>
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                </div>
                <div className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description}</span>
                </div>
                <div className="movie-year">
                    <span className="label">Released: </span>
                    <span className="value">{movie.ReleaseYear}</span>
                </div>
                <Button onClick={() => { onBackClick(null); }}>Back to list</Button>
                {/* </Card> */}
            </div>

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