import React from "react";

const Team = ({ image, name1, name2, email }) => {
  return (
    <>
      <div className=" main-container  flex    lg:mx-6">
        <div className="items-container bg-white rounded w-[fixed] h-[fixed] ">
          <img
            className="image w-[170px] h-[150px]        lg:w-[290px] lg:h-[220px]     md:w-[290px] md:h-[220px]  "
            src={image}
            alt="team-image"
          />

          <div className="container-text flex flex-wrap w-8/12">
            <div className="flex flex-col w-full ">
              <p className="name-container flex flex-col text-base text-black  font-sans font-normal    lg:text-[24px]        md:text-[24px] ">
                {name1}
              </p>
              <p className="name-container flex flex-col text-black text-base font-sans font-normal lg:text-[24px]        md:text-[24px] ">
                {name2}
              </p>
            </div>
          </div>
          <div className="email-container">
            <p className="name-container flex flex-col text-black text-sm font-sans font-normal lg:text-[24px]    md:text-[24px] ">
              {email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
