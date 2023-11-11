import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../../Notification/Notification";

const RequestInfo = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // send email using emailjs
    const templateParams = {
      email: email,
      name: name,
      number: number,
      message: message,
    };

    emailjs
      .send(
        //the following parameters are for you to replace appropriately with your email service info.
        "service_z3uzwhg",
        "template_2qs70gu",
        templateParams,
        //api key
        "CDmJ3huYpinZb0wEA"
      )
      .then((response) => {
        setLoading(false);
        showSuccessNotification("Request Sent");
        setEmail("");
        setName("");
        setNumber("");
        setMessage("");
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("request Failed, Please try again");
      });
  };

  return (
    <>
      <div className="form-container fixed inset-0 z-50 flex items-center justify-center bg-transparent">
        <div className="absolute inset-0 bg-gray-300 opacity-25  "></div>
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          data-aos-easing="ease-out-cubic"
          data-aos-mirror="true"
          data-aos-once="true"
          className="relative top-7  bg-white rounded-lg px-8 py-6 w-[500px] h-[fixed]"
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
            Request For More Info
          </div>
          <form
            onSubmit={handleSubmit}
            className="form-inputs flex flex-col  justify-center items-center gap-6 "
          >
            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-full"
              type="text"
              placeholder=" Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-full"
              type="email"
              placeholder=" Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              className="outline-none h-[25px] rounded-lg  border-gold border-0 border-b w-full"
              value={number}
              placeholder="Phone number"
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <div className="w-full">
              <label
                htmlFor="request"
                className="text-left text-red font-bold font-sans text-base"
              >
                Request
              </label>
            </div>
            <textarea
              type="text"
              className="outline-none h-[50px] rounded-lg  border-gold border-0 border-b w-full"
              value={message}
              placeholder="write your request here"
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <div className="flex justify-center items-center">
              <button
                className="submit-button bg-red text-white rounded w-[300px] h-[50px] hover:bg-gold hover:text-white hover:transition-all ease-in-out hover:duration-1000 transition-all   duration-1000"
                type="submit"
              >
                {loading ? (
                  <b className="animate-pulse"> Processing Request ...</b>
                ) : (
                  <b> Proceed </b>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestInfo;
