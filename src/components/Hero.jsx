import React from "react";
import HeroImage from "../assets/images/hero.png";
import Flexc from "../components/FlexCard";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col ">
        <section
          className="flex flex-col  w-full h-[fixed] bg-cover bg-center bg-no-repeat
          lg:flex-col lg:h-[80vh] md:h-[40vh]
          "
          style={{
            backgroundImage: `url(${HeroImage})`,
          }}
        >
          <div className=" px-2 py-4 lg:px-9 lg:py-10 w-[100%] flex justify-center items-center">
            <p className="text-white text-3xl font-normal font-sans  lg:text-6xl  lg:pb-8 ">
              Accelerating Growth for Businesses, Governments & Individuals
            </p>
          </div>
          <section className="flex-cards-sec flex-col relative  right-[3rem] px-3 lg:px-2">
            <Flexc />
          </section>
        </section>
      </div>
    </>
  );
};

export default Hero;
