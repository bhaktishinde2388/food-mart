// src/components/ProductCard.jsx
import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded p-4 flex flex-col">
      <img
        src={product.images?.[0] || "https://via.placeholder.com/150"}
        alt={product.product_name || "Product"}
        className="h-40 object-contain mb-2"
      />
      <h3 className="font-bold text-sm">{product.product_name || "Unnamed"}</h3>
      <p className="text-gray-600 text-sm">
        ${product.price?.actual_price || 0}
      </p>
      <button
        className="mt-2 bg-yellow-500 text-white py-1 rounded hover:bg-yellow-600"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
