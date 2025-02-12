import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Vortex } from "./ui/vortex";
import { WavyBackground } from './ui/wavy-background';


const SectionFooter = () => {
  return (
    <Vortex
      backgroundColor="black"
      className="w-full mx-auto rounded-md h-[30rem] "
    >
      <div className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h1 className="heading lg:max-w-[65vw] text-center mx-10">
          How about to
          <span className="text-purple"> cooperate</span> and drive results for
          your business?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s work together and take your project to the next level with
          user-centric design.
        </p>
        <a href="/contact">
          <MagicButton
            title="Let's get in touch!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </Vortex>
  );
};

export default SectionFooter