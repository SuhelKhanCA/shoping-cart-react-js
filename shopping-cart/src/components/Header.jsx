import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Cart from "./Cart";

function Header() {
  const [isModolOpen, setIsModalOpen] = useState(false);
  function closeModal() {
    setIsModalOpen(false);
    }
    useEffect(() => {
        if (isModolOpen) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "scroll";
        }
    }, [isModolOpen]);
    
  return (
    <header>
      <nav>
        <h1 className="logo">ARC Shop</h1>
        <button onClick={() => setIsModalOpen(true)}>Show Cart</button>
      </nav>
      {isModolOpen && (
        <Modal closeModal={closeModal}>
          <Cart />
        </Modal>
      )}
    </header>
  );
}

export default Header;
