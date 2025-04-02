import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold dark:text-white">
            Carter Musee
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900">
            {[
              { path: "/", name: "Home" },
              { path: "/about", name: "About" },
              { path: "/works", name: "Projects" },
              { path: "/services", name: "Services" },
              { path: "/contact", name: "Contacts" },
              

            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 px-3 rounded-md md:p-0 ${
                    location.pathname === link.path
                      ? "text-blue-700 dark:text-blue-400 font-semibold"
                      : "text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
