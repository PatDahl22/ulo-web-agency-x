"use client";
import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/ui/Services";
import Logos from "@/components/Logos";
import Values from "@/components/ui/Values";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import { services, values } from "@/data";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full">
      <div className="w-full">
        <Hero />
        <Logos />
        <Services services={services} heading="ULO:s tjänster " />
        <Values heading="Våra värderingar" values={values} />
        <Testimonials />
        <CallToAction />
      </div>
    </main>
  );
};

export default Home;
