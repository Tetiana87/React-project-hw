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
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleNameChange = (value) => {
    setName(value);
    setNameError(value.trim().length > 0 ? "" : "Name cannot be empty");
    setErrorMessage("");
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(value.trim().length > 0 ? "" : "Password cannot be empty");
    setErrorMessage("");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle password visibility state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim().length) {
      setNameError("Name cannot be empty");
      return;
    }

    if (!password.trim().length) {
      setPasswordError("Password cannot be empty");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
          console.log("Authentication successful");
        } else {
          setErrorMessage("Invalid token received from server");
        }
      } else {
        setErrorMessage("Invalid name or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while processing your request.");
    }
  };

  return (
    <div className="Card">
      <img src={logo} className="Login-logo" alt="logo" />
      <form onSubmit={handleSubmit} className="Form">
        <div>
          <Input
            type="text"
            placeholder="User name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <p className="error-message-login">{nameError}</p>}
        </div>
        <div className="Block-input-icon">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="Icon-eye" onClick={handleTogglePassword}>
            {showPassword ? (
              <FaEyeSlash className="Eye" />
            ) : (
              <FaEye className="Eye" />
            )}
          </span>
          {passwordError && <p className="error-message-pw">{passwordError}</p>}
          {/* <FaEye className="Icon-open-eye" />
          <FaEyeSlash className="Icon-open-eye Icon-close-eye" /> */}
        </div>
        <div className="Block-btn">
          <Button text="Login" className="Button" />
          {errorMessage && (
            <p className="error-message-invalid">{errorMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Card;
