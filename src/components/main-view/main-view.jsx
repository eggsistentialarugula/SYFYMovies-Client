import React from 'react';
import axios from 'axios'

import { LoginView } from '../login-view/login-view'
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';


export class MainView extends React.Component {
    constructor() {
        // code executed right when the component is created in the memory
        super();
        //initial state set to null, default is logged out
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
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

    /* When a movie is clicked, this function is invoked and updates the state of the 'selectedMovie' property to that movie */
    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    // this menthod will update the user state of the MainView component and will be called when the user has successfully logged in

    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    render() {
        const { movies, selectedMovie, user } = this.state;

        // If there is no user, the LoginView is CanvasRenderingContext2D. If there is a user logged in, the user details are passed as a prop to the LoginView
        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        if (movies.length === 0) return <div className="main-view" />;

        return (
            <div className="main-view">
                {/* If the state of the 'selectedMovie' is not null, that selected will be returned. Otherwise, all movies will be returned */}
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