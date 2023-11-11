import React, { useState } from "react";

const InvestmentP = [
  {
    id: "01",
    title: "Pre-screening/Eligibility Check",
    text: "All investments are screened against the relevant eligibility criteria and against our Exclusion List",
  },
  {
    id: "02",
    title: "Application  & 1st Level Screening",
    text: "We assess financial returns and impact aligned with UN SDGs & IRIS+ metrics through interviews, site visits, to guide our portfolio management.",
  },
  {
    id: "03",
    title: "Management Approval",
    text: "The due diligence findings will used to structure the deal, assess the portfolio risk, and finalize the legal documentation.",
  },
  {
    id: "04",
    title: "Due Diligence",
    text: "We submit comprehensive financial, legal, tax, technical, commercial, and E&S assessments to the Investment Committee (IC).",
  },
  {
    id: "05",
    title: "Investment Committee",
    text: "The due diligence findings will used to structure the deal, assess the portfolio risk, and finalize the legal documentation.",
  },
  {
    id: "06",
    title: "Documentation & Disbursement",
    text: "Once the IC approves the deal, we draft the final legal documentation and proceed with disbursement upon their review and approval.",
  },
];

function InvestmentProcess() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseOver = (id) => {
    setHoveredCard(id);
  };

  const handleMouseOut = () => {
    setHoveredCard(null);
  };
  return (
    <div>
      <hr className="my-4 border-hrLine" />
      <div className="pt-5">
        <h1 className="text-red text-xl font-bold">OUR INVESTMENT PROCESS</h1>
      </div>
      <div className="pb-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-28 py-8 px-4">
          {InvestmentP.map((process) => (
            <div
              key={process.id}
              onMouseOver={() => handleMouseOver(process.id)}
              onMouseOut={handleMouseOut}
              className={`relative flex flex-col justify-center items-center cursor-pointer text-black transition-all duration-500  ${
                hoveredCard === process.id ? "translate-y-[-5px]" : ""
              }`}
            >
              <h1
                className={`text-[85px] hover:text-red  transition-all  ${
                  hoveredCard === process.id ? "translate-y-[-15px]" : ""
                }`}
              >
                {process.id}
              </h1>
              <span className="mb-2 rounded-full bg-primaryBlue w-[10px] h-[10px]"></span>
              <p className="text-lg mb-2 hover:text-red  text-center font-medium">
                {process.title}
              </p>
              <p
                className={`text-sm  text-center font-normal md:mt-3 ${
                  hoveredCard === process.id
                    ? "hidden md:block"
                    : "lg:hidden block"
                }`}
              >
                {process.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-4 border-hrLine" />
    </div>
  );
}

export default InvestmentProcess;
