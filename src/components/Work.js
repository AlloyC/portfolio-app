import { useState } from "react";

const Work = ({ img, name, codeSite, liveSite, focusState }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`max-w-xs rounded-lg border-gray-300 border-2 shadow-gray-800 shadow-2xl flex flex-col justify-start ${
        focus ? "blur-none" : focusState ? "blur-[2px]" : "blur-none"
      } hover:scale-105 text-gray-200`}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <div className="h-[12rem] overflow-y-hidden">
        <img src={img} alt={name} className="min-h-full" />
      </div>
      <h3 className="uppercase font-bold pl-3 pt-3">{name}</h3>
      <div className="flex justify-between p-3">
        <a
          href={codeSite}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 font-semibold px-1 hover:scale-105"
        >
          View code
        </a>
        <a
          href={liveSite}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-bold px-2 hover:scale-105"
        >
          View Livesite
        </a>
      </div>
    </div>
  );
};

export default Work;
