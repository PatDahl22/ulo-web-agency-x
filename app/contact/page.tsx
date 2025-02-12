"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Clients from "@/components/Clients";
import { SignupForm } from "@/components/SignupForm";
import SectionFooter from "@/components/SectionFooter";

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
          <div className="relative h-full flex items-center justify-center w-full flex-col px-4">
            {/* Ensure content is positioned correctly */}
            <TextGenerateEffect
              words="Are you ready?"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
            <div className="flex flex-col items-center">
              <p className="text-center text-[20px] lg:max-w-[65vw]">
                I'm ready to 
                <span className="text-purple">
                  {" "}
                  craft a solution
                </span> <br /> that drives results for your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Clients/>
          <SignupForm/>
          <SectionFooter/>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Contact;
