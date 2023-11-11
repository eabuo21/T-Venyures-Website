// eslint-disable-next-line no-unused-vars
import React from "react";
import machine from "../../assets/images/investment/machine.svg";
import strategy from "../../assets/images/investment/strategy.png";
import strategysm from "../../assets/images/investment/strategyMobile.png";

function InvestmentStrategy() {
  return (
    <div className="py-8 px-4">
      {" "}
      <h2 className="text-lg font-bold text-red mb-4">INVESTMENT STRATEGY</h2>
      <div className="flex flex-col gap-2 md:flex-row justify-end items-center">
        <div className="md:w-1/2">
          <div className="md:flex md:flex-col md:gap-2">
            <img src={machine} alt="machine" className="w-[320px] h-[280px]" />
            <h3 className="text-2xl lg:text-3xl">
              Unlocking Value, Influence & Profitability through High Impact
              Investments in People, Institutions & Governments
            </h3>
          </div>
        </div>
        {/* <div className="md:w-1/2 flex justify-end md:flex-row-reverse relative">
          <img
            src={strategy}
            alt="machine"
            className="md:w-full md:h-auto"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <img
            src={strategysm}
            alt="machine"
            className="block md:w-full md:h-auto md:hidden"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 w-16 md:w-32"
            style={{
              background:
                "linear-gradient(to right, rgba(255, 165, 0, 0.8), transparent)",
            }}
          ></div>
        </div> */}
        <div className="md:w-1/2  md:flex-row md:justify-center md:items-center">
          <img
            src={strategy}
            alt="machine"
            className="hidden md:block md:w-full md:h-auto"
          />
          <img
            src={strategysm}
            alt="machine"
            className="block md:w-full md:h-auto md:hidden"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default InvestmentStrategy;
