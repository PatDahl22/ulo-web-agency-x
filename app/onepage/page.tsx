"use client";

import CallToAction from "@/components/CallToAction";
import Cases from "@/components/ui/Cases";
import FAQ from "@/components/ui/FAQ";
import IntroSection from "@/components/ui/IntroSection";
import Pricing from "@/components/ui/Pricing";
import ValuesSection from "@/components/ui/Values";
import {
  onepageArbetsprocess,
  onepageIngor,
  onepageIntro,
  onepageStruktur,
  onepageValues,
  onepageFunktioner,
  onepagePackages,
} from "@/data";
import React from "react";

const page = () => {
  return (
    <main>
      <IntroSection
        title={onepageIntro.title}
        subtitle={onepageIntro.description}
        paragraphs={onepageIntro.bullets}
        image={onepageIntro.image}
      />
      <ValuesSection
        heading="Passar perfekt för dig/ditt företag som"
        values={onepageValues}
      />
      <IntroSection
        title={onepageIngor.title}
        subtitle={onepageIngor.description}
        paragraphs={onepageIngor.bullets}
        image={onepageIngor.image}
      />
      <IntroSection
        title={onepageStruktur.title}
        subtitle={onepageStruktur.description}
        paragraphs={onepageStruktur.bullets}
        image={onepageStruktur.image}
        imagePosition="right"
      />
      <Pricing {...onepagePackages} />;
      <IntroSection
        title={onepageArbetsprocess.title}
        subtitle={onepageArbetsprocess.description}
        paragraphs={onepageArbetsprocess.bullets}
        image={onepageArbetsprocess.image}
      />
      <Cases
        heading="ULO data platform funktioner"
        cases={onepageFunktioner.map(({ img, ...rest }) => ({
          ...rest,
          image: img,
        }))}
      />
      <FAQ
        heading="Onepage-sidor frågor"
        items={[
          {
            question: "Hur vet jag vilket paket som passar mig?",
            answer:
              "Vi hjälper dig välja utifrån ditt innehåll, behov och budget. Vi rekommenderar Start för de flesta",
          },
          {
            question: "Kan jag börja med Start och uppgradera senare?",
            answer: "Absolut. Vi bygger så att sidan enkelt kan växa med dig.",
          },
          {
            question: "Hur mycket måste jag själv bidra med (bilder, text)?",
            answer:
              "Du kan skicka material - eller så hjälper vi dig skapa det. Vi har fotografer, copywriters och designers som kan hjälpa till.",
          },
          {
            question: "Går det att lägga till bloggfunktion senare?",
            answer: "Ja, sidan byggs i WordPress och kan enkelt kompletteras.",
          },
          {
            question: "Vad ingår i priset?",
            answer: "Du får allt som beskrivs i paketet - inga dolda avgifter.",
          },
          {
            question: "Kan jag delbetala hemsidan?",
            answer: "Ja, vi erbjuder delbetalning efter överenskommelse.",
          },
          {
            question: "Hur snabbt är leveranstiden?",
            answer: "Vanligtvis 1-3 veckor beroende på paket och material.",
          },
          {
            question: "Finns det garanti efter leverans?",
            answer:
              "Ja, vi erbjuder support i upp till 30 dagar efter lansering. Om du hittar buggar eller problem fixar vi dem utan kostnad.",
          },
        ]}
      />
      <CallToAction />
    </main>
  );
};

export default page;
