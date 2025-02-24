"use client";

import { navItems, project2Items } from "@/data";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import JourneysGrid from "@/components/journeysGrid";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { LayoutGrid } from "@/components/ui/LayoutGrid";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";


const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="h-full w-full">
          <StarsBackground className="absolute inset-0 z-100" />
          <ShootingStars />
          {/* BackgroundLines fills the container */}
          <div className="relative mx-10 xs:pt-40 px-10 w-full top-0 h-[50vh] flex justify-center items-center">
            <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4">
              {" "}
              <div className="flex flex-col justify-center w-full px-4 sm:px-4">
                <h4 className="text-xl sm:text-2xl lg:text-3xl">
                  UX/UI Designer
                </h4>

              </div>
              <div className="flex justify-center items-center sm:w-auto mt-4 sm:mt-0">
                {" "}
                <img
                  src="/TB-Mobile/TB-mockup29.png"
                  alt="travelbuddy mockup"
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
            <p className="relative text-black dark:text-white-200 mt-6 py-4 px-8 flex  text-center items-center justify-center">
              Create an intuitive travel assistant app that provides
              personalized recommendations based on user preferences.
            </p>
            <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4">
              <div className="flex flex-col justify-center w-full px-4 sm:w-auto sm:px-4">
                <h4 className="relative text-black dark:text-white-200 my-2 flex flex-row text-xl font-semiblod">
                  GET START
                </h4>
                <h2 className="relative my-4 flex flex-row text-3xl font-bold">
                  Project's Overview
                </h2>
                <p className="text-sm leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
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
              <div className="flex justify-center items-center sm:w-auto mt-6 sm:mt-0">
                <img
                  src="/TB-Mobile/TB-mockup31.png"
                  alt="travelbuddy mockup"
                  className="w-full sm:w-auto sm:h-auto max-w-[400px] mx-auto"
                />
              </div>
            </div>
          </section>

          {/* My role section */}
          <section id="myrole" className="my-40 mx-20">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center">
              My Role
            </h1>
            <p className="relative  text-white-200 mt-6 py-4 px-8 flex  text-center items-center justify-center">
              As a UI/UX designer, I make sure that my designs are well received
              by users, and can be implemented by developers.
            </p>
          </section>

          {/* Problems & Solutions */}
          <section
            id="problems"
            className="my-40 mx-20 items-center justify-center"
          >
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center w-full ">
              Problems VS Solutions
            </h1>

            <div className="h-full py-10 w-full">
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
            <p className="relative  text-white-200 mt-6 py-4 px-8 flex  text-center items-center justify-center">
              We conducted user interviews to gather insights into travel
              behaviors, challenges, and requirements. This allowed us to
              develop accurate personas and tailor the app to specific user
              needs, improving both usability and relevance.
            </p>
            <div className="relative h-full w-full p-2 m-4 rounded-xl border-0.75">
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
                  Persona 1
                </p>
              </div>
            </div>
            <div className="relative h-full w-full p-2 m-4 items-center justify-center rounded-xl border-0.75">
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
          </section>

          {/* Visual Design */}
          <section
            id="VisualDesign"
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
            <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-4 max-w-7xl mx-auto ">
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
}


export default page;
