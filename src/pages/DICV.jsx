import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import Terms from "../../src/components/T&C/T-C-NN/TCNE";
import TCN from "../../src/components/T&C/T-C-NN/TCNN";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../components/Notification/Notification";

const DICV = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [role, setRole] = useState("");
  const [org, setOrg] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date()); // Update the current calendar date every one second
    }, 1000);

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, []);

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
      phone: phone,
      message: message,
      checked: checked,
    };

    emailjs
      .send(
        //the following parameters are for you to replace appropriately with your email service info.
        "service_z3uzwhg",
        "template_rfnvj3q",
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
        setPhone("");
        setMessage("");
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
          className="relative top-10 bg-white rounded-lg px-8 py-1 w-[600px] h-[fixed]"
        >
          <Link to="/investment">
            <button className="absolute top-0 right-0 p-2 bg-white text-red hover:bg-red  hover:text-white transition-all ease-linear hover:transition-all hover:ease-in-out duration-1000 hover:duration-1000 ">
              <FontAwesomeIcon
                icon={faTimes}
                times-icon
                className="w-[50px]  hover:rotate-45 transition-all ease-in-out duration-700 hover:transition-all hover:ease-in-out  hover:duration-1000"
              />
            </button>
          </Link>
          <div className="form-structure flex justify-center items-center text-red text-sm   font-bold font-sans pb-5  md:text-base">
            Co-Invest With Us
          </div>
          <form
            onSubmit={handleSubmit}
            className="form-inputs flex flex-row flex-wrap  justify-center items-center gap-6  "
          >
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]  text-sm text-dark font-sans"
              type="text"
              placeholder=" First Name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]  text-sm text-dark font-sans"
              type="text"
              placeholder=" Last Name"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]  text-sm text-dark font-sans"
              type="text"
              placeholder=" Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]  text-sm text-dark font-sans"
              type="text"
              placeholder="Name of Organization"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]  text-sm text-dark font-sans"
              type="email"
              placeholder=" Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]  text-sm text-dark font-sans"
              type="tel"
              placeholder="Phone Number (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              className="outline-none  h-8 md:h-[50px]  w-full rounded-lg  border-gold border-0 border-b "
              type="text"
              placeholder=" More information on your investment interest (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

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
                className="text-blue-700 underline hover:text-red  transition-color eas-in-out hover:transition-colors duration-1000"
                rel="noopener noreferrer"
              >
                Nigerian entities,
              </Link>{" "}
              <Link
                to="#"
                onClick={() => handleNoneNigerian()}
                className="text-blue-700 underline hover:text-red transition-color eas-in-out hover:transition-colors duration-1000"
                rel="noopener noreferrer"
              >
                non Nigerian entities
              </Link>
              {showTCM && <TCN onClose={() => handleCloseTCM()} />}
              {showTerms && <Terms onClose={() => handleCloseTerms()} />}
              <span className="mx-1">in Your Non-Disclosure Agreement</span>
            </label>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="font-pap font-bold text-black">
                {currentDate.toLocaleString()}
              </p>
              <button
                className={`submit-button bg-red text-white rounded w-[300px] h-[50px] hover:bg-gold hover:text-white hover:transition-all ease-in-out hover:duration-1000 transition-all  duration-1000 ${
                  !checked &&
                  "opacity-50 hover:bg-red hover:opacity-50 cursor-not-allowed"
                }`}
                type="submit"
                disabled={!checked}
              >
                {loading ? <b> Submitting...</b> : <b>Invest Now </b>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DICV;
