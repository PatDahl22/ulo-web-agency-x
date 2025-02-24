"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import CardHoverEffect from "@/components/CardHoverEffect";
import { FooterSection } from "@/components/FooterSection";
import HomeExperience from "@/components/HomeExperience";
import Grid from "@/components/Grid";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <CardHoverEffect />
        <Approach />
        <Clients />
        <HomeExperience />
        <FooterSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
