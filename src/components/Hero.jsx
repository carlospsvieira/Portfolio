import React from "react";

function Hero() {
  return (
    <>
      <h1 className="heading-name">Carlos Vieira</h1>
      <div className="w-[80%] h-screen border-x-[2px] border-t-[2px] border-zinc-600 hero">
        <div className="flex flex-col items-center text-white gap-4">
          <h2 className="heading-title">WEB DEVELOPER</h2>
          <span>Glad you're here!</span>
          <p>
            Welcome to my portfolio! I am a skilled and dedicated developer with
            a passion for creating visually stunning and functional
            applications. Explore my portfolio, which is one of my projects, to
            see examples of my work and learn more about my experience and
            skills.
          </p>
          <a href="history" className="bg-red-500 py-2 px-4">
            MY STORY
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
