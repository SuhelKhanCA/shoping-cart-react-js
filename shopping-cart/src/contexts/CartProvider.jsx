import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
function cartReducer(cart, action) {
    console.log("Reducer called!")

    // if (action.type === "ADD_ITEM") {
    //     return [...cart, action.payload];
    // }
    switch (action.type) {
        case "ADD_ITEM": {
            return [...cart, action.payload]
        }
    }
  return cart;
}
function CartProvider({ children }) {
    const addItemToCart = (newCartItem) => {
        dispatch({ type: "ADD_ITEM", payload: newCartItem });
    }
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart: cart, addItemToCart: addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
    return useContext(CartContext);
}
export default CartProvider;
