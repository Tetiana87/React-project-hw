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
    image: product.image || "",
  });

  const [errors, setErrors] = useState({
    category: false,
    name: false,
    quantity: false,
    price: false,
    description: false,
    image: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );
    if (isEmpty) {
      setErrors({
        category: formData.category.trim() === "",
        name: formData.name.trim() === "",
        quantity: formData.quantity.trim() === "",
        price: formData.price.trim() === "",
        description: formData.description.trim() === "",
        image: formData.image.trim() === "",
      });
    } else {
      setErrors({
        category: false,
        name: false,
        quantity: false,
        price: false,
        description: false,
        image: false,
      });
      onSubmit(formData);
    }
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
            className={`input-product ${errors.category ? "error-border" : ""}`}
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
          <div
            className={`error-message-container ${
              errors.category ? "" : "hidden"
            }`}
          >
            <div className="error-message">This field is required</div>
          </div>
          <label className="label-product">Name</label>
          <input
            type="text"
            className={`input-product ${errors.name ? "error-border" : ""}`}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <div
            className={`error-message-container ${errors.name ? "" : "hidden"}`}
          >
            <div className="error-message">This field is required</div>
          </div>
          <label className="label-product">Quantity</label>
          <input
            type="number"
            className={`input-product ${errors.quantity ? "error-border" : ""}`}
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
          <div
            className={`error-message-container ${
              errors.quantity ? "" : "hidden"
            }`}
          >
            <div className="error-message">This field is required</div>
          </div>
          <label className="label-product">Price</label>
          <input
            type="text"
            className={`input-product ${errors.price ? "error-border" : ""}`}
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <div
            className={`error-message-container ${
              errors.price ? "" : "hidden"
            }`}
          >
            <div className="error-message">This field is required</div>
          </div>
          <label className="label-product">Image URL</label>
          <input
            type="text"
            className={`input-product ${errors.image ? "error-border" : ""}`}
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
          <div
            className={`error-message-container ${
              errors.image ? "" : "hidden"
            }`}
          >
            <div className="error-message">This field is required</div>
          </div>
          <label className="label-product">Description</label>
          <textarea
            name="description"
            className={`textarea-product ${
              errors.description ? "error-border" : ""
            }`}
            value={formData.description}
            onChange={handleInputChange}
            id="description"
            cols="30"
            rows="4"
          ></textarea>
          <div
            className={`error-message-container ${
              errors.description ? "" : "hidden"
            }`}
          >
            <div className="error-message">This field is required</div>
          </div>
          <div className="modal-product-buttons">
            <Button
              text="Cancel"
              className="modal-product-button-cancel"
              onClick={onCancel}
            />
            <Button
              text="Submit"
              className={`modal-product-button-submit ${
                Object.values(errors).some((error) => error) ? "disabled" : ""
              }`}
              type="submit"
              disabled={Object.values(errors).some((error) => error)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
