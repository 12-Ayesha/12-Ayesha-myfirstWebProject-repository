import React, { useState } from "react";
import { foodItems } from "../constants/fooddata";
import FoodCard from "../components/foodcard";
import Cart from "../components/cart";

const OrderMenu = () => {
  // State to track quantities for each food item
  const [quantities, setQuantities] = useState(
    foodItems.map(() => 0)
  );

  // Update quantity for a specific item
  const handleQuantityChange = (idx, newQty) => {
    setQuantities(qs => qs.map((q, i) => (i === idx ? newQty : q)));
  };

  // Prepare cart items with quantity > 0
  
  const cartItems = foodItems
    .map((item, idx) => ({
      ...item,
      quantity: quantities[idx]
    }))
    .filter(item => item.quantity > 0);

  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      gap: "40px",
      padding: "30px"
    }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Order Menu</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "flex-start"
        }}>
          {foodItems.map((item, idx) => (
            <FoodCard
              key={idx}
              name={item.name}
              cost={item.cost}
              image={item.image}
              quantity={quantities[idx]}
              onQuantityChange={newQty => handleQuantityChange(idx, newQty)}
            />
          ))}
        </div>
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default OrderMenu;