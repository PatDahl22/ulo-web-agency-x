import { testimonials } from "@/data";

export default function Testimonials() {
  return (
    <section className="w-screen h-screen bg-background-white py-20 flex flex-col justify-center overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-text-base mb-12">
        Vad våra användare säger
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-8 px-8">
          {testimonials.concat(testimonials).map((t, i) => (
            <div
              key={i}
              className="min-w-[280px] max-w-[300px] bg-background-light border border-gray-light rounded-lg p-6 shrink-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-text-base">{t.name}</p>
                  <p className="text-sm text-text-soft">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-text-soft italic">"{t.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}