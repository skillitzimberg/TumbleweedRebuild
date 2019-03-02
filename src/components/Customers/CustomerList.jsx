import React from "react";
import PropTypes from "prop-types";
import Customer from "./../Customers/Customer";
import { v4 } from 'uuid';

function CustomerList(props) {
  return (
    <div>
      <div className="container">
        {props.customers.map((customer) =>
          <Customer
            firstName={customer.firstName}
            lastName={customer.lastName}
            phone={customer.phone}
            email={customer.email}
            postalCode={customer.postalCode}
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
