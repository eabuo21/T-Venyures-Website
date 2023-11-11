import React from "react";
import Accord from "../landingpage/QAccordion";

function AccordCard() {
  const AccordCards = [
    {
      title: "What is the criteria to getting funded",
      content:
        "We offer instant coverages for our Office and Inventory policies which you can get quoted and purchase in seconds",
    },
    {
      title: "What is the criteria to getting funded?",
      content:
        "We offer instant coverages for our Office and Inventory policies which you can get quoted and purchase in seconds",
    },
    {
      title: "What is the criteria to getting funded?",
      content:
        "We offer instant coverages for our Office and Inventory policies which you can get quoted and purchase in seconds",
    },
    {
      title: "What is the criteria to getting funded?",
      content:
        "We offer instant coverages for our Office and Inventory policies which you can get quoted and purchase in seconds",
    },
    {
      title: " What is the criteria to getting funded?",
      content:
        "We offer instant coverages for our Office and Inventory policies which you can get quoted and purchase in seconds",
    },
  ];

  return (
    <div className="flex  flex-col  w-full  lg:flex-col lg:w-[100vh] lg:px-8 lg:py-8  ">
      {AccordCards.map((card, index) => (
        <div
          key={index}
          className="w-[100%] h-[fixed] flex flex-col justify-center flex-wrap p-0  lg:w-[fixed] lg:flex-col lg:flex-wrap"
        >
          <Accord title={card.title} content={card.content} />
        </div>
      ))}
    </div>
  );
}

export default AccordCard;
