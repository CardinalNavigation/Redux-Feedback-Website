import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const feedbackData = (state = [], action) => {
    if (action.type === 'FEEDBACK_PASS_ALONG') {
        return action.payload
    }

    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedbackData,
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>
);
