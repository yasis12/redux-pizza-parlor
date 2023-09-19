// React Imports
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './SelectPizza.css'
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
=======
import { useDispatch, useSelector } from 'react-redux';
>>>>>>> 978818a84332789cd7edd5fbad6d39417f10f73c

function SelectPizza() {

    const dispatch = useDispatch();

<<<<<<< HEAD
=======
    const cart = useSelector( store => store.cart);

>>>>>>> 978818a84332789cd7edd5fbad6d39417f10f73c
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
<<<<<<< HEAD
      console.log('Cart after adding:', getState().cart)
=======
      console.log('This is what is in the cart', cart);
>>>>>>> 978818a84332789cd7edd5fbad6d39417f10f73c
    }
  };
  

useEffect((error) => {
    fetchPizza();
}, []);
    
return (
    <div>
        <h1>SELECT THE PIZZA</h1>
<<<<<<< HEAD

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

=======

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

>>>>>>> 978818a84332789cd7edd5fbad6d39417f10f73c
        <Link to="/CustomerInfo"> Next </Link>
       
    </div>
)
    
} // END SELECT PIZZA

export default SelectPizza;