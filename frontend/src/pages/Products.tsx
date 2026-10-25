import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  thumbnail?: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/products/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      return response.json();
    })
    .then((products) => {
      setProducts(products);
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Products</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
