"use client";

import { navItems, project1Items } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth as TypewriterEffect } from "@/components/ui/typewriter-effect";
import { RoleFeaturesSection } from "@/components/ui/RoleFeaturesSection";
import { LayoutGrid } from "@/components/ui/LayoutGrid";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ProjectNav } from "@/components/ui/ProjectNav";

const Page = () => {
  const [showSecondEffect, setShowSecondEffect] = useState(false); 

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
              that don't match the use needs.
            </span>
          </p>
        </li>
        <li className="font-normal text-base max-w-lg my-3 text-neutral-200">
          <p className="font-medium md:text-2xl lg:text-xl text-sm text-white">
            Disorganized Pre-Travel Planning :{" "}
            <span className="text-sm leading-[1.6] text-white-200 font-normal">
              Travelers frequently need to use multiple apps to manage different
              aspects of their trip, booking flights, accommodations, and creating
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
              before their trip, ensuring a smoother travel experience.
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

interface PersonasProps {
  id: number;
  area: string;
  icon?: string;
  title: string;
  description: React.ReactNode;
}

const TextCard = ({ id, area, icon, title, description }: PersonasProps) => {
  return (
    <li
      id={id.toString()} // Apply the unique ID to each grid item
      className={`min-h-[10rem] list-none ${area}`}
    >
      {/* Container with border and padding */}
        {/* Content container with inner styling */}
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] ">
          {/* Icon and text */}
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {/* Icon container */}
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon && (
                <img src={icon} alt={title} className="mb-4 w-16 h-16" />
              )}
            </div>
            {/* Title and Description */}
            <div className="space-y-3 text-start">
              {/* Title */}
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              {/* Description */}
              <h2
                className="font-medium font-sans text-sm/[1.125rem]
                  md:text-base/[1.375rem] text-black dark:text-neutral-400" >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </li>
  );
}


  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <ProjectNav navItems={[]} />
        <div className="h-full w-full">
          <StarsBackground className="absolute inset-0 z-100" />
          <ShootingStars />
          {/* BackgroundLines fills the container */}
          <div className="relative xs:pt-40 px-8 w-full h-[50vh] flex justify-center items-center m-10 sm:px-16 md:px-14">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full h-full items-center justify-center gap-4 sm:mt-20">
              <div className="flex justify-center items-center sm:w-auto sm:mt-0">
                <img
                  src="/TB-Mobile/TB-mockup29.png"
                  alt="travelbuddy mockup"
                  className="justify-center items-center max-h-[500px] md:max-h-[300px] mx-auto"
                />
              </div>
              <div className="flex flex-col justify-center w-full">
                <div className="flex flex-col justify-center w-full mt-4">
                  {" "}
                  <TypewriterEffect words={words1} />
                  {showSecondEffect && <TypewriterEffect words={words3} />}
                </div>
                <h4 className="my-2 m:text-xl lg:text-xl">
                  <strong className="sm:text-xl lg:text-xl">My Role:</strong>{" "}
                  UX/UI Designer
                </h4>
                <h4 className="my-2 sm:text-xl lg:text-xl">
                  <strong className="sm:text-md lg:text-xl">
                    Project Duration:
                  </strong>{" "}
                  5 Weeks
                </h4>
                <h4 className="my-2 sm:text-xl lg:text-xl">
                  <strong className="sm:text-md lg:text-xl">Tools Used:</strong>{" "}
                  Figma, FigJam, Slack, Canvas
                </h4>
              </div>
            </div>
          </div>

          {/* About section */}
          <section id="about" className="my-40 mx-10 sm:px-16 md:px-14">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center">
              About The Project
            </h1>
            <p className="relative text-black dark:text-white-200 py-4 font-semibold flex text-center items-center justify-center">
              Create an intuitive travel assistant app that provides
              personalized recommendations based on user preferences.
            </p>
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4 px-6">
              <div className="flex flex-col justify-center w-full sm:w-auto mt-8">
                <h4 className="relative text-black dark:text-white-200 my-2 flex flex-row text-xl font-semibold">
                  GET START
                </h4>
                <h2 className="relative my-2 flex flex-row text-3xl font-bold">
                  Project's Overview
                </h2>
                <p className="text-sm leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
                  TravelBuddy is a user-friendly, AI-powered travel assistant
                  app designed to provide personalized travel recommendations.
                  This project was my first experience working on a real UX/UI
                  process, where I collaborated with designers and backend
                  developers.
                </p>
                <p className="text-sm leading-[1.6] mb-2 text-black dark:text-white-200 font-normal">
                  My contributions included refining typography, layout,
                  spacing, UI components, and ensuring accessibility compliance.
                </p>
              </div>
              <div className="flex justify-center items-center sm:w-auto mt-16 sm:mt-8">
                <img
                  src="/TB-Mobile/TB-mockup29.png"
                  alt="travelbuddy mockup"
                  className="w-full sm:w-auto sm:h-auto max-w-[500px] mx-auto"
                />
              </div>
            </div>
          </section>

          {/* My role section */}
          <section id="myrole" className="my-40 mx-10 sm:px-16 md:px-14">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              My Role
            </h1>
            <p className="relative text-black dark:text-white-200 mt-6 py-4 px-8 flex text-center items-center justify-center">
              As a UI/UX designer, I make sure that my designs are well received
              by users, and can be implemented by developers.
            </p>
            <div className="w-full p-10 py-4 items-center justify-center md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6 grid">
              {myroles.map((role, index) => (
                <RoleFeaturesSection key={role.title} {...role} index={index} />
              ))}
            </div>
          </section>

          {/* Problems & Solutions */}
          <section id="problems" className="my-40 mx-10 sm:px-16 md:px-14">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center w-full text-black dark:text-white py-6">
              Problems VS Solutions
            </h1>
            <div className="max-w-5xl mx-auto gap-8 px-10">
              <LayoutGrid cards={cards} />
            </div>
          </section>

          {/* Persona section */}
          <section id="pesonas" className="my-40 mx-10 px-14 sm:px-16 md:px-16">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center  text-black dark:text-white">
              Persona
            </h1>
            <p className="relative text-black dark:text-white-200 mt-4 py-4 px-4 flex  text-start items-center justify-center">
              We conducted user interviews to gather insights into travel
              behaviors, challenges, and requirements. This allowed us to
              develop accurate personas and tailor the app to specific user
              needs, improving both usability and relevance.
            </p>
            <div className="relative h-full w-full py-4 mt-8 rounded-xl border-0.75">
              {/* Glowing effect component */}
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative m-10">
                <p className="relative flex flex-row py-4 text-2xl font-bold text-start ">
                  Persona 1
                </p>
                <ul className="grid md:grid-cols-4 grid-rows-none sm:grid-cols-2 xs:grid-cols-2 gap-4 ">
                  {" "}
                  {/* This is the important part! */}
                  {project1Items.Personas1.map((persona, index) => (
                    <TextCard key={index} {...persona} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative h-full w-full py-4 mt-8 rounded-xl border-0.75">
              {/* Glowing effect component */}
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative m-10">
                <p className="relative flex flex-row py-2 text-2xl font-bold text-start ">
                  Persona 2
                </p>
                <ul className="grid md:grid-cols-4 grid-rows-none sm:grid-cols-2 xs:grid-cols-2 gap-4 ">
                  {" "}
                  {/* This is the important part! */}
                  {project1Items.Personas2.map((persona, index) => (
                    <TextCard key={index} {...persona} />
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Competitive Analysis */}
          <section
            id="competitive"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative text-black dark:text-white flex flex-row text-4xl font-bold items-center justify-center">
              Competitive Analysis
            </h1>
            <p className="relative text-black dark:text-white-200 mt-6 py-4 px-8 flex text-center items-center justify-center">
              TravelBuddy differentiates itself from competitors such as Google
              Travel, TripIt, and Kayak by focusing on:
            </p>
            <div className="relative m-10">
              <ul className="grid md:grid-cols-4 grid-rows-none sm:grid-cols-1 xs:grid-cols-2 gap-8 ">
                {" "}
                {/* This is the important part! */}
                {project1Items.CompetitiveAnalysis.map(
                  (CompetitiveAnalysis, index) => (
                    <TextCard id={0} key={index} {...CompetitiveAnalysis} />
                  )
                )}
              </ul>
            </div>
          </section>

          {/* Design & Key Features */}
          <section
            id="competitive"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Design & Key Features
            </h1>
            <h3 className="relative text-black dark:text-white mt-6 py-4 px-8 flex font-semibold txt-3xl text-center items-center justify-center">
              Features I Helped Shape
            </h3>
            <div className="relative m-10">
              <ul className="grid md:grid-cols-6 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 ">
                {" "}
                {/* This is the important part! */}
                {project1Items.DesignKeyFeatures.map(
                  (DesignKeyFeatures, index) => (
                    <TextCard id={0} key={index} {...DesignKeyFeatures} />
                  )
                )}
              </ul>
            </div>
          </section>

          {/* Use Flow */}
          <section id="userflow" className="my-40 mx-20">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center">
              User Flow
            </h1>
            <p className="relative text-white-200 mt-6 py-4 px-8 flex  text-center items-center justify-center">
              We kept the user flow simple and intuitive.
            </p>
            <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-4 max-w-7xl mx-auto items-center justify-center">
              <div className="relative mx-10 items-center justify-center md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-6 grid">
                {project1Items.userflows.map((userflow, index) => (
                  <RoleFeaturesSection
                    key={userflow.title}
                    {...userflow}
                    index={index}
                  />
                ))}
              </div>
              <div className="flex">
                {" "}
                <img
                  src="/TB-Mobile/UserFlow.png"
                  alt="user flow"
                  className="md:h-full h-full items-center sm:w-auto sm:h-auto mx-auto p-4"
                />
              </div>
            </div>
          </section>

          {/* UI Design*/}
          <section
            id="uiDesign"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              UI Design
            </h1>
            <h2 className="relative font-semibold txt-4xl text-black dark:text-white mt-6 py-4 px-8 flex  text-center items-center justify-center">
              Our system ensures a harmonious, accessible, and responsive design
              framework that is user-friendly and adaptable to varying contexts.
            </h2>{" "}
            <p className="relative text-black dark:text-white-200 mt-6 py-4 px-8 flex text-start items-center justify-center">
              User-friendly, with simple button presses based on real user
              feedback for enhanced usability. Clear color contrasts,
              easy-to-read text, and a mobile-friendly interface with
              touch-friendly buttons and links. Customizable light and dark
              modes for a comfortable experience in any setting.
            </p>{" "}
            <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 max-w-7xl mx-auto my-8 mx-30">
              <div className="flex">
                {" "}
                <img
                  src="/TB-Mobile/StyleGuide.png"
                  alt="Style Guide"
                  className="w-full h-full items-center px-10 sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div className="flex">
                {" "}
                <img
                  src="/TB-Mobile/Colors-Guide.png"
                  alt="Colors-Guide"
                  className="w-full h-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section
            id="keyFeatures"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Key Features
            </h1>
            <div className="relative m-10">
              <ul className="grid md:grid-cols-6 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 ">
                {" "}
                {/* This is the important part! */}
                {project1Items.KeyFeatures.map((KeyFeatures, index) => (
                  <TextCard id={0} key={index} {...KeyFeatures} />
                ))}
              </ul>
            </div>
          </section>

          {/* Visual Design */}
          <section
            id="visualDesign"
            className="my-20 mx-20 items-center justify-center"
          >
            <div
              className="relative bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-70 text-white py-10"
              style={{ backgroundImage: `url('/TB-Mobile/UIDesign.png')` }}
            >
              <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
                Visual Design
              </h1>
              <p className="relative text-black dark:text-white-200 mt-6 py-4 px-8 flex text-start items-center justify-center">
                The app's functionality focuses on user personalization, helping
                users find travel-related services (like accommodation, dining,
                and activities) based on their personal preferences and
                location. The search options are highly customizable, and the
                profile creation ensures the app can provide more relevant and
                tailored suggestions.
              </p>{" "}
            </div>
            <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-4 max-w-7xl mx-auto">
              <div className="py-4">
                {" "}
                <img
                  src="/TB-Mobile/VisualDesign1.png"
                  alt="travelbuddy bomile's mockup"
                  className="h-[400px] w-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div className="py-4">
                {" "}
                <img
                  src="/TB-Mobile/VisualDesign2.png"
                  alt="travelbuddy bomile's mockup"
                  className="h-[400px] w-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-4 max-w-7xl mx-auto">
              {" "}
              <div className="py-4">
                {" "}
                <img
                  src="/TB-Mobile/VisualDesign3.png"
                  alt="travelbuddy bomile's mockup"
                  className="h-[400px] w-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div className="py-4">
                {" "}
                <img
                  src="/TB-Mobile/VisualDesign4.png"
                  alt="travelbuddy bomile's mockup"
                  className="h-[400px] w-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-4 max-w-7xl mx-auto">
              <div className="py-4">
                <img
                  src="/TB-Mobile/VisualDesign5.png"
                  alt="travelbuddy bomile's mockup"
                  className="h-[400px] w-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div>
                <img
                  src="/TB-Mobile/TB-mockup32.png"
                  alt="travelbuddy bomile's mockup"
                  className="w-full h-full px-16 sm:px-10 items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-4 max-w-7xl mx-auto">
              <div className="flex">
                {" "}
                <img
                  src="/TB-Mobile/iMac.png"
                  alt="travelbuddy mockup"
                  className="w-full h-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div className="flex">
                {" "}
                <img
                  src="/TB-Mobile/iMac-1.png"
                  alt="travelbuddy mockup"
                  className="w-full h-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Testing & Results */}
          <section
            id="Testing&Results"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative my-10 flex flex-row text-4xl font-bold items-center justify-center">
              Testing & Results
            </h1>
            <div className="grid md:grid-cols-3 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 items-center justify-center mx-10">
              {project1Items.testingandresults.map(
                (testingandresult: any, index: number) => (
                  <RoleFeaturesSection
                    key={testingandresult.title}
                    {...testingandresult}
                    index={index}
                  />
                )
              )}
            </div>
          </section>

          {/* Future Improvements */}
          <section
            id="futureImprovements"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Future Improvements
            </h1>
            <div className="relative m-10">
              <ul className="grid md:grid-cols-6 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 ">
                {" "}
                {/* This is the important part! */}
                {project1Items.FutureImprovements.map(
                  (FutureImprovements, index) => (
                    <TextCard id={0} key={index} {...FutureImprovements} />
                  )
                )}
              </ul>
            </div>
          </section>

          {/* Reflection & Challenges*/}
          <section
            id="Reflection&Challenges"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Reflection & Challenges
            </h1>
            <div className="relative m-10">
              <ul className="grid md:grid-cols-6 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 ">
                {" "}
                {/* This is the important part! */}
                {project1Items.ReflectionAndChallenges.map(
                  (ReflectionAndChallenges, index) => (
                    <TextCard id={0} key={index} {...ReflectionAndChallenges} />
                  )
                )}
              </ul>
            </div>
          </section>

          {/* Conclusions*/}
          <section id="conclusions" className="my-40 mx-20">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Conclusions
            </h1>
            <div className="relative m-10">
              <ul className="grid md:grid-cols-6 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 ">
                {" "}
                {/* This is the important part! */}
                {project1Items.Conclusions.map((Conclusion, index) => (
                  <TextCard id={0} key={index} {...Conclusion} />
                ))}
              </ul>
            </div>
          </section>

          <section className="my-20 mx-20 items-center justify-center">
            <h1 className="relative flex flex-row text-3xl text-center font-bold items-center justify-center text-black dark:text-white">
              We took second place in the 'Chas's Challenge' at Chas academy!
            </h1>
            <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 max-w-7xl mx-auto my-20">
              <div className="flex">
                {" "}
                <img
                  src="/TB-Mobile/TravelBuddy-compatition.png"
                  alt="travelbuddy mockup"
                  className="w-full h-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div className="flex">
                {" "}
                <img
                  src="/TB-Mobile/Chas-team.png"
                  alt="travelbuddy mockup"
                  className="w-full h-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Include your sections below */}
      <Footer />
    </main>
  );
}

export default Page;
