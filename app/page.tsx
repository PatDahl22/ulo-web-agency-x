"use client";
import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Logos from "@/components/Logos";
import Values from "@/components/Values";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full">
      <div className="w-full">
        <Hero />
        <Logos />
        <Services />
        <Values />
        <Testimonials />
        <CallToAction />
      </div>
    </main>
  );
};

export default Home;
