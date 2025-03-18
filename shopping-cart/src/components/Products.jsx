import React from "react";
import { products } from "../data/product";
import Product from "./Product";
import Container from "./UI/Container";
function Products() {
  return (
    <Container>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        {products.map((prod) => {
          return <Product key={prod.id} {...prod} />;
        })}
      </div>
    </Container>
  );
}

export default Products;
