import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Terms = ({ onClose }) => {
  return (
    <>
      <div className="terms-container fixed inset-0 z-50 top-[4rem] flex items-center justify-center bg-light-brown">
        <div className="absolute inset-0 opacity-75">
          <button
            onClick={() => onClose()}
            className="relative top-7 left-[8rem]   md:left-[18rem] p-2 bg-red hover:bg-gold text-white rounded-t-lg"
          >
            <FontAwesomeIcon icon={faTimes} times-icon />
          </button>

          <span className="terms-conditions-heading flex flex-col justify-center items-center">





            
          </span>
        </div>
      </div>
    </>
  );
};
export default Terms;
