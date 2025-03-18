import React, { useState } from "react";
import { useCart } from "../contexts/CartProvider";
function CartItem({ id, price, img, title, quantity}) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  return (
    <div>
      <p>id : {id}</p>
      <p>price : {price*quantity}</p>
      <p>title : {title}</p>
      <p>quantity : {quantity}</p>

      <button
        onClick={() => {
          increaseQuantity(id);
        }}
      >
        Icrease Quantity
      </button>
      <button
        onClick={() => {
          if (quantity > 1) {
            decreaseQuantity(id);
          }
        }}
      >
        Decrease Quantity
      </button>
      <button
        onClick={() => {
          removeItem(id);
        }}
      >
        Remove Item
      </button>
    </div>
  );
}

export default CartItem;
