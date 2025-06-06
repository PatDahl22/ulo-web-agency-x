"use client";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  heading?: string;
  items: FAQItem[];
};

export default function FAQ({ heading = "Vanliga frågor", items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-full bg-background-white py-20 px-4 md:px-12 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-base mb-12">
          {heading}
        </h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-light rounded-md bg-background-light overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-4 font-semibold text-text-base flex justify-between items-center"
              >
                {item.question}
                <span className="text-xl">{openIndex === i ? "-" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-text-soft text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
