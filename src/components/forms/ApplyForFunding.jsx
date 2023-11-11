{/*
  import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import Terms from "../../components/T&C/T-C-NN/TCNE";
import TCN from "../../components/T&C/T-C-NN/TCNN";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../components/Notification/Notification";

const ApplyFunding = ({ onClose }) => {
  const [showTerms, setShowTerms] = useState(false);

  const [email, setEmail] = useState("");
  const [namee, setNameE] = useState("");
  const [contactp, setContactP] = useState("");
  const [contactpr, setContactPR] = useState("");
  const [locatione, setLocationE] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [years, setYears] = useState("");
  const [fileData, setFileData] = useState(null);
  const [checked, setChecked] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(true);
  const[loading, setLoading] = useState(false);

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

  const handleCheck = () => {
    setChecked(!checked);
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // prepare file data to pass to email template
    let fileDataParameter = null;
    if (fileData) {
      //set the current id (CID) & file name

      fileDataParameter = {
        name: filename,
        type: fileData.type,
        data: fileData,
        cid: "my-file", //must match with rhe email template on your dashboard
      };
    }

    // send email using emailjs
    const templateParams = {
      email: email,
      namee: namee,
      contactp: contactp,
      contactpr: contactpr,
      locatione: locatione,
      dropdown: dropdown,
      years: years,
      fileData: fileDataParameter, //include the file data
      checked: checked,
      submitClicked: submitClicked,
    };

    emailjs
      .send(
        //the following parameters are for you to replace appropriately with your email service info.
        "service_z3uzwhg", //service ID goes here
        "template_6ghc46a", //Template ID goes here
        templateParams,
        "CDmJ3huYpinZb0wEA" //API key goes here
      )
      .then((response) => {
        setLoading(false);
         showSuccessNotification("Application Sent");
        setNameE("");
        setEmail("");
        setContactP("");
        setContactPR("");
        setLocationE("");
        setDropdown("");
        setYears("");
        setFileData(null); //initialize the file input to empty
        setChecked(false);
        setSubmitClicked(false);
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
      <div className="form-container fixed inset-0  flex items-center justify-center bg-transparent ">
        <div className="    absolute inset-0 bg-gray-500 opacity-75"></div>
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          data-aos-easing="ease-out-cubic"
          data-aos-mirror="true"
          data-aos-once="true"
          className=" apply-form relative top-10 bg-white  rounded-lg px-8 py-2  w-[600px] h-[fixed] "
        >
          <button
            onClick={() => onClose()}
            className="absolute top-0 right-0 p-2 bg-white text-red hover:bg-red hover:text-white transition-all ease-linear hover:transition-all hover:ease-in-out duration-1000 hover:duration-1000 rounded-lg"
          >
            <FontAwesomeIcon
              icon={faTimes}
              times-icon
              className="w-[50px] hover:rotate-45 transition-all ease-in-out duration-700 hover:transition-all hover:ease-in-out  hover:duration-1000"
            />
          </button>
          <div className="form-structure flex justify-center items-center text-red text-sm font-bold font-sans pb-5  md:text-base">
            Apply For Funding
          </div>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="form-inputs flex flex-row flex-wrap gap-6 justify-center items-center"
          >
            <input
              className="outline-none h-[25px] rounded-lg border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder="Name of Enterprise"
              value={namee}
              name="name"
              id="text"
              onChange={(event) => setNameE(event.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="email"
              placeholder="Email Address"
              value={email}
              name="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder="Contact Person"
              value={contactp}
              name="contactp"
              id="text"
              onChange={(event) => setContactP(event.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder="Contact Person’s Role"
              value={contactpr}
              name="contactpr"
              id="text"
              onChange={(event) => setContactPR(event.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder="Location of Enterprise"
              value={locatione}
              name="locatione"
              id="text"
              onChange={(event) => setLocationE(event.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder="Number of Years in Operation"
              value={years}
              name="years"
              id="text"
              onChange={(event) => setYears(event.target.value)}
              required
            />
            <div className=" flex flex-col gap-4">
              <select
                className="outline-none h-[25px] rounded-lg border-gold border-0 border-b w-[45%] text-sm  font-sans text-dark bg-grey"
                value={dropdown}
                name="dropdown"
                id="select"
                onChange={(event) => setDropdown(event.target.value)}
                required
              >
                <option value="" disabled>
                  Sector of Focus
                </option>

                <option
                  value="Tongston -Media"
                  className="font-normal text-base"
                >
                  Media
                </option>

                <option
                  value="Tongston -Data & Economics"
                  className="font-normal text-base"
                >
                  Data & Research
                </option>
                <option
                  value="Tongston -Finance"
                  className="font-normal text-base"
                >
                  Finance
                </option>

                <option
                  value="Tongston -Information-Technology"
                  className="font-normal text-base"
                >
                  Education
                </option>

                <option value=" Technology" className="font-normal text-base">
                  Technology
                </option>

                <option value="Accounting" className="font-normal text-base">
                  Accounting
                </option>

                <option
                  value="  Legal & Governance"
                  className="font-normal text-base"
                >
                  Legal & Governance
                </option>

                <option
                  value=" Business Dev & Advisory"
                  className="font-normal text-base"
                >
                  Business Dev & Advisory
                </option>
              </select>

              <label className="text-sm" htmlFor="fileInput ">
                Upload supporting document(s) and merge them if you're
                submitting multiple files.{" "}
              </label>
              <input
                type="file"
                id="fileInput"
                name="fileData"
                accept=".doc, .pdf, .docx"
                onChange={handleFileChange}
              />

              <label
                htmlFor="terms"
                className="text-sm font-sans text-black text-center"
              >
                <input
                  type="checkbox"
                  id="terms"
                  value="check this box"
                  checked={checked}
                  onChange={() => handleCheck()}
                  className="cursor-pointer "
                />
                <span className="ml-1">
                  I have read, understood and accepted the terms & conditions
                </span>{" "}
                <Link
                  to="#"
                  onClick={() => handleTermsConditions()}
                  className="text-blue-700 underline hover:text-rose-400 transition-color eas-in-out hover:transition-colors duration-1000"
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
            </div>

            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="text-black font-pap font-bold">
                {currentDate.toLocaleString()}
              </p>
              <button
                className={`submit-button  bg-red text-white rounded w-[300px] h-[50px] hover:bg-gold hover:text-white hover:transition-all ease-in-out hover:duration-1000 transition-all duration-1000 ${
                  !checked && "opacity-50 cursor-not-allowed"
                }`}
                type="submit"
                disabled={!checked}
              >
               {loading ? <b> Applying...</b> : <b>Apply </b>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyFunding;
*/}




//Google forms embedded in this code bellow to be replaced once file attachment with email js is figured out

import React, {useState, useEffect} from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ApplyFunding = ({ onClose }) => {

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
export default ApplyFunding;



