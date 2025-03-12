"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { UploadButton } from "@uploadthing/react";


export default function AddProductPage() {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    inventory: "",
    productFile: "", // This will store the uploaded image URL
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      category: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.productName.trim())
      newErrors.productName = "Product name is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.price || isNaN(formData.price))
      newErrors.price = "Valid price is required";
    if (!formData.productFile)
      newErrors.productFile = "Product image is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.inventory || isNaN(formData.inventory))
      newErrors.inventory = "Valid inventory count is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/product/upload",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Product upload failed");
        } else {
          console.log("Product post successful frontend:", data.product);
          toast("Product has been created successfully");
          setTimeout(() => router.push("/productsPage"), 1000);
        }
      } catch (error) {
        console.error("Error uploading product:", error);
        setErrors({ submit: error.message });
      }
    } else {
      console.log("Validation failed:", newErrors);
      setErrors(newErrors);
    }
  };

  return (
    <div className="container mx-auto p-9 h-screen flex">
      <Card className="w-full max-w-2xl m-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="productName">Product Name</Label>
              <Input
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className={errors.productName ? "border-red-500" : ""}
              />
              {errors.productName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.productName}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="productFile">Upload Picture</Label>
              <UploadButton
                endpoint="imageUploader" // Must match the backend router key
                url="http://localhost:5000/api/uploadthing/uploadthing"
                onClientUploadComplete={(res) => {
                  if (res && res.length > 0) {
                    setFormData((prevData) => ({
                      ...prevData,
                      productFile: res[0].url, // Store uploaded file URL
                    }));
                    toast("Image uploaded successfully");
                  }
                }}
                onUploadError={(error) => {
                  console.error("Upload error:", error);
                  toast.error("Failed to upload image", error);
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    productFile: "Failed to upload image",
                  }));
                }}
              />

              {formData.productFile && (
                <p className="text-green-500 text-sm mt-1">
                  Image uploaded successfully
                </p>
              )}
              {errors.productFile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.productFile}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={errors.description ? "border-red-500" : ""}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                className={errors.price ? "border-red-500" : ""}
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price}</p>
              )}
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                onValueChange={handleCategoryChange}
                value={formData.category || ""}
              >
                <SelectTrigger
                  className={errors.category ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                  <SelectItem value="toys">Toys & Games</SelectItem>
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>

            <div>
              <Label htmlFor="inventory">Inventory</Label>
              <Input
                id="inventory"
                name="inventory"
                type="number"
                value={formData.inventory}
                onChange={handleChange}
                className={errors.inventory ? "border-red-500" : ""}
              />
              {errors.inventory && (
                <p className="text-red-500 text-sm mt-1">{errors.inventory}</p>
              )}
            </div>

            {errors.submit && (
              <p className="text-red-500 text-sm mt-1">{errors.submit}</p>
            )}

            <Button type="submit" className="w-full">
              Add Product
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
