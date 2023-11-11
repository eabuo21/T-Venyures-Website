import React from "react";

const EK = () => {
  return (
    <>
      <div className="main-container flex-col  flex lg:flex-row lg:gap-9 lg:px-[3.5rem] md:gap-0 md:flex-row">
        <div className="contents-sec flex   lg:flex-col ">
          <div className="  w-10/12  px-6 pb-2   lg:pb-0  lg:px-0 lg:w-9/12   md:w-full  ">
            <p className="font-sans font-normal text-[24px]  text-black  lg:px-0 lg:text-[64px]  md:text-[50px] ">
              Experience and Knowledge
              <br />
            </p>
          </div>
        </div>
        <div className="list-items  flex flex-col px-6      lg:px-0 lg:justify-center lg:items-center lg:pl-[0rem]       md:justify-center md:items-center md:pl-0">
      
          <p className="text-black  text-base font-normal  lg:text-3xl     md:text-2xl  ">
            We only employ proven, top-
            <br />
            performing candidates.
            </p>
          
          <br />
          <div className="list-bullets   w-full pl-o   lg:pl-0 md:pl-0 md:w-full  ">
            <li className="list-disc font-sans font-normal text-base text-black    lg:text-[20px]   md:text-base ">
              {" "}
              100+ years of aggregate professional experience
            </li>
            <li className="list-disc font-sans font-normal text-black  text-base  lg:text-[20px]      md:text-base">
              Only experienced hires
            </li>
            <li className=" list-dic font-sans font-normal text-base text-black    lg:text-[20px]      md:text-base">
              Average of 10 completed projects per employee
            </li>
          </div>
        </div>
      </div>
    </>
  );
};
export default EK;