import "./DeleteConfirmationModal.css";
import Button from "../Button/Button";

const DeleteConfirmationModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p className="modal-text">
          Are you sure you want to delete this product?
        </p>
        <div className="modal-buttons">
          <Button
            text="Cancel"
            className="Button-modal-cancel"
            onClick={onCancel}
          />
          <Button
            text="Delete"
            className="Button-modal-Delete"
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
