import "./Info.css";
import React from "react";
import { FaArrowLeft, FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Info = ({ product }) => {
  const { id, image, name, price, quantity, description } = product;
  const navigate = useNavigate();
  const paragraphs = description.split("\n");

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="Info">
      <div className="Title-block">
        <FaArrowLeft className="FaArrowLeft" onClick={handleGoBack} />
        <h2 className="Info-title">{name}</h2>
      </div>
      <div className="Info-block">
        <div className="Image-block">
          <img src={image} alt={name} className="Info-image" />
        </div>
        <div className="Main-info">
          <div className="Stock-block">
            <FaRegCheckCircle className="FaRegCheckCircle" />
            <p className="Stock-send"> Є в наявності</p>
          </div>
          <p className="Info-price">${price}</p>
          <p className="Info-quantity">Кількість: {quantity}</p>
        </div>
      </div>
      <div className="Description-block">
        <p className="Description-title">
          Опис <span className="Description-name-color">{name}</span>
        </p>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="Description-text">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Info;
