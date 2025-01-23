import React from "react";
import { Phone, ShoppingCart, Clock } from "lucide-react";
import Image from "next/image";

const DashLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 bg-red-600 text-white">
        <div className="text-2xl font-bold">Dash</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-purple-200">
            Home
          </a>
          <a href="#" className="hover:text-purple-200">
            Services
          </a>
          <a href="#" className="hover:text-purple-200">
            Download
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="grid md:grid-cols-2 gap-8 p-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Get Anything, Anytime
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            From food to groceries, Dash delivers what you need in minutes.
          </p>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
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
            src= {null}
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
