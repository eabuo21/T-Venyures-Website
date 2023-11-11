import React from "react";

const RFYC = ({ title, text }) => {
  return (
    <>
           <div className="main-container  flex flex-col justify-start items-start     md:flex-row md:justify-start md:items-start">
              <div className="background-container w-[fixed]  pr-4 h-[100%]  flex flex-col justify-start items-start     lg:w-[280px] lg:h-[100%] p-2      md:h-[400px]     md:w-[300px]">
         
        
          <p className="title-text text-primaryBlue text-2xl font-sans font-bold">{title}</p>

          <p className="title-text  tracking-wide text-base font-sans font-normal pt-3">{text}</p>
        </div>
      </div>
    </>
  );
};
export default RFYC;;
