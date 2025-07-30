import React from "react";
import './BatCard.css';

const BatCard = ({ name, price, img, onAddToCart }) => {
  return (
    <div className="bat-card">
      <div className="bat-image-wrapper">
        <img src={img} alt={name} className="bat-image" />
      </div>
      <h3>{name}</h3>
      <p>{price}</p>
      <button className="add-to-cart-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default BatCard;
