import React from 'react';

const myProducts = [
  { id: 1, title: "Old Book", price: "$5" },
  { id: 2, title: "Shoes", price: "$15" },
];

export default function MyListings() {
  return (
    <div className="container">
      <h2>My Listings</h2>
      {myProducts.map(p => (
        <div className="card" key={p.id}>
          <h3>{p.title}</h3>
          <p>Price: {p.price}</p>
          <button>Edit</button> <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
