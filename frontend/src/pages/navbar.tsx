import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";
import $ from "jquery";
import "../styles/navbar.css";
import Logo from "../assets/WeOneInfotech_Logo.png";

function Navbar() {
  function register() {
    window.open("/signin");
  }
  function payment() {
    window.open("/payment");
  }

  const [isToggled, setIsToggled] = useState(true);
  function sidebar() {
    setIsToggled(!isToggled);

    console.log("Sidebar button clicked",isToggled);
    $(".LogoContainer").toggleClass("LogoContainer-inactive");
    // $(".LogoContainer").slideToggle(1000);
  }

  return (
    <div className="home">
      <div className="navbar">
        <div className="LogoContainer">
          <a href="www.weoneinfotech.com">
            <img id="Logo" src={Logo} alt="Logo" />
          </a>
          <p>We One Infotech</p>
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
          <button className="button" id="login-btn" onClick={register}>
            <AiOutlineUser className="icons" />
          </button>
          <button className="button" id="cart-btn" onClick={payment}>
            <AiOutlineShoppingCart className="icons" />
          </button>
          <button className="button" id="cart-btn" onClick={payment}>
            <MdShoppingCartCheckout className="icons" />
          </button>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar_Header">
          <div className="LogoContainer LogoContainer-inactive">
            <a href="www.weoneinfotech.com">
              <img id="Logo" src={Logo} alt="Logo" />
            </a>
            <p>We One Infotech</p>
          </div>
          <button onClick={sidebar} id="sidebar-btn">
            { isToggled ? <RxHamburgerMenu id="sidebar-icon" /> :<RxCross1 id="sidebar-icon" />}
          </button>
        </div>
      </div>
      {/* <div className="input-box">
        <input type="text" required/>
        <span>First Name</span>
      </div>
      <div className="input-box">
        <input type="text" required/>
        <span>Last Name</span>
      </div> */}

    </div>
  );
}

export default Navbar;
