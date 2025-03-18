import React from 'react'
import { useCart } from '../contexts/CartProvider';
import CartItem from './CartItem';
function Cart() {
  const { cart } = useCart();
  if (cart.length === 0) return <h1>No items in the Cart!</h1>;

  // let totalAmount = 0;
  // for (const item of cart) {
  //   totalAmount += item.price * item.quantity;
  // }
  const totalAmount = cart.reduce((totalAmount, item) => { 
    return totalAmount + item.price * item.quantity;
  }, 0)
  return (
    <>
      {cart.map((cartItem) => {
        return (
          <CartItem key={cartItem.id} {...cartItem} />
        );
      })}
      <h1>Total amount : {totalAmount}</h1>
    </>
  )
}

export default Cart;