"use client";

import { navItems, project3Items} from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { RoleFeaturesSection } from "@/components/ui/RoleFeaturesSection";
import { TypewriterEffectSmooth as TypewriterEffect } from "@/components/ui/typewriter-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";



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
};

  const keyuserinsights = project3Items.keyuserinsights.map((item) => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
  }));

  const accessibilityconsiderations = project3Items.accessibilityconsiderations.map((item) => ({
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
          <div className="relative mx-10 xs:pt-40 px-8 w-full h-[50vh] flex justify-end items-center">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4 sm:mt-16">
              <div className="flex flex-col justify-end items-start w-full px-4 sm:pt-12">
                <div className="flex flex-col justify-center w-full mt-4">
                  <TypewriterEffect words={words} />
                </div>

                <h4 className="my-2 m:text-xl lg:text-xl">
                  <strong className="sm:text-xl lg:text-xl">
                    My Role:
                  </strong>{" "}
                  UX/UI Designer
                </h4>
                <h4 className="my-2 sm:text-xl lg:text-xl">
                  <strong className="sm:text-md lg:text-xl">
                    Project Duration:
                  </strong>{" "}
                  5 Weeks
                </h4>
                <h4 className="my-2 sm:text-xl lg:text-xl">
                  <strong className="sm:text-md lg:text-xl">
                    Tools Used:
                  </strong>{" "}
                  Figma, FigJam, Slack, Canvas
                </h4>
              </div>
              <div className="flex justify-center items-center sm:w-auto mt-4 sm:mt-0">
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
            <p className="relative text-black dark:text-white-200 p-8 font-semibold flex text-center items-center justify-center">
              Empowering families through intuitive task management.
            </p>
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4">
              <div className="flex flex-col justify-center w-full px-4 sm:w-auto sm:px-4">
                <h4 className="relative text-black dark:text-white-200 my-2 flex flex-row text-xl font-semibold">
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
              <div className="flex justify-center items-center sm:w-auto mt-16 sm:mt-8">
                <img
                  src="/FemTask/p3.png"
                  alt="travelbuddy mockup"
                  className="w-full sm:w-auto sm:h-auto max-w-[400px] mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Problems & Solutions */}
          <section id="problems" className="my-40 mx-20">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center w-full ">
              Problems VS Solutions
            </h1>
            <div className="max-w-5xl mx-auto gap-8">
              <HoverEffect
                items={project3Items.problemsandsolutions.map((item) => ({
                  title: item.title,
                  des: [item.des], // Convert des to an array of strings
                  link: "", // Provide an empty string if required
                }))}
              />{" "}
            </div>
          </section>

          {/* Understanding the Users */}
          <section id="keyuserinsights" className="my-40 mx-20">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center">
              Understanding the Users
            </h1>
            <p className="relative text-white-200 mt-6 py-4 px-8 flex text-start items-center justify-center">
              Our team recognized the need to deeply understand the challenges
              and motivations of our target users. We conducted semi-structured
              interviews with seven parents to gain insights into their daily
              routines, pain points, and desired outcomes.
            </p>
            <div className="w-full p-8 py-4 items-center justify-center md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-6 grid">
              {keyuserinsights.map((keyuserinsight, index) => (
                <RoleFeaturesSection
                  key={keyuserinsight.title}
                  {...keyuserinsight}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Challenge */}
          <section id="Challenge" className="my-40 mx-20">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              The Challenge
            </h1>
            <p className="relative text-black dark:text-white-200 mt-4 py-2 px-4 flex text-center items-center justify-center">
              Busy families often face several key challenges.
            </p>
            <div className="relative m-10">
              <ul className="py-4 items-center justify-center md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-6 grid">
                {" "}
                {/* This is the important part! */}
                {project3Items.challenges.map((challenge, index) => (
                  <TextCard area={""} id={index} key={index} {...challenge} />
                ))}
              </ul>
            </div>
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
              Journey mapping
            </h1>
            <p className="relative text-black dark:text-white-200 mt-6 py-4 px-8 flex text-start items-center justify-center">
              To gain further empathy, we mapped out a typical day for Nathalia,
              identifying key pain points and opportunities for our app to
              provide value. This involved mapping out the high and low points
              of the day and identifying areas for the app to assist in.
            </p>
            <h1 className="relative text-black dark:text-white flex flex-row text-4xl mt-8 font-bold items-center justify-center">
              Design process
            </h1>
            <p className="relative text-black dark:text-white-200 py-4 px-8 flex text-start items-center justify-center">
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

          {/* Accessibility Considerations */}
          <section
            id="Accessibility"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative text-black dark:text-white text-4xl font-bold mt-4 py-4 px-8 flex text-center items-center justify-center">
              Accessibility considerations
            </h1>
            <p className="relative text-black dark:text-white-200 mt-4 py-4 px-8 flex text-start items-center justify-center">
              Ensuring accessibility was a core priority throughout the design
              process. Here's how we addressed key accessibility guidelines:
            </p>
            <div className="w-full p-8 py-4 items-center justify-center md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-6 grid">
              {accessibilityconsiderations.map(
                (accessibilityconsideration, index) => (
                  <RoleFeaturesSection
                    key={accessibilityconsideration.title}
                    {...accessibilityconsideration}
                    index={index}
                  />
                )
              )}
            </div>
          </section>

          {/* Key Features */}
          <section id="Keyfeatures" className="my-40 mx-20">
            <h1 className="relative text-black dark:text-white text-4xl font-bold mt-4 py-4 px-8 flex text-center items-center justify-center">
              Key Features
            </h1>
            <div className="w-full p-8 py-4 items-center justify-center md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-6 grid">
              {project3Items.KeyFeatures.map((keyFeature, index) => (
                <RoleFeaturesSection
                  key={keyFeature.title}
                  {...keyFeature}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/*  Responding to User Feedback*/}
          <section id="UserFeedback" className="my-40 mx-20">
            <h1 className="relative text-black dark:text-white text-4xl font-bold mt-4 py-4 px-8 flex text-center items-center justify-center">
              Responding to user feedback iteration 1
            </h1>
            <p className="relative text-black dark:text-white-200 py-4 px-8 flex text-start items-center justify-center">
              Following the initial usability tests, we identified several key
              areas for improvement and iterated on our design accordingly.
            </p>
            <div className="max-w-5xl mx-auto gap-8">
              <HoverEffect
                items={project3Items.respondingtouserfeedback1.map((item) => ({
                  title: item.title,
                  des: item.des, // Ensure des is an array of strings
                  link: "", // Provide an empty string if required
                }))}
              />{" "}
            </div>
            <h1 className="relative text-black dark:text-white text-4xl font-bold mt-4 py-4 px-8 flex text-center items-center justify-center">
              Ethical design considerations and further refinement
            </h1>
            <p className="relative text-black dark:text-white-200 py-4 px-8 flex text-start items-center justify-center">
              During our second iteration, we conducted an ethical design
              workshop to identify and address potential negative impacts of our
              app.
            </p>
            <div className="max-w-5xl mx-auto gap-8">
              <HoverEffect
                items={project3Items.respondingtouserfeedback2.map((item) => ({
                  title: item.title,
                  des: item.des, // Ensure des is an array of strings
                  link: "", // Provide an empty string if required
                }))}
              />
              {/* Additional content here if needed */}
            </div>
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

          {/* Measuring success */}
          <section id="MeasuringSuccess" className="my-40 mx-20">
            <h1 className="relative text-black dark:text-white text-4xl font-bold mt-4 py-4 px-8 flex text-center items-center justify-center">
              Measuring success
            </h1>
            <p className="relative text-black dark:text-white-200 py-6 flex text-start items-center justify-center">
              The success of FamTask will be measured by the following KPIs:
            </p>
            <div className="max-w-5xl mx-auto gap-8">
              <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 list-none">
                {project3Items.measuringsuccess.map(
                  (measuringsuccess, index) => (
                    <TextCard
                      id={0}
                      area={""}
                      key={index}
                      {...measuringsuccess}
                    />
                  )
                )}
              </div>
            </div>
          </section>

          {/* Lessons Learned */}
          <section id="Lessonslearned" className="my-40 mx-20">
            <h1 className="relative text-black dark:text-white text-4xl font-bold mt-4 p-8 flex text-center items-center justify-center">
              Lessons learned
            </h1>
            <div className="max-w-5xl mx-auto gap-8">
              <div className="grid lg:grid-cols-3  md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 list-none">
                {project3Items.lessonslearneds.map((lessonslearneds, index) => (
                  <TextCard id={index} key={index} {...lessonslearneds} />
                ))}
              </div>
            </div>
          </section>

          {/* Next steps*/}
          <section
            id="nextsteps"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center py-8 text-black dark:text-white">
              Next steps
            </h1>
            <div className="max-w-5xl mx-auto gap-8">
              <div className="grid lg:grid-cols-3  md:grid-cols-3 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 list-none">
                {project3Items.nextsteps.map((nextsteps, index) => (
                  <TextCard id={index} key={index} {...nextsteps} />
                ))}
              </div>
            </div>
          </section>

          {/* Future Development */}
          <section id="FutureDevelopment" className="my-40 mx-20">
            <h1 className="relative text-black dark:text-white text-4xl font-bold mt-4 py-4 px-8 flex text-center items-center justify-center">
              Future Development
            </h1>
            <div className="w-full p-8 py-4 items-center justify-center md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-6 grid">
              {project3Items.futuredevelopments.map(
                (futuredevelopments, index) => (
                  <RoleFeaturesSection
                    key={futuredevelopments.title}
                    {...futuredevelopments}
                    index={index}
                  />
                )
              )}
            </div>
          </section>

          {/* Conclusions*/}
          <section id="Conclusions" className="my-40 mx-20">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4">
              <div className="flex flex-col justify-center w-full px-4 sm:w-auto sm:px-4">
                <h1 className="relative flex text-4xl font-bold items-center justify-center py-8 text-start text-black dark:text-white">
                  Conclusions
                </h1>
                <p className="text-md leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
                  FamTask is a UX/UI design concept with the potential to
                  significantly improve the lives of busy families.
                </p>
                <p className="text-md leading-[1.6] my-2 text-white-200 font-normal">
                  By focusing on user needs, iterating based on feedback, and
                  prioritizing accessibility, we can create a powerful tool that
                  empowers families to collaborate, stay organized, and reduce
                  stress.
                </p>
              </div>
              <div className="flex justify-center items-center sm:w-auto mt-12 sm:mt-8">
                <img
                  src="/FemTask/p3.png"
                  alt="travelbuddy mockup"
                  className="w-full sm:w-auto sm:h-auto max-w-[400px] mx-auto"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
