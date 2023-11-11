import React from "react";
import VentureFlex from "../landingpage/VentureFlex";
import Focus1 from "../../assets/images/landingpage/focus1.png";
import Focus2 from ".././../assets/images/landingpage/focus2.png";
import Focus3 from "../../assets/images/landingpage/focus3.png";

function VentureCard() {
  const VentureCards = [
    {
      background: "grey",
      image: Focus1,
      text: "Education ",
      text2: "Read more",
      link: "/about",
    },
    {
      background: "grey",
      image: Focus2,
      text: "Financial Service & Technology",
      text2: "Read more",
      link: "/about",
    },
    {
      background: "grey",
      image: Focus3,
      text: "Life Sciences",
      text2: "Read more",
      link: "/about",
    },
  ];

  return (
    <div className="flex  flex-row flex-wrap gap-4  w-full      lg:gap-0 lg:flex-nowrap lg:justify-center lg:items-center  md:flex-nowrap  md:gap-0">
      {VentureCards.map((card, index) => (
        <div
          key={index}
          className="w-[140%] flex flex-row justify-center items-center  flex-wrap   lg:justify-center "
        >
          <VentureFlex
            background={card.background}
            image={card.image}
            text={card.text}
            text2={card.text2}
            link={card.link}
          />
        </div>
      ))}
    </div>
  );
}

export default VentureCard;
