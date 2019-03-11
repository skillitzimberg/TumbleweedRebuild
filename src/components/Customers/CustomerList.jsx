import React from "react";
import { Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Customer from "./../Customers/Customer";
import { v4 } from "uuid";

function CustomerList(props) {
  console.log("customer list", props);
  return (
      <div className="container">
        {props.customers.map((customer) =>
          <Link to={`/admin/customers/${customer.id}`} key={v4()}><p>{customer.firstName} {customer.lastName}</p></Link>
        )}

        <Route
          path={`/admin/customers/:customerId`}
          render={(props) => <Customer
            customer={customer}/>}
        />
      </div>
  );
}

CustomerList.propTypes = {
  customers: PropTypes.array
};

export default CustomerList;
