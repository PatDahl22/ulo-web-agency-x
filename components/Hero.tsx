import { FaLocationArrow } from "react-icons/fa";
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

  
import { useEffect, useState } from "react";

const Hero = () => {
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
