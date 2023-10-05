import React, { useState } from "react";
import "../CSS/Sell.css";

export const Sell = (props) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!image || !title || !price) {
      alert("Enter all mandatory details.");
    } else {
      props.addProperty(image, title, price);
      setImage("");
      setTitle("");
      setPrice("");
    }
    alert("This will add your Property to 'Buy' page.");
  };
  return (
    <div>
      <div className="form-container">
        <h3>Let's add Some More !</h3>
        <form onSubmit={submit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              name="name"
              placeholder="Enter Flower Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              name="price"
              placeholder="Enter Price"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="url"
              id="image"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              name="image"
              placeholder="Enter Image URL"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
