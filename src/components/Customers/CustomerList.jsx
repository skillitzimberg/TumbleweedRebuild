import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Customer from "./../Customers/Customer";
import { v4 } from "uuid";

function CustomerList(props) {
  return (
    <div>
      <div className="container">
        {props.customers.map((customer) =>
          <Customer
            customer={customer}
            key={v4()}
          />
        )}
      </div>
    </div>
  );
}

CustomerList.propTypes = {
  customers: PropTypes.array
};

export default CustomerList;
