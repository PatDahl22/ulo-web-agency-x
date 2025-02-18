"use client";

import { navItems, project1Items } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth as TypewriterEffect } from "@/components/ui/typewriter-effect";
import Clients from "@/components/Clients";
import { RoleFeaturesSection } from "@/components/ui/RoleFeaturesSection";


const Page = () => {
  const [showSecondEffect, setShowSecondEffect] = useState(false);

  const words2 = [
    {
      text: "UX/UI ",
      className: "text-lg ",
    },
    {
      text: " Design",
      className: "text-lg ",
    },
  ];
  const words1 = [
    {
      text: " Travel",
      className: "text-6xl text-blue-500 dark:text-blue-500",
    },
    {
      text: "Buddy",
      className: "text-6xl text-blue-500 dark:text-blue-500",
    },
  ];
  const words3 = [
    {
      text: "AI-Powered ",
      className: "text-2xl ",
    },
    {
      text: " Travel",
      className: "text-2xl ",
    },
    {
      text: " Planning",
      className: "text-2xl ",
    },
    {
      text: " App",
      className: "text-2xl ",
    },
  ];


    useEffect(() => {
      // Assuming each word takes 1 second to type, adjust the timeout accordingly
      const timeout = words1.length * 1000;
      const timer = setTimeout(() => setShowSecondEffect(true), timeout);
      return () => clearTimeout(timer);
    }, []);
  
  

  // Prepare the data for the HeroParallax component
  const heroItems = project1Items.HeroImg.map((item) => ({
    title: item.name,
    link: item.Link,
    thumbnail: item.img,
  }));

  const myroles = project1Items.myroles.map((item) => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
    className: item.className 
  }));


  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {/* Set height to 100vh on the container */}
        <div className="h-full w-full">
          <div className="relative h-[200vh] w-full">
            <StarsBackground className="absolute inset-0 z-100" />
            <ShootingStars />
            {/* BackgroundLines fills the container */}
            <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0">
              <div className="relative z-20 mt-6 flex flex-row items-center justify-between gap-8">
                <div className="flex flex-col justify-center h-[20rem] w-full">
                  <TypewriterEffect words={words2} />

                  <div className="flex flex-col justify-center h-[20rem] w-full">
                    <TypewriterEffect words={words1} />
                    {showSecondEffect && <TypewriterEffect words={words3} />}
                  </div>
                </div>
                <div className="item-end">
                  <img
                    src="/TB-Mobile/TB-mockup32.png"
                    alt="travelbuddy mockup"
                    className=" h-full w-full"
                  />
                </div>
              </div>
              <div className="h-[100rem] absolute inset-0 z-6">
                <HeroParallax products={heroItems} />
              </div>
            </div>
          </div>
          <section id="about" className="my-20">
            <h1 className="relative z-20 mt-6 flex flex-row text-4xl font-bold items-center justify-center">
              Anout The Project
            </h1>
            <p className="relative  text-white-200 z-20 mt-6 py-4 px-8 flex flex-row text-center items-center justify-center">
              Create an intuitive travel assistant app that provides
              personalized recommendations based on user preferences.
            </p>
            <div className="relative z-20 mt-6 flex flex-row items-center justify-between gap-8">
                <div className="w-1/2">
                    <h4 className="relative  text-white-200 z-20 my-2 flex flex-row text-xl font-semiblod">
                      GET START
                    </h4>

                    <h2 className="relative z-20 my-4 flex flex-row text-3xl font-bold">
                      Project's Overview
                    </h2>
                    <p className="text-sm leading-[1.6] my-2 text-white-200 font-normal">
                      TravelBuddy is a user-friendly, AI-powered travel assistant
                      app designed to provide personalized travel recommendations.
                      This project was my first experience working on a real UX/UI
                      process, where I collaborated with designers and backend
                      developers.
                    </p>
                    <p className="text-sm leading-[1.6] my-2 text-white-200 font-normal">
                      My contributions included refining typography, layout,
                      spacing, UI components, and ensuring accessibility compliance.
                    </p>
                </div>
                <div className="item-end w-1/2">
                    <img
                      src="/TB-Mobile/TB-mockup31.png"
                      alt="travelbuddy mockup"
                      className=" h-full w-full"
                    />
                </div>
            </div>
          </section>

          <section id="myrole"> 

              {myroles.map((role, index) => (
                <RoleFeaturesSection
                  key={index}
                  title={role.title}
                  description={role.description}
                  icon={role.icon}
                  className={role.className} 
                  index={index}
                />
              ))}

          </section>

          <Clients />
        </div>
      </div>
      {/* Include your sections below */}
      <Footer />
    </main>
  );
}

export default Page;
