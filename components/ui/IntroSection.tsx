"use client";

import React from "react";
import clsx from "clsx";

type IntroSectionProps = {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  image: string;
  imagePosition?: "left" | "right";
};

export default function IntroSection({
  title,
  subtitle,
  paragraphs,
  image,
  imagePosition = "left",
}: IntroSectionProps) {
  const isRight = imagePosition === "right";

  return (
    <section className="section-full bg-background-white py-20 px-4 md:px-12 sm:px-12 relative overflow-hidden">
      {/* Gradient overlay */}
      <div
        className={clsx(
          "absolute inset-0 z-0 opacity-10 pointer-events-none",
          isRight
            ? "bg-gradient-to-l from-brand-main via-white to-transparent"
            : "bg-gradient-to-r from-brand-main via-white to-transparent"
        )}
      />

      <div
        className={clsx(
          "max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10",
          isRight ? "md:flex-row-reverse" : ""
        )}
      >
        {/* Image */}
        <div
          className={clsx(
            "order-1 transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn",
            isRight ? "md:order-2" : "md:order-1"
          )}
        >
          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Text */}
        <div
          className={clsx(
            "order-2 transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn",
            isRight ? "md:order-1" : "md:order-2"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-base mb-4">
            {title}
          </h2>
          {subtitle && (
            <h3 className="text-lg md:text-xl font-semibold text-text-soft mb-6">
              {subtitle}
            </h3>
          )}
          <div className="space-y-4 text-text-soft text-base leading-relaxed">
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
