import React, { useState } from "react";

import client9 from "../../assets/images/clientel/client9.png";
import client2 from "../../assets/images/clientel/client2.png";
import client3 from "../../assets/images/clientel/client3.png";
import client4 from "../../assets/images/clientel/client4.png";
import client5 from "../../assets/images/clientel/client5.png";
import client8 from "../../assets/images/clientel/client8.png";

const BusinessInnerCard = ({ folio, isOpen, toggleCard }) => {
  const handleButtonClick = () => {
    // Add logic to handle button click action (e.g., navigation)
  };

  return (
    <div key={folio.id}>
      <div
        onMouseEnter={() => toggleCard(folio.id)}
        onMouseLeave={() => toggleCard(folio.id)}
        onClick={() => toggleCard(folio.id)}
        className={`avatar-container text-center shadow-xl flex flex-col justify-center items-center m-auto py-4 px-3 teams-open cursor-pointer ${
          isOpen
            ? "bg-black"
            : "bg-white hover:shadow-lg hover:scale-105 duration-500"
        }`}
      >
        {!isOpen ? (
          <div>
            <img
              src={folio.imgURL}
              className={`rounded-full w-40 h-40 m-auto ${
                isOpen ? "filter brightness-50" : ""
              }`}
              alt={`${folio.name} image`}
            />
          </div>
        ) : (
          <>
            {isOpen && (
              <div className="teams-close cursor-pointer hover:shadow-lg bg-black ">
                <div className="p-2 flex flex-col gap-3">
                  <h4 className="text-lg text-white font-bold">{folio.name}</h4>
                  <p className="text-white font-normal text-left text-sm">
                    {folio.bio}
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [openCards, setOpenCards] = useState([]);
  const BizPort = [
    {
      id: 1,
      name: "SKILLS OUTSIDE SCHOOL FOUNDATION",
      link: "",
      imgURL: client9,
      bio: "Skills Outside School Foundation is the leading Pan-African education, entrepreneurship and employability organization, shaping human capital development through its 3 core pillars: data, interventions and advocacy. Tongston provided co-funded the delivery of the STEM competition that attracted several government/state secondary schools in Abuja.",
    },
    {
      id: 2,
      name: "GREEN ECOWORKS",
      link: "",
      imgURL: client2,
      bio: "An innovative organization committed to revolutionizing sustainability through circular economy principles. They transform single-use and ocean plastic waste into high-quality products, including furniture and interior design components, with plans to enter the prosthetics realm soon. Tongston provided grant seed capital to fund expansion of operations through the SOSF Lead4Change competition.",
    },
    {
      id: 3,
      name: "MIJOLNIA",
      link: "",
      imgURL: client3,
      bio: "This visionary company specializes in designing, manufacturing, and deploying innovative energy storage solutions, particularly their flagship innovation: energy storage cubes that seamlessly interface with digital devices. Tongston provided grant seed capital to fund development of prototype and MVP through the TEES 2022 Entrepreneurial Pitches.",
    },
    {
      id: 4,
      name: "GOMBE STATE UNIVERSITY",
      link: "",
      imgURL: client5,
      bio: "Gombe State University (GSU), the premier higher education institution in Nigeria, co-deployed the IDEAS Contest to support entrepreneurial students. Tongston provided N500,000 worth of prizes through its business advisory session and the cash prize; and delivered the 3-part “think, create, sell” training, business pitch deck preparation & planning services to the students in preparation of the pitch.",
    },
    {
      id: 5,
      name: "HALIMA FACTOR COMMUNITY INITIATIVE",
      link: "",
      imgURL: client4,
      bio: "Halima Factor Community Initiative is a Nigerian non-profit fostering community development through self-help, mentoring youth, and organizing events like the Gombe Day of Literature and Eid-el-Kabir food distribution to the needy. Tongston provided NGN1.7 million worth of Prizes to 6 Educators & 3 University Students across the North-East at the 1st North-East Festival of Literature, Culture & Creativity.",
    },
    {
      id: 6,
      name: "GOVERNMENT SECONDARY SCHOOL WUSE ZONE 3",
      link: "",
      imgURL: client8,
      bio: "The School is a premier government/state owned secondary school in Abuja, Nigeria. Tongston funded scholarships to the winners of the International Day of Girls and Women in Science Competition for Secondary School Girls in collaboration with SOSF.",
    },
  ];
  const toggleCard = (id) => {
    if (openCards.includes(id)) {
      // Close the card if it's open
      setOpenCards(openCards.filter((cardId) => cardId !== id));
    } else {
      // Open the card if it's closed
      setOpenCards([...openCards, id]);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-center items-center shrink-0 "></div>
      <div
        className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 mt-8 justify-center"
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        {BizPort.map((folio) => (
          <BusinessInnerCard
            key={folio.id}
            folio={folio}
            isOpen={openCards.includes(folio.id)}
            toggleCard={toggleCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
