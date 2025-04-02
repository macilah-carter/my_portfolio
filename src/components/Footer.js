import React from "react";
import {  FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* White Line Above Footer */}
      <hr className="border-gray-700 my-6" />

      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="max-w-6xl mx-auto px-6">
          {/* Flex container for Copyright & Social Media */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright Section (Left) */}
            <div className="text-gray-400">
              &copy; {new Date().getFullYear()} Carter Musee. All rights reserved.
            </div>

            {/* Social Media (Right) */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://github.com/macilah-carter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition">
                <FaGithub />
              </a>
              <a href="http://www.linkedin.com/in/musee-macilah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-2xl transition">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-2xl transition">
                <FaTwitter />
              </a>
              {/* <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-2xl transition">
                <FaFacebook />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
