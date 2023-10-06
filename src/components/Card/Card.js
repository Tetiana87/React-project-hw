import logo from "../../assets/logo-rozetka.svg";
import "./Card.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Card() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Card">
      <img src={logo} className="Login-logo" alt="logo" />
      <form className="Form">
        <div>
          <Input
            type="text"
            placeholder="User name"
            value={name}
            onChange={setName}
          />
        </div>
        <div className="Block-input-icon">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
          <FaEye className="Icon-open-eye" />
          <FaEyeSlash className="Icon-open-eye Icon-close-eye" />
        </div>
        <Button text="Login" className="Button" />
      </form>
    </div>
  );
}

export default Card;
