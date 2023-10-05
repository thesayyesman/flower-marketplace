import React, { useState } from "react";
import { BuyItem } from "./BuyItem";
import "../CSS/Buy.css";

export const Buy = (props) => {
  const [propertyNumber, setDeleteNumber] = useState("");
  return (
    <div>
      <div className="buy">
        <h2 className="buyTitle">Our Magnificient Listings</h2>
        <div className="buyList">
          {props.properties.length === 0
            ? "Kindly add some from Sell page."
            : props.properties.map((properties, key) => {
                return (
                  <BuyItem
                    properties={properties}
                    key={key}
                    addToCart={props.addToCart}
                  />
                );
              })}
        </div>

        <div className="delete">
          <input
            type="text"
            placeholder="Enter Flower no. to Delete"
            value={propertyNumber}
            onChange={(e) => {
              setDeleteNumber(e.target.value);
            }}
          ></input>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              props.onDelete(propertyNumber);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
