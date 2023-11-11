import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Focus1 from "../../../assets/images/landingpage/focus1.png";
import Focus2 from "../../../assets/images/landingpage/focus2.png";
import Focus3 from "../../../assets/images/landingpage/focus3.png";
import Agriculture from "../../../assets/images/landingpage/agriculture.png";
import Businessdev from "../../../assets/images/landingpage/b-zdev.png";
import Business from "../../../assets/images/landingpage/business.png";
import Data from "../../../assets/images/landingpage/data.png";
import Legal from "../../../assets/images/landingpage/legal.png";
import Logic from "../../../assets/images/landingpage/logistics.png";
import Tech from "../../../assets/images/landingpage/technology.png";
import Coms from "../../../assets/images/landingpage/telcoms.png";
import Trade from "../../../assets/images/landingpage/trade.png";
import Account from "../../../assets/images/landingpage/account.png";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    adaptiveHeight: false,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    useCss: true,
    useTransform: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div className="custom-dot  flex justify-normal items-center hover:border-2 hover:border-red  "></div>
      );
    },
  };

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="slick-prev bg-rose-400 w-10 h-8 rounded-lg hover:bg-black hover:text-white focus:bg-gold focus:text-white"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="slick-next bg-rose-400 w-10 h-8 rounded-lg hover:bg-black hover:text-white focus:bg-gold focus:text-white"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  }

  return (
    <div className="main-slider-container p-8 flex flex-row justify-center items-center bg-light-brown">
      <Slider
        {...settings}
        className="w-full h-[150px] flex flex-row justify-start items-start gap-2 md:gap-9 md:justify-center md:items-center md:h-[300px] md:w-[90%]"
      >
        {/* Slide 1 */}
        <div className="flex flex-col rounded-lg px-5 md:w-[200px] md:h-[fixed]">
          <img
            src={Focus1}
            className="w-[400px] h-[50%] md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 md:shadow-current md:shadow-2xl w-[fixed] rounded-b-lg">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2 rounded-b-sm md:text-base">
              Education
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex flex-col rounded-lg px-5 md:w-[200px] md:h-[fixed]">
          <img
            src={Focus2}
            className="w-[400px] h-[50%] md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 w-[fixed] rounded-b-lg md:shadow-current md:shadow-2xl">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2 rounded-b-sm md:text-base">
              Financial Services
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex flex-col rounded-lg px-5 md:w-[200px] md:h-[fixed]">
          <img
            src={Focus3}
            className="w-[400px] h-[50%] md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 w-[fixed] rounded-b-lg    md:shadow-current md:shadow-2xl  ">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2 rounded-b-sm md:text-base">
             Health & Life Sciences
            </p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="flex flex-col rounded-lg px-5 md:w-[200px] md:h-[fixed]">
          <img
            src={Agriculture}
            className="w-[400px] h-[50%] md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 w-[fixed] rounded-b-lg    md:shadow-current md:shadow-2xl  ">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2 rounded-b-sm md:text-base">
              Agriculture
            </p>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="flex flex-col rounded-lg px-5 md:w-[200px] md:h-[fixed]">
          <img
            src={Businessdev}
            className="w-[400px] h-[50%] md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 w-[fixed] rounded-b-lg    md:shadow-current md:shadow-2xl  ">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2 rounded-b-sm md:text-base">
              Sales & Business Development
            </p>
          </div>
        </div>

        {/*slide3 */}
        <div className="  flex flex-col   rounded-lg px-5    md:h-[fixed] md:w-[fixed]">
          <img
            src={Data}
            className="w-[400px] h-[50%]                         md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 w-[fixed rounded-b-lg    md:shadow-current md:shadow-2xl  ">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2  rounded-b-sm md:text-base">
              Data & Research
            </p>
          </div>
        </div>

        <div className="  flex flex-col   rounded-lg px-5    md:h-[fixed] md:w-[fixed]">
          <img
            src={Tech}
            className="w-[400px] h-[50%]                         md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 w-[fixed rounded-b-lg    md:shadow-current md:shadow-2xl  ">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2  rounded-b-sm md:text-base">
              Technology
            </p>
          </div>
        </div>

        <div className="  flex flex-col   rounded-lg px-5    md:h-[fixed] md:w-[fixed]">
          <img
            src={Legal}
            className="w-[400px] h-[50%]                         md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 w-[fixed rounded-b-lg    md:shadow-current md:shadow-2xl  ">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2  rounded-b-sm md:text-base">
              Legal & Governance
            </p>
          </div>
        </div>

        {/*slide4 */}
        <div className="  flex flex-col   rounded-lg px-5    md:h-[fixed] md:w-[fixed]">
          <img
            src={Trade}
            className="w-[400px] h-[50%]                         md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 w-[fixed rounded-b-lg    md:shadow-current md:shadow-2xl  ">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2  rounded-b-sm md:text-base">
              Trade & Industry
            </p>
          </div>
        </div>
        <div className="  flex flex-col   rounded-lg px-5    md:h-[fixed] md:w-[fixed]">
          <img
            src={Coms}
            className="w-[400px] h-[50%]                         md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 w-[fixed rounded-b-lg    md:shadow-current md:shadow-2xl  ">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2  rounded-b-sm md:text-base">
              Telecoms & Media
            </p>
          </div>
        </div>
        <div className="  flex flex-col   rounded-lg px-5    md:h-[fixed] md:w-[fixed]">
          <img
            src={Logic}
            className="w-[400px] h-[50%]                         md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 w-[fixed rounded-b-lg    md:shadow-current md:shadow-2xl  ">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2  rounded-b-sm md:text-base">
              Logistics & Storage
            </p>
          </div>
        </div>

        <div className="  flex flex-col   rounded-lg px-5    md:h-[fixed] md:w-[fixed]">
          <img
            src={Account}
            className="w-[400px] h-[50%]                         md:w-[400px] md:h-[200px] rounded-t-md"
          />
          <div className="bg-gray-100 w-[fixed rounded-b-lg    md:shadow-current md:shadow-2xl  ">
            <p className="text-black font-sans text-[10px] font-normal text-left py-4 px-2  rounded-b-sm md:text-base">
              Accounting
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
