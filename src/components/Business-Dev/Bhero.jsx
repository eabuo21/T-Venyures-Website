import React, { useState } from "react";
import coin from "../../assets/images/Business/coin.svg";
import arrow from "../../assets/images/investment/circleArrow.svg";
import Advisor from "../../components/forms/BecomeAdviser";
import Services from "../../components/forms/AccessServices";

const Hero = () => {
  const [showAdvisor, setShowAdvisor] = useState(false);
  const handleBecomeAnAdviser = () => {
    setShowAdvisor(true);
  };

  const [showServices, setShowServices] = useState(false);
  const handleAccessServices = () => {
    setShowServices(true);
  };

  const handleCloseAdvisor = () => {
    setShowAdvisor(false);
  };

  const handleCloseServices = () => {
    setShowServices(false);
  };
  return (
    <>
      <div className="bg-darkBg py-16 px-8 md:px-16">
        <div className="flex flex-col justify-start md:justify-center items-center">
          <div
 
            className="text-white text-start md:text-center">
            <div
            
              className="relative px-2 md:flex items-end justify-end hidden">
              <img src={arrow} alt="" />
            </div>

            <h1 className=" text-4xl md:text-6xl font-bold font-sans">
              Business Development & Advisory
            </h1>
            <p className="w-full text-lg mt-2 mx-auto md:text-2xl font-normal lg:w-4/5">
              Discover how we excel in Business Development & Advisory services,
              from fundraising to development, impact assessment & more to
              Individuals, Businesses & Governments, in partnership with PIF
              Africa.
            </p>
            <div className="relative left-[-4rem] hidden md:flex">
              <img src={coin} alt="coin" />
            </div>
          </div>
        </div>{" "}
        <div className="mt-4 flex justify-start items-start  gap-6 flex-col md:flex-row md:gap-10 md:justify-center md:items-center md:mt-0">
          <div className="">
            <button
               data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50" data-aos-mirror="true"
              onClick={() => handleBecomeAnAdviser()}
              className="bg-primary_yellow py-4 px-6 text-xl font-bold hover:border-2 border-primary-yellow hover:border-gold hover:bg-[transparent] hover:text-white transition-all duration-300"
            >
              Become an Advisor
            </button>
            {showAdvisor && <Advisor onClose={() => handleCloseAdvisor()} />}
          </div>
          <div className="">
            <button
              data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50" data-aos-mirror="true"
              onClick={() => handleAccessServices()}
              className="flex text-lg font-bold border-2 border-solid border-gold py-[16px] px-[24px] text-white cursor-pointer md:text-xl hover:bg-primary_yellow hover:text-black transition-all duration-300"
            >
              Access Services
            </button>
            {showServices && <Services onClose={() => handleCloseServices()} />}
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
