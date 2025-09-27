"use client";
import sendWhatsApp from "@/utils/sendwhatsapp";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contactus() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendWhatsApp(formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start mt-10 px-4 py-8">
      {/* Left Side Form */}

       <div className="w-full rounded-4xl overflow-hidden">
        <Image
          src="/img/Dahi-Vada2.jpg" // 👈 replace with your image path
          alt="Restaurant"
width={70}
height={70}          className="w-full h-full object-cover object-center rounded-md shadow-md"
        />
        {/* <Hero/> */}
      </div>
   

      {/* Right Side Image */}
        <div>
        <h2 className="text-3xl font-bold mb-6 font-[cursive] text-yellow-500">
Get in touch        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border rounded-md px-4 py-2"
          />

          <button
            type="submit"
            className="bg-black hover:bg-yellow-500 text-white font-bold px-6 py-2 rounded-full"
          >
Submit          </button>
        </form>
      </div>
    </div>
  );
}
