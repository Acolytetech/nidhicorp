// components/Footer.js
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid gap-12 sm:grid-cols-2 md:grid-cols-3 text-center md:text-center">
        
        {/* Company Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Nidhi Corp</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Jaipur, Rajasthan</li>
            <li>+91 9269-965-604</li>
            <li>nidhicorp27@gmail.com</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-gray-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Mon - Sat: 09AM - 09PM</li>
            <li>Sunday: 10AM - 08PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-gray-400 text-sm text-center">
        <p>© {new Date().getFullYear()} Nidhi Corp, All Rights Reserved.</p>
        <div className="flex justify-center flex-wrap gap-4 mt-3">
          <Link href="#" className="hover:text-white">
            Cookies
          </Link>
          <Link href="#" className="hover:text-white">
            Help
          </Link>
          <Link href="#" className="hover:text-white">
            FAQs
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
