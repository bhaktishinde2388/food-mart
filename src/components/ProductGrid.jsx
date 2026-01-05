import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.khusindia.com/rest/api/product")
      .then((res) => res.json())
      .then((res) => {
        if (res?.data && Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          setProducts([]);
        }
      })
      .catch(() => setProducts([]));
  }, []);

  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;
