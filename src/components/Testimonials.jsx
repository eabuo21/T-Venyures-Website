import React from "react";
import Sliders from "./Sliders";

const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h2 className="text-red font-bold text-xl md:text-2xl lg:text-3xl">
          Success
        </h2>
        <h2 className="text-xl font-normal my-2 md:text-2xl lg:text-3xl">
          Don't just take our word for it{" "}
        </h2>
      </div>

      <Sliders />
    </div>
  );
};

export default Testimonials;
