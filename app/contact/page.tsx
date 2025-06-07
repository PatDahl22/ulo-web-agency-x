// app/kontakt/page.tsx
"use client"; // Denna rad krävs för att använda hooks som useState

import { useState } from "react";
import { Phone, Mail, MapPin, Building, Home, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

// En liten hjälpkomponent för informationskorten
type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
  subtext?: string;
};

const InfoCard = ({ icon, title, content, subtext }: InfoCardProps) => (
  <div className="bg-background-white p-6 rounded-xl shadow-sm flex items-start gap-5">
    <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-text-basetransition-colors duration-300">
        {title}
      </h3>
      {subtext && (
        <p className="text-sm text-text-base">{subtext}</p>
      )}
      <p className="text-lg font-medium text-text-base mt-1">
        {content}
      </p>
    </div>
  </div>
);

export default function ContactPage() {
  // State för att hålla reda på valt datum, tid och mötestyp
  const [selectedDate, setSelectedDate] = useState(3);
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [meetingType, setMeetingType] = useState("digital");

  const dates = Array.from({ length: 21 }, (_, i) => i + 1);
  const times = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  return (
    <div className="bg-background-white py-16 sm:py-24">
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* === ÖVERSKRIFT === */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold  text-text-base">
            Kontakta oss
          </h1>
          <p className="mt-4 text-lg text-text-base max-w-2xl mx-auto">
            Tveka inte att höra av dig. Vi hjälper dig oavsett dina behov, stora
            som små.
          </p>
          <p className="mt-2 text-lg font-semibold text-text-base">
            30 min rådgivning - villkorslöst och gratis
          </p>
        </div>

        {/* === HUVUDINNEHÅLL - TVÅ KOLUMNER === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* === VÄNSTER KOLUMN === */}
          <div className="space-y-8">
            <div className="p-8 bg-background-soft shadow-md rounded-2xl">
              <h2 className="text-2xl font-bold text-text-base mb-6">
                Välkommen att kontakta oss
              </h2>
              <div className="space-y-4">
                <InfoCard
                  icon={<Phone size={24} className="text-text-base" />}
                  title="Ring Oss"
                  subtext="Måndag-Fredag: 08:00-17:00"
                  content="+46(0)7 0742 7467"
                />
                <InfoCard
                  icon={<Mail size={24} className="text-text-base" />}
                  title="Maila Oss"
                  subtext="Svar inom 24 timmar"
                  content="info@ulo.com"
                />
                <InfoCard
                  icon={<MapPin size={24} className="text-text-base" />}
                  title="Besök Oss"
                  subtext="Huvudkontor"
                  content="Ringvägen 45A, 118 63, Stockholm"
                />
              </div>
            </div>

            <div className="p-8 bg-background-soft shadow-md rounded-2xl">
              <h2 className="text-2xl font-bold text-text-base mb-6">
                Öppettider
              </h2>
              <div className="space-y-3 text-text-base">
                <div className="flex justify-between">
                  <span>Måndag-Fredag</span>
                  <span className="font-medium text-text-base">
                    08:00-17:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Lördag</span>
                  <span className="font-medium text-text-base">Stängt</span>
                </div>
                <div className="flex justify-between">
                  <span>Söndag</span>
                  <span className="font-medium text-text-base">Stängt</span>
                </div>
              </div>
            </div>

            {/* Karta - du kan byta ut denna div mot en riktig kartkomponent */}
            <div className="h-64 bg-blue-200 rounded-2xl flex items-center justify-center text-blue-800">
              <p>Kart-komponent här (t.ex. Google Maps iframe)</p>
            </div>
          </div>

          {/* === HÖGER KOLUMN (FORMULÄR) === */}
          <div className="p-8 bg-background-soft shadow-md rounded-2xl">
            <h2 className="text-2xl font-bold text-text-base mb-8">
              Skicka en förfrågan
            </h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-base mb-1"
                >
                  Namn
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border-none rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-base mb-1"
                >
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border-none rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text-base mb-1"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border-none rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-text-base mb-1"
                >
                  Välj tjänst
                </label>
                <select
                  id="service"
                  className="w-full p-3 border-none rounded-lg shadow-sm appearance-none bg-white"
                >
                  <option>Hemsidan</option>
                  <option>Designer</option>
                  <option>Analytics</option>
                  <option>Marknadsföring</option>
                  <option>Strategi</option>
                  <option>Management</option>
                </select>
              </div>

              {/* === DATUM & TID VÄLJARE === */}
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-md font-semibold text-text-base mb-4">
                  Välj Datum & Tid
                </h3>
                {/* Dagar */}
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"].map(
                    (day) => (
                      <div key={day} className="text-text-soft">
                        {day}
                      </div>
                    )
                  )}
                  {dates.map((date) => (
                    <button
                      key={date}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={`p-2 rounded-md ${
                        selectedDate === date
                          ? "bg-brand-main text-white"
                          : "hover:bg-brand-light"
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
                {/* Tider */}
                <div className="grid grid-cols-4 gap-2 mt-6">
                  {times.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-md text-sm ${
                        selectedTime === time
                          ? "bg-brand-main text-white"
                          : "bg-gray-100 hover:bg-brand-light"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mötestyp */}
              <div className="grid grid-cols-2 gap-4">
                <Button href="/boka" variant="light">
                  <Building size={20} /> Vår kontor
                </Button>
                <Button href="/boka" variant="dark">
                  <Home size={20} /> Digital möte
                </Button>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-base mb-1"
                >
                  Meddelande
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border-none rounded-lg shadow-sm"
                ></textarea>
              </div>

              <div>
                <Button href="/boka" variant="dark">
                  Begär offert / Boka
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
