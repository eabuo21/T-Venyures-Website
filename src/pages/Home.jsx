import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Link as RouterLink } from "react-router-dom";
import Arrays from "../components/landingpage/PriceArays";
import Imt1 from ".././components/landingpage/Imt1";
import Imt2 from "../components/landingpage/Imt2";
import Imt3 from "../components/landingpage/Imt3";
import Imt4 from "../components/landingpage/Imt4";
import VentureCards from "../components/landingpage/VentureCard";
import Potfoliobg from "../assets/images/landingpage/potfoliobg.png";
import Cbg from "../assets/images/landingpage/contactbg.png";
import Clientele from "../components/landingpage/Clientele";
import Qa from "../components/landingpage/QA";
import Patners from "../components/landingpage/PartnerCards";
import Carousel from "../components/landingpage/Carousel/SectorsCarousel";
import Slant from "../components/landingpage/SlantText";
import Slant2 from "../components/landingpage/Slant2";
import PatWithUs from "../../src/components/forms/Partner-Form";
import Nav from "../components/NavBar";
import Feat from "../components/Footer";

const Home = () => {
  const [showPatWithUs, setShowPatWithUs] = useState(false);
  const handlePartnerWithUs = () => {
    setShowPatWithUs(true);
  };

  const handleClosePatWithUs = () => {
    setShowPatWithUs(false);
  };

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
        <section className="flex flex-col ">
          <Hero />
        </section>
        <Slant />
        <section className="sub-hero flex flex-col h-[fixed] pb-8 lg:pb-[2rem] bg-light-brown">
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-in-linear"
            data-aos-duration="1000"
            data-aos-once="true"
            className="centered-text flex flex-col h-[fixed] py-0 px-0     lg:py-8  lg:px-8"
          >
            <span className=" text-red text-[14px] text-left font-bold px-6 py-4  lg:text-[20px] font-sans">
              WHO WE ARE
            </span>
            <p className="text-black text-2xl font-normal  py-1 px-6   leading-8 font-sans lg:text-[40px] md:leading-[3rem] lg:pb-4 ">
              Transforming Businesses, Governments & Individuals
              <br />
              into Valuable, Influential & Profitable Entities
            </p>
            <br />
            <div className=" px-6  md:w-[70%]">
              <span className="text-black font-sans  text-base  font-normal py-1  lg:text-2xl lg:pb-6 ">
                Tongston Ventures is a disruptive & AI-driven business
                development, grants management and investment firm that enables
                Governments, Businesses & Individuals achieve their mandate by
                providing them with the resources and support they need to
                become Valuable, Influential and Profitable
              </span>
            </div>

            <br />
            {/*   <div className="">
           <RouterLink to="/about">
                <button className="h-[fixed] w-[fixed] py-3 px-4  p-4 bg-red hover:bg-gold  text-white font-bold font-sans  transition-colors transform  duration-700 relative left-7 text-base lg:text-xl lg:px-8 lg:py-6 ">
                  Read more about who we are
                </button>
              </RouterLink>
  </div>*/}
          </div>
        </section>
        <section className="flex-arrays flex flex-col bg-dark h-[fixed] lg:flex-row lg:flex-nowrap lg:pb-[6rem]">
          <Arrays />
        </section>
        <section className="imt1-sec bg-white h-[fixed] w-full  pb-8 lg:pb-0  md:pb-0">
          <Imt1 />
        </section>
        <section className="imt2-sec bg-dark w-full h-[fixed] pb-9 lg:pb-[0] md:pb-0">
          <div className="help-you-grow-sec text-white font-sans h-[fixed] flex flex-col  px-4 py-1 pb-[4rem] lg:justify-center lg:items-center ">
            <p className="text-[30px] font-normal text-left font-sans  lg:text-center lg:text-[48px] lg:font-normal md:text-center">
              Become Valuable, Influential & Profitable <br />
              with us!
            </p>
          </div>
          <Imt2 />
        </section>
        <section className="imt3-sec bg-dark w-full h-[fixed]  pb-8 lg:pb-0 md:h-auto md:pb-0">
          <Imt3 />
        </section>
        <section className="imt4-sec bg-dark w-full h-[fixed]  pb-8 lg:pb-0 md:h-auto md:pb-0">
          <Imt4 />
        </section>

        {/* SECTORS OF FOCUS SECTION*/}
        <section className="SECTORS-OF-FOCUS-SECTION bg-light-brown h-[fixed] w-full pb-8  py-6 lg:pb-6">
          <div className="elements-container px-4 py-3  flex flex-col lg:justify-center lg:items-center md:justify-center md:items-center">
            <p className=" text-red text-sm font-bold font-sans text-left lg:text-center md:text-center ">
              SECTORS OF FOCUS
            </p>
            <span className="text-black text-[24px] text-left font-normal font-sans pb-4 lg:pb-6 lg:text-center lg:text-[36px] md:text-center">
              Venturing into Various Industries, Exploring
              <br /> Endless Horizons
            </span>
          </div>
          <Carousel />
        </section>

        <section className=" bg-white h-[fixed] w-full pb-[7rem]   lg:pb-[6rem]">
          <Slant2 />
        </section>

        {/**  Portfolio section 
        <section className="portfolio-section w-full h-[fixed] pb-8 flex flex-col  lg:pb-8 lg:pt-[6rem]">
          <div className="w-full  h-[fixed] ">
            <div className="image-container flex justify-center items-center">
              <img
                className="  w-[1240px] h-[310px] flex justify-center items-center"
                src={Potfoliobg}
              />
            </div>
            <div className="all-centered-items flex flex-col  relative bottom-[15rem]  px-4 py-3 lg:justify-center lg:items-center md:justify-normal md:items-center">
              <p className="text-black text-[20px] font-bold font-sans text-left  pb-6   lg:text-[30px] lg:text-center md:text-center">
                Our Portfolio
              </p>

              <RouterLink to="#">
                {" "}
                <button className="portfolio-button bg-[transparent] py-2  text-xl border-2 outline-0 text-red font-bold border-red h-[fixed] w-[fixed] px-2 hover:bg-gold hover:border-gold hover:text-white transition-colors duration-700 ">
                  See detailed case studies
                </button>
              </RouterLink>
            </div>
          </div>
        </section>
        */}

        {/*Clientele Section */}
        <section className="clientele section bg-white  h-[fixed] w-full lg:h-[fixed] lg:pb-6 relative bottom-[4rem]">
          {/*clientele component goes here*/}
          <Clientele />
        </section>

        {/* PARTNER SECTION*/}
        <section className="partner-section h-[fixed] w-full bg-light-brown pb-6">
          <div className=" flex justify-normal px-6  lg:justify-center lg:items-center md:justify-center md:items-center">
            <span className="text-partner   text-left text-red font-sans font-bold text-sm lg:text-center">
              PARTNERS
            </span>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
             data-aos-once="true"
            className="partner-text  px-5 flex justify-center items-center py-4 pb-[4rem]"
          >
            <p className="text-black font-normal font-sans text-2xl text-left lg:text-3xl lg:text-center  md:text-center ">
              Tongston continuously partners with a range of
              <br />
              Institutions & Governments to deliver value to, <br />
              whilst enhancing the Influence & Profitability of its
              <br />
              Clientele
            </p>
          </div>

          <Patners />

          <div className="partner-button flex justify-center items-center pt-[5rem]">
            <button
              onClick={() => handlePartnerWithUs()}
            
              className="partnering-button bg-red text-white text-xl font-sans font-bold w-[fixed] h-[fixed] px-6 py-6 hover:bg-gold hover:transition-colors ease-in-out  duration-1000 transform "
            >
              Partner with us
            </button>
            {showPatWithUs && (
              <PatWithUs onClose={() => handleClosePatWithUs()} />
            )}
          </div>
        </section>

        {/*Q&A   Section*/}

        {/*  CONTACT US SECTION */}

        <section className="contact-us  w-[fixed] h-[fixed]  ">
          <div
            className=" contact-us w-full h-[fixed] bg-cover bg-center bg-no-repeat lg:h-[fixed] lg:pt-5 "
            style={{
              backgroundImage: `url(${Cbg})`,
            }}
          >
            <div className="center-elements  flex flex-col justify-center items-center px-4 py-10">
              <p className=" text-4xl text-white font-bold font-[opensans]  text-ellipsis px-4 py-7">
                Contact Us
              </p>
              <span className="text-white font-[opensans] font-bold text-[16px] text-center ">
                If you’d like to learn more
                <br /> about T-Ventures, we would be happy to answer all your
                questions.
              </span>
              <RouterLink to="/contact">
                {" "}
                <button
                 
                  className="contact-button bg-[transparent] border-2 outline-0 hover:text-dark  text-white font-bold border-gold  h-[fixed] w-[fixed]  py-3 px-4 hover:border-gold transition-colors hover:bg-gold hover:transition-colors transform  duration-700 "
                >
                  Get In Touch
                </button>
              </RouterLink>
            </div>
          </div>
        </section>
        <Feat/>
      </div>
    </>
  );
};
export default Home;
