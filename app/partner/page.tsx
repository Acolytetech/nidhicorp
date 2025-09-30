"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Users, Handshake, TrendingUp } from "lucide-react"; 
import Image from "next/image";

export default function Partner() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.contact) {
      toast.error("Please fill all required fields.");
      return;
    }

    const whatsappNumber = "9269965604";

    // ✅ Message बनाओ
    const whatsappMessage = `*New Partner Request* 🚀
Name: ${formData.name}
Company: ${formData.company || "N/A"}
Email: ${formData.email}
Contact: ${formData.contact}
Message: ${formData.message || "N/A"}`;

    // ✅ Encode & redirect
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
    toast.success("Opening WhatsApp...");

    setFormData({
      name: "",
      company: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      {/* Hero Section */}
      <section
        className="relative text-center py-50 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
        style={{
          backgroundImage: "url('/img/1.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Become a Partner
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Collaborate with <span className="font-semibold">Nidhi Corp</span> and
            grow your business with us 🚀
          </p>
        </div>
      </section>

      {/* Partner Form Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-2">
            Partner With Us
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Fill in your details and join hands with Nidhi Corp 
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="tel"
              placeholder="Contact Number *"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              placeholder="Message (Optional)"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 rounded-md hover:bg-green-600 transition"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <Image
            src="/img/partnerimg.png"
            alt="Partner image"
            width={600}
            height={600}
            className="rounded-2xl shadow-md object-cover w-full max-w-lg"
          />
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Partner With Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Users className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expand Your Network</h3>
            <p className="text-gray-600">
              Connect with a strong community of partners and clients to open new opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Handshake className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Build Lasting Partnerships</h3>
            <p className="text-gray-600">
              Collaborate with us for trusted, long-term, and profitable relationships.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <TrendingUp className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scale Up Strategy</h3>
            <p className="text-gray-600">
              Invest in machinery and automation to scale production and meet growing demand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
