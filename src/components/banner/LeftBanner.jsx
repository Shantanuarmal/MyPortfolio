import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Web Developer.", "Java Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Shantanu Armal</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I’m a dedicated software developer with expertise in React, JavaScript, Java, SQL, and MySQL. 
        I specialize in building efficient, scalable, and user-friendly solutions. Along with my technical proficiency, 
        I excel in problem-solving, coding, and data structures and algorithms (DSA), which I apply across Java and React projects. 
        I thrive in collaborative environments, always aiming to deliver innovative solutions through clean code. Explore my portfolio 
        to see how I bring ideas to life with solid technical foundations and creative problem-solving approaches!
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner