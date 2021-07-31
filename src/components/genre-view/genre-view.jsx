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
        const { genre, onBackClick } = this.props;

        return (
            <>
                <Card className="bg-dark text-white">
                    <Card.Body>
                        <Card.Text>
                            <Container>
                                <Row>
                                    <Col><h1>Genre</h1></Col>
                                    <Col><h4>{genre.Name}</h4></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col><h1>Description</h1></Col>
                                    <Col><h4>{genre.Description}</h4></Col>
                                </Row>

                            </Container>
                        </Card.Text>
                    </Card.Body>
                    <Row>
                        <Button className="buttonSub" variant="dark" onClick={() => { onBackClick(null); }}>Back to list</Button>
                    </Row>
                </Card>
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