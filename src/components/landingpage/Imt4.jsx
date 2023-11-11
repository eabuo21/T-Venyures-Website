import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Image4 from "../../assets/images/landingpage/imt4.png";
import GrantsApplication from "../../components/forms/ApplyForGrants";
import ManageGrants from "../../components/forms/ManageGrants";

const Imt4 = () => {
  const [showGrantsApplication, setShowGrantsApplication] = useState(false);
  const handleApplyForGrants = () => {
    setShowGrantsApplication(true);
  };

  const [showManageGrants, setShowManageGrants] = useState(false);
  const handleManageYourGrants = () => {
    setShowManageGrants(true);
  };

  const handleCloseGrantsApplication = () => {
    setShowGrantsApplication(false);
  };

  const handleCloseManageGrants = () => {
    setShowManageGrants(false);
  };
  return (
    <>
      <div className="main-wrapper flex flex-col  lg:flex-row-reverse  md:flex-row-reverse ">
        <img
          className="w-full  h-auto lg:w-[50%] md:w-[45%]"
          src={Image4}
          alt="images"
        ></img>
        <div className="justify-center items-center relative px-4 py-3 lg:pr-[10rem]  lg:pt-[4rem]  md:pt-[6rem]">
          <span className="numbered-grid text-white text-sm font-bold font-sans text-left px-4 py-2 ">
            03 / 03
          </span>
          <br /> <br />
          <p className="text-gold text-xl px-4 py-2 font-bold  font-sans lg:text-3xl md:xl">
            Grants Management
          </p>
          <br />
          <p className="text-white px-4 py-2 font-normal text-base font-sans leading-6  lg:text-xl  md:sm">
            We provide grants invested by Tongston, and commissioned by
            partners, to our diversified clientele base & investment portfolio
            that spans early-stage, youth-led, mid-stage Businesses; and
            Individuals across all forms of Education to professionals across
            various industries.
          </p>
          <div className="buttons-div  w-[100%]  flex flex-col px-4 py-3 gap-4 lg:flex-row lg:py-4 lg:px-3  lg:w-[120%] md:flex-row md:py-4 md:px-3 ">
            <div className="">
              {" "}
              <button
                 data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50" data-aos-mirror="true"
                onClick={() => handleApplyForGrants()}
                className="h-[fixed] w-[fixed] py-3 px-4   bg-gold font-bold text-black relative top-[2rem] text-xl transition-all ease-in-out  hover:text-white duration-1000  lg:w-[fixed] lg:ml-2 lg:top-0  lg:py-[0.88rem]  lg:text-base   lg:px-9  lg:h-[80px]   md:w-[fixed] md:ml-2 md:top-0  md:py-[0.88rem]  md:text-sm"
              >
                Apply For Our Grants
              </button>
            
            {showGrantsApplication && <GrantsApplication onClose={()=>handleCloseGrantsApplication()}/>}
            </div>
            <br />
            <div className="">
              <button
               data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50" data-aos-mirror="true"
                onClick={() => handleManageYourGrants()}
                className="view-details border-2  border-gold  outline-[0] h-[fixed] w-[fixed] py-3 px-4 relative top-[1rem]  text-white text-xl transition-all ease-in-out duration-1000   hover:bg-gold hover:text-black font-bold md:w-[fixed]  md:top-0   lg:text-base   lg:px-9  lg:h-[80px]  md:text-sm">
                Manage Your Grants
              </button>
              {showManageGrants && <ManageGrants onClose={()=> handleCloseManageGrants ()}/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Imt4;
