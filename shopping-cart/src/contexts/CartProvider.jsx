import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
function cartReducer(cart, action) {
    console.log("Reducer called!")

    // if (action.type === "ADD_ITEM") {
    //     return [...cart, action.payload];
  // }
  
    switch (action.type) {
      case "ADD_ITEM": {
        return [...cart, action.payload];
      }
      case "REMOVE_ITEM": {
        return cart.filter((item) => item.id !== action.payload.id);;
      }
      case "INCREASE_QTY": {
        return cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      case "DECREASE_QTY": {
        return cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    }
  return cart;
}
function CartProvider({ children }) {
    const addItemToCart = (newCartItem) => {
        dispatch({ type: "ADD_ITEM", payload: newCartItem });
  }
  const [cart, dispatch] = useReducer(cartReducer, []);

  const increaseQuantity = (id) =>{
    dispatch({type: "INCREASE_QTY", payload: {id: id}})
  }
  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QTY", payload: { id: id } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };
  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addItemToCart: addItemToCart,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity,
        removeItem: removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
    return useContext(CartContext);
}
export default CartProvider;
