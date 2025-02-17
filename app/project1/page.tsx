"use client";

import { navItems, project1Items } from "@/data";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import JourneysGrid from "@/components/journeysGrid";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="h-[40vh]">
          {" "}
          {/* Set height to 40vh on the container */}
          <div className="relative h-full w-full">
            <StarsBackground className="absolute inset-0 z-100" />{" "}
            <ShootingStars/>
            {/* BackgroundLines fills the container */}
            <div className="relative h-full flex items-start justify-center w-full flex-col">
              {/* Ensure content is positioned correctly */}
              <TextGenerateEffect
                words="TravelBuddy"
                className="text-purple text-start text-[40px] md:text-5xl lg:text-6xl"
              />
              <div className="flex flex-col items-start justify-center">
                <p className="text-start text-[20px] lg:max-w-[65vw]">
                  AI-Powered
                  <span className="text-purple"> Travel Planning App</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <JourneysGrid journeys={project1Items.journeys} />
        </section>

        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default page;
