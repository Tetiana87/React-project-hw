import "./Products.css";
import logoProducts from "../../assets/logo-rozetka-products.svg";
import Button from "../../components/Button/Button";
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Table from "../../components/Table/Table";
import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://6525b61567cfb1e59ce7a0d3.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  return (
    <div className="Products">
      <div className="Block-logo">
        <img src={logoProducts} className="Products-logo" alt="logo" />
      </div>
      <div className="Button-block">
        <div className="Block-icon">
          <Button text="Preview" className="Button-products" />
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
