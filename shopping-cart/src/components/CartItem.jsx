import React from "react";
import { useCart } from "../contexts/CartProvider";

function CartItem({ id, price, img, title, quantity }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  const buttonStyle = {
    margin: "0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "1px solid #ddd",
    backgroundColor: "white",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #ddd",
        gap: "1rem",
      }}
    >
      <img
        src={img}
        alt={title}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
      <div style={{ flex: 1 }}>
        <h3>{title}</h3>
        <p>Price: ${price * quantity}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button
            style={buttonStyle}
            onClick={() => quantity > 1 && decreaseQuantity(id)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button style={buttonStyle} onClick={() => increaseQuantity(id)}>
            +
          </button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#ff4444",
              color: "white",
              border: "none",
            }}
            onClick={() => removeItem(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
