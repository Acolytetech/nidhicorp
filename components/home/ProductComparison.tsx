// components/ProductComparisonTableResponsive.tsx
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
  {
    name: "Nidhi Corp Gits",
    priceMin: 60,
    priceMax: 60,
    focus: "Protein-rich snack",
    packaging: "Hygienic, long shelf-life",
    market: "Busy commuters, health conscious consumers",
    usp: "Protein-packed, ready-to-eat snack",
  },
  {
    name: "Other Brands",
    priceMin: 50,
    priceMax: 150,
    focus: "Ready-to-eat meals",
    packaging: "Standard",
    market: "General consumers",
    usp: "Wide range of meals",
  },
];

const ProductComparison: FC = () => {
  const headers = ["Feature", ...products.map((p) => p.name)];

  const rows = [
    { label: "Focus", key: "focus" },
    { label: "Packaging", key: "packaging" },
    { label: "Market", key: "market" },
    { label: "USP", key: "usp" },
    {
      label: "Price (₹) Range",
      key: "price",
      render: (p: Product) => `${p.priceMin} - ${p.priceMax}`,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">
          Product Comparison
        </h2>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
          Compare top ready-to-eat products in a clean, table-like format.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto"
      >
        <table className="min-w-full border-collapse border border-gray-700 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-900">
              {headers.map((h, idx) => (
                <th
                  key={idx}
                  className="px-4 sm:px-6 py-3 text-left text-yellow-400 font-semibold border-b border-gray-700 whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className="hover:bg-gray-800 transition-colors even:bg-gray-950"
              >
                <td className="px-4 sm:px-6 py-3 font-semibold text-gray-300 border-b border-gray-700 whitespace-nowrap">
                  {row.label}
                </td>
                {products.map((p, pIdx) => (
                  <td
                    key={pIdx}
                    className="px-4 sm:px-6 py-3 text-gray-300 border-b border-gray-700"
                  >
                    {row.render ? row.render(p) : p[row.key as keyof Product]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default ProductComparison;
