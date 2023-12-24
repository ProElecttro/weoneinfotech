import { useState, ChangeEvent } from "react";

import "../styles/signIn.css";
import { NavLink } from "react-router-dom";

function SignIn(props: any) {

  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // e: { preventDefault: () => void }
    // e.preventDefault();
    
    if(formData.email === undefined || formData.password === undefined){
      alert("Please enter a valid email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('logged in', data)
        // alert(data.message);
        props.showAlert({message: data.message, type: "success"})
      } else {
        const errorData = await response.json();
        if (errorData.error) {
          props.showAlert({message: errorData.message, type: "error"})
        } else {
          props.showAlert({message: "An unexpected error occurred. Please try again later.", type: "success"})
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      props.showAlert({message: "A network error occurred. Please check your internet connection.", type: "error"})
    }
  };

  return (
    <div className="register">
      <p className="title">Sign in</p>
      <label htmlFor="email">Email address</label>
      <br />
      <input
        type="email"
        name="email"
        onChange={handleInputChange}
        className="input-Box"
        placeholder="Enter your email address"
      />

      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        name="password"
        onChange={handleInputChange}
        className="input-Box"
        placeholder="Enter your password"
      />

      <div className="signup">
        <button className="signin-btn" onClick={handleSubmit}>
          Login
        </button>
        <p className="newID">New to weoneinfotech?</p>
        <button className="signup-btn">
          <NavLink to="/signup"> <strong>Create an account</strong></NavLink>
        </button>
      </div>
    </div>
  );
}

export default SignIn;