import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
//Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

// Reducer pizza selector
const pizzaSelector = (state = [], action) => {
    if(action.type === 'SET_PIZZA') {

      return action.payload
    }
    return state;
  }
// Reducer Check out



// Reducer Customer info
const customerInfo = (state = [], action) => {
  if (action.type === 'ADD_CUSTOMERINFO'){
    return action.payload
  }
  return state;
}


// Redux Store
const reduxStore = createStore(
    combineReducers({
        pizzaSelector
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
