import React from "react";
import TeamsProp from "../../components/About-Us/Team";
import Halima from '../../assets/images/Team-images/halima.png';
import Ade from '../../assets/images/Team-images/ade.png';
import Ceo from '../../assets/images/Team-images/ceo.png';
import Kingsley from '../../assets/images/Team-images/kingsley.png';

function Teams() {
  const TeamCards = [
    {
      image:   Halima,
      name1: "Halima",
      name2: "Ibrahim Abba",
      email: "example@tongston.com",
    },
    {
      image: Ade,
      name1: "Adebayo ",
      name2: "Adeniyi",
      email: "example@tongston.com",
    },
    {
      image: Ceo,
      name1: "Engr Bello",
      name2: "Tongo",
      email: "example@tongston.com",
    },
    {
      image: Kingsley,
      name1: "Fatima Aliu",
      name2: "Abokaisu",
      email: "example@tongston.com",
    },
    {
      image:Kingsley,
      name1: "Fatima Aliu",
      name2: "Abokaisu",
      email: "example@tongston.com",
    },
    {
      image: Ceo,
      name1: "Fatima Aliu",
      name2: "Abokaisu",
      email: "example@tongston.com",
    },
    {
      image: Ade,
      name1: "Fatima Aliu",
      name2: "Abokaisu",
      email: "example@tongston.com",
    },
    {
      image:Halima,
      name1: "Fatima Aliu",
      name2: "Abokaisu",
      email: "example@tongston.com",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center   md:justify-center md:items-center">
      {TeamCards.map((card, index) => (
        <div
          key={index}
          className="w-[50%] p-4       lg:p-6 lg:w-[25%] md:p-2 md:w-[fixed]    md:flex md:justify-center md:items-center"
        >
          <TeamsProp
            image={card.image}
            name1={card.name1}
            name2={card.name2}
            email={card.email}
          />
        </div>
      ))}
    </div>
  );
}

export default Teams;
