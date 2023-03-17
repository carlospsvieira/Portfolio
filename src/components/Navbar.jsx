import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Navbar() {
  return (
    <nav className="flex justify-between text-white text-xl py-6 w-[75%]">
      <div className="flex items-center gap-8">
        <a href="" className="bg-red-500 py-2 px-4">
          HOME
        </a>
        <a href="">MY STORY</a>
        <a href="">PROJECTS</a>
        <a href="">CONTACT</a>
      </div>
      <div className="flex items-center gap-8">
        <a href="">
          {" "}
          <SiLinkedin size={35} />{" "}
        </a>
        <a href="">
          {" "}
          <SiGithub size={35} />{" "}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
