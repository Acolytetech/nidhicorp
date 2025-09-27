// components/Footer.js
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-3">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* Company Section */}
        <div className='mx-auto'>
          <h2 className="text-2xl font-bold mb-4">Nidhi Corp</h2>
   <ul className="space-y-2">
            <li>Jaipur Rajasthan</li>
            <li>+91 9269-965-604</li>
            <li>nidhicorp27@gmail.com</li>
          </ul>        </div>

        {/* Contact Section */}
        <div className='flex flex-col mx-auto text-left justify-end'>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className='flex flex-col space-y-2'>

           <Link href="#" className="hover:text-white">Home</Link>
           <Link href="#" className="hover:text-white">Services</Link>
          <Link href="#" className="hover:text-white">About</Link>
          <Link href="#" className="hover:text-white">contacts</Link>
          </div>
          
        </div>

        {/* Opening Hours */}
        <div className='mx-auto'>
          <h3 className="text-xl font-semibold mb-4">Opening</h3>
          <ul className="space-y-2">
            <li>Monday - Saturday: 09AM - 09PM</li>
            <li>Sunday: 10AM - 08PM</li>
          </ul>
        </div>

       
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-gray-400 text-sm text-center space-y-2">
        <p>© nidhicorp, All Right Reserved. </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:text-white">Cookies</Link>
          <Link href="#" className="hover:text-white">Help</Link>
          <Link href="#" className="hover:text-white">FQAs</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
