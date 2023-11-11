import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/About-Us/AboutHero";
import Ek from "../components/About-Us/EK";
import Teams from "../components/About-Us/TeamCards";

const AboutUs = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      <div className="main">
        <section className="h-[fixed] w-full pt-0">
          <Hero />
        </section>

        <section className="sub-hero flex flex-col h-[fixed] pb-8 lg:pb-[2rem]">
          <div className="centered-text flex flex-col h-[fixed] py-0 px-0     lg:py-8  lg:px-8">
            <span className=" text-red text-[14px] text-left font-bold px-6 py-4  lg:text-[20px] font-sans">
              WHO WE ARE
            </span>
            <p className="text-black text-2xl font-normal  py-1 px-6   leading-8 font-sans lg:text-[40px] md:leading-[3rem] lg:pb-4 ">
              Transforming Businesses, Governments & Individuals
              <br />
              into Valuable, Influential & Profitable Entities
            </p>
            <br />
            <span className="text-black font-sans  text-base leading-2 font-normal py-1 px-6 lg:text-3xl lg:pb-6 ">
              Tongston Ventures is a disruptive & AI-driven business
              development, grants management and <br />
              investment firm that enables governments, businesses & individuals
              achieve their mandate by <br />
              providing them with the resources and support they need to become
              valuable, influential and
              <br />
              profitable
            </span>
            <br />
            <div className="">
              <Link to="/about">
                <button className="h-[fixed] w-[fixed] py-3 px-4  p-4 bg-red hover:bg-gold  text-white font-bold font-sans  transition-colors transform  duration-700 relative left-7 text-base lg:text-xl lg:px-8 lg:py-6 ">
                  Read more about who we are
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="third-section h-[fixed] w-full pb-8     lg:pb-[6rem] md:pb-6">
          <Ek />
        </section>

        <section className="team-section h-[fixed] w-full pb-8">
          <Teams />
        </section>
      </div>
    </>
  );
};

export default AboutUs;
