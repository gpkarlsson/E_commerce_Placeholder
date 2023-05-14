import React, { createContext, useContext, useState } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Create a provider component for the cart context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    localStorage.setItem('cartItems', JSON.stringify(cart));
  };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => useContext(CartContext);