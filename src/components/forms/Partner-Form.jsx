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

const PartnerWithUs = ({ onClose }) => {
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
      setCurrentDate(new Date()); // Update the current calendar date every one second
    }, 1000);

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, []);

  const [name, setName] = useState("");
  const [orgname, setOrgName] = useState("");
  const [webaddress, setWebAddress] = useState("");
  const [selectedoption, setSelectedOption] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [chosenitem, setChosenItem] = useState("");
  const [othervalue3, setOtherValue3] = useState("");
  const [othervalue2, setOtherValue2] = useState("");
  const [othervalue, setOtherValue] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleValueChange = (e) => {
    setSelectedItem(e.target.value);
  };
  const handleChoseChange = (e) => {
    setChosenItem(e.target.value);
  };

  const handleInputChange = (e) => {
    setOtherValue(e.target.value);
  };
  const handleInsertChange = (e) => {
    setOtherValue2(e.target.value);
  };
  const handleClickChange = (e) => {
    setOtherValue3(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (selectedoption == "others") {
      console.log(" User  Selected", othervalue);
    } else {
      console.log("UserSelected", selectedoption);
    }

    if (selectedItem == "others") {
      console.log(" User  Selected", othervalue2);
    } else {
      console.log("UserSelected", selectedItem);
    }

    if (chosenitem == "others") {
      console.log(" User  Selected", othervalue3);
    } else {
      console.log("UserSelected", chosenitem);
    }

    // send email using emailjs
    const templateParams = {
      selectedoption: selectedoption,
      selectedItem: selectedItem,
      chosenitem: chosenitem,
      othervalue2: othervalue2,
      othervalue3: othervalue3,
      othervalue: othervalue,
      name: name,
      orgname: orgname,
      webaddress: webaddress,
      email: email,
      checked: checked,
    };

    emailjs
      .send(
        //the following parameters are for you to replace appropriately with your email service info.
        "service_z3uzwhg",
        "template_jyy9a2n",
        templateParams,
        //api key
        "CDmJ3huYpinZb0wEA"
      )
      .then((response) => {
        setLoading(false);
        showSuccessNotification("Application Sent");
        setSelectedOption("");
        setSelectedItem("");
        setChosenItem("");
        setOtherValue2("");
        setOtherValue3("");
        setOtherValue("");
        setName("");
        setOrgName("");
        setWebAddress("");
        setEmail("");
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
          data-aos="flip-up"
          data-aos-duration="3000"
          data-aos-easing="ease-out-cubic"
          data-aos-mirror="true"
          data-aos-once="true"
          className="relative top-8 bg-white rounded-lg px-8 py-6 w-[500px] h-[fixed] "
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
            Partner With Us!
          </div>
          <form
            onSubmit={handleSubmit}
            className="form-inputs flex flex-row flex-wrap  justify-center items-center gap-6 h-40 overflow-y-auto "
          >
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
              type="text"
              placeholder=" Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Name of Organization"
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
              value={orgname}
              onChange={(e) => setOrgName(e.target.value)}
            />

            <input
              type="url"
              placeholder="Website (if aaplicable)"
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
              value={webaddress}
              onChange={(e) => setWebAddress(e.target.value)}
            />

            <select
              value={selectedoption}
              onChange={handleOptionChange}
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
            >
              <option value="" disabled>
                {" "}
                Department/Functional Expertise{" "}
              </option>

              <option value="Executive Leadership (e.g. CEO/Founder)	">
                {" "}
                Executive Leadership (e.g. CEO/Founder)
              </option>

              <option value="Board & Governance (e.g. Director) 	">
                {" "}
                Board & Governance (e.g. Director)
              </option>

              <option value="Management & Operations (e.g. Manager)  	">
                {" "}
                Management & Operations (e.g. Manager)
              </option>

              <option value="Development & Sales  	">
                {" "}
                Development & Sales
              </option>

              <option value="Marketing & Communications ">
                Marketing & Communications
              </option>
              <option value="Customer Service & Support">
                {" "}
                Customer Service & Support
              </option>
              <option value="Consulting & Strategy">
                {" "}
                Consulting & Strategy
              </option>
              <option value="others"> other </option>
            </select>
            {selectedoption == "others" && (
              <input
                type="text"
                className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
                value={othervalue}
                placeholder="please specify"
                onChange={handleInputChange}
                required
              />
            )}

            <select
              value={selectedItem}
              onChange={handleValueChange}
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
            >
              <option value="" disabled>
                {" "}
                Type of Organization
              </option>

              <option value="Government  	"> Government</option>

              <option value="Financial Institution  	">
                {" "}
                Financial Institution
              </option>

              <option value="Corporate Institutions   	">
                {" "}
                Corporate Institutions
              </option>

              <option value="others"> other </option>
            </select>
            {selectedItem == "others" && (
              <input
                type="text"
                className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
                value={othervalue2}
                placeholder="please specify"
                onChange={handleInsertChange}
                required
              />
            )}

            <select
              value={chosenitem}
              onChange={handleChoseChange}
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
            >
              <option value="" disabled>
                {" "}
                How would you like to partner?
              </option>

              <option
                value="	Appoint Tongston as business development service provider / grant manager of government funds for MSME development 	"
                className="text-sm"
              >
                {" "}
                Appoint Tongston as business development service provider /
                <br />
                grant manager of government funds for MSME development
              </option>

              <option value="	Provide financing facilities including grants to Tongston Clientele  	">
                {" "}
                Provide financing facilities
                <br /> including grants to Tongston Clientele
              </option>

              <option value="	Provide grants to Tongston Clientele   	">
                {" "}
                Provide grants to Tongston Clientele
              </option>

              <option value="	Provide in-kind sponsorships on: Technological services Financial services Marketing & communications Branding Accounting Audit Legal services Data services   	">
                {" "}
                Provide in-kind sponsorships on: Technological services
                <br />
                Financial services Marketing & communications Branding
                <br />
                Accounting Audit Legal services Data services
              </option>

              <option value="others"> other </option>
            </select>
            {chosenitem == "others" && (
              <input
                type="text"
                className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%]"
                value={othervalue3}
                placeholder="please specify"
                onChange={handleClickChange}
                required
              />
            )}

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
                {currentDate.toLocaleString()}
              </p>
              <button
                className={`submit-button bg-red text-white rounded w-[300px] h-[50px] hover:bg-gold hover:text-white hover:transition-all ease-in-out hover:duration-1000 transition-all  duration-1000 ${
                  !checked &&
                  "cursor-not-allowed opacity-50 hover:opacity-50 hover:bg-red  "
                }`}
                type="submit"
                disabled={!checked}
              >
                {loading ? (
                  <b className="animate-pulse"> Processing Application...</b>
                ) : (
                  <b> Apply</b>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PartnerWithUs;
