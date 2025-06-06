import React from "react";
import { IconArrowWaveRightUp } from "@tabler/icons-react";

export type Service = {
  title: string;
  description: string;
  img: string;
  href?: string;
};

type ServicesProps = {
  services: Service[];
  heading?: string;
};

export default function Services({
  services,
  heading = "ULO:s tjänster",
}: ServicesProps) {
  return (
    <section className="bg-background-white py-20 px-6 md:px-12 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-base mb-12">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background-light p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-80 rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-text-base mb-2">
                {service.title}
              </h3>
              <p className="text-text-soft mb-4">{service.description}</p>
              <a
                href={service.href || "#"}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-main hover:underline"
              >
                Utforska ULO:s {service.title.toLowerCase()}
                <IconArrowWaveRightUp className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
