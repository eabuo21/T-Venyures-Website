import React from "react";

const Cards = ({ color, title, text }) => {
  return (
    <>
      <div className="main-container  flex flex-col justify-start items-start      md:flex-row md:justify-start md:items-start">
              <div className="background-container w-[300px]pr-4 h-[260px]  flex flex-col justify-start items-start p-3  md:w-[250px] md:h-[260px] "
              style={{ background: color}}>
        
          <p className="title-text text-2xl font-sans font-bold">{title}</p>

          <p className="title-text text-base font-sans font-normal">{text}</p>
        </div>
      </div>
    </>
  );
};
export default Cards;
