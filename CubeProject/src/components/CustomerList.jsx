import React from "react";
import "../styles/CustomerList.css";
import { truncateText } from "../utils/TruncateText";

const CustomerList = ({ customers, onSelectCustomer }) => {
  console.log(customers, "customer");
  return (
    <div className="customer-list-container">
      {customers.map((customer, index) => (
        <div
          key={index}
          className="customer-item"
          onClick={() => onSelectCustomer(customer)}
        >
          <h3>{customer.name}</h3>
          <p>{truncateText(customer.title, 30)}</p>{" "}
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
