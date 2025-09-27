// components/WhyChooseNidhi.tsx
"use client";

import { FC } from "react";
import { FaLeaf, FaClock, FaShieldAlt, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <FaLeaf className="text-yellow-400 w-8 h-8" />,
    title: "Healthy & Natural",
    description: "Our products are made with fresh, natural ingredients that are healthy and protein-rich.",
  },
  {
    icon: <FaClock className="text-yellow-400 w-8 h-8" />,
    title: "Quick & Convenient",
    description: "Ready-to-eat meals and snacks that save your time without compromising on taste.",
  },
  {
    icon: <FaShieldAlt className="text-yellow-400 w-8 h-8" />,
    title: "Hygienic Packaging",
    description: "All products are packaged in hygienic, long-lasting packaging for maximum safety.",
  },
  {
    icon: <FaSmile className="text-yellow-400 w-8 h-8" />,
    title: "Customer Satisfaction",
    description: "Our top priority is delivering delicious food that keeps customers happy and coming back.",
  },
];

const WhyChooseNidhi: FC = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-12 lg:px-20 text-white "
      style={{
        backgroundImage: "url('/img/1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        
      }}
    >
      {/* Dark overlay */}
  {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 "></div>
      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold text-yellow-400">Why Choose Nidhi Corp?</h2>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
          Discover what makes our ready-to-eat meals and snacks stand out in quality, taste, and convenience.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900/70 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">{reason.title}</h3>
            <p className="text-gray-300 text-sm">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseNidhi;
