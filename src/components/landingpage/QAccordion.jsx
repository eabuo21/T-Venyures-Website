import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Accordion({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {" "}
      <div className="acc-container relative bottom-7 border bg-black  ">
        <div className=" border-t-2 border-slate-100 rounded p-4 lg:px-6 lg:py-6">
          <h2
            className="flex justify-between items-center cursor-pointer transition-transform "
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className=" text-[24px]  font-normal font-[opensans] text-white px-2  hover:text-[gold]   hover:transition-colors duration-700 ease-in-out">
              {title}
            </span>
            <div className="icons-border border-2 rounded-full  border-[white]">
              <FontAwesomeIcon
                icon={isExpanded ? faMinus : faPlus}
                className=" text-white w-6 h-6 transition-transform ease-in-out duration-700"
                rotation={isExpanded ? 45 : 0}
              />
            </div>
          </h2>
          {isExpanded && (
            <div className="mt-4 lg:w-[fixed] lg:justify-center lg:items-center lg:flex-col  lg:flex-wrap   ">
              <p className="text-white font-normal text-[20px] px-7 text-left  lg:px-8 ">
                {content}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Accordion;
