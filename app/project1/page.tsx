"use client";

import { navItems, project1Items } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth as TypewriterEffect } from "@/components/ui/typewriter-effect";
import { RoleFeaturesSection } from "@/components/ui/RoleFeaturesSection";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ProjectNav } from "@/components/ui/ProjectNav";
import { HoverEffect } from "@/components/ui/card-hover-effect";

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
      className={`h-full items-start list-none ${area}`}
    >
      {/* Container with border and padding */}
      {/* Content container with inner styling */}
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] ">
        {/* Icon and text */}
        <div className="relative flex flex-1 flex-col justify-between gap-3">
          {/* Icon container */}
          <div className="w-fit rounded-lg border border-gray-600 p-2">
            {icon && <img src={icon} alt={title} className="mb-4 w-16 h-16" />}
            {/* Title and Description */}
            <div className="space-y-3 text-start">
              {/* Title */}
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans md:text-2xl/[1.875rem] text-black dark:text-white items-start">
                {title}
              </h3>
              {/* Description */}
              <h2 className="list-description font-medium font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400 items-start w-full">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}


  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full px-20">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <ProjectNav navItems={[]} />
        <div className="h-full w-full">
          <StarsBackground className="absolute inset-0 z-100" />
          <ShootingStars />
          {/* BackgroundLines fills the container */}
          <div className="relative xs:pt-40 w-full h-[50vh] flex justify-center items-center my-10">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full h-full items-center justify-center gap-4 sm:mt-20">
              <div className="flex justify-center items-center sm:w-auto sm:mt-0">
                <img
                  src="/TB-Mobile/banner.png"
                  alt="travelbuddy mockup"
                  className="max-h-[500px] md:max-h-[300px] mx-auto"
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
          <section id="about" className="my-40">
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
          <section id="myrole" className="my-40">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              My Role
            </h1>
            <p className="relative text-black dark:text-white-200 mt-6 py-4 flex text-center items-center justify-center">
              As a UI/UX designer, I make sure that my designs are well received
              by users, and can be implemented by developers.
            </p>
            <div className="w-full py-10 items-center justify-center md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6 grid">
              {myroles.map((role, index) => (
                <RoleFeaturesSection key={role.title} {...role} index={index} />
              ))}
            </div>
          </section>

          {/* Problems & Solutions */}
          <section id="problems" className="my-40">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center w-full text-black dark:text-white">
              Problems VS Solutions
            </h1>
            <div className="mx-auto gap-6 my-4">
              <HoverEffect
                items={project1Items.problems.map((item) => ({
                  title: item.title,
                  des: item.des, // Ensure des is an array of strings
                  link: "", // Provide an empty string if required
                }))}
              />{" "}
            </div>
          </section>

          {/* Persona section */}
          <section id="pesonas" className="my-40">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center  text-black dark:text-white">
              Persona
            </h1>
            <p className="relative text-black dark:text-white-200 mt-4 py-4 flex text-start items-center justify-center">
              We conducted user interviews to gather insights into travel
              behaviors, challenges, and requirements. This allowed us to
              develop accurate personas and tailor the app to specific user
              needs, improving both usability and relevance.
            </p>
            <div className="relative h-full w-full py-2 mt-8 rounded-xl border-0.75">
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
            <div className="relative h-full w-full py-2 px-8 md:px-6 sm:px-6 mt-8 rounded-xl border-0.75">
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
            className="my-40"
          >
            <h1 className="relative text-black dark:text-white flex flex-row text-4xl font-bold items-center justify-center">
              Competitive Analysis
            </h1>
            <p className="relative text-black dark:text-white-200 py-4 flex text-center items-center justify-center">
              TravelBuddy differentiates itself from competitors such as Google
              Travel, TripIt, and Kayak by focusing on:
            </p>
            <div className="relative my-10">
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
          <section id="competitive" className="my-40">
            <h1 className="relative text-black dark:text-white flex flex-row text-4xl mt-8 font-bold items-center justify-center">
              Design & Key Features
            </h1>
            <h3 className="relative text-black dark:text-white-200 py-4 flex text-start items-center justify-center">
              Features I Helped Shape
            </h3>
            <div className="relative my-10">
              <ul className="grid md:grid-cols-4 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 ">
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
          <section id="userflow" className="my-40">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center">
              User Flow
            </h1>
            <p className="relative text-white-200 mt-6 py-4 flex text-center items-center justify-center">
              We kept the user flow simple and intuitive.
            </p>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4">
              <div className="relative my-10 items-center justify-center md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-6 grid">
                {project1Items.userflows.map((userflow, index) => (
                  <RoleFeaturesSection
                    key={userflow.title}
                    {...userflow}
                    index={index}
                  />
                ))}
              </div>
              <div className="flex justify-center items-center sm:w-auto mt-16 sm:mt-8">
                {" "}
                <img
                  src="/TB-Mobile/UserFlow.png"
                  alt="user flow"
                  className="w-full sm:w-auto sm:h-auto max-w-[400px] mx-auto"
                />
              </div>
            </div>
          </section>

          {/* UI Design*/}
          <section id="uiDesign" className="my-40">
            <div>
              <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
                UI Design
              </h1>
              <p className="relative text-black dark:text-white-200 my-6 mx-auto flex text-start items-center justify-center">
                Our system ensures a harmonious, accessible, and responsive
                design framework that is user-friendly and adaptable to varying
                contexts.
              </p>{" "}
              <p className="relative text-black dark:text-white-200 my-6 mx-auto flex text-start items-center justify-center">
                User-friendly, with simple button presses based on real user
                feedback for enhanced usability. Clear color contrasts,
                easy-to-read text, and a mobile-friendly interface with
                touch-friendly buttons and links. Customizable light and dark
                modes for a comfortable experience in any setting.
              </p>{" "}
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-8 mx-auto">
              <div className="flex justify-center items-center">
                {" "}
                <img
                  src="/TB-Mobile/StyleGuide.png"
                  alt="Style Guide"
                  className="w-full sm:w-auto sm:h-auto max-w-[400px] mx-auto"
                />
              </div>
              <div className="flex justify-center items-center">
                {" "}
                <img
                  src="/TB-Mobile/Colorssystem.png"
                  alt="Colors-Guide"
                  className="w-full sm:w-auto sm:h-auto max-h-[400px] mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section id="keyFeatures" className="my-40">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white mx-auto">
              Key Features
            </h1>
            <div className="relative my-10">
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
          <section id="visualDesign" className="my-40">
            <div
              className="relative bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-70 text-white py-10 mx-auto"
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
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center mt-8 gap-4">
              <div className="flex justify-center items-center sm:w-auto mt-4 sm:mt-4 w-full p-4 py-4">
                {" "}
                <img
                  src="/TB-Mobile/VisualDesign1.png"
                  alt="travelbuddy bomile's mockup"
                  className="w-full sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div className="flex justify-center items-center sm:w-auto mt-4 sm:mt-4 w-full p-4 py-4">
                {" "}
                <img
                  src="/TB-Mobile/VisualDesign2.png"
                  alt="travelbuddy bomile's mockup"
                  className="w-full sm:w-auto sm:h-auto mx-auto"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center mt-8 gap-4">
              <div className="flex justify-center items-center sm:w-auto mt-4 sm:mt-4 w-full p-4 py-4">
                {" "}
                <img
                  src="/TB-Mobile/VisualDesign3.png"
                  alt="travelbuddy bomile's mockup"
                  className="w-full sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div className="flex justify-center items-center sm:w-auto mt-4 sm:mt-4 w-full p-4 py-4">
                {" "}
                <img
                  src="/TB-Mobile/VisualDesign4.png"
                  alt="travelbuddy bomile's mockup"
                  className="w-full sm:w-auto sm:h-auto mx-auto"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center mt-8 gap-4">
              <div className="flex justify-center items-center sm:w-auto mt-4 sm:mt-4 w-full p-4 py-4">
                {" "}
                <img
                  src="/TB-Mobile/VisualDesign5.png"
                  alt="travelbuddy bomile's mockup"
                  className="w-full sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div className="flex justify-center items-center sm:w-auto mt-4 sm:mt-4 w-full p-4 py-4">
                <img
                  src="/TB-Mobile/TB-mockup32.png"
                  alt="travelbuddy bomile's mockup"
                  className="w-full sm:w-auto sm:h-auto mx-auto px-8"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              {" "}
              <img
                src="/TB-Mobile/banner.png"
                alt="travelbuddy mockup"
                className="w-full sm:w-auto sm:h-auto mx-auto"
              />
            </div>
          </section>

          {/* Testing & Results */}
          <section
            id="Testing&Results"
            className="my-40"
          >
            <h1 className="relative my-10 flex flex-row text-4xl font-bold items-center justify-center">
              Testing & Results
            </h1>
            <ul className="grid lg:grid-cols-3 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 ">
              {project1Items.testingandresults.map(
                (testingandresult: any, index: number) => (
                  <RoleFeaturesSection
                    key={testingandresult.title}
                    {...testingandresult}
                    index={index}
                  />
                )
              )}
            </ul>
          </section>

          {/* Future Improvements */}
          <section
            id="futureImprovements"
            className="my-40"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Future Improvements
            </h1>
            <div className="relative my-10">
              <ul className="grid lg:grid-cols-3 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 ">
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
            className="my-40"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Reflection & Challenges
            </h1>
            <div className="relative my-10">
              <ul className="grid lg:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 ">
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
          <section id="conclusions" className="my-40">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Conclusions
            </h1>
            <div className="relative my-10">
              <ul className="grid lg:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 ">
                {" "}
                {/* This is the important part! */}
                {project1Items.Conclusions.map((Conclusion, index) => (
                  <TextCard id={0} key={index} {...Conclusion} />
                ))}
              </ul>
            </div>
          </section>

          <section className="my-40">
            <h3 className="relative flex flex-row text-3xl text-center font-bold items-center justify-center text-black dark:text-white">
              We took second place in the 'Chas's Challenge' at Chas academy!
            </h3>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 w-full h-auto items-center justify-center gap-6 my-10">
              <div className="flex justify-center items-center">
                {" "}
                <img
                  src="/TB-Mobile/TravelBuddy-compatition.png"
                  alt="travelbuddy mockup"
                  className="mx-auto h-full w-full"
                />
              </div>
              <div className="flex justify-center items-center">
                {" "}
                <img
                  src="/TB-Mobile/Chas-team.png"
                  alt="Chas-team"
                  className="h-full w-full mx-auto"
                />
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Page;
