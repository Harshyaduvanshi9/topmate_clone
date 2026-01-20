import React, { useEffect, useState } from "react";
import { BsLinkedin, BsYoutube, BsInstagram } from "react-icons/bs";

export const HeroSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 1000;
    const duration = 1200; // animation duration in ms
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-12 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* Profile Image */}
        <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
          <img
            src="/profile.jpg"
            alt="Harsh Kumar Yaduvanshi"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col w-full md:max-w-2xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black pb-3">
            Harsh Kumar Yaduvanshi
          </h1>

          <p className="text-sm sm:text-base text-black md:w-4/5">
            Founder @Employment War | Software Engineer @Hotwax | Youtuber, Gamer |
            Mentored 1000+ professionals, students & first time founders
          </p>

          {/* Animated Booking Highlight */}
          <div className="mt-4 flex justify-center md:justify-start">
            <div className="relative">
              <div className="px-5 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-semibold shadow-lg">
                🚀 {count}+ Bookings Completed
              </div>

              {/* Pulse Effect */}
              <span className="absolute inset-0 rounded-full bg-red-500 opacity-30 animate-ping"></span>
            </div>
          </div>

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
  );
};
