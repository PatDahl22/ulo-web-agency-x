"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FooterSection } from "@/components/FooterSection";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { TypewriterEffectSmooth as TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: " All ",
    className: "text-6xl font-bold",
  },
  {
    text: " about ",
    className: "text-6xl font-bold",
  },
  {
    text: "  Pat ",
    className: "text-6xl text-purple dark:text-purple font-bold",
  },
];

const Contact = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full px-20">
      <div className="h-[50vh]">
        <div className="relative h-full w-full">
          <BackgroundLines
            className="absolute inset-0 -z-100"
            children={undefined}
          />
          <FloatingNav navItems={navItems} />
          <div className="relative h-full flex items-center justify-center w-full flex-col px-4">
            <TypewriterEffect words={words} />
            <p className="text-center md:tracking-wider mt-4 mb-4 text-sm md:text-lg lg:text-2xl">
              I'm a UX/UI designer and Frontend Developer based in Stockholm
              SWEDEN.
            </p>
            <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 max-w-7xl mx-auto">
              <a href="https://drive.google.com/open?id=1nRcgIKJ0V5KMwy6S1MjQ6dBGi7zFMNkT&usp=drive_fs"
                  target="_blank"
                  rel="noopener noreferrer">
                <MagicButton
                  title="Download My CV English"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
              <a href="https://drive.google.com/file/d/1-7CDey7GBbTAZptw6_eH1JGhantRFgiA/view"
                  target="_blank"
                  rel="noopener noreferrer">
                <MagicButton
                  title="Download My CV in Swedish"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>            
          </div>
        </div>
      </div>

      {/* About section */}
      <section id="about" className="">
        <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4 px-6">
          <div className="flex flex-col justify-center w-full sm:w-auto mt-8">
            <h4 className="relative text-black dark:text-white-200 my-2 flex flex-row text-xl font-semibold">
              Get to know Pat
            </h4>
            <h2 className="relative my-4 flex flex-row text-3xl font-bold">
              I am Pat Dahl
            </h2>
            <p className="text-sm leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
              Originally from Thailand, I have a background in economics and
              began my career as a finance assistant, where I worked for five
              years after high school. Later, I ventured into entrepreneurship,
              running my own mobile operator company.
            </p>
            <p className="text-sm leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
              After relocating to Sweden, I found employment in my field
              challenging, which led me to work as a nail technologist for 15
              years.
            </p>
            <p className="text-sm leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
              However, my passion for technology and design remained strong.
              During the pandemic, with fewer customers, I took the opportunity
              to pursue this passion further by enrolling at Chas Academy.
            </p>
          </div>
          <div className="flex justify-center items-center sm:w-auto mt-16 sm:mt-8">
            <img
              src="/Pat.png"
              alt="Pat Dahl"
              className="w-full sm:w-auto sm:h-auto max-w-[500px] mx-auto"
            />
          </div>
        </div>
      </section>

      <Experience />
      <FooterSection />
      <Footer />
    </main>
  );
};

export default Contact;
