import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import { setFilter } from '../../actions/actions';
import './visibility-filter-input.scss';

function VisibilityFilterInput(props) {
    return <Form.Control
        className="filterSearch"
        onChange={e => props.setFilter(e.target.value)}
        value={props.visibilityFilter}
        placeholder="Filter Movies..."
    />;

}

export default connect(
    null,
    { setFilter }
)(VisibilityFilterInput);