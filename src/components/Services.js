import React from "react";
import { FaCode, FaServer, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

function Services() {
  return (
    <div id="services"  className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        My Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
          <FaCode className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Frontend Development
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Crafting beautiful and responsive user interfaces with React.js,
            Tailwind CSS, and modern frameworks.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
          <FaServer className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Backend Development
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Building scalable and secure backend systems using Node.js, Express,
            MongoDB, and MySQL.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
          <FaLaptopCode className="text-4xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Full Stack Development
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Developing complete web applications with seamless frontend-backend
            integration.
          </p>
        </div>

        {/* Service 4 */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
          <FaMobileAlt className="text-4xl text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Mobile-Responsive Design
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Creating mobile-friendly and highly responsive web applications for
            all devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
