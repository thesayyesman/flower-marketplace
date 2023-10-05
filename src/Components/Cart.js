import "../CSS/Cart.css";
import { CartItem } from "../Components/CartItem";

export const Cart = ({ cart, cartDelete, checkout }) => {
  let amount = 0; //Here, global declaration is done so as to show it as final amount.
  const cartTotal = (cart) => {
    for (let x = 0; x < cart.length; x++) {
      amount = amount + Number(cart[x].price);
    }
  };
  cartTotal(cart);
  console.log(amount);

  //Checkout-------

  const checkOut = (cart) => {
    checkout(cart);
  };

  return (
    <div>
      <div className="cartList">
        {cart.length === 0
          ? "Kindly add some Items to Cart."
          : cart.map((properties, key) => {
              return (
                <CartItem
                  properties={properties}
                  key={key}
                  cartDelete={cartDelete}
                />
              );
            })}
        <hr />
      </div>

      <aside className="cart">
        <ul id="cart-items"></ul>
        <p>
          Total: $<span id="cart-total">{amount}</span>
        </p>
        <button
          id="checkout"
          onClick={() => {
            checkOut(cart);
          }}
        >
          Checkout
        </button>
      </aside>
    </div>
  );
};
