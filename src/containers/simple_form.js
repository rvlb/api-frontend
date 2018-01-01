import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from '../components/input';
import { login } from '../actions';

const ACCEPTED_INPUT_TYPES = ['text', 'password', 'email', 'hidden'];

class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = this.buildDefaultState();
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
        this.props.login(this.state.username, this.state.password);
        this.setState(this.buildDefaultState());
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
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(SimpleForm);