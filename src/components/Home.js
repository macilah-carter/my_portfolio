import React from "react";
import About from "./About";
import Works from "./Works";
import Services from "./Services";
import Contact from "./Contacts";

function Home() {
  return (
    <>
      <div id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 bg-gray-100 dark:bg-gray-900">
        {/* Left Section (Text) */}
        <div className="flex flex-col justify-center items-start md:w-1/2 text-gray-900 dark:text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, <span className="text-blue-600 dark:text-blue-400">I'm Carter Musee</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a full stack developer with a passion for creating dynamic and
            responsive web applications. I have experience in both front-end and
            back-end development, and I'm always eager to learn new technologies
            and improve my skills.
          </p>
          <a href="/files/carterCv.pdf" download>
            <button className="mt-4 mb-3 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-lg transition">
              Download CV
            </button>
          </a>
        </div>

        {/* Right Section (Image) */}
        <div className="imageDiv md:w-1/2 flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/home.png`}
            alt="Carter Musee"
            className="image w-full md:mt-6 md:w-3/4 lg:w-2/3 rounded-2xl shadow-lg"
          />
        </div>
      </div>
      <About />
      <Services />
      <Works  />
      <Contact  />
    </>
  );
}

export default Home;
