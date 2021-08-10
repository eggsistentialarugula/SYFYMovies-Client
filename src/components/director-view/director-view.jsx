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
                                        <Col><h1 className="leftCol">{director.Name}</h1></Col>
                                    </Row>

                                    <hr />
                                    <Row>
                                        <h2 className="leftCol">Bio</h2>
                                        <p className="rightCol">{director.Bio}</p>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <h3 className="leftCol">Born</h3>
                                        <hr />
                                        <p className="rightCol">{director.Birth}</p>
                                        <hr />
                                    </Row>
                                    <hr />
                                    <Row>
                                        <h4 className="leftCol">Director's movies:</h4>
                                        <hr />
                                        {movies.map(m => (
                                            <Link to={`/movies/${m._id}`}>
                                                <Button variant="dark">
                                                    <p className="rightCol" key={m._id}>{m.Title}</p>
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
        Birth: PropTypes.string.isRequired
    }),
    onBackClick: PropTypes.func.isRequired
};