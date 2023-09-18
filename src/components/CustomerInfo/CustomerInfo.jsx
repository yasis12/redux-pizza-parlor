import './CustomerInfo.css';
import React, { useState } from 'react';
import axios from 'axios';


function CustomerInfo(){

let [customerToAdd, setCustomerToAdd] = useState({ name: '' , streetAddress: '', city: '', zip: '' });

const handleNameChange = (event) => {
  setCustomerToAdd({
    ...customerToAdd,
    name: event.target.value,
  });
}

const handleAddressChange = (event) => {
  setCustomerToAdd({
    ...customerToAdd,
    streetAddress: event.target.value,
  });
}

const handleCityChange = (event) => {
  setCustomerToAdd({
    ...customerToAdd,
    city: event.target.value,
  });
}

const handleZipChange = (event) => {
  setCustomerToAdd({
    ...customerToAdd,
    zip: event.target.value,
  });
}

const addCustomer = (event) => {
  event.preventDefault();
  
  axios.post('/CustomerInfo', customerToAdd)
  .then((response) => {
    setCustomerToAdd({ name: '', streetAddress: '', city: '', zip: '' })
  })
  .catch((error) => {
    console.log(error);
    alert('customerInfo post error');
  });
};

return (
  
  <form onSubmit={(event) => addCustomer(event)}>
    <input
      onChange={handleNameChange}
      type='text'
      placeholder='Name'
      />
    <input 
    onChange={handleAddressChange}
    type='text'
    placeholder='Street Address'
    />
    <input
    onChange={handleCityChange}
    type='text'
    placeholder='City'
    />
    <input
    onChange={handleZipChange}
    type='text'
    placeholder='Zip'
    />
    <button type='submit'>Next</button>
  </form>
  
  

)



}

export default CustomerInfo;