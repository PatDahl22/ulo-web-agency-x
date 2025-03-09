import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { TypewriterEffectSmooth as TypewriterEffect } from "./ui/typewriter-effect";


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


import { useEffect, useState } from "react";

export const FooterSection = () => {
  const [showSecondEffect, setShowSecondEffect] = useState(false);

  useEffect(() => {
    const timeout = words1.length * 1000;
    const timer = setTimeout(() => setShowSecondEffect(true), timeout);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-10 pt-36 relative">
      {" "}
      {/* Content Section */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center py-10">
          {/* Text with animation */}
          <TypewriterEffect words={words1} />
          {showSecondEffect && <TypewriterEffect words={words2} />}

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-md lg:text-lg">
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
    </div>
  );
};
