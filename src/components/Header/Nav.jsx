import React from "react";
import { Link } from "react-router-dom";

function Nav(){
  return (
    <div className="navigation">
      <Link to="/admin">Admin</Link>
      <Link to="/admin/customers">Customers</Link>
      <Link to="/admin/orders">Orders</Link>
      <Link to="/admin/products">Products</Link>
      <Link to="/admin/locations">Locations</Link>
    </div>
  );
}

export default Nav;
