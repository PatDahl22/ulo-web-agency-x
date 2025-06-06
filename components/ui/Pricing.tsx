import Image from "next/image";

type Package = {
  title: string;
  description: string;
  includes: string[];
  price: string;
  setupFee: string;
  button: string;
  href: string;
  popular?: boolean;
};

type PricingProps = {
  heading: string;
  subheading?: string;
  image: string;
  alwaysIncluded: string[];
  packages: Package[];
};

export default function Pricing({
  heading,
  subheading,
  image,
  alwaysIncluded,
  packages,
}: PricingProps) {
  return (
    <section className="section-full bg-background-white py-20 px-4 md:px-12 sm:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-base mb-2">
          {heading}
        </h2>
        {subheading && <p className="text-text-soft text-lg">{subheading}</p>}
      </div>

      {/* Hero + "Ingår alltid" */}
      <div className="grid md:grid-cols-2 gap-6 items-center mb-16">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={image}
            alt="Paketen"
            width={800}
            height={600}
            className="w-full"
          />
        </div>
        <div className="border border-gray-light p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-text-base mb-4">
            Ingår alltid
          </h3>
          <ul className="list-disc text-left text-text-soft pl-5 space-y-2">
            {alwaysIncluded.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Paketen */}
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="relative border border-gray-light bg-background-light p-6 rounded-xl text-left flex flex-col justify-between shadow-sm hover:shadow-md transition"
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-6 bg-gray-mid text-white text-sm font-bold py-2 px-6 rounded-full shadow items-center flex justify-center">
                ⭐ Mest populär
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-text-base mb-2">
                {pkg.title}
              </h3>
              <p className="text-text-soft text-sm mb-4">{pkg.description}</p>
              <h4 className="font-semibold text-text-base mb-2">Innehåller:</h4>
              <ul className="list-disc text-sm text-text-soft pl-5 mb-4 space-y-1">
                {pkg.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-xl font-bold text-text-base mb-1">
                {pkg.price}
              </p>
              <p className="text-xs text-text-soft mb-4">{pkg.setupFee}</p>
            </div>

            <a
              href={pkg.href}
              className="mt-auto inline-flex items-center justify-center text-sm font-medium bg-brand-main text-white hover:text-text-base py-2 px-4 rounded-full hover:bg-brand-light transition"
            >
              {pkg.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
