import React from 'react';

const cartItems = [
  { id: 1, title: "Handbag", price: "$12" },
  { id: 2, title: "Bluetooth Speaker", price: "$25" },
];

export default function Cart() {
  return (
    <div className="container">
      <h2>My Cart</h2>
      {cartItems.map(item => (
        <div className="card" key={item.id}>
          <h3>{item.title}</h3>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}
