import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="section-full bg-background-light py-20 px-20 text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-text-base mb-4">
        Behöver du en offert?
      </h2>
      <p className="text-text-soft mb-8">
        Tveka inte att höra av dig. Vi hjälper dig oavsett dina behov, stora som
        små.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Button href="/boka" variant="dark">
          Boka gratis rådgivning
        </Button>
        <Button href="/kontakt" variant="light">
          Vill du prata med oss först?
        </Button>
      </div>
    </section>
  );
}
