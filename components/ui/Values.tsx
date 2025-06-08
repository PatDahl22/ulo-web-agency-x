"use client";

import React from "react";
import { values as defaultValues } from "@/data";
import { cn } from "@/utils/cn";

type Value = {
  title: string;
  description: string;
  icon: string;
};

type ValuesProps = {
  heading?: string;
  values?: Value[];
  className?: string;
};

export default function Values({
  heading = "Våra värderingar",
  values = defaultValues,
  className,
}: ValuesProps) {
  return (
    <section
      className={cn(
        "section-full bg-background-soft relative py-20",
        className
      )}
    >
      <h2 className="text-center text-3xl font-bold text-text-base mb-12">
        {heading}
      </h2>

      {/* Fade kanter */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background-soft to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background-soft to-transparent z-10 pointer-events-none" />

      {/* Grid layout */}
      <div className="max-w-6xl mx-auto px-4 justify-center">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-white border border-gray-light rounded-lg shadow-sm p-6 text-center"
            >
              <img
                src={value.icon}
                alt={value.title}
                className="mx-auto h-12 w-12 mb-4"
              />
              <h3 className="font-semibold text-text-base mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-text-soft">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
