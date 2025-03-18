import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Cart from "./Cart";
import { useCart } from "../contexts/CartProvider";
import Container from "./UI/Container";
import styles from "./Header.module.css";
import { FaCartShopping } from "react-icons/fa6";
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
  const { cart } = useCart();
  const totalQty = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1 className="logo">ARC Shop</h1>
          <button
            className={styles.showCartButton}
            onClick={() => setIsModalOpen(true)}
          >
            <span className={styles.cartIcon}>
              <span className={styles.cartIconAndNumber}>
                <FaCartShopping className={styles.icon} />
                {totalQty > 0 && <span className={styles.number}>{totalQty}</span>}
              </span>
              Cart
            </span>
          </button>
        </nav>
      </Container>
      {isModolOpen && (
        <Modal closeModal={closeModal}>
          <Cart />
        </Modal>
      )}
    </header>
  );
}

export default Header;
