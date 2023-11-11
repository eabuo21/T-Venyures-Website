{
  /*
  
  import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Terms from "../../../components/T&C/T-C-NN/TCNE";
import TCN from "../../../components/T&C/T-C-NN/TCNN";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../Notification/Notification";

const ApplyNow = ({ onClose }) => {
  const [showTerms, setShowTerms] = useState(false);
  const handleTermsConditions = () => {
    setShowTerms(true);
  };
  const [showTCM, setShowTCM] = useState(false);
  const handleNoneNigerian = () => {
    setShowTCM(true);
  };

  const handleCloseTCM = () => {
    setShowTCM(false);
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); //update the current calendar date every one second

    return () => {
      clearInterval(timer); //clear up the timer when the  component on mounts
    };
  }, []);

  const [email, setEmail] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [org, setOrg] = useState("");
  const [sector, setSector] = useState("");
  const [how, setHow] = useState("");
  const [request, setRequest] = useState("");
  const [fileData, setFileData] = useState(null);
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

   // prepare file data to pass to email template
let fileDataParameter = null;
if (fileData) {
  // Set the current id (CID) & file data
  fileDataParameter = {
    name: fileData.name,
    type: fileData.type,
    data: fileData,
    cid: "my-file", // must match with the email template on your dashboard
  };
}


    // send email using emailjs
    const templateParams = {
      email: email,
      fname: fname,
      lname: lname,
      org: org,
      sector: sector,
      how: how,
      request: request,
      sector: sector,
      fileData: fileData,
      number: number,

      checked: checked,
    };

    emailjs
      .send(
        //the following parameters are for you to replace appropriately with your email service info.
        "service_z3uzwhg",
        "template_38oyvq8",
        templateParams,
        //api key
        "CDmJ3huYpinZb0wEA"
      )
      .then((response) => {
        //here we clear the form inputs after the submission is made.
        setLoading(false);
        showSuccessNotification("Application Sent");
        setEmail("");
        setFName("");
        setLName("");
        setOrg("");
        setSector("");
        setHow("");
        setRequest("");
        setFileData(null);
        setNumber("");

        setChecked(false);
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("Application Failed, Please try again");
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileData(file); //store the file object itself
    const reader = new FileReader();
    reader.onload = () => {
      const data = {
        name: file.name,
        type: file.type,
        data: reader.result,
      };
      setFileData(data);
    };
    reader.readAsDataURL(file);
  };

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
          className="relative top-9 bg-white rounded-lg px-8 py-6 w-[600px] h-[fixed]"
        >
          <button
            onClick={() => onClose()}
            className="absolute top-0 right-0 p-2 bg-white text-red hover:bg-red  hover:text-white transition-all ease-linear hover:transition-all hover:ease-in-out duration-1000 hover:duration-1000 "
          >
            <FontAwesomeIcon
              icon={faTimes}
              times-icon
              className="w-[50px]  hover:rotate-45 transition-all ease-in-out duration-700 hover:transition-all hover:ease-in-out  hover:duration-1000"
            />
          </button>
          <div className="form-structure flex justify-center items-center text-red text-xl font-bold font-sans pb-5">
            Apply Now !
          </div>
          <form
            onSubmit={handleSubmit}
            className="form-inputs flex flex-row flex-wrap  justify-center items-center gap-6 "
          >
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
              type="text"
              placeholder=" First Name"
              required
              value={fname}
              onChange={(e) => setFName(e.target.value)}
            />

            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
              type="text"
              placeholder=" Last Name"
              required
              value={lname}
              onChange={(e) => setLName(e.target.value)}
            />

            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
              type="email"
              placeholder=" Email "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="tel"
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
              value={number}
              placeholder="phone number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
              value={org}
              placeholder="Name of Organization"
              onChange={(e) => setOrg(e.target.value)}
            />

        
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
            >
              <option value="" disabled> Sector</option>
            </select>

            <select
              value={how}
              onChange={(e) => setHow(e.target.value)}
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-full"
            >
              <option value="" disabled>
                {" "}
                How did you hear about us
              </option>
              <option value="facebook"> Facebook</option>
              <option value="Instagram"> Instagram</option>
              <option value="X-formally-Twitter"> X-formally-Twitter</option>
              <option value="Linkedin"> Linkedin</option>
              <option value="Email"> Email</option>
              <option value="Company Website "> Company Website</option>
            </select>

            <label className="text-red font-normal font-sans text-left w-full text-sm">
              {" "}
              Upload filled version of the downloaded Document:
            </label>
            <input
              type="file"
              placeholder=" Upload filled version of the downloaded Document:"
              className="w-full"
              id="fileInput"
              accept=" .pptx,"
              onChange={handleFileChange}
            />

            {/*let this  comment stay for now*
            <label
              htmlFor="terms"
              className="text-sm font-sans text-black text-center"
            >
              <input
                type="checkbox"
                id="terms"
                value={checked}
                checked={checked}
                onChange={() => setChecked(!checked)}
                className=" cursor-pointer"
              />
              <span className="ml-1">
                I have read, understood and accepted the
              </span>{" "}
              <Link
                to="#"
                onClick={() => handleTermsConditions()}
                className="text-blue-700 underline hover:text-rose-400  transition-color eas-in-out hover:transition-colors duration-1000"
                rel="noopener noreferrer"
              >
                Nigerian entities,
              </Link>{" "}
              <Link
                to="#"
                onClick={() => handleNoneNigerian()}
                className="text-blue-700 underline hover:text-rose-400 transition-color eas-in-out hover:transition-colors duration-1000"
                rel="noopener noreferrer"
              >
                non Nigerian entities
              </Link>
              {showTCM && <TCN onClose={() => handleCloseTCM()} />}
              {showTerms && <Terms onClose={() => handleCloseTerms()} />}
              <span className="mx-1">in Your Non-Disclosure Agreement</span>
            </label>

            <div className="flex  flex-col gap-2 justify-center items-center">
              <p className="text-black font-sans font-bold text-base">
                {currentDate.toLocaleString()}
              </p>
              <button
                className={`submit-button bg-red text-white rounded w-[300px] h-[50px] hover:bg-gold hover:text-white hover:transition-all ease-in-out hover:duration-1000 transition-all  duration-1000 ${
                  !checked &&
                  "opacity-50 cursor-not-allowed hover:bg-red hover:opacity-50 "
                }`}
                type="submit"
                disabled={!checked}
              >
                {loading ? (
                  <b className="animate-pulse"> Processing Application...</b>
                ) : (
                  <b>Proceed </b>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyNow;
*/
}



//Google forms embed function

import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ApplyNow = ({ onClose }) => {
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
              src="https://docs.google.com/forms/d/e/1FAIpQLSdhWELEwskxccnWYI869nCEzaosyA13tOCTPJffOkL_H1nDwA/viewform?embedded=true"
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
            <FontAwesomeIcon icon={faTimes} times-icon className="w-[70px]" />
          </button>
        </div>
      </div>
    </>
  );
};
export default ApplyNow;
