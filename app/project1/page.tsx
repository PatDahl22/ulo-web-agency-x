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
import { LayoutGrid } from "@/components/ui/LayoutGrid";


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

const SkeletonOne = () => {
  return (
    <div className="justify-center">
      <p className="font-semibold py-2 md:text-2xl lg:text-xl text-lg text-white">
        Travel planning is often a daunting task for many travelers.
      </p>
      <ul>
        <li className="font-normal text-base max-w-lg my-3 text-neutral-200">
          <p className="font-medium md:text-2xl lg:text-xl text-sm text-white">
            Overwhelming Travel Options :{" "}
            <span className="text-sm leading-[1.6] text-white-200 font-normal">
              With an abundance of choices for flights, accommodations, and
              activities, users experience decision fatigue, making it difficult
              to select the best options.
            </span>
          </p>
        </li>
        <li className="font-normal text-base max-w-lg my-3 text-neutral-200">
          <p className="font-medium md:text-2xl lg:text-xl text-sm text-white">
            Non-Personalized Recommendations :{" "}
            <span className="text-sm leading-[1.6] text-white-200 font-normal">
              Existing travel apps fail to offer personalized suggestions based
              on individual user preferences, often providing irrelevant options
              that don't match the user's needs.
            </span>
          </p>
        </li>
        <li className="font-normal text-base max-w-lg my-3 text-neutral-200">
          <p className="font-medium md:text-2xl lg:text-xl text-sm text-white">
            Disorganized Pre-Travel Planning :{" "}
            <span className="text-sm leading-[1.6] text-white-200 font-normal">
              Travelers frequently need to use multiple apps to manage different
              aspects of their trip, booking flights, accommodations, creating
              itineraries, leading to inefficiency and time wastage.
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="justify-center">
      <p className="font-semibold py-2 md:text-2xl lg:text-xl text-lg text-white">
        To tackle these issues, we built TravelBuddy—an AI-driven app designed
        to simplify the travel planning process with the following key features.
      </p>
      <ul>
        <li className="font-normal text-base max-w-lg my-3 text-neutral-200">
          <p className="font-medium md:text-2xl lg:text-xl text-sm text-white">
            Personalized AI Travel Suggestions :{" "}
            <span className="text-sm leading-[1.6] text-white-200 font-normal">
              Custom recommendations based on the user's travel preferences,
              interests, and past behavior.
            </span>
          </p>
        </li>
        <li className="font-normal text-base max-w-lg my-3 text-neutral-200">
          <p className="font-medium md:text-2xl lg:text-xl text-sm text-white">
            Centralized Trip Planning :{" "}
            <span className="text-sm leading-[1.6] text-white-200 font-normal">
              Compare flights, accommodations, and activities all in one app,
              saving users the hassle of switching between different services.
            </span>
          </p>
        </li>
        <li className="font-normal text-base max-w-lg my-3 text-neutral-200">
          <p className="font-medium md:text-2xl lg:text-xl text-sm text-white">
            Geo-Based Recommendations :{" "}
            <span className="text-sm leading-[1.6] text-white-200 font-normal">
              Real-time travel tips based on the user's location, including
              suggestions for nearby attractions, dining, and activities.
            </span>
          </p>
        </li>
        <li className="font-normal text-base max-w-lg my-3 text-neutral-200">
          <p className="font-medium md:text-2xl lg:text-xl text-sm text-white">
            Pre-Travel Checklist & Notifications :{" "}
            <span className="text-sm leading-[1.6] text-white-200 font-normal">
              Keeps users organized with helpful reminders and tasks to complete
              before their trip.
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

const cards = [
  {
    id: 1,
    name: "Problems",
    content: <SkeletonOne />,
    className: "col-span-2",
    thumbnail: "/TB-Mobile/problems.png",
  },
  {
    id: 2,
    name: "Solutions",
    content: <SkeletonTwo />,
    className: "col-span-2",
    thumbnail: "/TB-Mobile/solutions.png",
  },
];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="h-full w-full">
          <StarsBackground className="absolute inset-0 z-100" />
          <ShootingStars />
          {/* BackgroundLines fills the container */}
          <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0 h-[100vh]">
            <div className="relative z-20 my-10 flex flex-row items-center justify-between gap-8">
              <div className="flex flex-col justify-center h-[20rem] w-full px-20">
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
          </div>

          <div className="h-[100rem] absolute w-screen inset-0">
            <HeroParallax products={heroItems} />
          </div>

          {/* About section */}
          <section id="about" className="my-40 mx-10">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center">
              About The Project
            </h1>
            <p className="relative  text-white-200 mt-6 py-4 px-8 flex  text-center items-center justify-center">
              Create an intuitive travel assistant app that provides
              personalized recommendations based on user preferences.
            </p>
            <div className="relative mt-6 flex flex-row items-center justify-between gap-8">
              <div className="w-1/2">
                <h4 className="relative text-white-200 my-2 flex flex-row text-xl font-semiblod">
                  GET START
                </h4>

                <h2 className="relative my-4 flex flex-row text-3xl font-bold">
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
              <div className="items-end w-1/2">
                <img
                  src="/TB-Mobile/TB-mockup31.png"
                  alt="travelbuddy mockup"
                  className=" h-full w-full"
                />
              </div>
            </div>
          </section>

          {/* My role section */}
          <section id="myrole" className="my-40 mx-10">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center">
              My Role
            </h1>
            <p className="relative  text-white-200 mt-6 py-4 px-8 flex  text-center items-center justify-center">
              As a UI/UX designer, I make sure that my designs are well received
              by users, and can be implemented by developers.
            </p>
            <div className="w-full p-8 py-4 items-center justify-center md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-6 grid">
              {myroles.map((role, index) => (
                <RoleFeaturesSection key={role.title} {...role} index={index} />
              ))}
            </div>
          </section>

          {/* Problems & Solutions */}
          <section id="problems" className="m-20">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center">
              Problems VS Solutions
            </h1>

            <div className="h-full py-20 w-full">
              <LayoutGrid cards={cards} />
            </div>
          </section>

          {/* Persona section */}
          <section id="pesona" className="my-40 mx-10">



            
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
