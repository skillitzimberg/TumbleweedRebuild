import React from "react";
import Nav from "./Nav";
import "./headerStyles.css";

function Header(){
  return (
    <header className="siteHeading">
      <Nav/>
    </header>
  );
}

export default Header;
