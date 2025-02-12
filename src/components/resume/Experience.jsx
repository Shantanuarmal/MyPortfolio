import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Upcoming...."
            // subTitle="Google Out Tech - (2017 - Present)"
            // result="USA"
            // des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        {/* </div>
      </div> */} 
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-4xl font-bold"> Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
  title="Front-End Developer (Personal Projects)"
  subTitle="As a Front-End Developer, I built and designed responsive web applications using React.js. Focused on creating modern, user-friendly interfaces with optimized performance and seamless navigation.  
  *Key Project:*  
  • **E-commerce Clothing Store** – Developed the entire frontend of an online shopping platform using React.js and Tailwind CSS. Implemented dynamic product listings, category filters, a shopping cart, and a user authentication system with Firebase.  
  *Technologies used:* React.js, JavaScript, Tailwind CSS, Firebase"
  result="Completed"
/>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
