import React from "react";
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VentureFlex = ({ image, text, link, background, text2 }) => {
  return (
    <>
      <div className="main-container flex flex-col py-4 lg:flex-row lg:justify-center  ">
        <div className=" bg-grey h-[320px] w-[fixed] rounded   lg:w-[400px]  lg:h-[320px] md:m-1 md:h-[320px]">
          <img
            src={image}
            className="w-[360px] h-[250px]   lg:w-[400px] shrink-0 lg:h-[250px]  md:w-[300px] md:h-[18vh] hover:will-change-transform hover:transition-all duration-1000 "
          ></img>
          <div className=" text-items  px-2 py-2 flex flex-col">
            <p className="text-black text-base font-normal font-sans py-1    lg:text-[20px] lg:leading-4">
              {text}
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default VentureFlex;
