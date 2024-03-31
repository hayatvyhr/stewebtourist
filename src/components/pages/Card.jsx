import React from "react";
import "./Card.css"; // Import CSS file for styling

const Card = ({ imageSrc, title, content }) => {
  return (
    <div className="card_sec1">
    <div className="card">
      {imageSrc && <img src={imageSrc} alt="Card Image" className="card-image" />}
    <div className="card-content">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </div>
  </div>
  );
};

export default Card;
