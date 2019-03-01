import React from "react";
import { Link } from "react-router-dom";

function Nav(){
  return (
    <div className="navigation">
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Nav;
