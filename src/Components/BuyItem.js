import "../CSS/Buy.css";

export const BuyItem = ({ properties, addToCart }) => {
  return (
    <div>
      <div className="buyItem">
        <div style={{ backgroundImage: `url(${properties.image})` }}></div>
        <p className="property-name"> {properties.title} </p>
        <p className="price"> ${properties.price} </p>
        <button
          className="btn btn-sm btn-danger"
          id="addtocart"
          onClick={() => {
            addToCart(properties);
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};
