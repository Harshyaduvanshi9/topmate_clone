import React from "react";

export const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-12 pt-10 mb-12">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          
          {/* Left Section */}
          <div className="w-full md:w-[45%] flex flex-col items-center md:items-start">
            <p className="text-3xl font-bold pb-8">About me</p>

            <div className="bg-red-400 w-48 h-48 md:w-60 md:h-60 overflow-hidden rounded-lg">
              <img
                src="./profile.jpg"
                alt="Harsh profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[55%] flex flex-col gap-5 text-base md:text-lg text-black">
            <p>
              I am Harsh! I have scaled various consumer internet startups such
              as Betterhalf, PayTm Insider, FilterCopy, Dice Media, Gobble,
              Nutshell, Imumz.
            </p>

            <p className="font-semibold">What have I done? 🔥</p>

            <p>👉 Recently worked on Supply chain management system Project.</p>

            <p>
              👉 Mentored 1000+ professionals , students & first time founders.
            </p>

            <p>
              👉 Worked on 200+ projects of web development.
            </p>

            <p>
              👉 Mentor at Growth School; taught 500+ working professionals and
              college students.
            </p>

            <p>
              👉 Mentored 25 first-time founders & leaders on startup scaling,
              app growth, and social media strategy.
            </p>

            <p>
              👉 LinkedIn’s Global Vice President named me as a Top Creator.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

