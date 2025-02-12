import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Vortex } from "./ui/vortex";


const SectionFooter = () => {
  return (
      <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h1 className="heading lg:max-w-[65vw]">
            How about to
            <span className="text-purple"> cooperate</span> and drives
            results for your business?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Let&apos;s work together and take your project to the next level
            with user-centric design.
          </p>
          <a href="pattaravarat.dahl@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </Vortex>
      </div>
  );
};

export default SectionFooter