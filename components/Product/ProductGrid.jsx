import { useState, useEffect } from 'react';
import { getProductsData } from '@/lib/shopify';
import Link from 'next/link';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await getProductsData();
      setProducts(res);
      // console.log(res)
    }

    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            
            <Link key={product.id} href={`/product/${product.node.handle}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.node.images.edges[0].node.originalSrc}
                  // alt={product.images.edges[0].node.altText}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.node.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.node.priceRange.minVariantPrice.amount} {product.node.priceRange.minVariantPrice.currencyCode}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}