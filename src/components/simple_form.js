import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../components/input';

const ACCEPTED_INPUT_TYPES = ['text', 'password', 'email', 'hidden'];

/* 
    A form whose inputs are only text-based and that are cleaned once submission is performed.
    Expects as props: 
    1. An object containing its fields data;
    2. A function to handle submission which accepts one object with form data as parameter.
*/
export default class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.defaultState = this.buildDefaultState();
        this.state = this.defaultState;
    }
    render() {
        return (
            <form onSubmit={ this.submitHandler }>
                { this.getFieldsKeys().map(this.renderFormField) }
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        );
    }
    renderFormField = (name) => {
        const field = this.props.fields[name];
        return (
            <div key={ name }>
                <Input 
                    name={ name } 
                    type={ field.type } 
                    value={ this.state[name] }
                    placeholder={ field.placeholder } 
                    handler={ this.inputHandler } />
            </div>
        );
    }
    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.submitHandler(this.state);
        this.setState(this.defaultState);
    }
    getFieldsKeys = () => Object.keys(this.props.fields)
    buildDefaultState() {
        const state = {};
        this.getFieldsKeys().forEach((field) => {
            state[field] = '';
        });
        return state;
    }
}

SimpleForm.propTypes = {
    fields: PropTypes.shape({
        type: PropTypes.oneOf(ACCEPTED_INPUT_TYPES)
    }).isRequired,
    submitHandler: PropTypes.func.isRequired
}