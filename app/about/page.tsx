"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Experience from "@/components/Experience";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FooterSection } from "@/components/FooterSection";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Contact = () => {
  return (
    <>
      <div className="h-[40vh]">
        {" "}
        {/* Set height to 40vh on the container */}
        <div className="relative h-full w-full">
          <BackgroundLines
            className="absolute inset-0 -z-100"
            children={null}
          />{" "}
          {/* BackgroundLines fills the container */}
          <FloatingNav navItems={navItems} />
          <div className="relative h-full flex items-center justify-center w-full flex-col px-4">
            {/* Ensure content is positioned correctly */}
            <FloatingNav navItems={navItems} />
            <TextGenerateEffect
              words="All about Pat "
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              I'm a UX/UI designer and Frontend Developer based in Stockholm
              SWEDEN.
            </p>
          </div>
        </div>
      </div>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Experience />
          <FooterSection/>
          <Footer />
          <BackgroundBeams/>
        </div>
      </main>
    </>
  );
};

export default Contact;
