import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import CartProvider from './contexts/CartProvider'
import Header from './components/Header';
import { ToastContainer} from "react-toastify";
 
function App() {

  return (
    <>
      <CartProvider>
        <ToastContainer position='top-left'/>
        <Header/>
        <Products />
      </CartProvider>
    </>
  );
}

export default App
