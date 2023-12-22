import { useState, ChangeEvent } from "react";

import "../styles/signIn.css";
import { NavLink } from "react-router-dom";

function SignUp(props: any) {

  const initialFormData = {
    email: "",
    password: "",
    confirmPassword: "",
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
  
    if(formData.email === '' || formData.password === ''){
      alert("Please enter a valid email and password");
      return;
    }

    if (!formData.email.includes('@')) {
      alert("Please enter a valid email address");
      return;
    }

    const RxLetterCase = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!RxLetterCase.test(formData.password)) {
      alert("Please enter a strong password");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3002/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();

        alert(data.message);
        props.showAlert({message: data.message, type: "success"})
        window.location.href = "/signin";
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("A network error occurred. Please check your internet connection.");
    }
  };
  

  return (
    <div className="register">
      <p className="title">Sign Up</p>
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

      <label htmlFor="password">Confirm Password</label>
      <br />
      <input
        type="password"
        name="confirmPassword"
        onChange={handleInputChange}
        className="input-Box"
        placeholder="Enter your password again"
      />

      <div className="signup">
        <button className="signin-btn" onClick={handleSubmit}>
          Register
        </button>
        <p className="newID">Already Registered?</p>
        <button className="signup-btn" >
        <NavLink to="/signin"> Login </NavLink>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
