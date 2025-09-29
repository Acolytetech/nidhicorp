// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import heroImage from "@/public/img/1.png";

// export default function Hero() {
//   return (
//     <section className="relative bg-gray-900 text-white py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
//       {/* Decorative Background Circle */}
//       <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>

//       <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
//         {/* Left Content */}
//         <motion.div
//           className="flex-1 text-center lg:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.h1
//             className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400"
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             Relish Authentic
//             <br /> Flavors!
//           </motion.h1>

//           <motion.p
//             className="text-gray-300 mb-8 max-w-md md:max-w-lg mx-auto lg:mx-0"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             Crispy Kanji Vada and creamy Dahi Vada, soaked in tangy kanji or
//             chilled yogurt, bursting with authentic flavors in every bite.
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md font-semibold shadow-lg"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.6, duration: 0.6 }}
//           >
//             Order Now
//           </motion.button>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           className="flex-1 flex justify-center lg:justify-end relative"
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           <Image
//             src={heroImage}
//             alt="Delicious Meal"
//             className="w-3/4 sm:w-2/3 md:w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-xl"
//             priority
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { MdGroupAdd } from "react-icons/md";

export default function Hero() {
  return (
    <section
      className="relative py-32 px-6 md:px-12 lg:px-20 text-white flex items-center justify-center"
      style={{
        backgroundImage: "url('/img/herobg3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-1"></div>

      <div className="text-center max-w-3xl z-2">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-6 bg-clip-text text-transparent bg-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Relish Authentic <br /> Flavors!
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-8 text-lg sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We aim to make Curd Vada (Dahi Vada), Kanji Vada easily accessible
          across India, focusing on distribution through railway stations, bus
          stops, local shopkeepers, and e-commerce platforms.
        </motion.p>
        <div className="flex flex-col sm:flex-row w-fit gap-4 justify-center mx-auto ">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md font-semibold shadow-lg capitalize"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.3 }}
            onClick={() => {
              window.open("/about" ,"_self");
            }}
          >
            Konw more
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-500  transition px-6 py-3 rounded-md font-semibold shadow-lg capitalize flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.3 }}
            onClick={() => {
              window.open("/partner");
            }}
          >
            Become A partner <MdGroupAdd size={24}/>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
