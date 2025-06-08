"use client";
import React from "react";
import Button from "./ui/Button";

export default function HeroSection() {
  return (
    <section className="text-center py-20 px-6 mt-14">
      {/* Detta är den viktiga containern */}
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Vi hjälper Sveriges bästa företag med allt de behöver
        </h1>

        <p className="text-lg text-text-muted max-w-2xl">
          Oavsett om du behöver en enkel presentation, en smidig bokningssida
          eller en komplett e-handel, hjälper vi dig ta nästa steg digitalt -
          snabbt, snyggt och strategiskt.
        </p>

        {/* Här sätter vi max-w på knappens container */}
        <div className="w-full max-w-sm">
          <Button href="/boka">Boka en kostnadsfri rådgivning idag</Button>
        </div>
      </div>
    </section>
  );
}
