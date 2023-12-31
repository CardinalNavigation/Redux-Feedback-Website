import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const feelingData = (state = [], action) => {
    if (action.type === 'STORE_FEELING') {
        return action.payload
    }
    if (action.type === 'DATA_RESET') {
        return []
    }
    return state;
}

const understandingData = (state = [], action) => {
    if (action.type === 'STORE_UNDERSTANDING') {
        return action.payload
    }
    if (action.type === 'DATA_RESET') {
        return []
    }

    return state;
}

const supportData = (state = [], action) => {
    if (action.type === 'STORE_SUPPORT') {
        return action.payload
    }
    if (action.type === 'DATA_RESET') {
        return []
    }
    return state;
}

const commentData = (state = [], action) => {
    if (action.type === 'STORE_COMMENT') {
        return action.payload
    }
    if (action.type === 'DATA_RESET') {
        return []
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feelingData,
        understandingData,
        supportData,
        commentData
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
