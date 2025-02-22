import { FaLocationArrow } from "react-icons/fa6";

import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import MagicButton from "./MagicButton";

const Start = () => {
  return (
    <div className="pb-20 pt-36">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          {" "}
        </div>
      </BackgroundGradientAnimation>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            {" "}
          </div>
        </BackgroundGradientAnimation>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Welcome to"
            className="text-center text-[30px] md:text-5xl lg:text-6xl"
          />
          <TextGenerateEffect
            words="Pat Dahl's Portfolio"
            className="text-center text-[30px] md:text-5xl lg:text-6xl"
          />
          <a href="/home">
            <MagicButton
              title="Get start"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};


export default Start