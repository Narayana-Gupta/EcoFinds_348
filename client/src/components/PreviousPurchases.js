import React from 'react';

const pastPurchases = [
  { id: 1, title: "Laptop Stand", price: "$10" },
  { id: 2, title: "Notebook", price: "$3" },
];

export default function PreviousPurchases() {
  return (
    <div className="container">
      <h2>Previous Purchases</h2>
      {pastPurchases.map(item => (
        <div className="card" key={item.id}>
          <h3>{item.title}</h3>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}
