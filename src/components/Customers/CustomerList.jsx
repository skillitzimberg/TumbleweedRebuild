import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function CustomerList({ customers, onDeletingCustomer }) {

  function deleteCustomer(customerId) {
    event.preventDefault();

    onDeletingCustomer(customerId);
  }

  return (
    <div className="container">
      {customers.map((customer) => {
        return <div key={v4()}>
          <Link
            to={`/admin/customers/${customer.id}`}
          >
            <p>{customer.firstName} {customer.lastName}</p>
          </Link>
          <button onClick={() => { deleteCustomer(customer.id); }}>Delete</button>
        </div>;
      }
      )}
    </div>
  );
}

CustomerList.propTypes = {
  customers: PropTypes.array,
  onDeletingCustomer: PropTypes.func
};

export default CustomerList;
