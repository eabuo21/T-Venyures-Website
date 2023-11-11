import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Qabg from "../../assets/images/landingpage/qabg.png";
import Accordcards from "../../components/landingpage/Acitems";

const Qa = () => {
  return (
    <>
      <div className="main-qa-container flex flex-col   lg:flex-row lg:justify-center lg:items-center  md:flex-row ">
        <div className="image-text  py-2">
          <img
            className="image-qa w-full h-[fixed]  relative bottom-2 lg:w-[90vh] lg:px-6 lg:bottom-0 lg:py-6  md:w-[60%] md:pb-0 "
            src={Qabg}
          />
          <p className=" text-white text-4xl font-normal  text-left px-6 font-[opensans] relative bottom-[8rem] ">
            You have questions,
            <br />
            we have answers
          </p>
        </div>

        <div className=" accordion-items ">
          <Accordcards />
        </div>
      </div>
    </>
  );
};
export default Qa;
