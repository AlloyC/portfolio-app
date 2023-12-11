import profilePics from "../images/IMG_2409.png";
import htmlLogo from "../images/html5-logo.png";
import gitLogo from "../images/git.png";
import githubLogo from "../images/github.png";
import javascriptLogo from "../images/javascript-logo.png";
import reactLogo from "../images/react-javascript.png";
import tailwindcssLogo from "../images/tailwindcss_logo.png";
import cssLogo from "../images/css-logo.png";

const About = () => {
  return (
    <section className="relative left-[50%] translate-x-[-50%] container md:max-w-6xl lg:items-center justify-items-center grid lg:gap-5 lg:grid-cols-2 lg:row-auto px-7 py-14 lg:px-20 grid-flow-row-dense">
      <div className="bd-profile container max-w-md">
        <img
          src={profilePics}
          alt="profile"
          className="z-30 relative container max-w-md"
        />
      </div>
      <section
        id="about"
        className="container flex flex-col self-start mt-10 items-center lg:max-w-md justify-center lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 row-auto"
      >
        <h2 className="text-blue-500 text-3xl font-semibold italic p-1 mb-5">
          About Me
        </h2>
        <p className="text-gray-100 indent-4">
          Here's some information about myself. I'm John Okeoghene, a web
          developer and student at fedral university of petroleum resources. I
          am presently pursuing a bachelor of engineering in electrical and
          electronics engineering, and I'm in fourth year of school. I am
          proficient in frontend web development technologies such as HTML, CSS,
          Javascript, React, Bootstrap, and Tailwind CSS. In addition, I have
          extensive experience of other technologies, such as git and github. My
          proficiency lies in comprehending and writing codes that are clean,
          effective, and reusable with minimal upkeep.
        </p>

        <div className="text-gray-50 self-start font-semibold mt-10 text-lg">
          <h3>Name: John Okeoghene</h3>
          <h3>Email: jonnyscience08@gmail.com</h3>
          <h3>Mobile: +2349053778947</h3>
        </div>
      </section>
      <section id="skills" className="flex flex-col mt-10 lg:mt-0 items-center">
        <h2 className="text-blue-500 text-3xl font-semibold italic p-1 mb-2">
          My Skills
        </h2>
        <ul className="grid grid-cols-4 grid-rows-2 items-center justify-items-center gap-5">
          <li>
            <img src={htmlLogo} alt="" className="h-12" />
          </li>
          <li>
            <img src={cssLogo} alt="" className="h-12" />
          </li>
          <li>
            <img src={javascriptLogo} alt="" className="h-12" />
          </li>
          <li>
            <img src={reactLogo} alt="" className="h-12" />
          </li>
          <li className="col-start-1 col-end-3">
            <img src={tailwindcssLogo} alt="" className="h-14" />
          </li>
          <li>
            <img src={githubLogo} alt="" className="h-12" />
          </li>
          <li>
            <img src={gitLogo} alt="" className="h-12" />
          </li>
        </ul>
      </section>
    </section>
  );
};

export default About;
