import React from "react";
import "./style.css";
import { FaCartShopping } from "react-icons/fa6";
import { Button } from "semantic-ui-react";
function NavBar() {
  return (
    <div id="navBar-container">
      <h1>CoffeeShop</h1>
      <div id="navbar-links-box">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Shop </a>
        <a href="/">Menu</a>
        <a href="/">Contact</a>
      </div>
      <div id="navbar-btns">
        <FaCartShopping size={30} />
        <Button basic color="orange">Sign up</Button>
      </div>
    </div>
  );
}

export default NavBar;
