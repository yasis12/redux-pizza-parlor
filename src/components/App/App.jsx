import axios from 'axios';
import './App.css';
import CustomerInfo from '../CustomerInfo/CustomerInfo';

import SelectPizza from '../SelectPizza/SelectPizza'

import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin';

// React Imports
import React from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';


function App() {

      //Navigating to admin page from home page. 
      const handleRoute = () => {
        history.push('/admin')
        
    }

  return (
    <div className='App'>
      
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        <Router>
          <Route exact path="/">
            <img src='images/pizza_photo.png' />
            <p>Pizza is great.</p>

            <h4>
              <Link to="/SelectPizza">Next</Link>
            </h4>
          </Route>

          <Route exact path="/SelectPizza" >
              <SelectPizza />
          </Route>

          <Route exact path="/CustomerInfo" >
              <CustomerInfo />
          </Route>

        {/*temproary link to get to checkout faster- will get removed.  */}
          <p>
              <Link to="/Checkout"> Checkout</Link>
          </p>

          <Route path="/Checkout" >
              <Checkout  />
          </Route>


          {/*temproary link to get to Admin page - will get removed.  */}
          <p>
              <Link to="/admin "> Admin </Link>
          </p>

          <Route path="/admin" >
              <Admin />
          </Route>

      </Router>


  


    </div>
  );
}

export default App;

