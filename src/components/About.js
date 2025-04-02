import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaServer,
} from "react-icons/fa";
import { SiDjango, SiFlask, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

function About() {
  const skills = [
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-700" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Express.js", icon: <FaServer className="text-gray-500" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "REST APIs", icon: <FaServer className="text-gray-600" /> },
  ];

  return (
    <div className="about bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={process.env.PUBLIC_URL + "/home.jpg"}
            alt="Carter Musee"
            className="w-72 md:w-96 rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - About Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <h2 className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            My Dedication to My Work
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Enthusiastic software engineer with hands-on experience in API
            integration and Full Stack development. Proficient in Python,
            JavaScript, and Node.js, with a passion for developing innovative
            solutions. Looking to contribute my skills to impactful projects.
          </p>

          {/* Experience & Projects Section */}
          <div className="flex justify-center md:justify-start gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                2+
              </p>
              <p className="text-gray-700 dark:text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                12+
              </p>
              <p className="text-gray-700 dark:text-gray-300">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Education
        </h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Bachelor's in Information Technology
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Murang'a University Of Technology| 2019 - 2023
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Specialized in full-stack development, database management, and
              software engineering principles.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Web Development Bootcamp
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Alx | 2023 - 2024
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Focused on modern web technologies, React.js, Node.js, and API
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
