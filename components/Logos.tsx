"use client";
import React from "react";
const logos = [
  "/images/logos/logo1.png",
  "/images/logos/logo2.png",
  "/images/logos/logo3.png",
  "/images/logos/logo4.png",
  "/images/logos/logo5.png",
  "/images/logos/logo6.png",
  "/images/logos/logo7.png",
  "/images/logos/logo8.png",
  "/images/logos/logo9.png",
  "/images/logos/logo10.png",
  "/images/logos/logo11.png",
  "/images/logos/logo12.png",
  "/images/logos/logo13.png",
  "/images/logos/logo14.png",
  "/images/logos/logo15.png",
  "/images/logos/logo16.png",
  "/images/logos/logo17.png",
  "/images/logos/logo18.png",
  "/images/logos/logo19.png",
  "/images/logos/logo20.png",
  "/images/logos/logo21.png",
  "/images/logos/logo22.png",
  "/images/logos/logo23.png",
  "/images/logos/logo24.png",
  "/images/logos/logo25.png",
  "/images/logos/logo26.png",
  "/images/logos/logo27.png",
  "/images/logos/logo28.png",
  "/images/logos/logo29.png",
  "/images/logos/logo30.png",
];

export default function Logos() {
  return (
    <section className="w-screen bg-background-soft py-12 flex flex-col justify-center">
      <h2 className="text-center text-xl md:text-2xl font-semibold text-text-base mb-8">
        Vi driver 1000+ relationsdrivna varumärken
      </h2>

      <div className="relative overflow-hidden w-full">
        <div className="flex w-max animate-scroll gap-8">
          {logos
            .concat(logos)
            .map((src, i) =>
              src ? (
                <img
                  key={i}
                  src={src}
                  alt={`Logo ${i + 1}`}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 rounded-lg shadow-md hover:shadow-lg transition"
                />
              ) : null
            )}
        </div>
      </div>
    </section>
  );
}
