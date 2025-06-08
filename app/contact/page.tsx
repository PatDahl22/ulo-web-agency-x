"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Building, Home } from "lucide-react";
import Button from "@/components/ui/Button";
import Calendar from "@/components/ui/Calendar";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Label from "@/components/ui/Label";
import Map from "@/components/ui/Map";
import { db } from "@/utils/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Snackbar from "@/components/ui/Snackbar";

// InfoCard
const InfoCard = ({ icon, title, content, subtext }: any) => (
  <div className="bg-background-white p-6 rounded-xl shadow-sm flex items-start gap-5">
    <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">{icon}</div>
    <div>
      <h3 className="text-md font-semibold text-text-base">{title}</h3>
      {subtext && <p className="text-xs text-text-base">{subtext}</p>}
      <p className="text-md font-medium text-text-base mt-1">{content}</p>
    </div>
  </div>
);

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "Hemsidan",
  message: "",
};

export default function ContactPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [meetingType, setMeetingType] = useState<"kontor" | "digital">(
    "digital"
  );
  const times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  const [form, setForm] = useState(initialForm);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});


  // Enkel validering
  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!form.name.trim()) errors.name = "Namn är obligatoriskt.";
    if (!form.email.trim()) {
      errors.email = "E-post är obligatoriskt.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email)) {
      errors.email = "Ogiltig e-postadress.";
    }
    if (!form.phone.trim()) {
      errors.phone = "Telefon är obligatoriskt.";
    } else if (!/^[0-9+\s()-]{7,}$/.test(form.phone)) {
      errors.phone = "Ogiltigt telefonnummer.";
    }
    if (!form.message.trim()) errors.message = "Meddelande är obligatoriskt.";
    if (!selectedDate) errors.date = "Datum måste väljas.";
    if (!selectedTime) errors.time = "Tid måste väljas.";
    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setFieldErrors({ ...fieldErrors, [e.target.id]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError("");
    setShowSnackbar(false);

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "contactForm"), {
        ...form,
        date: selectedDate ? Timestamp.fromDate(selectedDate) : null,
        time: selectedTime,
        meetingType,
        createdAt: Timestamp.now(),
      });
      setSuccess(true);
      setShowSnackbar(true);
      setForm(initialForm);
      setSelectedDate(undefined);
      setSelectedTime("10:00");
    } catch (err) {
      setError("Något gick fel. Försök igen senare.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-white py-16 sm:py-24 mt-10">
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-base">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Vänsterkolumn */}
          <div className="space-y-8">
            <div className="p-8 bg-background-soft shadow-md rounded-2xl">
              <h2 className="text-2xl font-bold text-text-base mb-6">
                Välkommen att kontakta oss
              </h2>
              <div className="space-y-4">
                <InfoCard
                  icon={<Phone size={20} />}
                  title="Ring oss"
                  content={<a href="tel:+46765962253">+46(0)7 6596 2253</a>}
                  subtext="Måndag–Fredag: 09:00–17:00"
                />
                <InfoCard
                  icon={<Mail size={20} />}
                  title="Maila oss"
                  content={<a href="mailto:info@ulo.com">info@ulo.com</a>}
                  subtext="Svar inom 24 timmar"
                />
                <InfoCard
                  icon={<MapPin size={20} />}
                  title="Besök oss"
                  content="Arkens väg 26, 136 37 Handen"
                  subtext="Huvudkontor"
                />
              </div>
            </div>
            <Map address="Arkens väg 26, 136 37 Handen, SWEDEN" />
          </div>

          {/* Formulär */}
          <div className="p-8 bg-background-soft shadow-md rounded-2xl">
            <h2 className="text-2xl font-bold text-text-base mb-8">
              Skicka en förfrågan
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <Label htmlFor="name">Namn</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                />
                {fieldErrors.name && (
                  <span id="name-error" className="text-red-600 text-xs">
                    {fieldErrors.name}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="email">E-post</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={
                    fieldErrors.email ? "email-error" : undefined
                  }
                />
                {fieldErrors.email && (
                  <span id="email-error" className="text-red-600 text-xs">
                    {fieldErrors.email}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  aria-invalid={!!fieldErrors.phone}
                  aria-describedby={
                    fieldErrors.phone ? "phone-error" : undefined
                  }
                />
                {fieldErrors.phone && (
                  <span id="phone-error" className="text-red-600 text-xs">
                    {fieldErrors.phone}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="service">Tjänst</Label>
                <select
                  id="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                  aria-label="Välj tjänst"
                >
                  <option>Hemsidan</option>
                  <option>Designer</option>
                  <option>Analytics</option>
                  <option>Marknadsföring</option>
                  <option>Strategi</option>
                  <option>Förvaltning</option>
                </select>
              </div>

              <div>
                <Label>Välj datum & tid</Label>
                <Calendar
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  aria-label="Välj datum"
                />
                {fieldErrors.date && (
                  <span className="text-red-600 text-xs">
                    {fieldErrors.date}
                  </span>
                )}
                <div
                  className="grid grid-cols-4 gap-2 mt-2"
                  role="radiogroup"
                  aria-label="Välj tid"
                >
                  {times.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-md px-3 py-1 text-sm ${
                        selectedTime === time
                          ? "bg-brand-main text-white"
                          : "bg-white text-text-base hover:bg-gray-100"
                      }`}
                      aria-pressed={selectedTime === time}
                      aria-label={time}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {fieldErrors.time && (
                  <span className="text-red-600 text-xs">
                    {fieldErrors.time}
                  </span>
                )}
              </div>

              <div
                className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-xl mx-auto"
                role="radiogroup"
                aria-label="Välj mötestyp"
              >
                <button
                  type="button"
                  onClick={() => setMeetingType("kontor")}
                  className="w-full"
                  aria-pressed={meetingType === "kontor"}
                  aria-label="Vår kontor"
                >
                  <Button variant={meetingType === "kontor" ? "dark" : "light"}>
                    <Building size={20} aria-hidden="true" /> Vår kontor
                  </Button>
                </button>
                <button
                  type="button"
                  onClick={() => setMeetingType("digital")}
                  className="w-full"
                  aria-pressed={meetingType === "digital"}
                  aria-label="Digital möte"
                >
                  <Button
                    variant={meetingType === "digital" ? "dark" : "light"}
                  >
                    <Home size={20} aria-hidden="true" /> Digital möte
                  </Button>
                </button>
              </div>

              <div>
                <Label htmlFor="message">Meddelande</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={
                    fieldErrors.message ? "message-error" : undefined
                  }
                />
                {fieldErrors.message && (
                  <span id="message-error" className="text-red-600 text-xs">
                    {fieldErrors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                aria-label="Skicka förfrågan"
                className="w-full"
              >
                <Button variant="dark">
                  {loading ? "Skickar..." : "Skicka förfrågan"}
                </Button>
              </button>

              {showSnackbar && (
                <Snackbar
                  message="Meddelandet har skickats!"
                  onClose={() => setShowSnackbar(false)}
                  show={showSnackbar}
                />
              )}

              {success && (
                <p className="text-green-600 text-sm" role="status">
                  ✅ Din förfrågan är skickad!
                </p>
              )}
              {error && (
                <p className="text-red-600 text-sm" role="alert">
                  ⚠ {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
