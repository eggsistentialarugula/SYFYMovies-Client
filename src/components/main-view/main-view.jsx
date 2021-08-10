import React from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { setMovies, setUser } from '../../actions/actions';

import MoviesList from '../movies-list/movies-list.jsx';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { NavView } from '../nav-view/nav-view';
import { ProfileView } from '../profile-view/profile-view';
// React Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// css file
import './main-view.scss';

class MainView extends React.Component {
    constructor() {
        // code executed right when the component is created in the memory
        super();
        //initial state set to null, default is logged out
        this.state = {
            user: null,
            // registered: true
        };
    }
    getMovies(token) {
        axios.get('https://mysyfymovies.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                // Assign the result to the state
                this.props.setMovies(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        // code executed right after the component is added to the DOM.
        let accessToken = localStorage.getItem('token'); //if access token is present then it means the user has logged in
        if (accessToken !== null) { //if user is logged in, call getMovies method
            this.setState({
                user: localStorage.getItem('user')
            });
            this.getMovies(accessToken);
        }
    }
    // this menthod will update the user state of the MainView component and will be called when the user has successfully logged in
    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
            user: authData.user.Username
        });

        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
    }
    render() {
        let { movies } = this.props;
        let { user } = this.state;

        return (
            <>
                <Router>
                    <NavView user={user} />
                    {/* Start of Main view, login view */}
                    <Row className="main-view">
                        <Route exact path="/" render={() => {
                            if (!user) return (
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            );
                            if (movies.length === 0) return <div className="main-view" />

                            return <MoviesList movies={movies} />
                        }} />
                        {/* Registration View */}
                        <Route path="/register" render={() => {
                            if (user) return <Redirect to="/" />
                            return <RegistrationView />
                        }} />
                        {/* Movie view */}
                        <Route path="/movies/:movieId" render={({ match, history }) => {
                            if (!user) return (
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            );
                            if (movies.length === 0) return <div className="main-view" />;
                            return <Col md={8} s={12}>
                                <MovieView movie={movies.find(movie => movie._id === match.params.movieId)} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />
                        {/* Director View */}
                        <Route path="/directors/:name" render={({ match, history }) => {
                            if (!user) return (
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            );
                            if (movies.length === 0) return <div className="main-view" />;
                            return <Col md={8}>
                                <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} movies={movies.filter((element) => element.Director.Name === match.params.name)} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />
                        {/* Genre view */}
                        <Route path="/genres/:name" render={({ match, history }) => {
                            if (!user) return (
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            );
                            if (movies.length === 0) return <div className="main-view" />;
                            return <Col md={8}>
                                <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} movies={movies.filter((element) => element.Genre.Name === match.params.name)} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />
                        {/* Profile view */}
                        <Route path='/users/:username' render={({ history }) => {
                            if (!user) return <LoginView onLoggedIn={(data) => this.onLoggedIn(data)} />;
                            if (movies.length === 0) return;
                            return <ProfileView history={history} movies={movies} />
                        }} />
                    </Row>
                </Router>
            </>
        );
    }
}

MainView.propTypes = {
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
        Image: PropTypes.string.isRequired,
    }),
    user: PropTypes.string,
};

let mapStateToProps = state => {
    return { movies: state.movies }
}

export default connect(mapStateToProps, { setMovies, setUser })(MainView);