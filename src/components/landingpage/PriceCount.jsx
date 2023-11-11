import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PriceCount = ({  price, description, symbol1, symbol2 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const updateprice = () => {
      if (count < price) {
        setCount(count + 1);
      }
    };

    if (count < price) {
      const interval = setInterval(updateprice, 10);
      return () => clearInterval(interval);
    }
  }, [count, price]
  );
   

  return (
    <div className=" flex  w-full  ">
      <div
        className="black-background-items  flex flex-col  justify-center items-center    border-b border-white border-opacity-10          md:border-b-0  md:pt-4 md:border-r md:border-white md:border-opacity-10     "
       
      >
        <div className="wrapper  ">
          <p className=" w-full">
            <p className="flex text-white text-[40px] font-normal px-2 lg:text-[72px]">
              <span className="text-white text-[20px] font-bold relative bottom-[5px] lg:text-[30px] font-sans line-through ">
                {symbol1}
              </span>{" "}
              {count} {" "}
              <span className=" text-white text-[20px] font-bold relative bottom-[5px] lg:text-[30px] font-sans">
                {symbol2}
              </span>
            </p>
          </p>
        </div>
        <div className="py-2  ">
          <p className=" px-6 justify-center items-center text-center lg:justify-normal lg:items-start lg:text-left ">
            <p className="text-gold text-sm font-normal flex  flex-nowrap px-1  font-sans   lg:w-full lg:flex-nowrap lg:text-[20px]">
              {" "}
              {description}{" "}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceCount;
