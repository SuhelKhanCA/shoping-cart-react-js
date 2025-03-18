import React from 'react'
import { useCart } from '../contexts/CartProvider';
function Product({ id, title, img, price }) {
  const { addItemToCart, cart } = useCart();
  function handleAdd() {
    console.log("Handle add called!");
    for (const item of cart) {
      if (item.id === id) {
        alert("Item already added to cart!")
        return;
      }
    }
    const newCartItem = {
      id: id,
      price: price,
      title: title,
      img: img,
      quantity: 1,
    }
    addItemToCart(newCartItem);
    alert("Item added");
  }
  return (
    <div style={{
        margin: "1rem",
        padding: "1rem",
        border: "2px solid #343434",
      }}>
          <p>id : {id}</p>
          <p>title : {title}</p>
          <p>title : {title}</p>
          <img src={img} alt={title} height={200} />
      <p>price : {price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  )
}

export default Product;