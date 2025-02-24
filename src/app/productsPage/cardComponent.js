"use client";

import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function ProductCard({ name, price, image1, image2 }) {
     return (
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 p-4">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">${price.toFixed(2)}</p>
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      );
}

export default ProductCard;
