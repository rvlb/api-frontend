import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

import Form from './containers/simple_form';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

const App = () => (
    <div>
        <Form 
            fields={
                {
                    username: {
                        placeholder: 'Usuário'
                    },
                    password: {
                        placeholder: 'Senha',
                        type: 'password'
                    }
                }
            } />
    </div>
);

ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
