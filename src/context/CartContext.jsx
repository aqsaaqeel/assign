import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (item, options) => {
    
    const addNewCartItem = {
      ...item,
      options: {
        size: options?.size || "",
        toppings: options?.toppings || [],
        quantity: options?.quantity || 1
      }
    };
    
    const newCartItems = [...cartItems, addNewCartItem];
    setCartItems(newCartItems);
    console.log("Added item to cart:", newCartItems);
  };
  
  

  const removeFromCart = (item) => {
    console.log("remove");
    const index = cartItems.findIndex((i) => i.name === item.name);
    if (index !== -1) {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.options.quantity, 0);

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.options.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
