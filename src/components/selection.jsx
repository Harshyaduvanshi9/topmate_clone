import React from "react";
import { Calender } from "./calender";
import { Describe } from "./describe";

const Selection = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-[#fef8ed] px-2 md:px-0">
        <div className="max-w-[74rem] bg-white min-h-screen mx-auto flex flex-col md:flex-row">

          {/* Left Section */}
          <div className="w-full md:w-[60%] md:border-r border-gray-300">
            <Describe />
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[40%] border-t md:border-t-0">
            <Calender />
          </div>

        </div>
      </div>
    </>
  );
};

export default Selection;

