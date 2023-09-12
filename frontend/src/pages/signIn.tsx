import "react";
import "../styles/signIn.css";
import Logo from "../assets/WeOneInfotech_Logo.png";

function signIn(){
    function navbar(){
        window.open('/navbar')
    }
    return(
        <div className="register">
            <div className="LogoContain">
                <img id="img" src={Logo} alt="Logo" />
                <p id="companyTitle">We One Infotech</p>
            </div>
            <div className="login">
                <p id="signIn">Sign in</p>
                <label htmlFor="email">Email address</label><br />
                <input type="email" className="inputBox" placeholder="Enter your email address" /><br /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" className="inputBox" placeholder="Enter your password" />
                <button id="signin-btn" onClick={navbar}>Continue</button>
                <div className="signup">
                    <p className="newID">New to weoneinfotech?</p>
                    <button className="signup-btn">Create an account</button>
                </div>
            </div>
        </div>
    );
}

export default signIn;