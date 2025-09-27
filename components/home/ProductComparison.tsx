// components/ProductComparisonModern.tsx
"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface Product {
  name: string;
  priceMin: number;
  priceMax: number;
  focus: string;
  packaging: string;
  market: string;
  usp: string;
}

const products: Product[] = [
  { name: "Nidhi Corp Gits", priceMin: 50, priceMax: 50, focus: "Protein-rich snack", packaging: "Hygienic, long shelf-life", market: "Busy commuters", usp: "Protein-packed snack" },
  { name: "Food Products", priceMin: 40, priceMax: 100, focus: "Ready-to-eat meals", packaging: "Standard", market: "General consumers", usp: "Wide range of meals" },
  { name: "MTR Foods", priceMin: 50, priceMax: 150, focus: "Convenience foods", packaging: "Standard", market: "General consumers", usp: "Popular Indian meals" },
  { name: "Haldiram's", priceMin: 30, priceMax: 200, focus: "Snacks", packaging: "Standard", market: "Snack lovers", usp: "Famous for snacks" },
  { name: "Britannia", priceMin: 10, priceMax: 100, focus: "Baked goods", packaging: "Standard", market: "Families", usp: "Popular for baked goods" },
  { name: "ITC Master Chef", priceMin: 50, priceMax: 150, focus: "Ready-to-eat meals", packaging: "Standard", market: "Busy individuals", usp: "Premium ready meals" },
];

const ProductComparison: FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400">Product Comparison</h2>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
          Compare top ready-to-eat products with a sleek modern style.
        </p>
      </div>

      {/* Horizontal scrollable cards */}
      <div className="flex flex-wrap gap-6 overflow-x-auto  p-6">
        {products.map((p, idx) => {
          const pricePercent = ((p.priceMax - p.priceMin) / p.priceMax) * 100 || 100;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="min-w-[280px] bg-gray-900 rounded-2xl p-6 shadow-xl mx-auto border-l-4 border-yellow-400 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{p.name}</h3>
              <p className="text-gray-300 mb-1"><span className="font-semibold">Focus:</span> {p.focus}</p>
              <p className="text-gray-300 mb-1"><span className="font-semibold">Market:</span> {p.market}</p>
              <p className="text-gray-300 mb-1"><span className="font-semibold">USP:</span> {p.usp}</p>

              {/* Price bar visualization */}
              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-1">Price: ₹{p.priceMin} - ₹{p.priceMax}</p>
                <div className="w-full bg-gray-700 h-3 rounded-full">
                  <div
                    className="bg-yellow-400 h-3 rounded-full"
                    style={{ width: `${pricePercent}%` }}
                  ></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductComparison;
