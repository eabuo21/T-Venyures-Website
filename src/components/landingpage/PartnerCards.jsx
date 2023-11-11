import React from "react";
import Patner from "../landingpage/Partner";
import Pat1 from "../../assets/images/pat1.png";
import Pat2 from "../../assets/images/pat2.png";
import Pat3 from "../../assets/images/pat3.png";

function Partners() {
  const PartnerCards = [
    {
      image: Pat1,
      title: "Governments",
      description:
        "Appoint Tongston as Business development service provider / grant manager of Government funds for MSME development",
    },
    {
      image: Pat2,
      title: "Financial Institutions",
      description:
        "Provide Financing facilities including grants to Tongston Clientele",
    },
    {
      image: Pat3,
      title: "Corporate Institutions",
      description:
        "Provide grants & in-kind sponsorships on Technological, Financial, Marketing, Branding, Accounting, Audit, Legal services to Tongston Clientele.",
    },
  ];

  return (
    <div className="flex  flex-col  justify-normal  gap-3  lg:justify-center lg:items-center  lg:flex-row  md:flex-row md:justify-center md:items-center ">
      {PartnerCards.map((card, index) => (
        <div
          key={index}
          className=" "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
           data-aos-once="true"
        >
          <Patner
            image={card.image}
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Partners;
