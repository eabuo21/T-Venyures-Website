import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApplyNow from "../../../components/forms/Investing-Forms/ApplyNow";

const ModalInstruction = ({ onClose }) => {
  const [showapplynow, setShowApplyNow] = useState(false);
  const handleApply = () => {
    setShowApplyNow(true);
  };
  const handleCloseApplyNow = () => {
    setShowApplyNow(false);
  };

  const handleDownload = () => {
    //here we create a virtual link to the file of which to be downloaded
    const a = document.createElement("a");
    a.href =
      "src/assets/downloadableassets/T-Ventures Business Plan Pitch Deck.pptx ";
    a.download = "T-Ventures Business Plan Pitch Deck.pptx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <div className="form-container fixed inset-0 z-50 flex items-center justify-center bg-transparent">
        <div className="absolute inset-0 bg-gray-300 opacity-25  "></div>
        <div
          data-aos="fade-in"
          data-aos-duration="3000"
          data-aos-easing="ease-out-cubic"
          data-aos-mirror="true"
          data-aos-once="true"
          className="relative top-8 bg-white rounded-lg px-8 py-6 w-[500px] h-[fixed] md:top-12 "
        >
          <button
            onClick={() => onClose()}
            className="absolute top-2 right-0 p-2 py-2 mx-2 bg-white text-red rounded-sm hover:bg-red text-3xl hover:text-white transition-all ease-in-out hover:transition-all hover:ease-in-out duration-300 hover:duration-300 "
          >
            <FontAwesomeIcon
              icon={faTimes}
              times-icon
              className="w-[50px]   transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out  hover:duration-300"
            />
          </button>
          <div className="form-structure flex justify-center items-center text-red text-2xl font-bold font-sans pb-5">
            Guide!
          </div>
          <div className="contents-container w-full h-auto mx-2 p-2 flex flex-col justify-normal bg-gold ">
            <p className="font-black "> </p>

            <p className=" text-black font-sans font-normal text-sm text-left tracking-wide    md:text-base">
              All investments are screened against the relevant &nbsp;
              <a
                href="https://drive.google.com/file/d/16wDSKt27oIxtNafOwBmGoW1LNqbXnfPf/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-red"
              >
                Eligibility Criteria/Investment Strategy{" "}
              </a>
              &nbsp; and &nbsp;
              <a
                href="https://drive.google.com/file/d/1Zk-hDbyKrcqZBaDcgqIVQ9DDrf0_55fM/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-red"
              >
                Tongston’s Exclusion List.
              </a>
              <strong>
                <span className="">
                  Please download, fill and submit the Tongston Entrepreneurial
                  Thinking Business Plan Pitch Deck with any associated
                  information that will allow us to
                </span>
              </strong>
            </p>

            <ul className="list-disc mt-2 text-[10px] px-4 md:text-sm">
              <li>
                {" "}
                Assess your business against the relevant eligibility criteria
                depending on the nature of your business, and the exclusion
                list.
              </li>

              <li>
                {" "}
                Assess the potential or existing financial / commercial return
                from investment in your business.
              </li>

              <li>
                {" "}
                Assess the businesses’ existing or potential social return /
                impact aligned with the UN SDGs and IRIS+ metrics.
              </li>
            </ul>

            <p className="text-[10px] font-cur font-bold tracking-wider text-blue-800  px-3 transition-all ease-in-out duration-700 md:text-sm">
              Complete the Tongston Entrepreneurial Thinking Business Plan Pitch
              Deck{" "}
              <button
                onClick={handleDownload}
                target="_blank"
                className="bg-none  outline-none text-blue-800 font-bold text-sm hover:text-red md:text-base"
              >
                &rarr; Download Document &larr;
              </button>
            </p>
            <button
              onClick={() => handleApply()}
              className="apply-button mt-2  p-3 justify-center items-center flex text-white font-bold hover:text-white hover:font-bold bg-red  hover:bg-rose-400 transition-colors ease-in-out duration-700 hover:transition-colors  hover:ease-in-out hover:duration-700 mx-9"
            >
              Click here to Apply
            </button>
            {showapplynow && <ApplyNow onClose={() => handleCloseApplyNow()} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalInstruction;
