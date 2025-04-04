import React from "react";
import "../styles/card.css"
const Card = ({ icon, label, value }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="card-content">
      <h3>{label}</h3>
      <p className="value">{value}</p>
      </div>
    </div>
  );
};

export default Card;
