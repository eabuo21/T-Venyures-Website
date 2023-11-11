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
} from "../Notification/Notification";

const GrantsManagement = ({ onClose }) => {
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
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // send email using emailjs
    const templateParams = {
      email: email,
      name: name,
      checked: checked,
    };

    emailjs
      .send(
        //the following parameters are for you to replace appropriately with your email service info.
        "service_z3uzwhg",
        "template_u9fbo9n",
        templateParams,
        //api key
        "CDmJ3huYpinZb0wEA"
      )
      .then((response) => {
        setLoading(false);
        showSuccessNotification("Application Successful");
        setEmail("");
        setName("");
        setChecked(false);
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("Application Unsuccessful, Please try again");
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
          className="relative bg-white rounded-lg px-8 py-6 w-[500px] h-[fixed]"
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
          <div className="form-structure flex justify-center items-center text-red text-2xl font-bold font-sans pb-5">
            Manage Your Grants
          </div>
          <form
            onSubmit={handleSubmit}
            className="form-inputs flex flex-col  justify-center items-center gap-6 "
          >
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-full"
              type="text"
              placeholder=" Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-full"
              type="email"
              placeholder=" Email "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="font-bold font-pap text-black">
                {currentDate.toLocaleString()}{" "}
              </p>
              <button
                className={` 
                }submit-button bg-red text-white rounded w-[300px] h-[50px] hover:bg-gold hover:text-white hover:transition-all ease-in-out hover:duration-1000 transition-all  duration-1000 ${!checked &&"cursor-not-allowed opacity-50 hover:bg-red hover:opacity-50"} `}
                type="submit"
                disabled={!checked}
              >
                {loading ? <b className="animate-pulse"> Processing...</b> : <b> Proceed </b>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GrantsManagement;
