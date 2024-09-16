import React from 'react';


const products = [
  { id: 'P001', name: 'Laptop', price: 1000, category: 'Electronics' },
  { id: 'P002', name: 'Phone', price: 500, category: 'Electronics' },
  { id: 'P003', name: 'T-Shirt', price: 20, category: 'Fashion' }
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="container">
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>Price: {product.price} USD</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
