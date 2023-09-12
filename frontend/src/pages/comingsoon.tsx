import "react";
import "../styles/comingsoon.css";
import logo from "../assets/WeOneInfotech_Logo.png";

function ComingSoon() {

  return (
    <div className="containerSoon">
      <div className="logo">
        <a href="https://www.weoneinfotech.com"><img src={logo} alt="" /></a>
      </div>
      <div className="content">
        <p id="comapanyTitle">We One </p>
        <p>Coming Soon...</p>
        <div className="notify">
          <input type="email" className="inputBox" placeholder="Enter your email address" />
          <button className="btn">Notify Me</button>
        </div>
      </div>
    </div>

    // <>
    //   <div className="navbar">
    //     <a href="/">
    //       <img src={logo} alt="Logo" />
    //     </a>
    //     <p>We One Infotech</p>
    //   </div>
    //   <div className="container">
    //     <p>Under Construction</p>
    //   </div>
    //   <div className="btn">
    //     <input
    //       id="notify"
    //       type="email"
    //       placeholder="Enter your email address"
    //     >
    //     </input>
    //     <button type="button" className='notifyBtn'><span></span>Notify Me</button>
    //   </div>
    // </>
  );
}

export default ComingSoon;

/* 
<>
      <div className="navbar">
        <div className='logo'>
          <a href="">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="searchbar">
          <div className="searchIcon">
            <a href="">
              <img src={searchIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </>
*/