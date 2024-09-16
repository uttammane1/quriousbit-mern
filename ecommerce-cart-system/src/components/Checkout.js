import React, { useState } from 'react';

const Checkout = ({ cartItems, totalCost }) => {
  const [currency, setCurrency] = useState('USD');
  const discount = calculateDiscount(cartItems);

  const finalTotal = totalCost - discount;

  const convertCurrency = (amount, currency) => {
    const rates = { EUR: 0.85, GBP: 0.75 };
    return rates[currency] ? amount * rates[currency] : amount;
  };

  const finalConvertedTotal = convertCurrency(finalTotal, currency);

  return (
    <div className="checkout-section">
      <h2>Checkout</h2>
      <p>Discount Applied: {discount.toFixed(2)} USD</p>
      <p>Final Total in USD: {finalTotal.toFixed(2)} USD</p>

      <label>
        Convert to:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </label>

      <p>Final Total in {currency}: {finalConvertedTotal.toFixed(2)} {currency}</p>
    </div>
  );
};

const calculateDiscount = (cartItems) => {
  let discount = 0;
  cartItems.forEach(item => {
    if (item.category === 'Fashion' && item.quantity >= 2) {
      discount += item.price; 
    } else if (item.category === 'Electronics') {
      discount += item.price * item.quantity * 0.10;
    }
  });
  return discount;
};

export default Checkout;
