import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function CustomerList({props}) {
  return (
      <div className="container">
        {props.customers.map((customer) =>
          <Link to={`/admin/customers/${customer.id}`} key={v4()}><p>{customer.firstName} {customer.lastName}</p></Link>
        )}
      </div>
  );
}

CustomerList.propTypes = {
  customers: PropTypes.array
};

export default CustomerList;
