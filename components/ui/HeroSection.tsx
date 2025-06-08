"use client";

import React from "react";
import Link from "next/link";

type HeroCta = {
  label: string;
  href: string;
};

type HeroData = {
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
};

type HeroSectionProps = {
  data: HeroData;
};

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="section-full bg-background-light py-16 px-4 md:px-12 sm:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src={data.image}
            alt={data.title}
            className="rounded-xl shadow-md w-full h-auto"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-base mb-4">
            {data.title}
          </h1>
          <p className="text-text-soft mb-6">{data.description}</p>

          {data.bullets && (
            <ul className="list-disc pl-5 space-y-1 mb-6 text-text-base text-sm">
              {data.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-4">
            {data.primaryCta && (
              <Link
                href={data.primaryCta.href}
                className="bg-brand-main text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-dark transition"
              >
                {data.primaryCta.label}
              </Link>
            )}
            {data.secondaryCta && (
              <Link
                href={data.secondaryCta.href}
                className="bg-white border border-gray-light text-text-base px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-light transition"
              >
                {data.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
