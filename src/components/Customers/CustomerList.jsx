import React from "react";
import PropTypes from "prop-types";
import Customer from "./../Customers/Customer";

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
