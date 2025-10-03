"use client";

import Image from "next/image";
import { sendWhatsAppOrder } from "@/utils/whatsapp";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

type OfferItem = {
  name: string;
  discount: string;
  img: string;
};

export default function Offers() {

  const offers: OfferItem[] = [
    { name: "Kanji Vada", discount: "60", img: "/img/kanjivada1.png" },
    { name: "Dahi Vada", discount: "60", img: "/img/dahivada.png" },
  ];

  return (
    <section className="py-16 max-w-6xl overflow-hidden mx-auto   bg-white relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-1 sm:px-0">
        {offers.map((offer, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-[#1E2430] text-white rounded-lg flex items-center p-6 gap-6 shadow-lg "
          >
            {/* Image */}
            <div className="relative p-14 w-30 h-36 sm:w-46  sm:h-56 flex-shrink-0 flex-1 overflow-hidden rounded-lg  ">
              <Image
                src={offer.img}
                alt={offer.name}
                fill
                className="object-cover rounded-lg hover:scale-105 duration-300 "
              />
            </div>

            {/* Details */}
            <div>
              <h3 className="font-cursive text-xl font-bold mb-2">
                {offer.name}
              </h3>
              <p className="text-3xl font-bold mb-4">
                {offer.discount}Rs
                <span className="text-lg font-normal italic">/1pcs</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  sendWhatsAppOrder(offer.name,`${offer.discount}RS`)
                }
                className="bg-yellow-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 group duration-300"
              >
                Order Now <FaWhatsapp  size={32} className="text-green-600 group-hover:text-white " />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
