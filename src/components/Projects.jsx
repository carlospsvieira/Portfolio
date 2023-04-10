import React from "react";
import guitarsThumb from "../assets/guitars-thumb.png";
import coffeeThumb from "../assets/coffee-thumb.png";
import EverBloggery from "../assets/everbloggery-thumb.png";
import management from "../assets/storage-sales-management.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
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
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiPhp,
} from "react-icons/si";

function Projects() {
  return (
    <section
      id="projects"
      className="h-screen flex flex-col items-center justify-center bg-zinc-500"
    >
      <div className="flex flex-col items-center text-white w-[80%]">
        <h1 className="project-heading">Selected Projects</h1>
        <div className="flex gap-2 text-3xl mt-4 stacks">
          <SiJavascript />
          <SiReact />
          <SiCss3 />
          <SiHtml5 />
          <SiNextdotjs />
          <SiNodedotjs />
          <SiExpress />
          <SiMysql />
          <SiDocker />
          <SiGit />
          <SiPhp size={40}/>
        </div>
        <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
          <div className="mt-[5rem] grid grid-cols-1 gap-4 md:grid-cols-2 projects-grid">
            <a
              href="https://carlospsvieira.github.io/guitar-shop/"
              target="_blank"
            >
              <div className="project-container">
                <img src={guitarsThumb} alt="" className="image" />
                <div className="project-description">
                  <h2>Guitar Shop</h2>
                  <p>
                    E-commerce w/ more than 20 guitars. Login is available and
                    auth is dealt client-side.
                  </p>
                  <div className="flex justify-center text-xl gap-1 mt-2">
                    <SiReact />
                    <SiCss3 />
                    <SiTailwindcss />
                  </div>
                </div>
              </div>
            </a>
            <a href="https://github.com/carlospsvieira/storage-and-sales-management" target="_blank">
              <div className="project-container">
                <img src={management} alt="" className="image" />
                <div className="project-description">
                  <h2>Storage & Sales Management</h2>
                  <p>
                    Express.js backend that manages products in storage and
                    sales connected with a SQL database inside a Docker network.
                  </p>
                  <div className="flex justify-center text-xl gap-1 mt-2">
                    <SiExpress />
                    <SiMysql />
                    <SiDocker />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://carlospsvieira.github.io/coffee-house/"
              target="_blank"
            >
              <div className="project-container">
                <img src={coffeeThumb} alt="" className="image" />
                <div className="project-description">
                  <h2>Coffee House</h2>
                  <p>Landing page for a coffee shop with a booking system.</p>
                  <div className="flex justify-center text-xl gap-1 mt-2">
                    <SiJavascript />
                    <SiReact />
                    <SiCss3 />
                  </div>
                </div>
              </div>
            </a>
            <a href="https://everbloggery.vercel.app/" target="_blank">
              <div className="project-container">
                <img src={EverBloggery} alt="" className="image last-image" />
                <div className="project-description">
                  <h2>EverBloggery</h2>
                  <p>
                    This is a full-stack microblog app built with Next.js and
                    has focus on backend. Google email is required.
                  </p>
                  <div className="flex justify-center text-xl gap-1 mt-2">
                    <SiNextdotjs />
                    <SiFirebase />
                    <SiTailwindcss />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default Projects;
