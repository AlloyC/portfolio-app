import React, { useRef, useState } from "react";
import Navigation from "./Navigation";
import heroBg from "../images/hero-bg-image.jpg";
import CV from "../images/portfolio_design.jpg";

const Hero = () => {
  const headingRef = useRef();
  const [subHdeader, setSubHeader] = useState("I'm a frontend web-developer");
  const blinker = () => {
    setTimeout(() => {
      subHdeader === "I'm a frontend web-developer"
        ? setSubHeader("I'm a frontend web-developer|")
        : setSubHeader("I'm a frontend web-developer");
    }, 1000);
    return subHdeader;
  };

  return (
    <header
      id="home"
      className="relative bg-no-repeat bg-cover w-screen m-0 p-0 h-screen"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }}
    >
      <Navigation />
      <div className="font-['open sans'] text-gray-50 font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center flex-col container">
        <h1 className="text-xl leading-5 md:text-2xl lg:text-4xl p-1 text-center">
          Hi, I'm Okeoghene..
        </h1>
        <h2
          ref={headingRef}
          className="text-xl md:text-2xl lg:text-4xl p-1 text-center"
        >
          {blinker()}
        </h2>
        <a
          href={CV}
          download="Okeoghene_CV"
          className="mt-5 lg:mt-10 rounded-3xl border-white border-solid border-2 bg-blue-400 lg:py-1 px-2 text-sm lg:px-4"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Hero;
