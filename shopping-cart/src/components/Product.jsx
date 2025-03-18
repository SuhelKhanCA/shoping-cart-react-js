import React from "react";
import { useCart } from "../contexts/CartProvider";
import { toast } from "react-toastify";
 
function Product({ id, title, img, price }) {
  const { addItemToCart, cart } = useCart();
  function handleAdd() {
    console.log("Handle add called!");
    for (const item of cart) {
      if (item.id === id) {
        toast.error("Item already added to cart!");
        return;
      }
    }
    const newCartItem = {
      id: id,
      price: price,
      title: title,
      img: img,
      quantity: 1,
    };
    addItemToCart(newCartItem);
    toast.info("Item added");
  }
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={img}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "4px",
          marginBottom: "1rem",
        }}
      />
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ color: "#666", marginBottom: "1rem" }}>Price: ${price}</p>
      <button
        style={{
          backgroundColor: "#3879a5",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "0.5rem 1rem",
          width: "100%",
          fontWeight: "500",
          transition: "background-color 0.2s",
        }}
        onClick={handleAdd}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
