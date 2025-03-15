import React from 'react'
import { products } from '../data/product';
import Product from './Product';
function Products() {

  return (
      <div>
          {products.map((prod) => {
              return <Product key={prod.id} {...prod} />
          })}
    </div>
  )
}

export default Products;