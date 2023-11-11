import React, { useEffect } from "react";
import Bhero from "../components/Business-Dev/Bhero";
import Right4u from "../components/Business-Dev/RFY";
import Experties from "../components/Business-Dev/Expert";
import BizCards from "../components/Business-Dev/BizCard2";
import Contribute from "../components/Business-Dev/Contribute";
import Nav from "../components/NavBar";
import Feat from "../components/Footer";

const Business = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);
  return (
    <>
      <div className="main">
        <Nav/>
        <section className="hero-container w-full h-auto ">
          <Bhero />
        </section>

        <section className="right-for-you-section bg-secondary_yellow w-ful h-[fixed] pt-8 ">
          <Right4u />
        </section>

        <section className="right-for-you-section bg-white  w-ful h-auto pt-[4rem]   lg:pt-[10rem]  md:pt-[4rem]">
          <Experties />
        </section>

        <section className="parteners-section h-[fixed] w-full bg-white pt-[4rem]    lg:pt-[10rem]  md:pt-[4rem]">
          <div className=" flex flex-col justify-start items-start  px-6     md:justify-center md:items-center">
            <p className=" text-red font-sans text-xl font-bold  text-left  md:text-3xl md:text-center">
              Clientele
            </p>

            <div className="w-full    md:w-[50%]">
              <p className=" text-black font-sans text-xl font-normal  text-left  md:text-2xl  md:text-center">
                Discover our Business Development & Advisory services to
                transform our Clients into Valuable, Influential & Profitable
                Entities
              </p>
            </div>
          </div>
          <br />
          <BizCards />
        </section>

        <section className="want-contribute-section w-full  h-[fixed] pt-[4rem] bg-light-brown mt-3 lg:pt-[10rem] pb-[4rem] md:pt-[1rem] ">
          <div className="heading flex  flex-col  px-6  md:justify-center md:items-center ">
            <h2 className="text-red text-xl font-bold font-sans text-left     md:text-center md:text-3xl">
              Portfolio
            </h2>
            <h4 className="text-black text-left font-sans font-normal text-base md:text-xl md:text-center     ">
              Explore the NGOs, businesses, governments & people Tongston has
              advised
            </h4>
          </div>
          <div className=" py-8  px-8 md:px-16">
            <Contribute />
          </div>
        </section>
        <Feat/>
      </div>
    </>
  );
};
export default Business;
