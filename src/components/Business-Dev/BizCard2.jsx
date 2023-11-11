import React from "react";
import Cards from "../../components/Business-Dev/BizCards";

function Biz() {
  const biz1 = [
    {
      color: "#C4E2ED",
      title: "Intrapreneurs",
      text: "Empowering Intrapreneurs to drive innovation within organizations & promoting a culture of intrapreneurship to drive Value, Influence & Profitability of Organizations",
    },

    {
      color: "#EBD7E5",
      title: "Entrepreneurs",
      text: "Providing essential guidance to Entrepreneurs, from ideation to market entry, to realize their business aspirations",
    },
    {
      color: "#F6F6F2",
      title: "MSMEs",
      text: "Boosting Growth for MSMEs operating in specialized fields through tailored strategies and sector-specific expertise",
    },
    {
      color: "#C4E2ED",
      title: "State Owned Enterprises",
      text: "Partnering with Governments and State-Owned Enterprises to stimulate economic development",
    },
    {
      color: "#FEF5E7",
      title: "NGOs",
      text: "Assisting NGOs in achieving their missions through strategic planning and sustainable growth strategies",
    },
  ];

  return (
    <>
      <div className=" grid  grid-cols-1   px-6      gap-6                       lg:flex lg:flex-row lg:justify-center lg:items-center   lg:gap-3                 md:grid-cols-3 md:justify-between md:items-center md:overflow-x-auto md:h-[60vh] ">
        {biz1.map((card, index) => (
          <div
            key={index}
            className="md:hover:shadow-current md:shadow-lg md:hover:transition-all md:ease-in-out md:duration-700  md:transition-all md:hover:duration-1000 "
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
             data-aos-once="true"
          >
            <Cards color={card.color} title={card.title} text={card.text} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Biz;
