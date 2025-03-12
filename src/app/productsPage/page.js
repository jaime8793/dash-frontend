"use client";

import React, { useEffect, useContext } from "react";
import getAllProducts from "./fetchAllProducts";
import { AppContext } from "@/context/AppContext";

function ProductsPage() {
  const { allProducts, setAllProducts } = useContext(AppContext);

  useEffect(() => {
    getAllProducts(setAllProducts);
  }, []); // Empty dependency array → Runs only once after first render

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Our Products
      </h1>

      {allProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  className="object-cover w-full h-64"
                  src={product.productFile}
                  alt={product.productName}
                />
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-2 rounded-full font-medium">
                  ${parseFloat(product.price).toFixed(2)}
                </div>
              </div>

              <div className="p-6 flex-grow">
                <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
                  {product.productName}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex items-center mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  {product.inventory <= 5 && (
                    <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                      Only {product.inventory} left
                    </span>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <p className="mt-4 text-xl font-medium text-gray-600 dark:text-gray-400">
            No products available at the moment.
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-500">
            Please check back later for new arrivals.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
