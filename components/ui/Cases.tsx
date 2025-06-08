"use client";
import React from "react";

type Case = {
  title: string;
  description: string;
  image: string;
};

type CasesProps = {
  heading?: string;
  cases: Case[];
};

export default function Cases({
  heading = "Våra kundcase",
  cases,
}: CasesProps) {
  return (
    <section className="section-full bg-background-white py-20 px-4 md:px-12 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-base mb-12">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-background-light border border-gray-light rounded-xl shadow-sm p-6 flex flex-col justify-between"
            >
              <div className="overflow-hidden h-60 rounded-lg border border-gray-light mb-4">
                <div className="overflow-y-auto h-full">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-base mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-text-soft">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
