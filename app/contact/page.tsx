// app/contact/page.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.phone) {
    toast.error("Please fill all required fields.");
    return;
  }

  const whatsappNumber = "9269965604";

  const whatsappMessage = `*Contactus Form Submission*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message || "N/A"}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");
  toast.success("Opening WhatsApp...");

  setFormData({ name: "", email: "", phone: "", message: "" });
};
  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="bg-yellow-50 py-20 px-6 md:px-12 lg:px-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Have a question or want to place an order? Fill out the form below or
          reach us through our contact details.
        </motion.p>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 w-full"
            >
              Send on WhatsApp
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Contact Info
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="font-semibold">Address:</p>
              <p>
                71A, Street 2, First Block, Setia Colony, Sriganganagar,
                Rajasthan
              </p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>9269-965-604</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>nidhicorp27@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Optional Map Section */}
      <section className="w-full h-96">
        <iframe
          src="https://maps.google.com/maps?q=Sriganganagar,Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          title="Restaurant Location"
        ></iframe>
      </section>
    </main>
  );
}
