import React from "react";
import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";
function Cart() {
  const { cart } = useCart();
  if (cart.length === 0) {
    return (
      <h1 style={{ textAlign: "center", padding: "2rem" }}>
        No items in the Cart!
      </h1>
    );
  }

  const totalAmount = cart.reduce((totalAmount, item) => {
    return totalAmount + item.price * item.quantity;
  }, 0);

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Your Cart</h2>
      <div style={{ marginBottom: "1rem" }}>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <div
        style={{
          borderTop: "2px solid #ddd",
          padding: "1rem",
          textAlign: "right",
          fontWeight: "bold",
        }}
      >
        Total Amount: ${totalAmount}
      </div>
    </div>
  );
}

export default Cart;
