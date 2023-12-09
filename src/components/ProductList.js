import React from 'react';

const ProductList = ({ products }) => (
  <div>
    <h1>Product List</h1>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name}: ${product.price} - {product.category}
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
