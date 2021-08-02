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
                    <Card className="bg-dark text-white">
                        <Card.Body>
                            <Card.Text className="directorCardText">
                                <Row>
                                    <Col><h1>Director Name</h1></Col>
                                    <Col><h4>{director.Name}</h4></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col><h1>Bio</h1></Col>
                                    <Col><h4>{director.Bio}</h4></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col><h1>Born</h1></Col>
                                    <Col><h4>{director.Birth}</h4></Col>
                                </Row>

                                <hr />
                                <Row>
                                    <Col><h1>Director's movies:</h1></Col>
                                    <Col>
                                        {movies.map(m => (
                                            <Col>
                                                <Link to={`/movies/${m._id}`}>
                                                    <Button variant="dark">
                                                        <h3 key={m._id}>{m.Title}</h3>
                                                    </Button>
                                                </Link>
                                            </Col>
                                        ))}
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                        <Row>
                            <Button className="buttonSub" variant="dark" onClick={() => { onBackClick(null); }}>Back to list</Button>
                        </Row>
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