import React from "react";
import study from "../../assets/images/landingpage/focus1.png";
import woman from ".././../assets/images/landingpage/focus2.png";
import chemical from "../../assets/images/landingpage/focus3.png";
import Carousel from "../../components/landingpage/Carousel/SectorsCarousel";

const infoData = [
  {
    img: study,
    title: "Education",
  },
  {
    img: woman,
    title: "Financial Services & Technology",
  },
  {
    img: chemical,
    title: "Life Sciences",
  },
];

function Focus() {
  return (
    <div className="flex flex-col justify-center  ">
      <div className="text-left justify-center items-left md:items-center py-8 md:text-center ">
        <h2 className="text-lg font-bold text-red">SECTORS OF FOCUS</h2>
        <h2 className="text-xl font-normal my-2 md:text-4xl">
          Venturing Into Various Industries - Exploring
          <br /> Endless Horizons
        </h2>
      </div>
      <div>
        <Carousel />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-7">
        {infoData.map((info, index) => (
          <div key={index} className="bg-grey rounded-sm">
            <div className="flex flex-col items-center justify-center mb-3">
              <img
                src={info.img}
                alt="sector_images"
                className="h-full w-full"
              />
            </div>
            <div>
              <p className="text-sm font-normal text-black text-center py-2 md:text-lg">
                {info.title}
              </p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Focus;
