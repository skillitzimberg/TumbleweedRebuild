import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Customer from "./../Customers/Customer";
import { v4 } from "uuid";

function CustomerList(props) {
  console.log("customer list", props);
  return (
    <div>
      <div className="container">
        {props.customers.map((customer) =>
          <Link to={`${props.match.url}/${customer.id}`} key={v4()}><p>{customer.firstName} {customer.lastName}</p></Link>

        )}
      </div>
    </div>
  );
}

CustomerList.propTypes = {
  customers: PropTypes.array
};

export default CustomerList;
