import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-500 py-8 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-1 lg:col-span-1 border-r border-white">
            <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
            <ul className="text-base">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Hostels</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-1 border-r border-white">
            <h2 className="text-xl font-semibold mb-2">Legal</h2>
            <ul className="text-base">
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-1 border-r border-white">
            <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
            <ul className="text-base flex items-center justify-evenly">
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>Email: contact@nepalhostels.com</p>
            <p>Phone: +977-456-7890</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Hostel Booking. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
