import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import AddProduct from "./admin/addProduct";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signup";
import Admin from "./admin/admin";
import Products from "./pages/products";
import Product from "./pages/product";

import "./App.css";

function App() {
  const [alert, setAlert] = useState({ message: "", type: "" });

  function showAlert(message: string, type: string) {
    setAlert({
      message: message,
      type: type,
    });
  }

  const alertStyle = {
    fontSize: "20px",
    backgroundColor: "red",
    width: "96vw",
    zIndex: 99,
    padding: "6px",
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div className="body">
          {alert && (
            <div className="alert-box" style={alertStyle}>
              <p>
                <strong>{alert.type}</strong> 
                {alert.message}
              </p>
            </div>
          )}
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/addProduct" element={<AddProduct />} />
            <Route path="/signin" element={<SignIn showAlert={showAlert} />} />
            <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
            <Route path="/" element={<Products />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
