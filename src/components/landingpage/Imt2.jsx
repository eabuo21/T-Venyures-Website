import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { Link as RouterLink } from "react-router-dom";
import Image2 from "../../assets/images/landingpage/imt2.png";
import ApplyFunding from "../../components/forms/ApplyForFunding";
import Invest from "../../components/forms/Coinvest";

const Imt2 = () => {
  const [showApplyFunding, setShowApplyFunding] = useState(false);
  const handleApplyForFunding = () => {
    setShowApplyFunding(true);
  };

  const [showInvest, setShowInvest] = useState(false);
  const handleCoInvestWithUsToday = () => {
    setShowInvest(true);
  };

  const handleCloseApplyFunding = () => {
    setShowApplyFunding(false);
  };

  const handleCloseInvest = () => {
    setShowInvest(false);
  };

  return (
    <>
      <div className="main-wrapper flex flex-col lg:flex-row-reverse  md:flex-row-reverse">
        <img
          className="w-full  h-[auto] py-0 lg:w-[50%]   md:w-[45%]"
          src={Image2}
          alt="images"
        ></img>
        <div className="justify-center items-center relative lg:pr-[10rem]  lg:pt-[4rem]">
          <span className="numbered-grid text-white text-[14px] font-bold text-left px-4 py-2 font-sans  ">
            01 / 03
          </span>
          <br />
          <br />
          <p className="text-gold text-base  px-4 py-2 font-bold lg:py-0 font-sans   lg:text-3xl  md:text-xl">
            Direct Investing
          </p>
          <br />
          <p className="text-white text-base  px-4 py-2 font-normal  leading-6 lg:text-xl  md:text-sm ">
            We invest in our priority sectors aligned with our 4 pillars being:
            Education, Media, Finance, Enterprise (Data, Research, Technology,
            Strategy, Accounting, Legal & Governance, Business Development &
            Sales).
            <br />
            <br />
            We also invest across a broad spectrum of sectors including Trade &
            Industry, Agriculture, Telecoms & Media, Logistics & Storage, and
            Life Sciences.
          </p>
          <div className="buttons-div w-full  flex flex-col px-4 py-3 lg:flex-row   g:px-3 lg:mx-0 lg:w-[120%] gap-4  md:flex-row md:px-4 md:w-full">
            <div className="">
              <button
                
                 data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50" data-aos-mirror="true"
                onClick={() => handleApplyForFunding()}
                className="h-[fixed] w-[fixed]  text-[18px] py-3 px-4 hover:text-white  bg-gold  text-black relative top-[1rem]  transition-all ease-in-out duration-700 font-sans font-bold   lg:px-9  lg:h-[80px] lg:text-base  md:w-[fixed] md:top-0 md:py-4  md:text-sm"
              >
                Apply for Funding
              </button>
              {showApplyFunding && (
                <ApplyFunding onClose={() => handleCloseApplyFunding()} />
              )}
            </div>

            <div className="">
              <button
                 data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50" data-aos-mirror="true"
                onClick={() => handleCoInvestWithUsToday()}
                className="view-details border-2 border-gold  hover:bg-gold hover:text-black  text-base bg-dark outline-[0] h-[fixed w-[fixed] py-3 px-4 relative top-[2rem]  text-white text-xl transition-colors duration-1000 ease-in-out font-sans font-bold  lg:text-base   lg:px-9  lg:h-[80px] lg:top-0    md:top-0 md:py-[0.88rem] md:ml-2 md:text-sm "
              >
                Co-invest with us today
              </button>
              {showInvest && <Invest onClose={() => handleCloseInvest()} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Imt2;
