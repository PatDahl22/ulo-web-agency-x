"use client";

import { navItems, project2Items } from "@/data";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import JourneysGrid from "@/components/journeysGrid";


const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <section>
          <h2 className="text-2xl font-semibold">Project 2: Traveler App</h2>
          <JourneysGrid journeys={project2Items.Overview} />
        </section>
        <br />

        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default page;
