import React, { useState, useEffect } from "react";
import RightForYou from "../components/investment/RightForYou";
import InvestmentProcess from "../components/investment/InvestmentProcess";
import InvestmentStrategy from "../components/investment/InvestmentStrategy";
import InvestmentProducts from "../components/investment/InvestmentProducts";
import Focus from "../components/investment/Focus";
import CoInvest from "../components/investment/CoInvest";
import arrow from "../assets/images/investment/circleArrow.svg";
import coin from "../assets/images/investment/coin.svg";
import arrow1 from "../assets/images/investment/arrow.svg";
import Testimonials from "../components/Testimonials";
import ApplyFunding from "../components/forms/ApplyForFunding";
import Invest from "../components/forms/Coinvest";
import Nav from "../components/NavBar";
import Feat from "../components/Footer";

const Investment = () => {
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

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);
  return (
    <div className="main">
      <Nav/>
      <div className="bg-darkBg py-16 px-8 md:px-16">
        <div className="flex flex-col justify-start md:justify-center items-center">
          <div className="text-white text-start md:text-center">
            <div className="relative px-2 md:flex items-end justify-end hidden">
              <img src={arrow} alt="" />
            </div>

            <h1 className="text-[36px] md:text-[74px] font-bold">
              Invest in You & Your Enterprise
            </h1>
            <p className="w-full text-lg mt-2 mx-auto md:text-2xl font-normal lg:w-4/5">
              Discover how our direct investment service can help you and your
              enterprise become Valuable, Influential & Profitable
            </p>
            <div className="relative left-[-4rem] hidden md:flex">
              <img src={coin} alt="coin" />
            </div>
          </div>
        </div>{" "}
        <div className="mt-4 flex justify-start items-start  gap-6 flex-col md:flex-row md:gap-10 md:justify-center md:items-center md:mt-0">
          <button
             data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50" data-aos-mirror="true"
            onClick={() => handleApplyForFunding()}
            className="bg-primary_yellow py-4 px-6 text-xl font-bold hover:border-2 border-primary-yellow hover:border-gold hover:bg-[transparent] hover:text-white transition-all duration-300"
          >
            Apply for Funding
          </button>
          {showApplyFunding && (
            <ApplyFunding onClose={() => handleCloseApplyFunding()} />
          )}

          <button
             data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50" data-aos-mirror="true"
            onClick={() => handleCoInvestWithUsToday()}
            className="flex text-lg font-bold border-2 border-solid border-gold py-[16px] px-[24px] text-white cursor-pointer md:text-xl hover:bg-primary_yellow hover:text-black transition-all duration-300"
          >
            Co-invest with us today
            <img src={arrow1} alt="" />
          </button>
          {showInvest && <Invest onClose={() => handleCloseInvest()} />}
        </div>
      </div>
      <div className="bg-secondary_yellow px-8 md:px-16">
        <RightForYou />
      </div>
      <div className="py-8  px-8 md:px-16">
        <InvestmentProcess />
      </div>
      <div className=" py-8  px-8 md:px-16">
        <InvestmentStrategy />
      </div>
      <div className="bg-[#fff] py-8  px-8 md:px-16">
        <InvestmentProducts />
      </div>
      <div className="py-8  pb-[7rem] ">
        <Focus />
      </div>
      <div className="bg-lightGrey py-8  px-8 md:px-16">
        <CoInvest />
      </div>
      <div className=" py-8  px-8 md:px-16">
        <Testimonials />
      </div>
      <Feat/>
    </div>
  );
};

export default Investment;
