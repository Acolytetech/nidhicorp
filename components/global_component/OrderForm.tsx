"use client";

import { useState } from "react";
import { toast } from "sonner"; // Import Sonner
import emailjs from "emailjs-com";


interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderForm({ isOpen, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    item: "",
    quantity: 1,
  });

  const [errors, setErrors] = useState({
    name: "",
    contact: "",
    email: "",
  });

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = { name: "", contact: "", email: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  // ✅ Send Email using EmailJS
  emailjs
    .send(
      "your_service_id", // EmailJS Service ID
      "your_template_id", // EmailJS Template ID
      {
        name: formData.name,
        contact: formData.contact,
        email: formData.email,
        item: formData.item,
        quantity: formData.quantity,
      },
      "your_public_key" // EmailJS Public Key
    )
    .then(
      () => {
        // ✅ WhatsApp message
        const whatsappNumber = "919876543210"; // <- yahan apna WhatsApp number dalna hai
        const message = `🛒 New Order Received!\n\n👤 Name: ${formData.name}\n📞 Contact: ${formData.contact}\n✉️ Email: ${formData.email}\n🍴 Item: ${formData.item}\n🔢 Quantity: ${formData.quantity}`;

        // User ke phone me WhatsApp open hoga
        window.open(
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
          "_blank"
        );

        toast.success("Order placed successfully!");
        setFormData({
          name: "",
          contact: "",
          email: "",
          item: "",
          quantity: 1,
        });
        setErrors({ name: "", contact: "", email: "" });

        setTimeout(() => {
          onClose();
        }, 1500);
      },
      () => {
        toast.error("Failed to send email. Try again!");
      }
    );
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative animate-fadeIn">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-black">
          Place Your Order
        </h2>
        <h6 className="text-sm font-bold text-center mb-4 text-black capitalize">
          welcome to nidhi corp
        </h6>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name*"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500 focus:ring-red-400" : "focus:ring-yellow-400"
              }`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Contact */}
          <div>
            <input
              type="tel"
              placeholder="Contact Number*"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.contact ? "border-red-500 focus:ring-red-400" : "focus:ring-yellow-400"
              }`}
            />
            {errors.contact && (
              <p className="text-sm text-red-500 mt-1">{errors.contact}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-yellow-400"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Item */}
          <select
            value={formData.item}
            onChange={(e) => setFormData({ ...formData, item: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select Item</option>
            <option value="kaji-vada">Kaji Vada</option>
            <option value="dahi-vada">Dahi Vada</option>
          </select>

          {/* Quantity */}
          <input
            type="number"
            placeholder="Quantity"
            min={1}
            value={formData.quantity}
            onChange={(e) =>
              setFormData({ ...formData, quantity: Number(e.target.value) })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-500 font-bold text-white py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Submit Order
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
