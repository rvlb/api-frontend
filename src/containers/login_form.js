import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SimpleForm from '../components/simple_form';
import { login } from '../actions';

const LoginForm = (props) => (
    <SimpleForm 
        fields={ props.fields } 
        submitHandler={ (formData) => { props.login(formData.username, formData.password); } } />
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);