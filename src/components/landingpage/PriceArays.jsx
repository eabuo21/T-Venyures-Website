import React from "react";
import FlexCount from "../landingpage/PriceCount";

function PriceArray() {
  const pricecards = [
    {
    
      price: "17",
      description: "Investment Deployed",
      symbol1: "N",
      symbol2: "M",
    },
    {
    
      price: "18",
      description: "Institutions  Reached",
      symbol1: "",
      symbol2: "",
    },
    {
    
      price: "2000",
      description: "People Globally Reached",
      symbol1: "",
      symbol2: "+",
    },

  ];

  return (
    <div className="flex  flex-col  relative right-0 justify-center items-center  pr-9  py-5 lg:flex-row lg:w-[100%] lg:justify-center   lg:right-[2rem] lg:items-center lg:px-[4rem]    md:flex-row md:justify-center md:items-center  md:px-8 md:m-7 ">
      {pricecards.map((card, index) => (
        <div key={index} className="  p-4 md:w-[fixed]  justify-center items-center  lg:w-[37%]">
          <FlexCount
           
            price={card.price}
            description={card.description}
            symbol1={card.symbol1}
            symbol2={card.symbol2}
          />
        </div>
      ))}
    </div>
  );
}

export default PriceArray;
