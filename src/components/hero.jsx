import React from "react";
import { BsLinkedin, BsYoutube, BsInstagram } from "react-icons/bs";

export const HeroSection = () => {
  return (
    <>
      <div className="container px-12  mx-auto flex justify-start gap-10 items-center h-[20rem] ">
        <div className="w-72 h-72 rounded-full overflow-hidden">
          <img
            src="/profile.jpg"
            alt="Harsh Kumar Yaduvanshi"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col w-[44rem]  mb-12">
          <h1 className="text-5xl font-bold text-black pb-7">Harsh Kumar Yaduvanshi</h1>
          <p className="text-base  text-black w-4/5 ">
            Founder @Employment War | Software Engineer @Hotwax | Youtuber, Gamer | Mentored 1000+ professionals, students & first time founders
          </p>
          <div className="flex flex-row mt-10">
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10">
              <a href="https://www.linkedin.com/in/harsh-kumar-yaduvanshi/"><BsLinkedin className=" w-5 h-5 mx-auto mt-2" /></a>
            </div>
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10">
              <a href="https://www.youtube.com/@EmploymentWar"><BsYoutube className=" w-5 h-5 mx-auto mt-2" /></a>
            </div>
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10">
              <a href="https://www.instagram.com/harsh_yaduvanshi9/"><BsInstagram className=" w-5 h-5 mx-auto mt-2" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
