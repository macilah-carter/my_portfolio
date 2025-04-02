import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a mailto link with pre-filled details
    const mailtoLink = `mailto:museemacilah@gmail.com?subject=Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${
      formData.email
    }`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-blue-600" />
            <a
              href="mailto:your-email@example.com"
              className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-600"
            >
              museemacilah@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="text-2xl text-green-600" />
            <p className="text-lg text-gray-800 dark:text-gray-200">
              +254 740559351
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-2xl text-red-600" />
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-900 dark:border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-900 dark:border-gray-600"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-900 dark:border-gray-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
