import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import heroBg from "../images/hero-bg-image.jpg";
import CV from "../assets/Okeoghene's CV.pdf";

const Hero = () => {
  const [output, setOutput] = useState({
    text: "",
    length: 0,
    borderR: true,
    speed: 100,
    textNumber: true,
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOutput((prevOutput) => {
        const subHdeader = prevOutput.textNumber
          ? "I'm a frontend web-developer"
          : "I design and build user interfaces.";
        return {
          text:
            prevOutput.length >= subHdeader.length + 10
              ? prevOutput.text.slice(0, -1)
              : prevOutput.length === subHdeader.length
              ? prevOutput.text
              : prevOutput.text + subHdeader.charAt(prevOutput.length),
          length:
            prevOutput.length === 2 * subHdeader.length + 10
              ? 0
              : prevOutput.length + 1,
          borderR:
            prevOutput.length >= subHdeader.length &&
            prevOutput.length < subHdeader.length + 10
              ? !prevOutput.borderR
              : true,
          speed:
            prevOutput.length >= subHdeader.length &&
            prevOutput.length < subHdeader.length + 10
              ? 500
              : 100,
          textNumber:
            prevOutput.length === 2 * subHdeader.length + 10
              ? !prevOutput.textNumber
              : prevOutput.textNumber,
        };
      });
    }, output.speed);
    return () => clearTimeout(timeOut);
  });

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
          // ref={headingRef}
          className={`text-xl md:text-2xl lg:text-4xl p-1 text-center min-h-[1.8rem] md:min-h-[2.2rem] lg:min-h-[2.8rem] ${
            output.borderR ? "lg:border-r-4 border-r-2" : "border-none"
          } border-gray-200`}
        >
          {output.text}
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
