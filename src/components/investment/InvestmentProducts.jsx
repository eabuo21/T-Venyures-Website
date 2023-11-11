import React, { useState } from "react";
import Request from "../forms/Investing-Forms/RequestInfo";
import ModalLayer from '../../components/forms/Investing-Forms/Modal1';

const investmentProducts = [
  {
    color: "#12B76A",
    title: "Grants (Repayable & Non-repayable)",
    buttonText1: "Apply Now",
    buttonText2: "Request More Info",
  },
  {
    color: "#FBDD74",
    title: "Equity",
    buttonText1: "Apply Now",
    buttonText2: "Request More Info",
  },
  {
    color: "#9747FF",
    title: "Quasi-Equity",
    buttonText1: "Apply Now",
    buttonText2: "Request More Info",
  },
  {
    color: "#A8F0D3",
    title: "Convertible Debt",
    buttonText1: "Apply Now",
    buttonText2: "Request More Info",
  },
  {
    color: "#FF7F50",
    title: "Media Services",
    buttonText1: "Apply Now",
    buttonText2: "Request More Info",
  },
  {
    color: "#1D1D1D",
    title: "Entrepreneurial Education ",
    buttonText1: "Apply Now",
    buttonText2: "Request More Info",
  },
  {
    color: "#2069f7",
    title: "Enterprise Services",
    buttonText1: "Apply Now",
    buttonText2: "Request More Info",
  },
];

function InvestmentProducts() {
  const [showRequest, setShowRequest] = useState(false);
  const handleRequestInfo = () => {
    setShowRequest(true);
  };

  const handleCloseRequest = () => {
    setShowRequest(false);
  };

  const [showModalLayer, setShowModalLayer] = useState(false);
  const handleApplyNow = () => {
    setShowModalLayer(true);
  };

  const HandleCloseModalLayer = () => {
    setShowModalLayer(false);
  };

  return (
    <div className=" investment-products-section">
      <div className="flex justify-between py-6">
        <h1 className="text-red uppercase text-[20px] font-bold">
          INVESTMENT Products
        </h1>
        {/* <button className="bg-white hover:bg-gray-100 text-red font-semibold py-2 px-4 border border-red shadow">
          see them all
        </button> */}
      </div>
      <div className="overflow-y-scroll h-[600px] md:h-[400px] ">
        {investmentProducts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3  md:flex-row justify-between border-y-2 border-y-[#1B1425] py-4 md:py-6"
          >
            <div className="flex flex-col gap-3 items-center justify-center md:flex-row md:gap-6 ">
              <span
                className="w-4 h-4 rounded-full inline-block"
                style={{ backgroundColor: item.color }}
              ></span>
              <h3 className="font-bold text-lg text-center md:text-left">
                {item.title}
              </h3>
            </div>

            <div className="flex items-center  gap-2 flex-col md:flex-row md:gap-10 justify-center md:items-center md:mt-0">
              <button onClick={()=> handleApplyNow()}
                className="bg-red text-white font-bold py-2 px-4 rounded-sm">
                {item.buttonText1}
              </button>
              {showModalLayer && <ModalLayer onClose={()=> HandleCloseModalLayer()}/>}

              <button
                onClick={() => handleRequestInfo()}
                className="bg-white hover:bg-gray-100 text-red font-semibold py-2 px-4 border border-[#DC0404] shadow"
              >
                {item.buttonText2}
              </button>
              {showRequest && <Request onClose={() => handleCloseRequest()} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InvestmentProducts;
