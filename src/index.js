import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reducer from './reducers';
import configureStore from './configure_store';
import Form from './containers/login_form';

import registerServiceWorker from './registerServiceWorker';

const formFields = {
    username: { placeholder: 'Usuário' },
    password: { placeholder: 'Senha', type: 'password' }
}

const App = () => (
    <div>
        <Form fields={ formFields } />
    </div>
);

ReactDOM.render(
    <Provider store={ configureStore(reducer) }>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
