import { createContext, useState, useEffect } from "react";
import { foodlist } from "../FoodData/FoodData";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) {
        updated[itemId] -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
  };

const getTotalAmountCart = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    if (cartItems[itemId] > 0) {
      const itemInfo = foodlist.find((product) => product.id === parseInt(itemId));
     
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[itemId];
      }
    }
  }
  return totalAmount;
};

  const contextValue = { foodlist, cartItems, addToCart, removeFromCart,getTotalAmountCart };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
