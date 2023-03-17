import React from "react";

function Hero() {
  return (
    <>
      <h1 className="heading-name">Carlos Vieira</h1>
      <div className="w-[80%] h-screen border-x-[2px] border-t-[2px] border-zinc-600 rounded-md hero">
        <div className="flex flex-col items-center text-white">
          <h2 className="heading-title">Web Developer</h2>
          <span>something here</span>
          <p>a text goes here a little longer but not much.</p>
          <a href="#history">My Journey</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
