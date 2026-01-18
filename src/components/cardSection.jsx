import React from "react";
import { Card } from "./card";

export const CardSection = () => {
  return (
    <>
      <div className="bg-[#F4E1D6] w-full h-full pb-10">
        <div className="container pt-10 mx-auto px-10 h-max gap-4 flex flex-wrap justify-evenly xl:px-10 2xl:px-0">
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
            description="One-to-one mentorship focused on long-term growth, skill development, and clear direction with practical guidance and support."
            price="200"
            duration="40 min"
          />
          <Card
            title="Job Finding Strategy"
            description="A structured job-search strategy covering applications, referrals, networking, and interview planning to increase your chances of getting hired."
            price="300"
            duration="60 min"

          />
          <Card
            title="Linkedin growth"
            description="One-to-one LinkedIn optimization and growth strategy to build a strong professional presence and attract recruiters."
            price="180"
            duration="40 min"
          />
          <Card
            title="Find Good internship"
            description="Personalized guidance to find relevant internships using smart application and outreach strategies."
            price="200"
            duration="40 min"
          />
            <Card
            title="Problem Solving Improvement Tips"
            description="Structured guidance to strengthen problem-solving ability and analytical thinking."
            price="150"
            duration="45 min"
          />
           <Card
            title="Premium Jobs WhatsApp Group"
            description="Lifetime Subscription of Exclusive WhatsApp group with verified job openings, referrals, and career opportunities."
            price="500"
            duration="45 min"
          />

            <Card
            title="Paid Exam Help"
            description="Expert-guided exam help with focused preparation and problem-solving support."
            price="600"
            duration="120 min"
          />
        </div>
      </div>
    </>
  );
};
