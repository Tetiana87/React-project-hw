import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ product }) => {
  const { image, title, price, quantity } = product;

  return (
    <div className="Cart">
      <img src={image} alt={title} className="Cart-image" />
      <h2 className="Cart-title">{title}</h2>
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
