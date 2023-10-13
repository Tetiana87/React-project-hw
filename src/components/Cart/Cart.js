import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = ({ product }) => {
  const { id, image, name, price, quantity } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/preview/${id}`);
  };

  return (
    <div className="Cart" onClick={handleClick}>
      <img src={image} alt={name} className="Cart-image" />
      <h2 className="Cart-title">{name}</h2>
      <div className="Price-quantity">
        <p className="Cart-price">${price}</p>
        <p className="Cart-quantity">Кількість: {quantity}</p>
      </div>
      <div className="Send-block">
        <FaShoppingCart className="FaShoppingCart" />
        <p className="Shop-send">Готовий до відправки</p>
      </div>
    </div>
  );
};

export default Cart;
