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
        const { director, onBackClick } = this.props;

        return (
            <>
                <Card className="bg-dark text-white">
                    <Card.Body>
                        <Card.Text>
                            <Container>
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

DirectorView.propTypes = {
    director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired,
        Birth: PropTypes.instanceOf(Date)
    }),
    onBackClick: PropTypes.func.isRequired
};