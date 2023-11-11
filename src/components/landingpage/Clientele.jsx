import React from "react";
import Client1 from "../../assets/images/clientel/client1.png";
import Client2 from "../../assets/images/clientel/client2.png";
import Client3 from "../../assets/images/clientel/client3.png";
import Client4 from "../../assets/images/clientel/client4.png";
import Client5 from "../../assets/images/clientel/client5.png";
import Client6 from "../../assets/images/clientel/client6.jpeg";
import Client7 from "../../assets/images/clientel/client7.png";
import Client8 from "../../assets/images/clientel/client8.png";
import Client9 from "../../assets/images/clientel/client9.png";

const Clientele = () => {
  return (
    <>
      <div className="clientele-container flex flex-col py-1 px-2 mb-4">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
          data-aos-once="true"
          className="clientele-text-container flex flex-col text-left px-2 py-1 lg:text-left   lg:justify-normal  lg:px-7 "
        >
          <p className="red-text text-[14px] text-left font-bold font-sans text-red px-2 py-1 lg:text-[20px] lg:text-bold   md:text-[20px] md:text-bold">
            CLIENTELE
          </p>

          <span className="clients-txt font-sans  text-black text-[20px] font-normal text-left px-2 py-1 pb-6 lg:text-left   md:text-left">
            Our clientele is diverse spanning MSMEs, Educational
            <br /> Institutions, Non-profits, Government Institutions &
            Individuals.
            <br />
            We are transforming them into Valuable, Influential &
            <br />
            Profitable Entities.
          </span>
        </div>
        <div className="images-expressions flex flex-col px-1 py-1 justify-center items-center lg:flex-row lg:justify-normal lg:items-center       md:flex-row md:justify-normal md:items-center">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
            data-aos-once="true"
            className="clientele-images flex flex-row flex-wrap w-[85%] pb-6 justify-between  gap-5    lg:justify-between lg:w-[43%]  lg:h-[10%]  lg:px-4 lg:p-3 lg:relative lg:bottom-[4rem]    md:justify-evenly md:w-[85%] md:ml-[2rem] md:mr-[2rem]  "
          >
            <img
              src={Client1}
              alt="client-1"
              className="   px-1 py-1 w-[100px]   rounded-md bg-gray-100 shadow-currents         md:hover:bg-primary_yellow     md:transition-all   md:ease-in-out   md:hover:ease-in-out    md:hover:duration-700  duration-700         lg:py-4  lg:px-1  lg:w-[150px]                 md:py-4  md:w-[150px]"
            />
            <img
              src={Client2}
              alt="client-2"
              className="   px-1 py-1 w-[100px]   rounded-md  bg-gray-100 shadow-currents         md:hover:bg-primary_yellow     md:transition-all   md:ease-in-out   md:hover:ease-in-out    md:hover:duration-700  duration-700            lg:py-4  lg:px-1  lg:w-[150px]                 md:py-4 md:w-[150px] "
            />
            <img
              src={Client3}
              alt="client-3"
              className="   px-1 py-1 w-[100px]   rounded-md  bg-gray-100 shadow-currents         md:hover:bg-primary_yellow     md:transition-all   md:ease-in-out   md:hover:ease-in-out    md:hover:duration-700  duration-700            lg:py-4  lg:px-1  lg:w-[150px]                 md:py-4 md:w-[150px] "
            />
            <img
              src={Client4}
              alt="client-4"
              className="   px-1 py-1 w-[100px]   rounded-md bg-gray-100 shadow-currents         md:hover:bg-primary_yellow     md:transition-all   md:ease-in-out   md:hover:ease-in-out    md:hover:duration-700  duration-700            lg:py-4  lg:px-1  lg:w-[150px]                 md:py-4 md:w-[150px] "
            />
            <img
              src={Client5}
              alt="client-5"
              className="   px-1 py-1 w-[100px]   rounded-md bg-gray-100 shadow-currents         md:hover:bg-primary_yellow     md:transition-all   md:ease-in-out   md:hover:ease-in-out    md:hover:duration-700  duration-700            lg:py-4  lg:px-1  lg:w-[150px]                 md:py-4 md:w-[150px] "
            />
            <img
              src={Client6}
              alt="client-6"
              className="   px-1 py-1 w-[100px]   rounded-md  bg-gray-100 shadow-currents         md:hover:bg-primary_yellow     md:transition-all   md:ease-in-out   md:hover:ease-in-out    md:hover:duration-700  duration-700            lg:py-4  lg:px-1  lg:w-[150px]                 md:py-4 md:w-[150px] "
            />
            <img
              src={Client7}
              alt="client-7"
              className="   px-1 py-1 w-[100px]   rounded-md  bg-gray-100 shadow-currents         md:hover:bg-primary_yellow     md:transition-all   md:ease-in-out   md:hover:ease-in-out    md:hover:duration-700  duration-700            lg:py-4  lg:px-1  lg:w-[150px]                 md:py-4 md:w-[150px] "
            />
            <img
              src={Client8}
              alt="client-8"
              className="   px-1 py-1 w-[100px]   rounded-md  bg-gray-100 shadow-currents         md:hover:bg-primary_yellow     md:transition-all   md:ease-in-out   md:hover:ease-in-out    md:hover:duration-700  duration-700            lg:py-4  lg:px-1  lg:w-[150px]                 md:py-4 md:w-[150px] "
            />
            <img
              src={Client9}
              alt="client-9"
              className="   px-1 py-1 w-[100px]   rounded-md  bg-gray-100 shadow-currents         md:hover:bg-primary_yellow     md:transition-all   md:ease-in-out   md:hover:ease-in-out    md:hover:duration-700  duration-700            lg:py-4  lg:px-1  lg:w-[150px]                 md:py-4 md:w-[150px] "
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
            data-aos-once="true"
            className="expression-wrapper  lg:relative lg:left-[10%]  md:relative md:left-0 "
          >
            <div className="expressions  gap-8 flex flex-col ml-8 mr-8 py-5     md:ml-0 md:mr-0">
              <ul className=" list-decimal-zero font-normal">
                {/**section 1 */}
                <li className="leading-[2rem] text-black font-bold text-[18px] text-left px-1 py-1 border-t border-t-black border-opacity-20 lg:text-2xl ">
                  Investors seeking co-investment
                  <br />
                  opportunities alongside Tongston
                  <p className="list-text-1 text-black font-normal text-[16px] text-left font-sans px-1 py-1 lg:text-xl lg:leading-8 ">
                    Institutional investors, Family offices ,High net worth
                    <br />
                    individuals, retail investors
                  </p>
                </li>

                {/**section 2 */}
                <li className="leading-[2rem] text-black font-bold text-[18px] text-left px-1 py-1 border-t border-t-black border-opacity-20 lg:text-3xl ">
                  Public sector seeking Business
                  <br />
                  advisory on a consultancy basis
                  <p className="list-text-1 text-black font-normal text-[16px] text-left font-sans px-1 py-1  lg:text-xl lg:leading-8">
                    State Owned Enterprises, Government Agencies
                  </p>
                </li>
                {/**section 3 */}
                <li className="leading-[2rem] text-black font-bold text-[18px] text-left px-1 py-1 border-t border-t-black border-opacity-20 lg:text-3xl">
                  MSMEs investing in high return
                  <br />
                  Businesses through Tongston
                  <p className="list-text-1 text-black font-normal text-[16px] text-left font-sans px-1 py-1   lg:text-xl lg:leading-8">
                    Small Businesses Seeking Scale, Micro & Medium
                    <br /> Enterprises
                  </p>
                </li>
                {/**section 4 */}
                <li className="leading-[2rem] text-black font-bold text-[18px] text-left px-1 py-1 border-t border-t-black border-opacity-20 lg:text-3xl">
                  High net worth Individuals, MSMEs
                  <br />
                  investing in high return Businesses
                  <br />
                  through Tongston
                  <p className="list-text-1 text-black font-normal text-[16px] text-left font-sans px-1 py-1 lg:text-xl lg:leading-8  "></p>
                </li>
                {/**section 5 */}
                <li className="leading-[2rem] text-black font-bold text-[18px] text-left px-1 py-1 border-t border-t-black border-opacity-20 lg:text-3xl">
                  MSMEs / Businesses seeking
                  <br />
                  investment in their Enterprises
                </li>

                {/**section 5 */}
                <p className="leading-[2rem] text-black font-normal text-[18px] text-left px-1 py-1 border-t border-t-black border-opacity-20 lg:text-3xl"></p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Clientele;
