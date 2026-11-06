import React from "react";
import ProductCard from "./ProductCard";


const ProductList = ({ products, onRemove }) => {
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  const hasAvailableProducts = products.some(
    (product) => product.inStock
  );

  return (
    <div>
      {!hasAvailableProducts && (
        <p>No products are currently in stock.</p>
      )}

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={() => onRemove(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;