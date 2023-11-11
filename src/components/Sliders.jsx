import React, { useState, useEffect } from "react";
import "./Slider.css";
import promise from "../assets/images/clientel/promiseChukwu.png";
import lilian from "../assets/images/clientel/Lilian.jpg";

const Sliders = () => {
  const [index, setIndex] = useState(0);
  const people = [
    {
      id: 1,
      image: promise,
      name: "Promise Okwuchukwu",
      title: "Founder, Mijolnia",
      quote:
        "I'm grateful to Tongston for recognizing Mijolnia's potential and awarding us the TEES Elevator Pitch prize, which included both a substantial cash award and a transformative business advisory session. Their support has been invaluable on our journey to provide sustainable energy solutions. The entrepreneurial insights and network connections I gained during the Tongston Business Advisory Session have been instrumental in shaping our vision. We're excited to continue making an impact, starting here in Nigeria and reaching out to the world. Thank you, Tongston! ",
    },
    {
      id: 2,
      image: lilian,
      name: "Lilian Efobi",
      title: "Founder, Skills on Wheels",
      quote:
        "I came across TEES2022, thanks to Skills Outside School Foundation. They recommended it for the participants of Skills Outside School Foundation Lead4Change Initiative. I submitted my proposal and got selected to pitch my innovation. I took home some valuable insights not just from pitching my innovation but from attending the summit itself, through the Tongston business advisory session with the CEO and CFO.",
    },
    {
      id: 3,
      image: promise,
      name: "Promise Okwuchukwu",
      title: "Founder, Mijolnia",
      quote:
        "I'm grateful to Tongston for recognizing Mijolnia's potential and awarding us the TEES Elevator Pitch prize, which included both a substantial cash award and a transformative business advisory session. Their support has been invaluable on our journey to provide sustainable energy solutions. The entrepreneurial insights and network connections I gained during the Tongston Business Advisory Session have been instrumental in shaping our vision. We're excited to continue making an impact, starting here in Nigeria and reaching out to the world. Thank you, Tongston! ",
    },

    {
      id: 4,
      image: lilian,
      name: "Lilian Efobi",
      title: "Founder, Skills on Wheels",
      quote:
      "I came across TEES2022, thanks to Skills Outside School Foundation. They recommended it for the participants of Skills Outside School Foundation Lead4Change Initiative. I submitted my proposal and got selected to pitch my innovation. I took home some valuable insights not just from pitching my innovation but from attending the summit itself, through the Tongston business advisory session with the CEO and CFO.",
    },
  ];

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="testimonial-section">
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4 className="uppercase  text-black font-bold  text-lg">
                {name}
              </h4>
              <p className="capitalize mb-2 text-sm text-black font-normal">
                {title}
              </p>
              <p className="text-sm mt-2 leading-6 text-black md:leading-8 md:text-lg font-normal text-center md:mt-8 mx-auto max-w-[35em]">
                {quote}
              </p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="22"
            viewBox="0 0 13 22"
            fill="none"
          >
            <path
              d="M1.29194 10.2919L11.2919 0.291943C11.3849 0.199032 11.4952 0.125334 11.6165 0.0750504C11.7379 0.0247669 11.868 -0.00111389 11.9994 -0.00111389C12.1308 -0.00111389 12.2609 0.0247669 12.3823 0.0750504C12.5037 0.125334 12.614 0.199032 12.7069 0.291943C12.7999 0.384853 12.8736 0.495153 12.9238 0.616547C12.9741 0.73794 13 0.868048 13 0.999443C13 1.13084 12.9741 1.26095 12.9238 1.38234C12.8736 1.50373 12.7999 1.61403 12.7069 1.70694L3.41319 10.9994L12.7069 20.2919C12.8946 20.4796 13 20.7341 13 20.9994C13 21.2648 12.8946 21.5193 12.7069 21.7069C12.5193 21.8946 12.2648 22 11.9994 22C11.7341 22 11.4796 21.8946 11.2919 21.7069L1.29194 11.7069C1.19897 11.6141 1.12521 11.5038 1.07488 11.3824C1.02456 11.261 0.998658 11.1309 0.998658 10.9994C0.998658 10.868 1.02456 10.7379 1.07488 10.6165C1.12521 10.4951 1.19897 10.3848 1.29194 10.2919Z"
              fill="white"
            />
          </svg>{" "}
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="22"
            viewBox="0 0 13 22"
            fill="none"
          >
            <path
              d="M11.7081 11.7081L1.70806 21.7081C1.61515 21.801 1.50485 21.8747 1.38345 21.9249C1.26206 21.9752 1.13195 22.0011 1.00056 22.0011C0.869161 22.0011 0.739053 21.9752 0.61766 21.9249C0.496267 21.8747 0.385966 21.801 0.293056 21.7081C0.200145 21.6151 0.126445 21.5048 0.0761623 21.3835C0.0258797 21.2621 0 21.132 0 21.0006C0 20.8692 0.0258797 20.7391 0.0761623 20.6177C0.126445 20.4963 0.200145 20.386 0.293056 20.2931L9.58681 11.0006L0.293056 1.70806C0.105415 1.52042 -1.97712e-09 1.26592 0 1.00056C1.97712e-09 0.735192 0.105415 0.480697 0.293056 0.293056C0.480696 0.105415 0.735192 1.97712e-09 1.00056 0C1.26592 -1.97712e-09 1.52042 0.105415 1.70806 0.293056L11.7081 10.2931C11.801 10.3859 11.8748 10.4962 11.9251 10.6176C11.9754 10.739 12.0013 10.8691 12.0013 11.0006C12.0013 11.132 11.9754 11.2621 11.9251 11.3835C11.8748 11.5049 11.801 11.6152 11.7081 11.7081Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Sliders;
