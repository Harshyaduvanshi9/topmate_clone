import React from "react";
import { BsArrowLeft, BsCameraVideo } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Describe = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full">

        {/* Header */}
        <div className="flex items-center gap-3 px-4 md:px-6 py-4 border-b border-gray-300">
          <BsArrowLeft
            className="text-green-600 text-2xl md:text-3xl cursor-pointer"
            onClick={() => navigate(-1)}
          />

          <div className="bg-purple-800 rounded-full w-8 h-8" />

          <div className="text-base md:text-lg font-semibold">
            Harsh Kumar Yaduvanshi
          </div>
        </div>

        {/* Title Box */}
        <div className="bg-[#C0E6D5] h-auto py-6 px-4 w-[95%] md:w-[80%] mx-auto mt-6 flex justify-center items-center text-lg md:text-2xl font-bold text-center">
          <p>Career Mentorship – for students & professionals</p>
        </div>

        {/* Price & Duration */}
        <div className="w-[95%] md:w-[80%] mx-auto border border-t-0 flex text-sm md:text-base font-bold">
          <div className="flex items-center w-1/2 p-3">
            ₹899
          </div>
          <div className="flex items-center w-1/2 p-3 border-l">
            <BsCameraVideo className="mr-2" /> 30 mins
          </div>
        </div>

        {/* Description */}
        <div className="w-[95%] md:w-[80%] mx-auto mt-8 space-y-2 text-sm md:text-base">
          <p>Have doubts regarding your career?</p>
          <p>Don’t know where to start or how to start?</p>
          <p>
            Confused about performance marketing vs social media marketing?
            Or planning to transition into growth marketing?
          </p>
        </div>

        <div className="w-[95%] md:w-[80%] mx-auto my-8 text-sm md:text-base space-y-2">
          <p>I have been there, done that.</p>
          <p>Ask me specific questions — any questions.</p>
          <p className="font-semibold">Let me help you!</p>
        </div>

        <hr />

        {/* Connect Section */}
        <div className="w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 my-10">
          
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl md:text-3xl font-bold">
              Let’s connect!
            </h1>

            <div className="flex gap-3">
              <div className="bg-[#C0E6D5] px-6 py-2 rounded-full text-center">
                <h1 className="font-bold">5</h1>
                <p className="text-sm">Sessions</p>
              </div>

              <div className="bg-[#C0E6D5] px-6 py-2 rounded-full text-center">
                <h1 className="font-bold">2</h1>
                <p className="text-sm">Loved it</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-800 rounded-full w-16 h-16 md:w-20 md:h-20" />
        </div>

        {/* Footer Box */}
        <div className="w-[95%] md:w-[80%] mx-auto bg-[#7FA79B] mb-10 h-32 md:h-44 rounded-lg" />

      </div>
    </>
  );
};

