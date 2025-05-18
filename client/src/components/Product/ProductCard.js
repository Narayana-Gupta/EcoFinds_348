import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img className="placeholder" alt={product.title} src="https://via.placeholder.com/300x180?text=Image" />
      <h3>{product.title}</h3>
      <p><b>Price:</b> {product.price}</p>
      <p><b>Category:</b> {product.category}</p>
    </div>
  );
}
