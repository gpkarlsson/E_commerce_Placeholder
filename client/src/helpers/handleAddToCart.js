// const [cartItems, setCartItems] = useState([]);
import productName from "../pages/Dashboard"
import productPrice from "../pages/Dashboard"
// import productAdjective from "../pages/Dashboard"
// import productDescription from "../pages/Dashboard"
// import { useState } from "react";

// const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
  handleAddToCart(product, cartItems, setCartItems);
};

export const handleAddToCart = (product, cartItems, setCartItems) => {
  const itemIndex = cartItems.findIndex((item) => item.id === product.id);
  if (itemIndex > -1) {
    const newCartItems = [...cartItems];
    newCartItems[itemIndex].quantity += 1;
    setCartItems(newCartItems);
  } else {
    const newCartItem = {
      name: productName,
      price: productPrice,
      quantity: 1,
    };
    setCartItems([...cartItems, newCartItem]);
  }
};
