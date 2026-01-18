import React from "react";
import { BsLinkedin, BsYoutube, BsInstagram } from "react-icons/bs";

export const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

          {/* Profile Image */}
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Harsh Kumar Yaduvanshi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col w-full md:max-w-2xl text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black pb-4">
              Harsh Kumar Yaduvanshi
            </h1>

            <p className="text-sm sm:text-base text-black md:w-4/5">
              Founder @Employment War | Software Engineer @Hotwax | Youtuber, Gamer | 
              Mentored 1000+ professionals, students & first time founders
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-3 mt-8">
              <a
                href="https://www.linkedin.com/in/harsh-kumar-yaduvanshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-200 rounded-full h-10 w-10 flex items-center justify-center hover:bg-slate-300 transition"
              >
                <BsLinkedin className="w-5 h-5" />
              </a>

              <a
                href="https://www.youtube.com/@EmploymentWar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-200 rounded-full h-10 w-10 flex items-center justify-center hover:bg-slate-300 transition"
              >
                <BsYoutube className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/harsh_yaduvanshi9/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-200 rounded-full h-10 w-10 flex items-center justify-center hover:bg-slate-300 transition"
              >
                <BsInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
