import React from "react";

const Partner = ({image, title, description}) => {
  return (
    <>
      <div className="main-container  flex flex-col justify-center items-center  lg:flex-row lg:justify-center lg:items-center md:flex-row md:justify-center md:items-center">
        <div className="items-container flex flex-col h-[516px] w-[300px] border-b-2 border-black  border-opacity-50 lg:h-[516px] lg:w-[350px]  lg:border-b-0 lg:border-r-2 lg:border-black lg:border-opacity-50 lg:rounded-s-2xl      md:border-opacity-50   md:border-r-2 md:border-black md:rounded-s-2xl md:w-[270px] md:border-b-0">
          <img
            className=" w-[200px] h-[200px] px-2 pb-6"
            src={image}
            alt="partener-image"
          ></img>
          <p className=" text-black font-bold font-sans text-4xl flex flex-wrap px-8 pb-6">
            {title}
          </p>
          <span className="font-sans text-xl text-black flex flex-wrap px-8">
            {description}{" "}
          </span>
        </div>
      </div>
    </>
  );
};
export default Partner;
