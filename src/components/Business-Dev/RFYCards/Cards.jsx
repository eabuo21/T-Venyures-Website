import React from "react";
import ICards from "../../../components/Business-Dev/RFYCards/RfyC";

function Cards() {
  const Cards1 = [
    {
      title: "Entrepreneurial Education",
      text: "through World-Class Trainers, Content & Assessments: We challenge and provide participants with the tools to think, the means to create & sell whilst enabling their journey to build personal & institutional brands that drive value, are influential & profitable",
    },

    {
      title: "Entrepreneurial Workspaces",
      text: "Access our state of the art WorkSpaces, Meeting Room, Training Room & Virtual Office on-demand; and third-party sites across 4 countries",
    },
    {
      title: "Enterprise-in-a-box & Consulting Solutions",
      text: "Administrative Accounting & Audit, Legal, Governance & Corporate Secretarial, Data Consulting, Collection, Analysis & Research,  Recruitment, Talent & Incentive Management, Organizational Structuring & Performance Management Services",
    },

    {
      title: "Entrepreneurial Media Solutions",
      text: "Amplify, archive, plan & deliver the learning & development package through:branding across web development & management, brand identity & value design print,  corporate communications,  PR,  events management, digital & traditional advertising & marketing solutions, multimedia studio services across: scripting, animations, video production & editing, audio production including event coverage",
    },
  ];

  return (
    <div className=" w-[100%]   flex flex-col    md:p-4     gap-6   lg:flex-row  lg:justify-center lg:items-center lg:h-[100%]  lg:gap-3  lg:ml-6      md:flex-row md:justify-between md:items-start md:h-[100%]  md:gap-2       md:overflow-x-auto  ">
      {Cards1.map((card, index) => (
        <div
          key={index}
          className=" bg-[#F6F6F2]  rounded-lg  shadow-lg shadow-current p-5  md:p-2 md:shadow-xl md:hover:shadow-current  md:hover:transition-all ease-in-out md:duration-700   md:transition-all md:hover:duration-1000  "
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
           data-aos-once="true"
        >
          <ICards title={card.title} text={card.text} />
        </div>
      ))}
    </div>
  );
}
export default Cards;
