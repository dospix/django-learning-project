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
      <h1 className="mb-8 text-3xl text-center font-bold text-gray-800">Store products</h1>

      {products.length === 0 ? (
        <p className="text-center text-red-500">No products found!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <img
              src={product.thumbnail}
              alt={product.name}
              className="h-48 w-full"
            />

            {/* Product information */}
            <div className="flex flex-col p-5">
              <h2 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {product.description}
              </p>

              <div className="flex justify-between mt-4 border-t border-gray-100 pt-4">
                <p className="text-lg font-bold text-blue-700">
                  {"$" + product.price}
                </p>
                <button>
                  <span className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
                    Add to cart
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      )}
    </div>
  );
}
