"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import OrderForm from "./OrderForm";
import { BsWhatsapp } from "react-icons/bs";
import { sendWhatsAppOrdernavbar } from "@/utils/whatsapp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Become A partner", href: "/partner" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-bl from-yellow-500 via-yellow-200 to-white shadow-md fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/img/nidhi corp logo.png"
                alt="nidhi corp logo"
                width={160}
                height={50}
                className="object-contain cursor-pointer"
                onClick={()=>{window.open('/','_self')}}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-2 py-1 font-medium transition-colors duration-300 hover:text-red-600 ${
                    pathname === link.href
                      ? "text-red-600 before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-red-600"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                // onClick={() => setShowOrderForm(true)}
                 onClick={() =>sendWhatsAppOrdernavbar()}



                //   onClick={() =>
                //   sendWhatsAppOrder(phone, offer.name, offer.discount)
                // }
                                
                className="bg-white flex gap-2 text-green-600 font-bold px-4 py-2 rounded-full shadow-md hover:bg-green-600 hover:text-white transition-all duration-300"
              >
            Order Now <BsWhatsapp size={24}/>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-red-600 hover:text-red-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white overflow-hidden transition-max-height duration-500 ease-in-out ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-4 py-2 font-medium rounded-full transition-colors duration-300 hover:bg-red-700 ${
                pathname === link.href ? "bg-yellow-400 text-black" : "text-black"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              sendWhatsAppOrdernavbar();
              setIsOpen(false);
            }}
            className=" flex flex-row items-center gap-2 mx-4 mt-2 px-4 py-2 font-bold bg-green-500 text-white rounded hover:bg-gray-100 transition-all duration-300"
          >
            Order Now <BsWhatsapp size={24}/>
          </button>
        </div>
      </nav>

      {/* Popup Component */}
      <OrderForm isOpen={showOrderForm} onClose={() => setShowOrderForm(false)} />
    </>
  );
}
