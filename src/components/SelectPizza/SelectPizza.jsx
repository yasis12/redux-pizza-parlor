// React Imports
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './SelectPizza.css'
import { useDispatch } from 'react-redux';

function SelectPizza() {

    const dispatch = useDispatch();

    const [pizza, setPizza] = useState([]);

// GET request for Pizzas
const fetchPizza = () => {
    axios.get('/api/pizza')
    .then((response) => {
      console.log(response.data);
      setPizza(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
}

const addProductToCart = (pizzaId) => {
    const selectedPizza = pizza.find((pizzaItem) => pizzaItem.id === pizzaId);
    if (selectedPizza) {
      dispatch({ type: 'ADD_TO_CART', payload: selectedPizza });
      console.log('Cart after adding:', getState().cart)
    }
  };
  

useEffect((error) => {
    fetchPizza();
}, []);
    
return (
    <div>
        <h1>SELECT THE PIZZA</h1>

        <div className="pizzaGallery">
            {pizza.map((pizzaItem) => (
                <div className="pizza-card" key={pizzaItem.id}>
                <img src={pizzaItem.image_path} alt={pizzaItem.name} className="pizza-image" />
                <h2 className="pizza-name">{pizzaItem.name}</h2>
                <p className="pizza-description">{pizzaItem.description}</p>
                <p className="pizza-price">${pizzaItem.price}</p>
                <button className="add-to-cart-button" onClick={() => addProductToCart(pizzaItem.id)}>Add to Cart</button>
                </div>
            ))}
        </div>
            <br /><br />

        <Link to="/CustomerInfo"> Next </Link>
       
    </div>
)
    
} // END SELECT PIZZA

export default SelectPizza;