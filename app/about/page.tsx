// app/about/page.js  (or pages/about.js if using pages directory)
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductComparison from "@/components/home/ProductComparison";

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
            Welcome to our restaurant! We specialize in authentic Kanji Vada and Dahi Vada, prepared with love and traditional recipes, delivering flavors straight from the heart of our kitchen.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/img/3pcs dahi vadda.jpg"
                alt="Dahi Vada"
                width={500}
                height={400}
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg mt-8">
              <Image
                src="/img/kanjivdda1.jpeg"
                alt="Kanji Vada"
                width={500}
                height={400}
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg -mt-8">
              <Image
                src="/img/single dahi vada.jpeg"
                alt="Single Dahi Vada"
                width={500}
                height={400}
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg mt-4">
              <Image
                src="/img/1.png"
                alt="Kanji Vada Dish"
                width={500}
                height={400}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-orange-500 font-semibold uppercase tracking-wider">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-2">
              Welcome to <span>🍴 Nidhi Corp</span>
            </h2>
            <p className="text-gray-600">
              We bring you the authentic flavors of Kanji Vada and Dahi Vada, freshly prepared using traditional recipes and high-quality ingredients. Every bite is a celebration of taste and culture.
            </p>
            <p className="text-gray-600">
              Our team of expert chefs is passionate about delivering a delightful dining experience. From classic Kanji Vada to creamy Dahi Vada, every dish is made with care and dedication.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-orange-500">15+</span>
                <div>
                  <p className="text-gray-900 font-semibold">Years of</p>
                  <p className="text-gray-600 uppercase font-bold text-sm">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-orange-500">50+</span>
                <div>
                  <p className="text-gray-900 font-semibold">Location</p>
                  <p className="text-gray-600 uppercase font-bold text-sm">Master Chefs</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
Order Now            </motion.button>
          </div>
        </div>
      </section>

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
      <ProductComparison/>
    </main>
  );
}
