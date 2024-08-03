import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import "../styles/App.css";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/customers")
      .then((response) => {
        setCustomers(response.data);
        if (response.data.length > 0) {
          setSelectedCustomer(response.data[0]);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="app-container">
      <CustomerList
        customers={customers}
        onSelectCustomer={setSelectedCustomer}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
