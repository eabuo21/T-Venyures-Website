import React, {useState, useEffect} from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyModal = ({ onClose }) => {

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); //update the current calendar date every one second

    return () => {
      clearInterval(timer); //clear up the timer when the  component on mounts
    };
  }, []);



  return (
    <>
      <div className="form-container fixed inset-0 z-50 flex items-center justify-center bg-transparent">
        <div className="absolute inset-0 bg-gray-300 opacity-75  "></div>
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          data-aos-easing="ease-out-cubic"
          data-aos-mirror="true"
          data-aos-once="true"
          className="relative top-9 bg-white rounded-lg px-8 py-6 w-[600px] h-[fixed] flex flex-col justify-center items-center"
        >

                  <div className="iframe-container sm:w-full sm:h-[300px]   sm:ml-[4rem] sm:mr-[4rem]            md:w-full md:h-[400px] ">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfMWUEibRptBDbjFrszWBVqp-8Mwk4CMxlMto0el8XXicV7-g/viewform?embedded=true"
            width="400"
            height="434"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="ml-[4rem] mr-[4rem]"
          >
            Loading…
                  </iframe>
                  </div>
                  
                 <p className="text-black font-sans font-bold text-base relative bottom-[2rem] md:bottom-[6rem]   md:text-2xl">
                {currentDate.toLocaleString()}
                  </p>
                            <button
            onClick={() => onClose()}
            className="  text-3xl top-0 right-0 p-2 py-2 mx-2 bg-red text-white   hover:text-black  rounded-[50%] w-10    justify-center items-center flex "
          >
            <FontAwesomeIcon
              icon={faTimes}
              times-icon
              className="w-[70px]"
            />
                  </button>
        </div>
      </div>
    </>
  );
};
export default MyModal;
