import { useState, useEffect } from "react";
import Axios from "axios";

import "../styles/products.css";
import { NavLink } from "react-router-dom";

import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";

import { FaStar } from "react-icons/fa";

interface Product {
  noOfRatings: number;
  rating: number;
  product_id: string;
  name: string;
  category: string;
  price: number;
  sales_price: number;
  stock: string;
  status: string;
  description: string;
}

export default function Products() {
  // const [rating, setRating] = useState(4.6);
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await Axios.get<Product[]>(
          "http://localhost:3002/fetchProductDetails"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No products found</p>
      ) : (
        data.map((product) => (
          <div className="product" key={product.product_id}>
            <div>
              <NavLink to='/product'>
                <div className="product_img">
                  {/* <img alt={product.name} /> */}
                </div>
              </NavLink>

              <div className="product-info">
                <NavLink to='/product'> <h3 className="productName">{product.name}</h3> </NavLink>
                <div className="rating">
                  {product.rating || 3.5 < 0.5 ? <CiStar className="star"/> : product.rating || 3.5 < 1 ? <FaStarHalfAlt className="star"/> : <FaStar className="star"/>}
                  {product.rating || 3.5 < 1.5 ? <CiStar className="star"/> : product.rating || 3.5 < 2 ? <FaStarHalfAlt className="star"/> : <FaStar className="star"/>}
                  {product.rating || 3.5 < 2.5 ? <CiStar className="star"/> : product.rating || 3.5 < 3 ? <FaStarHalfAlt className="star"/> : <FaStar className="star"/>}
                  {product.rating || 3.5 < 3.5 ? <CiStar className="star"/> : product.rating || 3.5 < 4 ? <FaStarHalfAlt className="star"/> : <FaStar className="star"/>}
                  {product.rating || 3.5 < 4.5 ? <CiStar className="star"/> : product.rating || 3.5 < 5 ? <FaStarHalfAlt className="star"/> : <FaStar className="star"/>}
                  <p style={{marginLeft: "12px"}}>{product.noOfRatings | 1} rating{product.noOfRatings || 1 > 1 && <span>s</span>}</p>
                </div>
                <p>{product.description}</p>
              </div>
            </div>

            <NavLink to='/product'>
              <div className="price-table">
              <div className="product-price">
              <span style={{ fontSize: "24px", color: "red" }}>
                {((product.sales_price - product.price) / product.price * 100).toFixed(2)}%
              </span>

              </div>
                <div className="product-price">
                  <span style={{fontSize: "20px", marginRight: "12px"}}><strong>Price</strong></span>
                  <span><sup>INR</sup><strong style={{fontSize: "20px"}}>{product.sales_price}/-</strong></span>
                </div>
                <div className="product-price">
                  <span style={{marginRight: "12px"}}>List Price</span>
                  <span><i><s>INR {product.price}/-</s></i></span>
                </div>
              </div>
            </NavLink>
          </div>
        ))
      )}
    </div>
  );
}