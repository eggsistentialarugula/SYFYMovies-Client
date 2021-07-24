import React from 'react';
import axios from 'axios'

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

// React Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// css file
import './main-view.scss';

export class MainView extends React.Component {
    constructor() {
        // code executed right when the component is created in the memory
        super();
        //initial state set to null, default is logged out
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null,
            registered: true
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

    regStatus(registered) {
        this.setState({
            registered: registered
        });
    }

    render() {
        const { movies, selectedMovie, user, registered } = this.state;

        if (!user && !registered) return <RegistrationView onRegistration={regStatus => this.regStatus(regStatus)} />;

        // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are passed as a prop to the LoginView
        if (!user && registered) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        if (movies.length === 0) return <div className="main-view" />;

        return (
            <>
                <Navbar>
                    <Container>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search for movie"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="warning">Search</Button>
                        </Form>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: {user}
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Row className="main-view justify-content-md-center">
                    {/* If the state of the 'selectedMovie' is not null, that selected will be returned. Otherwise, all movies will be returned */}
                    {selectedMovie
                        ? (
                            <Col md={8} >
                                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                            </Col>
                        )

                        : movies.map(movie => (
                            <Col md={2} xs={12}>
                                <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                            </Col>
                        ))
                    }
                </Row>
            </>
        );
    }
}