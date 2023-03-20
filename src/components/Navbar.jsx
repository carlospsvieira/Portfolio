import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Navbar() {
  return (
    <nav className="flex justify-between text-white text-xl py-6 w-[75%] sticky top-0">
      <div className="flex items-center gap-8">
        <a href="" className="bg-red-500 py-2 px-4">
          HOME
        </a>
        <a href="story">MY STORY</a>
        <a href="projects">PROJECTS</a>
        <a href="contact">CONTACT</a>
      </div>
      <div className="flex items-center gap-8">
        <a href="https://www.linkedin.com/in/carlospsvieira/" target="_blank">
          {" "}
          <SiLinkedin size={35} />{" "}
        </a>
        <a href="https://github.com/carlospsvieira" className="github" target="_blank">
          {" "}
          <SiGithub size={35} />{" "}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
