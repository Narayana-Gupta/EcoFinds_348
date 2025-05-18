import React, { useState } from 'react';

export default function AddProduct() {
  const [product, setProduct] = useState({
    title: '', description: '', price: '', category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product listed successfully!');
  };

  return (
    <div className="container card">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input value={product.title} onChange={e => setProduct({...product, title: e.target.value})} required />

        <label>Description:</label>
        <textarea value={product.description} onChange={e => setProduct({...product, description: e.target.value})} required />

        <label>Price:</label>
        <input type="number" value={product.price} onChange={e => setProduct({...product, price: e.target.value})} required />

        <label>Category:</label>
        <select value={product.category} onChange={e => setProduct({...product, category: e.target.value})}>
          <option value="">Select Category</option>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Clothing</option>
          <option>Books</option>
        </select>

        <button type="submit">Submit Listing</button>
      </form>
    </div>
  );
}
