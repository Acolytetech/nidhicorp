// components/AboutSection.js
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-8 sm:py-20 bg-white">
      <div className="max-w-6xl  mx-auto sm:px-4 grid grid-cols-1 lg:grid-cols-2  gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 bg-gradient-to-br from-yellow-500 via-yellow-200 to-white p-8 rounded-4xl">
          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-2">
            Welcome to Nidhi Corp
          </h2>
          <p className="text-gray-600">
            Nidhi Corp specializes in providing high-quality, ready-to-eat Curd
            Vada (Dahi Vada), Kanji Vada that is packed with protein and
            preserved using advanced packaging technology. Our product offers
            convenience, freshness, and hygiene, meeting the growing demand for
            nutritious, ready-to-consume snacks.
          </p>
          <p className="text-gray-600">
            We take pride in our culinary expertise, blending fresh ingredients
            with innovative cooking techniques to delight your senses.
          </p>

          {/* Stats */}
          <div className="flex flex-row gap-4 mt-6 ">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-orange-500">15+</span>
              <div>
                <p className="text-gray-900 font-semibold">Years of</p>
                <p className="text-gray-600 uppercase font-bold text-sm">
                  Experience
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-orange-500">50+</span>
              <div>
                <p className="text-gray-900 font-semibold">Location</p>
                <p className="text-gray-600 uppercase font-bold text-sm">
                  Master Chefs
                </p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=> {window.open('/about','_self');}}
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Read More
          </motion.button>
        </div>
        {/* Images Grid */}
        <div className="grid grid-cols-2 px-2 gap-4 relative">
          <motion.div
            className="overflow-hidden h-fit rounded-lg shadow-lg mt-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/img/kanjivdda1.jpeg"
              alt="Restaurant Interior 1"
              width={500}
              height={400}
              className="w-full h-49 rounded-lg object-cover object-center"
            />
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-lg shadow-lg mt-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/img/3pcs dahi vadda.jpg"
              alt="Restaurant Interior 2"
              width={500}
              height={400}
              className="w-full h-60 object-cover"
            />
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-lg shadow-lg -mt-8 z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/img/single dahi vada.jpeg"
              alt="Dish 1"
              width={500}
              height={400}
              className="w-full h-60 object-cover"
            />
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-lg shadow-lg mt-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/img/kanjivada1.png"
              alt="Dish 2"
              width={500}
              height={400}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
