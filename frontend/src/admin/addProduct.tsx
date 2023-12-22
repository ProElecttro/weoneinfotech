import { useState, ChangeEvent } from "react";
import "./addProduct.css";

function AddProduct() {
  const initialFormData = {
    name: "",
    category: "",
    price: "",
    sales_price: "",
    stock: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await fetch("http://localhost:3002/addproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.userInserted) {
          alert("Try again");
          window.location.reload();
          return;
        }
        if (res?.result) {
          alert("User Already exist, please login");
          return;
        }
        localStorage.setItem("token", res.auth);
        alert("Product Added");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="addProduct-container">
        <div id="title">
          <span>Add New Product</span>
          <button type="submit" id="add-btn" onClick={handleSubmit}>
            Add Product
          </button>
        </div>

        <form id="add">
          <div className="input-container">
            <label htmlFor="Product_Name">Product Name</label>
            <input
              type="text"
              className="input-box"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="Category">Category</label>
            <input
              type="text"
              className="input-box"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="Price">Price</label>
            <input
              type="text"
              className="input-box"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="Selling_Price">Selling Price</label>
            <input
              type="text"
              className="input-box"
              name="sales_price"
              value={formData.sales_price}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="Stock">Stock</label>
            <input
              type="text"
              className="input-box"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              className="input-box"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
