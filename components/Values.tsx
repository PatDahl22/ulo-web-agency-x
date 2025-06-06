import { values } from '../data/index'

export default function Values() {
  return (
    <section className="section-full bg-background-soft relative py-20">
      <h2 className="text-center text-3xl font-bold text-text-base mb-12">
        Våra värderingar
      </h2>

      {/* Left Fade */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background-soft to-transparent z-10 pointer-events-none" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background-soft to-transparent z-10 pointer-events-none" />

      {/* Values */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 px-8 w-max mx-auto">
          {values.map((value, i) => (
            <div
              key={i}
              className="min-w-[220px] max-w-[250px] bg-white border border-gray-light rounded-lg shadow-sm p-6 text-center shrink-0"
            >
              <img
                src={value.img}
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
