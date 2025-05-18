import React from 'react';

export default function ProductDetail() {
  const product = {
    title: "Vintage Clock", price: "$20", category: "Decor",
    description: "A beautiful vintage clock in working condition."
  };

  return (
    <div className="container card">
      <img className="placeholder" src="https://via.placeholder.com/400x200?text=Product+Image" alt="product" />
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
}
