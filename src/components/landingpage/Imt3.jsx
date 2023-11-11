import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Image3 from "../../assets/images/landingpage/imt3.png";
import Advisor from "../../components/forms/BecomeAdviser";
import Services from "../../components/forms/AccessServices";

const Imt3 = () => {
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
      <div className="main-wrapper flex flex-col relative  lg:flex-row  md:flex-row">
        <img
          className="w-full  h-[auto] lg:w-[50%] md:w-[55%]"
          src={Image3}
          alt="images"
        ></img>

        <div className="justify-center items-center px-4 py-3  lg:pl-[10rem] lg:pt-[6rem] md:pt-3">
          <span className="numbered-grid text-white text-sm font-bold text-left px-1 py-2 ">
            02 / 03
          </span>
          <br /> <br />
          <p className="text-gold text-xl font-bold px-2 py-2    lg:text-3xl font-sans md:text-xl">
            Business Development & Advisory
          </p>
          <br />
          <p className="text-white text-base font-normal px-2  font-sans  lg:text-xl md:text-sm ">
            We provide early-stage advisory, project planning, pre-feasibility
            studies, procurement, development impact assessment, structuring,
            business development, fundraising and entrepreneurial career
            advisory services to Individuals, Businesses & Governments.
          </p>
          <div className="buttons-div w-full flex flex-col px-4 py-3 gap-4 lg:flex-row lg:w-[100%] lg:py-4 lg:px-2 md:flex-row md:py-4 md:px-3 ">
            <div className="">
              <button
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-delay="50"
                data-aos-mirror="true"
                onClick={() => handleBecomeAnAdviser()}
                className="view-details border-2  border-gold   outline-[0] h-[fixed] w-[fixed] py-3 px-4 relative top-[1rem]  text-white text-xl transition-all ease-in-out duration-1000  hover:text-black font-bold
                 hover:bg-gold md:w-[fixed]  md:top-0   lg:text-base   lg:px-9  lg:h-[80px] md:text-sm "
              >
                Become an Advisor
              </button>
              {showAdvisor && <Advisor onClose={() => handleCloseAdvisor()} />}
            </div>
            <div className="">
              {" "}
              <button
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-delay="50"
                data-aos-mirror="true"
                onClick={() => handleAccessServices()}
                className="h-[fixed] w-[fixed] py-3 px-4    bg-gold font-bold text-black relative top-[2rem] text-xl transition-all ease-in-out  hover:text-white duration-1000  lg:w-[fixed] lg:ml-2 lg:top-0  lg:py-[0.88rem]  lg:text-base   lg:px-9  lg:h-[80px]   md:w-[fixed] md:ml-2 md:top-0  md:py-[0.88rem]  md:text-sm"
              >
                Access Services
              </button>
              {showServices && (
                <Services onClose={() => handleCloseServices()} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Imt3;
