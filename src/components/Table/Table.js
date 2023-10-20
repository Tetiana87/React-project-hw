import "./Table.css";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import React, { useState } from "react";
import { API_URL } from "../../constans/url";

const Table = ({ products, setProducts }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

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
                <FaPencilAlt className="Icon-pencil" />
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
    </div>
  );
};

export default Table;
