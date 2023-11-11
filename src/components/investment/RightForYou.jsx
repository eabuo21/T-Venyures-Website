import React from "react";
import NumberCounter from "./NumberCounter";

const investments = [
  {
    header: "WHY?",
    paragraph:
      " With over 100 years of collective experience in Africa, we have a track record of successful investment execution, including 10+ investments and 3 exits.",
  },
  {
    header: "WHAT?",
    paragraph:
      "We prioritize comprehensive development, focusing on the personal, professional & public growth of the management teams and businesses we support.",
  },
  {
    header: "HOW?",
    paragraph:
      "We employ an ecosystem-centric model, providing integrated services that go beyond financial support - entrepreneurial education to workspaces, enterprise & media solutions. The goal is to transform our investees into valuable, influential, and profitable brands, contributing to socio-economic sustainability in Africa.",
  },
];

function RightForYou() {
  return (
    <>
      <div className="flex mb-3 flex-col gap-6 justify-center  md:flex-row pt-4">
        <div className="flex-1 mt-4">
          <h2 className="text-xl font-bold">ARE WE RIGHT FOR YOU?</h2>
        </div>
        <div className="flex flex-col text-secondary-100 flex-1 text-[16px] font-normal leading-8 justify-end items-end md:text-xl">
          <p className="mb-4">
            Tongston invests in a diverse array of sectors, from education to
            real estate, using multiple financial instruments. The firm also
            supports intrapreneurs` development, securing such investments
            against job placements and qualifications.
          </p>
          <p>
            Through its own funds and third-party management, Tongston links
            entrepreneurs to capital and expertise, aiming to foster growth at
            personal, enterprise, and societal levels while boosting brand
            influence.
          </p>
        </div>
      </div>
      <hr className="my-4  border-hrLine" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-28 py-5 px-4 items-baseline">
        {investments.map((info, index) => (
          <div key={index} className="flex flex-col gap-2 md:gap-5">
            <h1 className="flex text-2xl lg:text-[40px] font-semibold text-primaryBlue gap-2 2xl:text-[48px]">
              {/* <span>
                <NumberCounter
                  start={0}
                  end={info.number}
                  duration={2000}
                  sign={info.sign}
                />
              </span> */}
              {info.header}
            </h1>
            <p className="text-[16px] text-secondary-100 font-normal md:w-[90%]">
              {info.paragraph}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default RightForYou;
