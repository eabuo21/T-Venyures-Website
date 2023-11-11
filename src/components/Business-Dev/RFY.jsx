import React from "react";
import RFYCards from "../../components/Business-Dev/RFYCards/Cards";

const Right = () => {
  return (
    <>
      <div className="  w-full h-[fixed]   md:h-[fixed] ">
        <div className="items-container flex flex-col justify-start items-start  px-3  w-full gap-8   md:flex-row md:justify-evenly md:items-start">
          <div className="flex flex-col justify-start px-4  md:flex-row w-[100%]">
            <p className="text-black text-xl font-bold font-sans text-left">
              ARE WE RIGHT FOR YOU?
            </p>
          </div>

          <div className=" flex flex-col px-3            md:w-[2000px]  md:pl-[6rem] ">
            <p className="text-black font-sans font-normal text-base     md:text-xl    ">
              At Tongston, we offer a diverse range of services designed to
              support individuals, businesses, and governments at every stage of
              their journey. From early-stage advisory to project planning,
              pre-feasibility studies, procurement, and development impact
              assessment, we're here to guide you towards success
            </p>
          </div>
        </div>
        <br />

        <section className="facts-invested flex flex-col px-3      md:flex-row md:justify-between md:gap-[6rem]">
          <div className=" flex flex-col px-3 py-4">
            <p className="text-primaryBlue font-sans text-xl  font-semibold    md:text-[40px] ">
              +$22k Invested
            </p>
            <p className="text-black font-sans text-base  font-normal pt-2">
              in Career and Business Development Globally
            </p>
          </div>

          <div className=" flex flex-col px-3 py-4">
            <p className="text-primaryBlue font-sans text-xl  font-semibold    md:text-[40px] ">
              2000+
            </p>
            <p className="text-black font-sans text-base  font-normal pt-2">
              Equipped Globally with Entrepreneurial Education
            </p>
          </div>
        </section>
        <hr className="  w-[80%] md:w-[95%] border-spacing-3  bg-black h-[2px] snap-center ml-8 pr-4   "></hr>
        <br />

        {/*demo section*/}
        <section className="more-impact-section px-6 pb-8">
          <div className=" flex flex-col pb-8">
            <p className="text-black font-sans font-normal text-base     md:text-xl    ">
              We actively work with Management of Businesses & Governments to
              define & drive successful path to attain Value, Influence &
              Profitability <em>(Entrepreneurial Thinking).</em> Our financial
              solutions are integrated with our world-class Media, Enterprise &
              Education solutions designed to transform our nvestees into
              Valuable, Influential & Profitable brands:
            </p>
          </div>
          <RFYCards />
        </section>
      </div>
    </>
  );
};
export default Right;
