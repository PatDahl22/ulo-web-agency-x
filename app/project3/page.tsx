"use client";

import { navItems, project3Items} from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { RoleFeaturesSection } from "@/components/ui/RoleFeaturesSection";
import { TypewriterEffectSmooth as TypewriterEffect } from "@/components/ui/typewriter-effect";



const page = () => {

  const words = [
    {
      text: "Fem",
      className: "text-6xl text-blue-500 dark:text-blue-500",
    },
    {
      text: "Task",
      className: "text-6xl text-blue-500 dark:text-blue-500",
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
          </div>
          {/* Title and Description */}
          <div className="space-y-3 text-start">
            {/* Title */}
            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans md:text-2xl/[1.875rem] text-balance text-black dark:text-white items-start">
              {title}
            </h3>
            {/* Description */}
            <h2
              className="font-medium font-sans text-sm/[1.125rem]
                  md:text-base/[1.375rem] text-black dark:text-neutral-400 items-start"
            >
              {description}
            </h2>
          </div>
        </div>
      </div>
    </li>
  );
}

  const keyuserinsights = project3Items.keyuserinsights.map((item) => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
  }));


  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="h-full w-full">
          <StarsBackground className="absolute inset-0 z-100" />
          <ShootingStars />
          {/* BackgroundLines fills the container */}
          <div className="relative mx-10 xs:pt-40 px-10 w-full top-0 h-[50vh] flex justify-end items-center">
            <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4">
              {" "}
              <div className="flex flex-col justify-end items-start w-full px-4 sm:px-4">
                <div className="flex flex-col justify-center w-full mt-4">
                  {" "}
                  <TypewriterEffect words={words} />
                </div>

                <h4 className="my-2 text-xl sm:text-xl lg:text-xl">
                  <strong className="text-xl sm:text-xl lg:text-xl">
                    My Role:
                  </strong>{" "}
                  UX/UI Designer
                </h4>
                <h4 className="my-2 text-xl sm:text-xl lg:text-xl">
                  <strong className="text-xl sm:text-xl lg:text-xl">
                    Project Duration:
                  </strong>{" "}
                  5 Weeks
                </h4>
                <h4 className="my-2 text-xl sm:text-xl lg:text-xl">
                  <strong className="text-xl sm:text-xl lg:text-xl">
                    Tools Used:
                  </strong>{" "}
                  Figma, FigJame, Slax, Canvas
                </h4>
              </div>
              <div className="flex justify-center items-center sm:w-auto mt-4 sm:mt-0">
                {" "}
                <img
                  src="/FemTask/p3.png"
                  alt="Femtask"
                  className="w-full sm:w-auto sm:h-auto max-w-[500px] md:max-w-[400px] mx-auto px-4"
                />
              </div>
            </div>
          </div>

          {/* About section */}
          <section id="about" className="my-20 mx-20">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center">
              About The Project
            </h1>
            <p className="relative text-black dark:text-white-200 mt-6 py-4 px-8 flex text-center items-center justify-center">
              Empowering Families Through Intuitive Task Management.
            </p>
            <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4">
              <div className="flex flex-col justify-center w-full px-4 sm:w-auto sm:px-4">
                <h4 className="relative text-black dark:text-white-200 my-2 flex flex-row text-xl font-semiblod">
                  GET START
                </h4>
                <h2 className="relative my-2 flex flex-row text-3xl font-bold">
                  Project's Overview
                </h2>
                <p className="text-sm leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
                  In today's fast-paced world, families often struggle to stay
                  organized and connected. Juggling work, school,
                  extracurricular activities, and household chores can lead to
                  stress, miscommunication, and a sense of overwhelm.
                </p>
                <p className="text-sm leading-[1.6] my-2 text-white-200 font-normal">
                  FamTask is a UX/UI design concept for a mobile app addressing
                  this challenge, designed to empower families to collaborate
                  seamlessly on task management and scheduling, creating a more
                  harmonious home life.
                </p>
              </div>
              <div className="flex justify-center items-center sm:w-auto mt-6 sm:mt-0">
                <img
                  src="/FemTask/p3.png"
                  alt="travelbuddy mockup"
                  className="w-full sm:w-auto sm:h-auto max-w-[400px] mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Challenge */}
          <section
            id="Challenge"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              The Challenge
            </h1>
            <p className="relative text-black dark:text-white-200 mt-4 py-2 px-4 flex text-center items-center justify-center">
              Busy families often face several key challenges.
            </p>
            <div className="relative m-10">
              <ul className="p-8 py-4 items-center justify-center md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 gap-6 grid">
                {" "}
                {/* This is the important part! */}
                {project3Items.challenges.map((challenge, index) => (
                  <TextCard area={""} id={index} key={index} {...challenge} />
                ))}
              </ul>
            </div>
          </section>

          {/* Understanding the Users */}
          <section id="keyuserinsights" className="my-40 mx-20">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center">
              Understanding the Users
            </h1>
            <p className="relative text-white-200 mt-6 py-4 px-8 flex text-center items-center justify-center">
              Our team recognized the need to deeply understand the challenges
              and motivations of our target users. We conducted semi-structured
              interviews with seven parents to gain insights into their daily
              routines, pain points, and desired outcomes.
            </p>
            <div className="w-full p-8 py-4 items-center justify-center md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 gap-6 grid">
              {keyuserinsights.map((keyuserinsight, index) => (
                <RoleFeaturesSection
                  key={keyuserinsight.title}
                  {...keyuserinsight}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Problems & Solutions */}
          <section
            id="problems"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center w-full ">
              Problems VS Solutions
            </h1>

            <div className="h-full py-10 w-full"></div>
          </section>

          {/* Persona section */}
          <section
            id="pesonas"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center">
              Persona
            </h1>
            <p className="relative  text-white-200 mt-4 py-4 px-4 flex  text-center items-center justify-center">
              Based on these insights, we created a user persona to represent
              our target audience.
            </p>
            <div className="relative h-full w-full p-2 rounded-xl border-0.75">
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
                  Persona
                </p>
                <ul className="grid md:grid-cols-3 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-4">
                  {/* This is the important part! */}
                  {project3Items.Personas.map((persona, index) => (
                    <TextCard key={index} {...persona} />
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Journey Mapping & Design Process*/}
          <section
            id="journeymapping"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative text-black dark:text-white flex flex-row text-4xl font-bold items-center justify-center">
              Journey Mapping
            </h1>
            <p className="relative text-black dark:text-white-200 mt-6 py-4 px-8 flex text-center items-center justify-center">
              To gain further empathy, we mapped out a typical day for Nathalia,
              identifying key pain points and opportunities for our app to
              provide value. This involved mapping out the high and low points
              of the day and identifying areas for the app to assist in.
            </p>
            <h1 className="relative mt-8 text-black dark:text-white flex flex-row text-4xl font-bold items-center justify-center">
              Design Process
            </h1>
            <p className="relative text-black dark:text-white-200 py-4 px-8 flex text-center items-center justify-center">
              Our design process followed a user-centered approach, iterating
              based on user feedback and usability testing.
            </p>

            <div className="relative m-10">
              <ul className="grid md:grid-cols-4 grid-rows-none sm:grid-cols-1 xs:grid-cols-2 gap-8 ">
                {" "}
                {/* This is the important part! */}
                {project3Items.initialdesignconcepts.map(
                  (initialdesignconcepts, index) => (
                    <TextCard key={index} {...initialdesignconcepts} />
                  )
                )}
              </ul>
            </div>
          </section>

          {/*  Responding to User Feedback*/}
          <section
            id="competitive"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Responding to User Feedback Iteration 1
            </h1>
            <h3 className="relative text-black dark:text-white mt-6 py-4 px-8 flex font-semibold txt-3xl text-center items-center justify-center">
              Following the initial usability tests, we identified several key
              areas for improvement and iterated on our design accordingly.
            </h3>
            <div className="relative m-10"></div>
          </section>

          {/* Visual Design */}
          <section
            id="VisualDesign"
            className="my-20 mx-20 items-center justify-center"
          >
            <div
              className="relative bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-70 text-white py-10"
              style={{ backgroundImage: `url('/FemTask/p3.png')` }}
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
                  src="/FemTask/p3.png"
                  alt="travelbuddy bomile's mockup"
                  className="h-[400px] w-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div className="py-4">
                {" "}
                <img
                  src="/FemTask/p3.png"
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
                  src="/FemTask/p3.png"
                  alt="travelbuddy bomile's mockup"
                  className="h-[400px] w-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div className="py-4">
                {" "}
                <img
                  src="/FemTask/p3.png"
                  alt="travelbuddy bomile's mockup"
                  className="h-[400px] w-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-4 max-w-7xl mx-auto">
              <div className="py-4">
                <img
                  src="/FemTask/p3.png"
                  alt="travelbuddy bomile's mockup"
                  className="h-[400px] w-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div>
                <img
                  src="/FemTask/p3.png"
                  alt="travelbuddy bomile's mockup"
                  className="w-full h-full px-16 sm:px-10 items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-4 max-w-7xl mx-auto">
              <div className="flex">
                {" "}
                <img
                  src="/FemTask/p3.png"
                  alt="travelbuddy mockup"
                  className="w-full h-full items-center sm:w-auto sm:h-auto mx-auto"
                />
              </div>
              <div className="flex">
                {" "}
                <img
                  src="/FemTask/p3.png"
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
          </section>

          {/* Future Improvements */}
          <section
            id="FutureImprovements"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Future Improvements
            </h1>
          </section>

          {/* Reflection & Challenges*/}
          <section
            id="Reflection&Challenges"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Reflection & Challenges
            </h1>
          </section>

          {/* Conclusions*/}
          <section id="Conclusions" className="my-40 mx-20">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              Conclusions
            </h1>
          </section>

          <section className="my-20 mx-20 items-center justify-center">
            <h1 className="relative flex flex-row text-3xl text-center font-bold items-center justify-center text-black dark:text-white">
              We took second place in the 'Chas's Challenge' at Chas academy!
            </h1>
          </section>
        </div>
      </div>
      {/* Include your sections below */}
      <Footer />
    </main>
  );
};

export default page;
