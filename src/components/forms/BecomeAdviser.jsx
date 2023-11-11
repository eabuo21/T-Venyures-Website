import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import Terms from "../../components/T&C/T-C-NN/TCNE";
import TCN from "../../components/T&C/T-C-NN/TCNN";
import CustomDropdown from "../../components/forms/CustomDropdown";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../components/Notification/Notification";

const Adviser = ({ onClose }) => {
  const [showTerms, setShowTerms] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [role, setRole] = useState("");
  const [org, setOrg] = useState("");
  const [dropdown1, setDropdown1] = useState([]);
  const [dropdown2, setDropdown2] = useState("");
  const [dropdown3, setDropdown3] = useState("");
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
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  {
    /*
  const items = [
    { id: 1, name: "   Intrapreneurs /Professionals" },
    { id: 2, name: " Entrepreneurs" },
    { id: 3, name: "  MSMEs in sectors of expertise" },
    { id: 4, name: "  Governments / State Owned Enterprises" },
    { id: 5, name: "   NGOs" },
  ];
  const onSelectItem = (id) => {
    setSelectedItem(id);
  };
*/
  }

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
      dropdown1: dropdown1.join([', ']),
      dropdown2: dropdown2,
      dropdown3: dropdown3,
      checked: checked,
    };

    emailjs
      .send(
        //the following parameters are for you to replace appropriately with your email service info.
        "service_z3uzwhg",
        "template_y8xk18p",
        templateParams,
        //api key
        "CDmJ3huYpinZb0wEA"
      )
      .then((response) => {
        setLoading(false);
        showSuccessNotification(" Application  sent ");
        setEmail("");
        setName1("");
        setName2("");
        setRole("");
        setOrg("");
        setDropdown1([""]);
        setDropdown2("");
        setDropdown3("");
        setChecked(false);
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("Application  Failed , please try again.");
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
          className="relative bg-white   top-10 rounded-lg px-8 py-6 w-[600px] h-[fixed]  "
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
          <div className="form-structure flex justify-center items-center text-sm text-red md:text-base font-bold font-sans pb-5">
            Become an Advisor
          </div>
          <form
            onSubmit={handleSubmit}
            className="form-inputs flex flex-row flex-wrap   justify-center items-center gap-6 h-40 overflow-y-auto "
          >
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder="First Name"
              required
              value={name1}
              onChange={(e) => setName1(e.target.value)}
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder="Last Name"
              required
              value={name2}
              onChange={(e) => setName2(e.target.value)}
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder=" Role"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="text"
              placeholder="Name of Organization"
              required
              value={org}
              onChange={(e) => setOrg(e.target.value)}
            />
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              type="email"
              placeholder=" Email "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <select 
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              value={dropdown1}
              multiple
              onChange={(e) =>
                setDropdown1(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              
            >
              <option value="" disabled>
                Sector of Expertise
              </option>
              <option value=" -Media" className="font-normal text-base">
                Media
              </option>

              <option
                value="Data & Economics"
                className="font-normal text-base"
              >
                Data & Research
              </option>
              <option value="Finance" className="font-normal text-base">
                Finance
              </option>

              <option value="Technology" className="font-normal text-base">
                Technology
              </option>

              <option value="Education" className="font-normal text-base">
                Education
              </option>

              <option value="Accounting" className="font-normal text-base">
                Accounting
              </option>

              <option
                value="Legal & Governance"
                className="font-normal text-base"
              >
                Legal & Governance
              </option>

              <option
                value="Business Dev & Advisory"
                className="font-normal text-base"
              >
                Business Dev & Advisory
              </option>

              <option value="Sales" className="font-normal text-base">
                Sales
              </option>

              <option
                value="Trade & Industry"
                className="font-normal text-base"
              >
                Trade & Industry
              </option>

              <option value="Agriculture" className="font-normal text-base">
                Agriculture
              </option>

              <option
                value="Telecoms & Media"
                className="font-normal text-base"
              >
                Telecoms & Media
              </option>

              <option
                value="Logistics & Storage"
                className="font-normal text-base"
              >
                Logistics & Storage
              </option>

              <option
                value="Health Life Sciences"
                className="font-normal text-base"
              >
                Health Life Sciences
              </option>
            </select>
*/}
            <CustomDropdown
              options={[
                "Media",
                "Data & Economics",
                "Accounting",
                "Finance",
                "Technology",
                "Health & Life Sciences",
                "Logistics & Storage",
                "Telecoms & Media",
                "Agriculture",
                "Trade & Industry",
                "Sales",
                "Business Dev & Advisory",
                "Legal & Governance",
                
               
              ]}
              onChange={(selectedOptions) => setDropdown1(selectedOptions)}
              value={dropdown1}
            />

            <select
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              value={dropdown2}
              onChange={(e) => setDropdown2(e.target.value)}
            >
              <option value="" disabled>
                Service
              </option>
              <option value="Project Planning">Project Planning</option>

              <option value=" Pre-Feasibility Studies">
                Pre-Feasibility Studies
              </option>
              <option value=" -Procurement"> Procurement</option>

              <option value="Development Impact Assessment">
                Development Impact Assessment
              </option>
              <option value="Monitoring & Evaluation">
                Monitoring & Evaluation
              </option>
              <option value="Governance Advisory"> Governance Advisory</option>
              <option value="Structuring"> Structuring</option>
              <option value="Business Development">
                {" "}
                Business Development
              </option>
              <option value="Sales Advisory"> Sales Advisory</option>
              <option value="Data Advisory"> Data Advisory</option>
              <option value="Technology Advisory"> Technology Advisory</option>
              <option value="HR Advisory"> HR Advisory</option>
              <option value="Administration Advisory">
                {" "}
                Administration Advisory
              </option>
              <option value="Fundraising Advisory">
                {" "}
                Fundraising Advisory
              </option>
              <option value="Entrepreneurial Career Advisory to Professionals">
                {" "}
                Entrepreneurial Career Advisory to Professionals
              </option>
              <option value="Entrepreneurial Education and Business Advisory to Entrepreneurs">
                Entrepreneurial Education & Business Advisory to Entrepreneurs
              </option>
            </select>

            <select
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-[45%] text-sm font-sans text-dark"
              value={dropdown3}
              onChange={(e) => setDropdown3(e.target.value)}
            >
              <option value="" disabled>
                Clientele Preference
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

              <option value="Governance Advisory">
                {" "}
                Government / State-Owned Enterprises
              </option>
              <option value=" NGOs"> NGOs</option>
            </select>

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
              <p className="font-bold font-pap text-black">
                {currentDate.toLocaleString()}
              </p>
              <button
                className={`submit-button bg-red text-white rounded w-[300px] h-[50px] hover:bg-gold hover:text-white hover:transition-all ease-in-out hover:duration-1000 transition-all  duration-1000 ${
                  !checked &&
                  "opacity-50 cursor-not-allowed hover:opacity-50 hover:bg-red"
                }`}
                type="submit"
                disabled={!checked}
              >
                {loading ? <b>Applying...</b> : <b> Apply</b>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adviser;
