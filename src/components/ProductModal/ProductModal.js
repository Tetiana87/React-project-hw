import "./ProductModal.css";
import Button from "../Button/Button";
import { FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const ProductModal = ({ product, onCancel, onSubmit, isEditing }) => {
  const [formData, setFormData] = useState({
    category: product.category || "",
    name: product.name || "",
    quantity: product.quantity || "",
    price: product.price || "",
    description: product.description || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-product">
      <div className="modal-product-content">
        <div className="modal-header">
          <h2 className="modal-name">
            {isEditing ? "Edit Product" : "Add Product"}
          </h2>
          <FaTimes className="close-icon" onClick={onCancel} />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label-product">Category</label>
          <input
            type="text"
            className="input-product"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
          <label className="label-product">Name</label>
          <input
            type="text"
            className="input-product"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label className="label-product">Quantity</label>
          <input
            type="number"
            className="input-product"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
          <label className="label-product">Price</label>
          <input
            type="text"
            className="input-product"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <label className="label-product">Description</label>
          <textarea
            name="description"
            className="textarea-product"
            value={formData.description}
            onChange={handleInputChange}
            id="description"
            cols="30"
            rows="4"
          ></textarea>
          <div className="modal-product-buttons">
            <Button
              text="Cancel"
              className="modal-product-button-cancel"
              onClick={onCancel}
            />
            <Button
              text="Submit"
              className="modal-product-button-submit"
              type="submit"
              onClick={onSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
