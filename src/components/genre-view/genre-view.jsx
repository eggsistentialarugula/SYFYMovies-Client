import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// React Components
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import './genre-view.scss'

export class GenreView extends React.Component {
    render() {
        const { movies, genre, onBackClick } = this.props;

        return (
            <>
                <Container>
                    <Card className="bg-dark text-white">
                        <Card.Body>
                            <Card.Text className="genreCardText">
                                <Container>
                                    <Row>
                                        <Col><h1>Genre</h1></Col>
                                        <Col><h4>{genre.Name}</h4></Col>
                                    </Row>

                                    <hr />
                                    <Row>
                                        <h1>Description</h1>
                                        <h4>{genre.Description}</h4>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col><h1>Syfy Movies of this Genre:</h1></Col>
                                        <Col>
                                            {movies.map(m => (
                                                <Col>
                                                    <Link to={`/movies/${m._id}`}>
                                                        <Button variant="dark">
                                                            <h4 key={m._id}>{m.Title}</h4>
                                                        </Button>
                                                    </Link>
                                                </Col>
                                            ))}
                                        </Col>
                                    </Row>
                                    <hr />
                                </Container>
                            </Card.Text>

                        </Card.Body>

                        <Button className="buttonSub" variant="dark" onClick={() => { onBackClick(null); }}>Back</Button>
                    </Card>
                </Container>
            </>
        );
    }
}

GenreView.propTypes = {
    genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired
    }),
    onBackClick: PropTypes.func.isRequired
};