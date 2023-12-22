import "react";

import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";


import AddProduct from "./admin/addProduct";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signup";
import { useState } from "react";
import Admin from "./admin/admin";
import Products from "./pages/products";
import Product from "./pages/product";
// import Payment from "./pages/payment";

function App() {

  const [alert, setAlert] = useState({message: "", type: ""});

  function showAlert(message: string, type: string){
    setAlert({
      message: message,
      type: type,
    })
  }

  const alertStyle = {
    height: "40px",
    width: "100%",
    paddingTop: "4px",
    fontSize: "20px",
    margin: "60px 0px 0px auto",
    backgroundColor: alert.type === "success" ? "green" : alert.type === "danger" ? "red" : alert.type === "warning" ? "gold" : "transparent",
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        {/* <div className="alert-box" style={alertStyle}>
            <p><strong>{alert.type}</strong> : {alert.message}</p>
        </div> */}
        {/* <Products/> */}
        <div className="body">
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/addProduct" element={<AddProduct />} />
          <Route path="/signin" element={<SignIn showAlert={showAlert}/>} />
          <Route path="/signup" element={<SignUp showAlert={showAlert}/>} />
          <Route path="/" element={<Products />} />
          <Route path="/product" element={<Product product={}/>} />
          {/* <Route path="/payment" element={<Payment/>} /> */}
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;