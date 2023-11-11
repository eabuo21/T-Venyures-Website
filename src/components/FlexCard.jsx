import React from "react";
import FlexNav from "../components/Flex";
import Sl1 from "../assets/images/Sl1.png";
import Sl2 from "../assets/images/Sl2.png";
import Sl3 from "../assets/images/Sl3.png";

function Flexcards() {
  const flexcard1 = [
    {
      link: "/Investment",
      image: Sl1,
      text: "Direct Investing  ",
    },
    {
      image: Sl2,
      text: "Business Development ",
      link: "/business",
    },
    {
      image: Sl3,
      text: "Grant Management ",
      link: "#",
    },
  ];

  return (
    <div className="flex        flex-col    relative left-[3rem]  gap-6    justify-center items-center     lg:gap-6   md:flex-row  md:gap-2">
      {flexcard1.map((card, index) => (
        <div key={index} className="w-[65] h-auto m-4 flex bg-white    ">
          <FlexNav
            image={card.image}
            text={card.text}
            link={card.link} />
        </div>
      ))}
    </div>
  );
}

export default Flexcards;
