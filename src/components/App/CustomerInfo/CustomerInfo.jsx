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



}

export default CustomerInfo;