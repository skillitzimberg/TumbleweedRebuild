import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";

function Header(props){
  return (
    <header className="siteHeading">
      <Nav/>
    </header>
  );
}

Header.propTypes = {
  pageHead: PropTypes.string
};

export default Header;
