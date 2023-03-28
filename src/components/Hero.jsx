import React from "react";

function Hero() {
  return (
    <>
      <h1 className="heading-name">Carlos Vieira</h1>
      <div className="w-[80%] h-screen border-x-[2px] border-t-[2px] border-zinc-600 hero">
        <div className="flex flex-col items-center text-white gap-4">
          <h2 className="heading-title">WEB DEVELOPER</h2>
          <span>Glad you're here!</span>
          <p className="introduction">
            Welcome to my portfolio! I'm a skilled and dedicated developer with
            a passion for creating visually stunning and functional
            applications. I'm ready to bring my drive to a team that values
            innovation and problem-solving. Explore my portfolio, which is one
            of my projects, to see examples of my work and learn more about my
            experience and skills.
          </p>
          <a href="#story" className="bg-red-600 py-2 px-4 text-xl">
            MY STORY
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
