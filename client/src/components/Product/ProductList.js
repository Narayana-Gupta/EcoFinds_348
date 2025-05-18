import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {id:1, title:"Vintage Chair", price:"$45", category:"Furniture"},
  {id:2, title:"Used Laptop", price:"$300", category:"Electronics"},
  {id:3, title:"Classic Jacket", price:"$25", category:"Clothing"},
];

export default function ProductList() {
  return (
    <div className="container">
      <header>EcoFinds</header>
      <h2>Available Products</h2>
      <div className="flex-row">
        {sampleProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
