import logo from "../../assets/logo-rozetka.svg";
import "./Card.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import React, { useState } from "react";

function Card() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Card">
      <img src={logo} className="Login-logo" alt="logo" />
      <form className="Form">
        <Input
          type="text"
          placeholder="User name"
          value={name}
          onChange={setName}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <Button />
      </form>
    </div>
  );
}

export default Card;
