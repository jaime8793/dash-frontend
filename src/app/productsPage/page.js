"use client"

import React, { useEffect, useContext } from "react";
import getAllProducts from "./fetchAllUsers";
import { AppContext } from "@/context/AppContext";
function ProductsPage() {
  const { allProducts, setAllProducts } = useContext(AppContext); // ✅ Correct

  useEffect(() => {
    getAllProducts(setAllProducts); // ✅ Call fetch only after mount
  }, []); // Empty dependency array → Runs only once after first render

  return (
    <div>
      <h1>Product List</h1>
      {allProducts.length > 0 ? (
        allProducts.map((product, index) => (
          <p key={index}>{product.productName}</p>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductsPage;
