import "./Table.css";
import { FaPencilAlt, FaTrashAlt, FaExchangeAlt } from "react-icons/fa";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import React, { useState } from "react";
import { API_URL } from "../../constans/url";
import ProductModal from "../ProductModal/ProductModal";

const Table = ({ products, setProducts, onEditClick }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleEditClick = (product) => {
    onEditClick(product);
  };

  const handleEditCancel = () => {
    setShowEditModal(false);
    setSelectedProduct(null);
  };

  const handleEditSubmit = (updatedProductData) => {
    setShowEditModal(false);
    setSelectedProduct(null);
  };

  const handleDeleteClick = (productId) => {
    setSelectedProductId(productId);
    setShowModal(true);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedProductId(null);
  };

  const handleConfirmDelete = async () => {
    try {
      await fetch(`${API_URL}/${selectedProductId}`, {
        method: "DELETE",
      });

      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error deleting product: ", error);
    } finally {
      setShowModal(false);
      setSelectedProductId(null);
    }
  };

  return (
    <div className="table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>
              ID <FaExchangeAlt className="Icon-arrow" />
            </th>
            <th>
              Category <FaExchangeAlt className="Icon-arrow" />
            </th>
            <th>
              Name <FaExchangeAlt className="Icon-arrow" />
            </th>
            <th>
              Quantity <FaExchangeAlt className="Icon-arrow" />
            </th>
            <th>
              Price <FaExchangeAlt className="Icon-arrow" />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "even-row" : "odd-row"}
            >
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <FaPencilAlt
                  className="Icon-pencil"
                  onClick={() => handleEditClick(product.id)}
                />
                <FaTrashAlt
                  className="Icon-trash"
                  onClick={() => handleDeleteClick(product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <DeleteConfirmationModal
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}

      {showEditModal && (
        <ProductModal
          product={selectedProduct}
          onCancel={handleEditCancel}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default Table;
