import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
    render() {
        return (
            <input 
                type={ this.props.type || 'text' } 
                placeholder={ this.props.placeholder || '' } 
                value={ this.props.value } 
                name={ this.props.name } 
                onChange={ this.props.handler } />
        );
    }
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
}