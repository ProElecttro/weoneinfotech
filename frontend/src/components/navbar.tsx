import "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";

import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import LogoContainer from "./logoContainer";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {

  return (
      <div className="navbar">
        <div id="navbar-logo">
          <div className="hamburger">
            <RxHamburgerMenu />
          </div>
          <LogoContainer title="We One Infotech" />
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="search"
            placeholder="Search for Products..."
          />
          <button className="button">
            <AiOutlineSearch className="icons" />
          </button>
        </div>
        <div className="options">
          <button className="button" id="liked-product-btn">
            <CiHeart className="icons" />
          </button>
          <button className="button" id="login-btn" >
            <NavLink to="/signin"> <AiOutlineUser className="icons" /> </NavLink>
          </button>
          <button className="button" id="cart-btn">
          <NavLink to="/payment"> <AiOutlineShoppingCart className="icons" /> </NavLink>
            
          </button>
          <button className="button" id="cart-btn">
            <MdShoppingCartCheckout className="icons" />
          </button>
        </div>
      </div>
  );
}

export default Navbar;
