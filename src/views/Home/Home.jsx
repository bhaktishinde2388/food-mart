// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx"
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import


function Home() {
  const [products, setProducts] = useState([]);

  const categories = [
  { id: 1, name: "Home & Living", image: "/images/home.png" },
  { id: 2, name: "Grocery", image: "/images/grocery.png" },
  { id: 3, name: "Daily Spices", image: "/images/spices.png" },
  { id: 4, name: "Category 4", image: "/images/category4.png" },
  { id: 5, name: "Category 5", image: "/images/category5.png" },
  { id: 6, name: "Baby & Kids", image: "/images/baby.png" },
];

  useEffect(() => {
    fetch("https://api.khusindia.com/rest/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data?.result?.data?.result || []))
      .catch(console.error);
  }, []);

  // Dispatch product to Navbar cart via custom event
  const handleAddToCart = (product) => {
    document.dispatchEvent(new CustomEvent("addToCart", { detail: product }));
  };

  return (
    <div>
      <Navbar />
    <div className="overflow-x-auto py-4">
      <div className="flex gap-4 px-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex-shrink-0 w-32 bg-white rounded-xl shadow-md p-2 text-center hover:scale-105 transition-transform cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-24 object-cover rounded-lg mb-2"
            />
            <p className="text-sm font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={{
              id: product._id,
              name: product.product_name,
              price: product.price?.actual_price || 0,
              images: product.images,
            }}
            onAdd={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;