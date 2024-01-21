import { useState, useEffect } from "react";
import Axios from "axios";

import "../styles/products.css";
import { useNavigate } from 'react-router-dom';

import Rating from "../components/rating";
import Footer from "../components/footer";

interface Product {
  noOfRatings: number;
  rating: number;
  product_id: string;
  
  productName: string;
  category: string;
  brandName: string;
  stock: string;
  status: string;
  MRP: string;
  salesPrice: number;
  description: string;
  images: string;
  specifications: string;
}

export default function Products() {
  const navigate = useNavigate();
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('accesstoken');
    console.log("token: " + token);
    async function fetchProducts() {
      try {
        const response = await Axios.get<Product[]>(
          "http://localhost:3002/fetchProductDetails",
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
    <>
      <div className="products-page">
        {loading ? (
          <p>Loading...</p>
        ) : data.length === 0 ? (
          <p>No products found</p>
        ) : (
          data.map((product) => (
            <div className="product" key={product.product_id}>
              <div className="product_img" onClick={() => navigate("/product", { state: product })}>
                <img src={JSON.parse(product.images)[0]} alt={product.productName} />
              </div>

              <div className="productDetails">
                <div className="product-info">
                  <div className="productName" onClick={() => navigate("/product", { state: product })}>
                    <h3>{product.productName}</h3>
                  </div>
                  <Rating Rating={3} noOfRatings={4} />
                  <p>{product.description}</p>
                </div>

                <div className="price-table" onClick={() => navigate("/product", { state: product })}>
                  <div className="product-price">
                  <span style={{ fontSize: "24px", color: "red" }}>
                    {(((product.salesPrice - parseFloat(product.MRP)) / parseFloat(product.MRP) * 100).toFixed(2))}%
                  </span>

                  </div>
                    <div className="product-price">
                      <span style={{fontSize: "20px", marginRight: "12px"}}><strong>Price</strong></span>
                      <span><sup>INR</sup><strong style={{fontSize: "20px"}}>{product.salesPrice}/-</strong></span>
                    </div>
                    <div className="product-price">
                      <span style={{marginRight: "12px"}}>List Price</span>
                      <span><i><s>INR {product.MRP}/-</s></i></span>
                    </div>
                  </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}