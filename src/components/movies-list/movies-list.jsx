import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { SplitButton } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input.jsx';
import { MovieCard } from '../movie-card/movie-card.jsx';

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    return { visibilityFilter };
};
function MoviesList(props) {
    const { movies, visibilityFilter } = props;
    let filteredMovies = movies;
    if (visibilityFilter != '') {
        filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
    }
    if (!movies) return <div className="main-view" />
    return <>
        <Col md={12} style={{ margin: '1em' }}>
            <VisibilityFilterInput visibilityFilter={visibilityFilter} />
            <hr />
        </Col>
        {filteredMovies.map(movie => (
            <Col lg={4} md={6} xs={12} key={movie._id}>
                <MovieCard movie={movie} />
            </Col>
        ))}
    </>;
}
export default connect(mapStateToProps)(MoviesList);