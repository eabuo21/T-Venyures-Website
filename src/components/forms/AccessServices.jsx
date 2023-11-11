import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import Terms from "../../components/T&C/T-C-NN/TCNE";
import TCN from "../../components/T&C/T-C-NN/TCNN";
import CustomDrop from "../forms/CustomDropdown2";

import {
  showErrorNotification,
  showSuccessNotification,
} from "../Notification/Notification";

const Services = ({ onClose }) => {
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
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [role, setRole] = useState("");
  const [org, setOrg] = useState("");
  const [website, setWebsite] = useState("");
  const [dropdown, setDropdown] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // send email using emailjs
    const templateParams = {
      email: email,
      name1: name1,
      name2: name2,
      role: role,
      org: org,
      website: website,
      dropdown: dropdown.join([', ']),
      checked: checked,
    };

    emailjs
      .send(
        //the following parameters are for you to replace appropriately with your email service info.
        "service_z3uzwhg",
        "template_t5msbcm",
        templateParams,
        //api key
        "CDmJ3huYpinZb0wEA"
      )
      .then((response) => {
        setLoading(false);
        showSuccessNotification("Application Sent");
        setEmail("");
        setName1("");
        setName2("");
        setRole("");
        setOrg("");
        setWebsite("");
        setDropdown([]);
        setChecked(false);
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("Application Failed, Please try again");
      });
  };

  return (
    <>
      <div className="form-container fixed inset-0 z-50 flex items-center justify-center bg-transparent">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          data-aos-easing="ease-out-cubic"
          data-aos-mirror="true"
          data-aos-once="true"
          className="relative bg-white top-10 rounded-lg px-8 py-1 w-[600px] h-[fixed]"
        >
          <button
            onClick={() => onClose()}
            className="absolute top-0 right-0 p-2 bg-white text-red hover:bg-red  hover:text-white transition-all ease-linear hover:transition-all hover:ease-in-out duration-1000 hover:duration-1000 "
          >
            <FontAwesomeIcon
              icon={faTimes}
              times-icon
              className="w-[50px]   hover:animate-none transition-all ease-in-out duration-1000  hover:transition-all hover:ease-in-out  hover:duration-75"
            />
          </button>
          <div className="form-structure flex justify-center items-center text-red text-sm  md:text-base font-bold font-sans pb-5">
            Access Services
          </div>
          <form
            onSubmit={handleSubmit}
            className="form-inputs flex flex-row flex-wrap  justify-center items-center gap-6 h-40 overflow-y-auto "
          >
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder=" First Name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder=" Last Name"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder=" Role (optional)"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder="Name of Organization"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="email"
              placeholder=" Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="url"
              placeholder="Website/social link (optional)"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <div className="bflex flex-row w-full ">
              {/*<select
                className="outline-none h-[25px] rounded-lg   border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
                value={dropdown}
                onChange={(e) => setDropdown(e.target.value)}
              >
                <option value="" disabled>
                  Service Required
                </option>
                <option value="  Intrapreneurs / Professionals">
                  {" "}
                  Intrapreneurs / Professionals
                </option>
                <option value="   Entrepreneurs">Entrepreneurs</option>
                <option value=" -  MSMEs in sectors of expertise">
                  {" "}
                  MSMEs in sectors of expertise
                </option>
                <option value="   Governments / State Owned Enterprises">
                  Governments / State Owned Enterprises
                </option>
                <option value="Monitoring & Evaluation">
                  Monitoring & Evaluation
                </option>
                <option value="Governance Advisory">
                  {" "}
                  Governance Advisory
                </option>
                <option value=" NGOs"> NGOs</option>
              </select>*/}
              <CustomDrop
                options={[
                  " Procurement",
                  "Development",
                  " Impact Assessment",
                  "	Monitoring & Evaluation",
                  "	Governance Advisory",
                  "Structuring",
                  "Business Development",
                  "Sales Advisory",
                  "	Data Advisory",
                  "	Technology Advisory",
                  "	HR Advisory",
                  "	Administration Advisory",
                  "Fundraising Advisory",
                  "Entrepreneurial Career Advisory to Professionals",
                  "Entrepreneurial Education and Business Advisory to Entrepreneurs",
                ]}
                onChange={(selectedOptions) => setDropdown(selectedOptions)}
                value={dropdown}
              />
            </div>
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
                required
              />
              <span className="ml-1">
                I have read, understood and accepted the terms & conditions
              </span>{" "}
              <Link
                to="#"
                onClick={() => handleTermsConditions()}
                className="text-blue-700 underline hover:text-red text-[12px] transition-color eas-in-out hover:transition-colors duration-1000"
                rel="noopener noreferrer"
              >
                ( Nigerian entities,
              </Link>{" "}
              <Link
                to="#"
                onClick={() => handleNoneNigerian()}
                className="text-blue-700 underline text-[12px] hover:text-red transition-color eas-in-out hover:transition-colors duration-1000"
                rel="noopener noreferrer"
              >
                non-Nigerian entities)
              </Link>
              {showTCM && <TCN onClose={() => handleCloseTCM()} />}
              {showTerms && <Terms onClose={() => handleCloseTerms()} />}
              <span className="mx-1">in Your Non-Disclosure Agreement</span>
            </label>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="font-bold font-cur text-black">
                {currentDate.toLocaleString()}
              </p>
              <button
                className={`submit-button bg-red text-white rounded w-[300px] h-[50px] hover:bg-gold hover:text-white hover:transition-all ease-in-out hover:duration-1000 transition-all  duration-1000  ${
                  !checked &&
                  "cursor-not-allowed hover:bg-red hover:opacity-50 opacity-50"
                }`}
                type="submit"
                disabled={!checked}
              >
                {loading ? <b>Submitting...</b> : <b> Apply </b>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Services;
