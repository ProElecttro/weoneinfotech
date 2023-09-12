import { useState } from "react";
import "../styles/payment.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import $ from "jquery";
import Logo from "../assets/WeOneInfotech_Logo.png";
import "../styles/sidebar.css";

const [isToggled, setIsToggled] = useState(true);
function sidebar() {
  setIsToggled(!isToggled);

  console.log("Sidebar button clicked",isToggled);
  $(".LogoContainer").toggleClass("LogoContainer-inactive");
}

function Sidebar(){
    return(
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
    )
}

export default Sidebar;