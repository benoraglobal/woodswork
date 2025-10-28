"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaTree } from "react-icons/fa";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center px-6"
        style={{ backgroundImage: "url('/bg-intro.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f9f6f1]/60 backdrop-blur-[1px]" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-2xl z-10"
        >
          <div className="flex justify-center mb-4 text-5xl text-primary">
            <FaTree />
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Wood’s Craft & Furniture
          </h1>

          <p className="text-lg sm:text-xl text-gray-dark/90 leading-relaxed mb-8">
            Handcrafted wooden furniture, built with precision, passion, and your
            perspective. Bringing warmth and authenticity into every space.
          </p>

          <div className="flex justify-center">
            <button
              onClick={scrollToServices}
              className="bg-primary text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-primary-hover transition-all shadow-md cursor-pointer"
            >
              Explore Collection
            </button>
          </div>
        </motion.div>

        <footer className="absolute bottom-4 text-sm text-gray-dark/70 z-10">
          © {new Date().getFullYear()} Wood’s Craft — All Rights Reserved
        </footer>
      </main>

      {/* Services Section */}
      <section ref={servicesRef} className="w-full py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Custom Wood Decor & Art</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/center-table.jpeg"
              alt="Rustic Coffee Table"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Rustic Coffee Table</h3>
              <p className="text-gray-700 text-sm">
                Handcrafted wooden coffee table bringing warmth and charm to your living room.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/cutting-board.jpeg"
              alt="Wooden Cutting Board"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cutting Board</h3>
              <p className="text-gray-700 text-sm">
                Premium wooden cutting boards, perfect for chopping and serving with elegance.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/whiskey-holder.jpeg"
              alt="Whiskey Holder"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Whiskey & Wine Caddy's</h3>
              <p className="text-gray-700 text-sm">
                Stylish wooden whiskey holder to showcase your favorite bottles in style.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
