import { useState } from "react";
import { WorksArray } from "./MyWorksLink";
import Work from "./Work";

const Works = () => {
  const [focus, setFocus] = useState(false);
  return (
    <section
      id="works"
      className="border-2 border-gray-50 rounded-xl bg-works max-w-4xl w-4/5 mb-16 lg:px-9 relative left-1/2 translate-x-[-50%] flex items-center lg:items-start flex-col"
    >
      <h2 className="text-center lg:text-left text-blue-500 text-3xl font-semibold italic p-1 lg:pl-5 pt-5 mb-5">
        My works
      </h2>
      <div
        className="grid lg:grid-cols-3 lg:grid-rows-2 gap-3 p-5"
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
      >
        {WorksArray.map((workarr) => (
          <Work
            key={workarr.id}
            img={workarr.image}
            name={workarr.siteName}
            codeSite={workarr.CodeSite}
            liveSite={workarr.LiveSite}
            focusState={focus}
          />
        ))}
      </div>
      <a
        href="https://github.com/AlloyC"
        rel="noreferrer"
        target="_blank"
        className="bg-blue-400 rounded-md border-2 border-gray-200 px-4 m-5 mb-8 text-gray-100 font-semibold py-[2px] self-end"
      >
        view more
      </a>
    </section>
  );
};

export default Works;
