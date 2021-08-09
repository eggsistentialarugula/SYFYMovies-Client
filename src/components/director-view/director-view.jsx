import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// React Components
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import './director-view.scss'

export class DirectorView extends React.Component {
    render() {
        const { movies, director, onBackClick } = this.props;

        return (
            <>
                <Container>
                    <Card className="bg-dark movie-view">
                        <Card.Body>
                            <Card.Text>
                                <Container>
                                    <Row>
                                        <Col><h1>{director.Name}</h1></Col>
                                    </Row>

                                    <hr />
                                    <Row>
                                        <h2>Bio</h2>
                                        <p>{director.Bio}</p>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <h3>Born</h3>
                                        <hr />
                                        <p>{director.Birth}</p>
                                        <hr />
                                    </Row>
                                    <hr />
                                    <Row>
                                        <h4>Director's movies:</h4>
                                        <hr />
                                        {movies.map(m => (
                                            <Link to={`/movies/${m._id}`}>
                                                <Button variant="dark">
                                                    <p key={m._id}>{m.Title}</p>
                                                </Button>
                                            </Link>
                                        ))}
                                        <hr />
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

DirectorView.propTypes = {
    director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired,
        Birth: PropTypes.instanceOf(Date)
    }),
    onBackClick: PropTypes.func.isRequired
};