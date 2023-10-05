import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Cart } from "./Components/Cart";
import { Buy } from "./Components/Buy";
import { Sell } from "./Components/Sell";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  let initProperty;

  if (localStorage.getItem("properties") === null) {
    initProperty = [
      {
        image:
          "https://global-uploads.webflow.com/63cda40ae1eb3d792c09917b/647764eb2e0bb9969d252fa0_44g2vq_7iXMABSef6UTUEzYvIbsHnCMYdAfQRyYOUN4.jpeg",
        title: "The Daisy",
        price: "25",
      },
      {
        image:
          "https://i.pinimg.com/736x/e2/77/18/e2771844a3144e279ad84fe82ed71037.jpg",
        title: "The Pink",
        price: "16",
      },
      {
        image: "https://m.media-amazon.com/images/I/61iutABxMvL.jpg",
        title: "The Portrait",
        price: "100",
      },
      {
        image:
          "https://tiimg.tistatic.com/fp/1/002/308/acrylic-flower-painting-392.jpg",
        title: "The française Desire",
        price: "150",
      },
      {
        image:
          "https://img.freepik.com/free-photo/multi-colored-daisy-brings-springtime-freshness-generated-by-ai_188544-9670.jpg",
        title: "Wellington Gardens",
        price: "200",
      },
    ];
  } else {
    initProperty = JSON.parse(localStorage.getItem("properties"));
  }

  const addProperty = (image, title, price) => {
    console.log("Property added with", image, title, price);
    const newProperty = {
      image: image,
      title: title,
      price: price,
    };

    setProperties([...properties, newProperty]);
    console.log(newProperty);
  };

  const onDelete = (propertyNumber) => {
    console.log("Deleting...", propertyNumber);
    console.log(properties[propertyNumber]);

    setProperties(
      properties.filter((prope) => {
        return prope !== properties[propertyNumber];
      })
    );
  };

  // CART-------------------

  let initCart;
  if (localStorage.getItem("cart") === null) {
    initCart = [];
  } else {
    initCart = JSON.parse(localStorage.getItem("cart"));
  }

  const addToCart = (properties) => {
    console.log("Property added with");
    const newCart = {
      image: properties.image,
      title: properties.title,
      price: properties.price,
    };
    alert("Item added to Cart.");

    setCart([...cart, newCart]);
    console.log(newCart);
    // initCart = localStorage.setItem(newCart, cart);
  };

  const cartDelete = (properties) => {
    console.log("I am an onDelete on todo", properties);

    setCart(
      cart.filter((e) => {
        return e !== properties;
      })
    );
  };

  const checkout = (cartt) => {
    console.log("I am an onDelete on cart", cartt);

    setCart("");

    // setProperties(
    //   properties.filter((prope) => {
    //     return prope !== cartt;
    //   })
    // );
  };

  const [properties, setProperties] = useState(initProperty);

  const [cart, setCart] = useState(initCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
  }, [properties]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/cart"
            element={
              <Cart cart={cart} cartDelete={cartDelete} checkout={checkout} />
            }
          />
          <Route
            exact
            path="/buy"
            element={
              <Buy
                properties={properties}
                onDelete={onDelete}
                addToCart={addToCart}
              />
            }
          />
          <Route
            exact
            path="/sell"
            element={<Sell addProperty={addProperty} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
