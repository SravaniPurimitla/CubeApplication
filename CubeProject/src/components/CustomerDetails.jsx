import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoGrid from './PhotoGrid';
import '../styles/CustomerDetails.css';

const CustomerDetails = ({ customer }) => {
  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <PhotoGrid customer={customer} />
    </div>
  );
};

export default CustomerDetails;
