import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions/actions';

import DropdownButton from 'react-bootstrap/DropdownButton';

function GenreFilter(props) {
    return
    <>
        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
                Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2" autoClose="inside">
            <Dropdown.Toggle id="dropdown-autoclose-inside">
                Clickable Outside
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2" autoClose="outside">
            <Dropdown.Toggle id="dropdown-autoclose-outside">
                Clickable Inside
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2" autoClose={false}>
            <Dropdown.Toggle id="dropdown-autoclose-false">
                Manual Close
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </>
}
export default connect(
    null,
    { setFilter }
)(GenreFilter);