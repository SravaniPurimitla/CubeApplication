import React from 'react';
import CustomerCard from './CustomerCard';
import '../styles/CustomerList.css';

const CustomerList = ({ customers, onSelectCustomer }) => {
  return (
    <div className="customer-list">
      {customers.map(customer => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onClick={() => onSelectCustomer(customer)}
        />
      ))}
    </div>
  );
};

export default CustomerList;
