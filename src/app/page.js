"use client";

import React from "react";
import { Phone, ShoppingCart, Clock } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";



const logout = async () => {

  try {
    const response = await fetch("http://localhost:5000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({
      //   username: formData.username,
      //   password: formData.password,
      // }),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Logout failed");
    }

    console.log("Logout successful frontend:", data);

    // console.log("This is the token", data.token)

    localStorage.removeItem("token");
    set

    router.push("/"); // Redirect user after successful login
  } catch (error) {
    setApiError(error.message);
  }
};
const DashLandingPage = () => {
  const { userData } = useContext(AppContext);
  const landingPageButtons = [
    { text: "Home", link: "#" },
    { text: "Services", link: "#" },
    { text: "Download", link: "#" },
    { text: "Order Now", link: "http://localhost:3000/orderNowPage" },
    { text: "Learn More", link: "#" },
    { text: "Sign Up", link: "http://localhost:3000/signUp" },
    { text: "Logout", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 bg-red-600 text-white">
        <div className="text-2xl font-bold">Dash</div>
        <div className="space-x-4">
          {landingPageButtons.map((button) => (
            <a
              key={button.text}
              href={button.link}
              className="hover:text-purple-200"
            >
              {button.text}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="grid md:grid-cols-2 gap-8 p-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            {userData !== undefined
              ? `Hey ${userData.user.username} Get Anything, Anytime`
              : " Get Anything, Anytime"}
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            From food to groceries, Dash delivers what you need in minutes.
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
              href="http://localhost:3000/orderNowPage"
            >
              Order Now
            </button>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            // will change baadaye after getting proper images
            src={null}
            alt="Dash App"
            className="max-w-full rounded-lg shadow-xl"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-gray-100 p-12 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-8">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Phone className="mx-auto text-red-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Easy Order</h3>
            <p>Simple, intuitive app interface</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ShoppingCart className="mx-auto text-purple-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p>Order from hundreds of restaurants</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="mx-auto text-red-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>Get your order in minutes</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white p-6 text-center">
        <p>© 2025 Dash App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default DashLandingPage;
