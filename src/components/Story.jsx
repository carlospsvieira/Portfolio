import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Story() {
  return (
    <section
      id="story"
      className="h-screen flex flex-col items-center bg-zinc-500"
    >
      <div className="w-[80%] h-screen border-x-[2px] border-b-[1px] border-zinc-600 story text-white">
        <h1 className="story-heading">My Story</h1>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
          <div className="story-container">
            <img
              src="https://images.pexels.com/photos/3813200/pexels-photo-3813200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={350}
              alt="canada"
            />
            <span>
              Moved from Brazil to Canada and worked in the telecom
              industry with mobile and home network sales, met some of the nicest people
              and technology was always around.
            </span>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
          <div className="story-container">
            <img
              src="https://images.pexels.com/photos/4623506/pexels-photo-4623506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={350}
              alt="school"
            />
            <span>
              After some years living abroad and covid forcing everyone to stay
              home, I saw an opportunity to be closer to my family back in Brazil and pursue education and a career in web
              development.
            </span>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
          <div className="story-container mb-[3rem]">
            <img
              src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              width={350}
              alt="working"
            />
            <span>
              Today I spend a considerable part of my routine writing code and I
              really love what I do, more so taking on new challenges
              whenever they come my way.
            </span>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default Story;
