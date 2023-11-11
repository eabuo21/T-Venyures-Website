import React from "react";
import { Link } from "react-router-dom";
import AboutBg from "../../assets/images/aboutbg.png";


const AboutHero = () => {
  return (
    <>
      <div className="main-hero-wrapper w-full h-[fixed]">
        <section
          className="hero-bg  w-full bg-cover bg-center h-[50vh]                               lg:w-full lg:h-[60vh] lg:pt-8  lg:bg-no-repeat"
          style={{
            background: `url(${AboutBg})`,
        backgroundRepeat: 'no-repeat',  }}
        >
          <div className=" flex justify-center items-center pt-[6rem]">
          <p className=" text-7xl font-bold font-sans text-center text-white">
             About Us 
                  </p>
                 </div>
        </section>




      </div>
    </>
  );
};
export default AboutHero;
