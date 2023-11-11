import React from "react";
import "tailwindcss/tailwind.css";
import Image from "../../assets/images/landingpage/imt1.png";

const Imt1 = () => {
  return (
    <>
      <div className="main-wrapper flex flex-col   lg:flex-row  md:flex-row">
        <img
          className="w-full  h-[auto] relative bottom-[0] lg:w-[50%] lg:h-[fixed] md:w-[55%]"
          src={Image}
          alt="images"
        ></img>

        <div className="justify-center items-center  px-2 lg:px-6 md:py-[7.3rem] md:pl-[6rem] ">
          <p className="text-red text-xl font-sans  font-bold px-2 py-6 lg:text-xl ">
            OUR MISSION
          </p>
            <div className=" md:w-[90%]">
          <p className="text-black text-xl  px-2 font-normal font-sans  lg:text-4xl lg:font-normal">
            To Transform People, Organizations & Societies
            into Entrepreneurial Entities
            </p>
            </div>
        </div>
      </div>
    </>
  );
};
export default Imt1;
