import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-500 py-8 text-white w-full">
      <div className="container mx-auto max-w-[1280px]">
        <div className="flex items-center justify-around gap-3 flex-col sm:flex-row">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-xl font-semibold mb-2">Legal</h2>
            <ul className="text-base flex items-center justify-center flex-col">
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 pr-4">
            <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
            <ul className="text-base flex items-center md:justify-evenly justify-center gap-3">
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
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>Email: </p> <p>contact@nepalhostels.com</p>
            <p>Phone: +977-456-7890</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
