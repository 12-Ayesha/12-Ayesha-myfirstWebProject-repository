import React from "react";

const FoodCard = ({ name, cost, image, quantity, onQuantityChange }) => {
  const handleIncrease = () => onQuantityChange(quantity + 1);
  const handleDecrease = () => onQuantityChange(quantity > 0 ? quantity - 1 : 0);

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      width: "220px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      margin: "10px"
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "6px" }}
      />
      <h3 style={{ margin: "12px 0 6px 0" }}>{name}</h3>
      <p style={{ fontWeight: "bold", color: "#444" }}>Taka {cost}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "10px 0" }}>
        <button onClick={handleDecrease} style={{ padding: "4px 10px", fontSize: "18px" }}>-</button>
        <span style={{ margin: "0 12px", fontWeight: "bold" }}>{quantity}</span>
        <button onClick={handleIncrease} style={{ padding: "4px 10px", fontSize: "18px" }}>+</button>
      </div>
      <div style={{
        background: "#f7f7f7",
        borderRadius: "6px",
        padding: "8px",
        marginTop: "8px",
        fontWeight: "bold"
      }}>
        Total: {cost * quantity} only
      </div>
    </div>
  );
};

export default FoodCard;