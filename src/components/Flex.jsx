import React from "react";
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FlexNav = ({ image, text, link }) => {
  return (
    <>
      <div className="items-container flex justify-center items-center  ">
        <Link to={link}>
          <div className="all-items-container flex flex-row gap-3 justify-center items-center mr-[1rem]       md:mr-[2rem]">
            <img src={image} alt="flex-image" className="w-[130px] h-[120px]" />
            <p className="card-text font-sans font-bold text-base text-center text-black w-[100px] lg:text-base md:text-sm">
              {text}
            </p>
            <FontAwesomeIcon icon={faChevronRight} arrow-icon />
          </div>
        </Link>
      </div>
    </>
  );
};

export default FlexNav;
