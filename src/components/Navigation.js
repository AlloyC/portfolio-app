import { useState } from "react";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      <nav className="fixed backdrop-blur-sm w-full z-50 top-0 bg-gradient-to-b from-gray-950 to-transparent h-fit flex justify-between items-center text-gray-50 pt-4 pb-1 px-5 md:px-16">
        <h2 className="font-Myriad text-xl md:text-3xl rounded-[50%] border-gray-50 border-solid border-2 px-1 pb-1">
          A
        </h2>
        <div
          className="flex md:hidden h-3 flex-col justify-between"
          onClick={toggleMenu}
        >
          <div className="bg-gray-50 w-4 h-1/5"></div>
          <div className="bg-gray-50 w-4 h-1/5"></div>
          <div className="bg-gray-50 w-4 h-1/5"></div>
        </div>
        <ul
          className={`font-semibold hidden md:flex justify-start items-center gap-3`}
        >
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT ME</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#works">WORKS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <ul
        className={`font-semibold flex flex-col fixed w-full backdrop-blur-sm bg-zinc-600 bg-opacity-60 z-50 text-gray-200 top-[3.4rem] gap-3 animate-pulse transition-all duration-1000 h-fit ${
          show ? "left-0" : "-left-full"
        } md:hidden  py-5 justify-start items-center gap-3`}
      >
        <li>
          <a href="#home" className="scroll-smooth">
            HOME
          </a>
        </li>
        <li>
          <a href="#about" className="scroll-smooth">
            ABOUT ME
          </a>
        </li>
        <li>
          <a href="#skills" className="scroll-smooth">
            SKILLS
          </a>
        </li>
        <li>
          <a href="#works" className="scroll-smooth">
            WORKS
          </a>
        </li>
        <li>
          <a href="#contact" className="scroll-smooth">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
