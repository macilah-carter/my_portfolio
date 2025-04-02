import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  // {
  //   title: "M-Pesa Payment Integration",
  //   description: "Implemented Safaricom Daraja API for seamless mobile payments.",
  //   tech: ["Node.js", "Express.js", "mongoDB"],
  //   image: `${process.env.PUBLIC_URL}/home.jpg`,
  //   liveLink: "https://mpesa-integration.com",
  //   githubLink: "https://github.com/macilah-carter/BlogPost_API",
  // },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce website with authentication, cart, and payment integration.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: `${process.env.PUBLIC_URL}/eccomerce.png`,
    liveLink: "https://school-bygekh4ks-carters-projects-eff7d606.vercel.app/",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "School Endpoint Management System",
    description: "A school management system with user authentication and role-based access.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    image: `${process.env.PUBLIC_URL}/school.webp.png`,
    liveLink: "https://estate-management.com",
    githubLink: "https://github.com/macilah-carter/school_api",
  },
  {
    title: "A blog Post API",
    description: "A RESTful API for managing blog posts, comments, and user authentication.",
    tech: ["Node.js", "Express.js", "mongoDB"],
    image: `${process.env.PUBLIC_URL}/blog.webp.png`,
    liveLink: "https://mpesa-integration.com",
    githubLink: "https://github.com/macilah-carter/BlogPost_API",
  },
  {
    title: "Portfolio Website",
    description: "A sleek and responsive personal portfolio showcasing projects and skills.",
    tech: ["React.js", "Tailwind CSS"],
    image: `${process.env.PUBLIC_URL}/home.jpg`,
    liveLink: "https://yourportfolio.com",
    githubLink: "https://github.com/yourusername/portfolio-website",
  },
];

function Works() {
  return (
    <div className="works bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          My Works
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons for Live Preview & GitHub */}
              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  <FaExternalLinkAlt /> View Live
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
