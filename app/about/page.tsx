// app/about/page.js  (or pages/about.js if using pages directory)
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductComparison from "@/components/home/ProductComparison";
import AboutSection from "@/components/home/AboutSection";

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero / Banner */}
      <section className="relative bg-yellow-50 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center my-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to our restaurant! We specialize in authentic Kanji Vada and
            Dahi Vada, prepared with love and traditional recipes, delivering
            flavors straight from the heart of our kitchen.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
    <AboutSection/>
      <ProductComparison />

      {/* Optional Call-to-Action Section */}
      <section className="bg-yellow-50 py-16 text-center">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Taste the Authentic Flavors Today!
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 hover:bg-black text-white font-semibold py-3 px-8 rounded-md transition duration-300"
        >
          Order Now
        </motion.button>
      </section>
    </main>
  );
}
