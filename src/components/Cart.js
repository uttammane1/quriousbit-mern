import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="card">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price} USD</p>
              <p>Total: {(item.price * item.quantity).toFixed(2)} USD</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total Cost: {totalCost.toFixed(2)} USD</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
