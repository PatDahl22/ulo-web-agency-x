import CallToAction from "@/components/CallToAction";
import Cases from "@/components/ui/Cases";
import IntroSection from "@/components/ui/IntroSection";
import Services from "@/components/ui/Services";
import Values from "@/components/ui/Values";
import { hemsidaArbetsprocess, hemsidaFokus, hemsidaIntro, hemsidaValues, hemsidorServices, kundcases } from "@/data";

export default function HemsidorPage() {
  return (
    <main>
      <IntroSection
        title={hemsidaIntro.title}
        subtitle={hemsidaIntro.subtitle}
        paragraphs={hemsidaIntro.paragraphs}
        image={hemsidaIntro.image}
      />
      <Services services={hemsidorServices} heading="Våra hemside-lösningar" />
      <Values
        heading="Vad du får med en hemsida från ULO"
        values={hemsidaValues}
      />

      <IntroSection
        title={hemsidaFokus.title}
        subtitle={hemsidaFokus.description}
        paragraphs={hemsidaFokus.bullets}
        image={hemsidaFokus.image}
      />

      <IntroSection
        title={hemsidaArbetsprocess.title}
        subtitle={hemsidaArbetsprocess.description}
        paragraphs={hemsidaArbetsprocess.bullets}
        image={hemsidaArbetsprocess.image}
        imagePosition="right"
      />

      <Cases
        heading="Våra kundcase"
        cases={kundcases.map(({ img, ...rest }) => ({ ...rest, image: img }))}
      />

      <CallToAction />
    </main>
  );
}
