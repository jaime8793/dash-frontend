async function getAllProducts(setAllProducts) {
  try {
    const response = await fetch(
      "http://localhost:5000/api/product/allProducts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    setAllProducts(data); // ✅ Correctly update state from context
    console.log(`Fetched products:`, data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

export default getAllProducts;
