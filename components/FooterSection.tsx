"use client";
import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TypewriterEffectSmooth as TypewriterEffect } from "./ui/typewriter-effect";
import MagicButton from "./MagicButton";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";


  const words1 = [
    {
      text: "How ",
      className: "text-2xl ",
    },
    {
      text: " about",
      className: "text-2xl ",
    },
    {
      text: " to",
      className: "text-2xl ",
    },
    {
      text: " cooperate",
      className: "text-3xl text-purple dark:text-purple",
    },
  ];
  const words2 = [
    {
      text: " and",
      className: "text-2xl ",
    },
    {
      text: " drive",
      className: "text-2xl ",
    },
    {
      text: " results",
      className: "text-3xl text-purple dark:text-purple",
    },
    {
      text: " for",
      className: "text-2xl",
    },
    {
      text: " your",
      className: "text-2xl ",
    },
    {
      text: " business?",
      className: "text-4xl text-purple dark:text-purple",
    },
  ];


export function FooterSection() {
  const [showSecondEffect, setShowSecondEffect] = useState(false);

  useEffect(() => {
    // Assuming each word takes 1 second to type, adjust the timeout accordingly
    const timeout = words1.length * 1000;
    const timer = setTimeout(() => setShowSecondEffect(true), timeout);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center max-lg:mt-10">
      {/* Content Section */}
      <div className="flex justify-center relative my-20 ">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          {" "}
          {/* Text with animation */}
          <TypewriterEffect words={words1} />
          {showSecondEffect && <TypewriterEffect words={words2} />}
          <p className="text-white md:mt-10 my-5 text-center">
            Let&apos;s work together and take your project to the next level
            with user-centric design.
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
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
