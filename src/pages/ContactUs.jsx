import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "../assets/css/contact.css";
import "../assets/css/3D  Scale/3D-Scale.css";
import Nav from "../components/NavBar";
import Feat from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  showErrorNotification,
  showSuccessNotification,
} from "../components/Notification/Notification";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // send email using emailjs
    const templateParams = {
      name: name,
      email: email,
      number: number,
      dropdown: dropdown,
      message: message,
    };

    emailjs
      .send(
        "service_z3uzwhg",
        "template_b702kc1",
        templateParams,
        "CDmJ3huYpinZb0wEA"
      )
      .then((response) => {
        setLoading(false);
        showSuccessNotification(" Request Sent ");
        setName("");
        setEmail("");
        setNumber("");
        setDropdown("");
        setMessage("");
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("Error Processing  Request, please try again");
       
      });
  };

  return (
    <>
      <div className="fade-in-contact">
        <Nav/>
        <div className="contact">
          <main className="main-contact">
            <div className="get-intouch-section">
              <h1 className="get-intouch">Let's Get in Touch</h1>
              <p className="get-intouch-text">
                We're glad you are here! Share your details with us to get
                started
              </p>
            </div>
            <div className="container-information">
              <div className="main-information">
                <div className="box contact-information">
                  <div className="contact-information-content flex flex-col gap-4 font-sans text-dark">
                    <div className="contact-heading">
                      <h2>Contact Information</h2>
                      <p>
                        Please fill the form and our team will get back to you
                        shortly
                      </p>
                    </div>
                    <div className="contact-number  text-red border-red rounded-lg">
                      <span>
                        <FontAwesomeIcon icon={faPhone} Phone-icon />
                      </span>
                      <span className="contact-margin">
                        <a className="black-link" href="tel=+2348165602923">
                          +2348165602923
                        </a>
                      </span>
                    </div>
                    <div className="contact-Address">
                      <div className="contact-number">
                        <span className="text-red">
                          <FontAwesomeIcon icon={faMapMarkerAlt} map-icon />
                        </span>
                        <span className="contact-margin">
                          16 Emeka Anyaoku Street, Area 11 Garki, Abuja
                        </span>
                      </div>
                      <div className="adress-magin">
                        <p className="contact-margin">
                          5th floor, 80 Broad Street, New York City, 10004
                        </p>
                        <p className="contact-margin">
                          107-111 Fleet Street, London, EC4A 2AB
                        </p>
                        <p className="contact-margin">
                          Spaces Clarke Quay, 4th - 6th Floor, 21 Merchant Road,
                          Singapore, 58267
                        </p>
                      </div>
                    </div>
                    <div className="contact-email">
                      <span className="text-red">
                        <FontAwesomeIcon icon={faEnvelope} envelope-icon />{" "}
                      </span>
                      <span className="contact-margin">
                        <a
                          className="black-link"
                          href="mailto:info@tongston.com"
                        >
                          info@tongston.com
                        </a>
                      </span>
                    </div>
                    <br />
                    <div className="social-icons-container flex flex-row gap-[12px] ">
                      <div className=" border-black  border rounded-[50%] w-6 h-6 flex flex-row justify-center items-center p-4">
                        <a
                          href="https://web.facebook.com/tongstoncompany/?_rdc=1&_rdr"
                          target="blank"
                        >
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="h-[30px] w-[20px]"
                          />
                        </a>
                      </div>
                      <div className=" border-black  border rounded-[50%] w-6 h-6 flex flex-row justify-center items-center p-4">
                        <a
                          href="https://www.instagram.com/tongstoncompany/"
                          target="blank"
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="h-[30px] w-[20px]"
                          />
                        </a>
                      </div>
                      <div className=" border-black  border rounded-[50%] w-6 h-6 flex flex-row justify-center items-center p-4">
                        <a
                          href="https://twitter.com/tongstoncompany"
                          target="blank"
                        >
                          <FontAwesomeIcon
                            icon={faXTwitter}
                            className="h-[30px] w-[20px]"
                          />
                        </a>
                      </div>
                      <div className=" border-black  border rounded-[50%] w-6 h-6 flex flex-row justify-center items-center p-4">
                        <a
                          href="https://www.linkedin.com/company/tongston"
                          target="blank"
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="h-[30px] w-[20px]"
                          />
                        </a>
                      </div>
                      <div className=" border-black  border rounded-[50%] w-6 h-6 flex flex-row justify-center items-center p-4">
                        <a
                          href="https://www.youtube.com/@tongstonentrepreneurshipgr7"
                          target="blank"
                        >
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="h-[30px] w-[20px]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Contact Form*/}
                <form
                  onSubmit={handleSubmit}
                  className="input-information">
                  <section className="input-infromation-content">
                    <div className="name-email">
                      <div>
                        <label htmlFor="text" className="">
                          Full Name
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form__field"
                          placeholder="Write Your Full Name"
                          name="name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          id="text"
                          required
                        />
                      </div>
                      <br />

                      <div>
                        <label htmlFor="number" className="">
                          Phone Number
                        </label>
                      </div>
                      <div>
                        <input
                          type="tel"
                          className="form__field"
                          placeholder="Write Your Phone Number"
                          name="number"
                          value={number}
                          onChange={(event) => setNumber(event.target.value)}
                          id="number"
                          required
                        />
                      </div>
                    </div>
                    <br />

                    <div className="two-colums">
                      <div>
                        <label htmlFor="email" className="">
                          Email Address
                        </label>
                      </div>
                      <div>
                        <input
                          type="email"
                          className="form__field"
                          placeholder="example@gmail.com"
                          name="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          id="email"
                          required
                        />
                      </div>
                      <label htmlFor="email" className="pt-[4rem]">
                        I'm Interested In
                      </label>
                      <select
                        id="form-select"
                        name="select"
                        value={dropdown}
                        onChange={(event) => setDropdown(event.target.value)}
                        className="form__field "
                        aria-label=""
                        required
                      >
                        <option disabled>I'm interested in ...</option>

                        <option value="Participating in TEES 2023">Participating in TEES 2023</option>
                        
                        <option value="Co-investing with Tongston">
                          Co-investing with Tongston
                        </option>

                        <option value="Accessing Services">
                          Accessing Services
                        </option>

                        <option value="Becoming an Advisor">
                          Becoming an Advisor
                        </option>

                        <option value="Partnering with Tongston">
                          Partnering with Tongston
                        </option>

                        <option value="Tongston managing my grant(s)">
                          Tongston managing my grant(s)
                        </option>

                        <option value="Experiencing Other Tongston Services">
                          Experiencing Other Tongston Services
                        </option>
                 
                      </select>
                    </div>
                  </section>
                  <div>
                    <label htmlFor="Message" className="contact-btn-message">
                      Message
                    </label>
                  </div>
                  <div>
                    <textarea
                      type="text"
                      className="form__field contact-btn-message"
                      placeholder="Write Your Message"
                      name="message"
                      value={message}
                      id="Message"
                      required
                      onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                  </div>
                  <div className="contact-submit">
                    <button
                      type="submit"
                      className="bg-red text-white font-semibold py-[15px] px-[24px] gap-2"

                      // className="contact-btn-submit contact-subscribe-form-submit"
                    >
                      {loading ? <b className="animate-pulse">Sending Request...</b> : <b>Send Message </b>}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
        <Feat/>
      </div>
    </>
  );
};

export default Contact;
