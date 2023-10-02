import logo from "../../assets/logo-rozetka.svg";
import "./Card.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Card() {
  return (
    <div className="Card">
      <img src={logo} className="Login-logo" alt="logo" />
      <form className="Form">
        <Input />
        <Button />
      </form>
    </div>
  );
}

export default Card;
