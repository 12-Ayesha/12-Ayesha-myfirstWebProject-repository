import React from "react";

const Cart = ({ cartItems }) => {
  // Calculate total cost
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.cost * item.quantity,
    0
  );

  return (
    <div
      style={{
        minWidth: "300px",
        maxWidth: "350px",
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        position: "sticky",
        top: "30px",
        height: "fit-content",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "18px" }}>Cart</h3>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888" }}>No items added.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: "12px",
                borderBottom: "1px solid #eee",
                paddingBottom: "8px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>{item.name}</span>
              <span style={{ float: "right" }}>x{item.quantity}</span>
              <br />
              <span style={{ color: "#555" }}>Taka {item.cost} each</span>
              <span style={{ float: "right", color: "#222" }}>
                 {item.cost * item.quantity} Taka
              </span>
            </li>
          ))}
        </ul>
      )}
      <hr style={{ margin: "18px 0" }} />
      <div style={{ fontWeight: "bold", fontSize: "18px", textAlign: "right" }}>
        Total: {totalCost} Taka
      </div>
    </div>
  );
};

export default Cart;
