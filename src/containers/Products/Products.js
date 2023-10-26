import "./Products.css";
import logoProducts from "../../assets/logo-rozetka-products.svg";
import Button from "../../components/Button/Button";
import { FaRegUser, FaPlus } from "react-icons/fa";
import Table from "../../components/Table/Table";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constans/url";
import ProductModal from "../../components/ProductModal/ProductModal";

function Products() {
  const [products, setProducts] = useState([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
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
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handlePreviewClick = () => {
    navigate("/preview");
  };

  const handleAddProductClick = () => {
    setIsEditing(false);
    setShowProductModal(true);
    setSelectedProduct({
      category: "",
      name: "",
      quantity: "",
      price: "",
      description: "",
    });
  };

  const handleEditClick = async (productId) => {
    try {
      const response = await fetch(`${API_URL}/${productId}`);
      if (response.ok) {
        const product = await response.json();
        setIsEditing(true);
        setSelectedProduct(product);
        setShowProductModal(true);
      } else {
        console.error("Failed to fetch product details");
      }
    } catch (error) {
      console.error("Error fetching product details: ", error);
    }
  };

  const handleProductModalCancel = () => {
    setShowProductModal(false);
    setSelectedProduct(null);
  };

  const handleProductModalSubmit = (updatedProductData) => {
    setShowProductModal(false);
    setSelectedProduct(null);
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
        <div className="Block-icon" onClick={handleAddProductClick}>
          <Button text="Add product" className="Button-products" />
          <FaPlus className="Icon-plus" />
        </div>
      </div>
      <div className="App">
        <h1 className="Title">Products</h1>
        <Table products={products} onEditClick={handleEditClick} />
      </div>
      {showProductModal && (
        <ProductModal
          product={selectedProduct}
          onCancel={handleProductModalCancel}
          onSubmit={handleProductModalSubmit}
          isEditing={isEditing}
        />
      )}
    </div>
  );
}

export default Products;
