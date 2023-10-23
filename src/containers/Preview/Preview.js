import React, { useState, useEffect } from "react";
import "./Preview.css";
import logoProducts from "../../assets/logo-rozetka-products.svg";
import Cart from "../../components/Cart/Cart";
import { API_URL } from "../../constans/url";

function Preview() {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Preview">
      <div className="Block-logo">
        <img src={logoProducts} className="Preview-logo" alt="logo" />
      </div>
      <div className="Cart-block">
        {products.map((product) => (
          <Cart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Preview;
