import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tlogo from "../assets/images/tongstonlogo.png";
import PrivacyPolicy from "../components/T&C/PrivacyPolicy";
//import Terms from "../components/T&C/Terms&Conditions";

import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const handlePrivacy = () => {
    setShowPrivacyPolicy(true);
  };

  const handleClosePrivacyPolicy = () => {
    setShowPrivacyPolicy(false);
  };

  {
    /*
  const [showterms, setShowTerms] = useState(false);
  const handleTermsConditions = () => {
    setShowTerms(true);
  }
  const handleCloseTerms = () => {
    setShowTerms(false);
}

*/
  }
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-main-wrapper bg-dark-grey w-full h-[fixed] pb-6 gap-7  lg:h-[fixed]  ">
        <div className="links-container flex flex-col text-white text-base font-sans  font-semibold no-underline pb-[6rem]   lg:gap-[6rem]   lg:flex-row lg:px-[4rem] lg:relative lg:top-[4rem] ">
          <div className=" relative top-6">
            <Link to="/">
              <img
                className="footer-logo w-[185px]  h-[46px] flex justify-start flex-1  gap-[12px]     md:w-[300px]  md:h-[50px] "
                src={Tlogo}
                alt="footer logo"
              />
            </Link>
          </div>
          <ul className="links no-underline text-white font-sans font-semibold text-base text-center list-none  justify-center flex flex-col gap-[32px] px-6  py-8   lg:flex-row  w-full">
            <Link to="/Investment">
              <li>Direct Investing</li>
            </Link>

            <Link to="/business">
              <li> Business Development</li>
            </Link>
            <Link to="#">
              <li>Grant Management </li>
            </Link>
            <Link to="/contact">
              <li>Contact Us </li>
            </Link>
          </ul>
          <div className="social-icons-container flex flex-row items-center justify-center gap-[12px]">
            <div className="circle-in-icons border rounded-[50%] border-gold  w-[30px] h-[30px] justify-center items-center flex  p-5 animate-bounce hover:animate-none duration-700 ease-in-out transition-shadow hover:border-rose-400 hover:transition-all hover:duration-1000 hover:ease-in-out ">
              <a
                href="https://web.facebook.com/tongstoncompany/?_rdc=1&_rdr"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-[30px] w-[20px]"
                />
              </a>
            </div>
            <div className="circle-in-icons border rounded-[50%] border-gold  w-[30px] h-[30px] justify-center items-center flex  p-5 animate-bounce hover:animate-none duration-700 ease-in-out transition-shadow hover:border-rose-400 hover:transition-all hover:duration-1000 hover:ease-in-out ">
              <a
                href="https://www.instagram.com/tongstoncompany/"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-[30px] w-[20px]"
                />
              </a>
            </div>
            <div className="circle-in-icons border rounded-[50%] border-gold  w-[30px] h-[30px] justify-center items-center flex  p-5 animate-bounce hover:animate-none duration-700 ease-in-out transition-shadow hover:border-rose-400 hover:transition-all hover:duration-1000 hover:ease-in-out ">
              <a href="https://twitter.com/tongstoncompany" target="blank">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="h-[30px] w-[20px]"
                />
              </a>
            </div>
            <div className="circle-in-icons border rounded-[50%] border-gold  w-[30px] h-[30px] justify-center items-center flex  p-5 animate-bounce hover:animate-none duration-700 ease-in-out transition-shadow hover:border-rose-400 hover:transition-all hover:duration-1000 hover:ease-in-out ">
              <a
                href="https://www.linkedin.com/company/tongston"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-[30px] w-[20px]"
                />
              </a>
            </div>
            <div className="circle-in-icons border rounded-[50%] border-gold  w-[30px] h-[30px] justify-center items-center flex  p-5 animate-bounce hover:animate-none duration-700 ease-in-out transition-shadow hover:border-rose-400 hover:transition-all hover:duration-1000 hover:ease-in-out ">
              <a
                href="https://www.youtube.com/@tongstonentrepreneurshipgr7"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="h-[30px] w-[20px]"
                />
              </a>
            </div>
          </div>
        </div>

        <section className="copyright section flex flex-col justify-center items-center text-white  font-sans  font-semibold  w-full h-[fixed] px-[6rem] ">
          <div className="undelined-area border-t  flex justify-center items-center  border-sans w-[80%] h-[fixed px-[6rem] lg:pb-9"></div>
          <br />
          <div className="items-container flex flex-col justify-center items-center gap-[12px] w-full">
            <ul className="links no-underline text-white font-sans font-semibold text-base text-center list-none  justify-center flex flex-col gap-[20px]     lg:px-6 lg:flex-row lg:gap-[32px]   ">
              <p className=" copyright-text text-[12px] text-white text-opacity-60 ">
                &copy;  {currentYear} T-ventures. All rights reserved.
              </p>
              <Link
                to="#"
                className="text-base font-sans underline font-normal text-white"
                rel="noopener noreferrer"
                onClick={() => handlePrivacy()}
              >
                Privacy Policy
              </Link>
              {showPrivacyPolicy && (
                <PrivacyPolicy onClose={() => handleClosePrivacyPolicy()} />
              )}

              <Link
                to="#"
                className="text-base font-sans underline font-normal text-white"
                rel="noopener noreferrer"
                onClick={() => handlePrivacy()}
              >
                Terms & Conditions
              </Link>
              {showPrivacyPolicy && (
                <PrivacyPolicy onClose={() => handleClosePrivacyPolicy()} />
              )}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};
export default Footer;
