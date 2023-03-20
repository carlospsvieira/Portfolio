import React from "react";
import {
  SiJavascript,
  SiReact,
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiDocker,
  SiGit,
} from "react-icons/si";

function Projects() {
  return (
    <section
      id="projects"
      className="h-screen flex flex-col items-center justify-center bg-zinc-500"
    >
      <div className="flex flex-col items-center text-white w-[80%]">
        <h1 className="project-heading">Selected Projects</h1>
        <div className="flex gap-2 text-3xl mt-4">
          <SiJavascript />
          <SiReact />
          <SiCss3 />
          <SiHtml5 />
          <SiNextdotjs />
          <SiExpress />
          <SiMysql />
          <SiDocker />
          <SiGit />
        </div>
        <div className="mt-[5rem] grid grid-cols-1 md:grid-cols-2">
          <div>
            <span>Guitar Shop</span>
            <span>Technologies</span>
          </div>
          <div>
            <span>Coffee House</span>
            <span>Technologies</span>
          </div>
          <div>
            <span>MedInfo</span>
            <span>Technologies</span>
          </div>
          <div>
            <span>EverBloggery</span>
            <span>Technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
