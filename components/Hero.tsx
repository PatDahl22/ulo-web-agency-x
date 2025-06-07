import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className=" w-full mt-10 py-20 px-6 md:px-12 sm:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-text-base leading-tight">
          Vi hjälper Sveriges bästa företag
          <br className="hidden md:block" />
          med allt de behöver
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text-soft">
          Oavsett om du behöver en enkel presentation, en smidig bokningssida
          eller en komplett e-handel, hjälper vi dig ta nästa steg digitalt -
          snabbt, snyggt och strategiskt.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8 px-16 py-3">
          <Button href="/boka" variant="dark">
            Boka en kostnadsfri rådgivning idag
          </Button>
        </div>

      </div>
    </section>
  );
}
