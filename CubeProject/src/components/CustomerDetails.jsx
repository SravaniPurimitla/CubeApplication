import React from "react";
import PhotoGrid from "./PhotoGrid";
import "../styles/CustomerDetails.css";

const CustomerDetails = ({ customer }) => {
  return (
    <div className="customer-details-container">
      <h2>{customer?.name}</h2>
      <p>{customer?.title}</p>
      <PhotoGrid customer={customer} />
    </div>
  );
};

export default CustomerDetails;
