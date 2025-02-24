"use client";
import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TypewriterEffectSmooth as TypewriterEffect } from "./ui/typewriter-effect";
import MagicButton from "./MagicButton";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export function FooterSection() {
  const [showSecondEffect, setShowSecondEffect] = useState(false);

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

  useEffect(() => {
    // Assuming each word takes 1 second to type, adjust the timeout accordingly
    const timeout = words1.length * 1000;
    const timer = setTimeout(() => setShowSecondEffect(true), timeout);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffect words={words1} />
      {showSecondEffect && <TypewriterEffect words={words2} />}
      <p className="text-white md:mt-10 my-5 text-center">
        Let&apos;s work together and take your project to the next level with
        user-centric design.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="/contact">
          <MagicButton
            title="Let's talk"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
