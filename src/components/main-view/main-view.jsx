import React from 'react';
import axios from 'axios'

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { Container, Row } from 'react-bootstrap';

export class MainView extends React.Component {
    constructor() {
        // code executed right when the component is created in the memory
        super();
        this.state = {
            movies: [],
            selectedMovie: null
        };
    }

    // this function is a good place to add code for performing async tasks like making ajax requests or adding event listeners.

    //This function will fetch the list of movies from my database when MainView is mounted.

    componentDidMount() {
        // code executed right after the component is added to the DOM.
        axios.get('https://mysyfymovies.herokuapp.com/movies')
            .then(reponse => {
                this.setState({
                    movies: reponse.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        if (movies.length === 0) return <div className="main-view" />;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                    ))
                }
            </div>
        );
    }
}