"use client";
import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/ui/Services";
import Logos from "@/components/Logos";
import Values from "@/components/ui/Values";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import { services, values } from "@/data";
import ServiceChart from "@/components/ui/ServiceChart";
import AnalyticsChart from "@/components/ui/AnalyticsChart";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { logAnalyticsEvent } from "@/utils/logAnalyticsEvent";

const Home = () => {
  const path = usePathname();

  useEffect(() => {
    if (path) logAnalyticsEvent(path);
  }, [path]);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full">
      <div className="w-full">
        <Hero />
        <Logos />
        <Services services={services} heading="ULO:s tjänster " />
        <Values heading="Våra värderingar" values={values} />
        <Testimonials />
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Statistik över formulär</h1>
          <ServiceChart />
        </div>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <AnalyticsChart />
        </div>
        <CallToAction />
      </div>
    </main>
  );
};

export default Home;
