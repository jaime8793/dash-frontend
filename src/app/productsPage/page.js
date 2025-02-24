"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

async function getAllProducts() {
  try {
    const response = await fetch("http://localhost:5000/api/product/upload", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(`this is the data we are testing`, data);
  } catch (error) {
    console.log(
      "This is an error in the fetch for all products frontend",
      error
    );
    throw error;
  }
}


function HoodieCard({ name, price, image1, image2 }) {
  const [isHovered, setIsHovered] = useState(false);

    getAllProducts()
  return (
    <div className="bg-dark-800 rounded-lg overflow-hidden">
      <div
        className="relative aspect-square"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? image2 : image1}
          alt={name}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
        <p className="text-gray-400 mb-4">${"Cool"}</p>
        <Button className="w-full" variant="outline">
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default HoodieCard;
