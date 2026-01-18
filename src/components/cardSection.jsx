import React from "react";
import { Card } from "./card";

export const CardSection = () => {
  return (
    <>
      <div className="bg-[#F4E1D6] w-full pb-10 px-20">
        <div
          className="
            container 
            mx-auto 
            pt-10 
            px-4 sm:px-6 md:px-10 
            flex 
            flex-wrap 
            justify-center 
            gap-y-6 
            gap-x-4
            xl:justify-between
          "
        >
          <Card
            title="Resume Review"
            duration="30 min"
            description="Get your resume reviewed by an industry professional. Receive clear feedback on structure, content, keywords, and overall presentation to improve your chances of getting shortlisted."
            price={120}
          />

          <Card
            title="Interview Prep & Tips"
            duration="40 min"
            description="Personalized interview preparation focused on improving confidence, clarity, and answer structure. Includes practical tips, common interview questions, and guidance to help you perform better in real interviews."
            price={150}
          />

          <Card
            title="Career Guidance"
            duration="50 min"
            description="Personalized career guidance to help you choose the right path, set clear goals, and make informed career decisions with practical advice."
            price={250}
          />

          <Card
            title="Mentorship"
            duration="40 min"
            description="One-to-one mentorship focused on long-term growth, skill development, and clear direction with practical guidance and support."
            price={200}
          />

          <Card
            title="Job Finding Strategy"
            duration="60 min"
            description="A structured job-search strategy covering applications, referrals, networking, and interview planning to increase your chances of getting hired."
            price={300}
          />

          <Card
            title="LinkedIn Growth"
            duration="40 min"
            description="One-to-one LinkedIn optimization and growth strategy to build a strong professional presence and attract recruiters."
            price={180}
          />

          <Card
            title="Find Good Internship"
            duration="40 min"
            description="Personalized guidance to find relevant internships using smart application and outreach strategies."
            price={200}
          />

          <Card
            title="Problem Solving Improvement Tips"
            duration="45 min"
            description="Structured guidance to strengthen problem-solving ability and analytical thinking."
            price={150}
          />

          <Card
            title="Premium Jobs WhatsApp Group"
            duration="Lifetime"
            description="Lifetime subscription of an exclusive WhatsApp group with verified job openings, referrals, and career opportunities."
            price={500}
          />

          <Card
            title="Paid Exam Help"
            duration="120 min"
            description="Expert-guided exam help with focused preparation and problem-solving support."
            price={600}
          />
        </div>
      </div>
    </>
  );
};

