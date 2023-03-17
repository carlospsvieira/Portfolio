import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between text-white text-xl py-6 w-[75%]">
      <div className="flex items-center gap-8">
        <a href="" className="bg-red-500 py-2 px-4">HOME</a>
        <a href="">MY STORY</a>
        <a href="">PROJECTS</a>
        <a href="">CONTACT</a>
      </div>
      <div className="flex items-center gap-8">
        <a href="">LINKEDIN</a>
        <a href="">GITHUB</a>
      </div>
    </nav>
  );
}

export default Navbar;
