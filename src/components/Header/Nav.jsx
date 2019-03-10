import React from "react";
import { Link } from "react-router-dom";

function Nav({ match }){
  console.log(match);
  return (
    <div className="navigation">
      <Link to={`${match.url}/admin`}>Rendering with React</Link>
      <Link to="/admin/customers">Customers</Link>
      <Link to="/admin/orders">Orders</Link>
      <Link to="/admin/products">Products</Link>
      <Link to="/admin/locations">Locations</Link>
    </div>
  );
}

export default Nav;
