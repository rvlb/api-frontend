import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './configure_store';
import Form from './containers/simple_form';

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
    <Provider store={ configureStore() }>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
