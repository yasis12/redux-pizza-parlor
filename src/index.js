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
// Reducer For the cart
const cart = (state = [], action) => {
  // TODO: Save Products added to the cart 
  if(action.type === 'ADD_TO_CART') {
      return [...state, action.payload]
    } else if (action.type === 'CLEAR_CART') {
      // leaving this code in if I add the button later
      return [];
    }
  return state;
};



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
        pizzaSelector,
        cart,
        customerInfo
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
