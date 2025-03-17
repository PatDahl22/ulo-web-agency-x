import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { TypewriterEffectSmooth as TypewriterEffect } from "./ui/typewriter-effect";

  const words = [
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

const Hero = () => {
  
  return (
    <div className="pb-10 pt-36 relative">
      {" "}
      {/* Content Section */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center py-10">
          <h1 className="relative my-6 flex flex-row text-4xl font-bold items-center justify-center">
            Welcome to
          </h1>

          {/* Text with animation */}
          <TypewriterEffect words={words} />

          <p className="text-center my-4 text-sm md:text-lg lg:text-2xl">
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
