import "./Products.css";
import logoProducts from "../../assets/logo-rozetka-products.svg";
import Button from "../../components/Button/Button";
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Table from "../../components/Table/Table";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://6525b61567cfb1e59ce7a0d3.mockapi.io/products"
        );
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handlePreviewClick = () => {
    navigate("/preview");
  };

  return (
    <div className="Products">
      <div className="Block-logo">
        <img src={logoProducts} className="Products-logo" alt="logo" />
      </div>
      <div className="Button-block">
        <div className="Block-icon">
          <Button
            text="Preview"
            className="Button-products"
            onClick={handlePreviewClick}
          />
          <FaRegUser className="Icon-user" />
        </div>
        <div className="Block-icon">
          <Button text="Add product" className="Button-products" />
          <FaPlus className="Icon-plus" />
        </div>
      </div>
      <div className="App">
        <h1 className="Title">Products</h1>
        <Table products={products} />
      </div>
    </div>
  );
}

export default Products;
