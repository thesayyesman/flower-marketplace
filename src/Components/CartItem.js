import React from "react";
import "../CSS/CartItem.css";

export const CartItem = ({ properties, cartDelete }) => {
  return (
    <div>
      <div className="cartItem">
        <div style={{ backgroundImage: `url(${properties.image})` }}></div>
        <p className="property-name"> {properties.title} </p>
        <p className="price"> ${properties.price} </p>

        <button
          className="btnn"
          onClick={() => {
            cartDelete(properties);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
