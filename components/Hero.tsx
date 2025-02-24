import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./MagicButton";
import { TypewriterEffectSmooth as TypewriterEffect } from "./ui/typewriter-effect";


  const words1 = [
    {
      text: "Welcome ",
      className: "text-4xl ",
    },
    {
      text: " to",
      className: "text-4xl ",
    },
  ];
  const words2 = [
    {
      text: " Pat ",
      className: "text-6xl text-purple dark:text-purple font-bold",
    },
    {
      text: " Dahl's ",
      className: "text-6xl text-purple dark:text-purple font-bold",
    },
    {
      text: " Portfolio ",
      className: "text-6xl text-purple dark:text-purple font-bold",
    },
  ];

  
import { useState } from "react";

const Hero = () => {
  const [showSecondEffect, setShowSecondEffect] = useState(true);
  return (
    <div className="pb-10 pt-36 relative">
      {" "}
      {/* Added relative to contain absolute children */}
      <div>
        {/* Spotlight components - Ensure their positioning works as expected */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[50vh] w-[50vw]" fill="blue" />
      </div>
      {/* Background Grid - Ensures proper grid layer effect */}
      <div className="h-[50vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-black-100" />
      </div>
      {/* Content Section */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center py-10">
          {/* Text with animation */}
          <TypewriterEffect words={words1} />
                {showSecondEffect && <TypewriterEffect words={words2} />}

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I&apos;m a UX/UI designer and Frontend Developer based in Stockholm,
            SWEDEN.
          </p>

          {/* MagicButton wrapped in an anchor tag for navigation */}
          <a href="/contact">
            <MagicButton
              title="Let's talk"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
