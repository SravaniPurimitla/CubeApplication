import React from "react";
import "../styles/CustomerCard.css";

const CustomerCard = ({ customer, onClick }) => {
  console.log(customer, "customer");
  return (
    <div className="customer-card" onClick={onClick}>
      <h3>{customer?.name}</h3>
      <p>{customer?.title}</p>
    </div>
  );
};

export default CustomerCard;
