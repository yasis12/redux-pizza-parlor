// other component import
import CustomerInfo from "../../CustomerInfo/CustomerInfo";
// React Imports
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

function SelectPizza() {

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

useEffect((error) => {
    fetchPizza();
}, []);

    
return (
    <Router >
        <Route path="/SelectPizza" >
            <h1>SELECT THE PIZZA</h1>

            <div className="pizzaGallery">
                {pizza.map((pizzaItem) => (
                    <div className="pizza-card" key={pizzaItem.id}>
                    <img src={pizzaItem.image_path} alt={pizzaItem.name} className="pizza-image" />
                    <h2 className="pizza-name">{pizzaItem.name}</h2>
                    <p className="pizza-description">{pizzaItem.description}</p>
                    <p className="pizza-price">${pizzaItem.price.toFixed(2)}</p>
                    <button className="add-to-cart-button" onClick={() => addToCart(pizzaItem)}>Add to Cart</button>
                    </div>
                ))}
            </div>







            <h4>
              <Link to="/CustomerInfo">Next</Link>
            </h4>
        </Route>
        <Route path="/CustomerInfo">
            <CustomerInfo />
        </Route>
        
    </Router>
    
)
    
} // END SELECT PIZZA

export default SelectPizza;