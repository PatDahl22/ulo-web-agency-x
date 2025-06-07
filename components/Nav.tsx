"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  { name: "Hemsidor", href: "/hemsidor" },
  { name: "Design", href: "/design" },
  { name: "Analytics", href: "/analytics" },
  { name: "Marknadsföring", href: "/marknadsforing" },
  { name: "Strategi", href: "/strategi" },
  { name: "Förvaltning", href: "/forvaltning" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // ---- DENNA RAD ÄR ÄNDRAD ----
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background-light shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logotype.png"
            alt="ULO logotyp"
            width={80}
            height={30}
            className="w-auto h-6 md:h-8 object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-sm font-semibold">
          <div className="relative group">
            <button className="hover:text-brand-light transition">
              Tjänster
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded-md z-50 w-48 py-2">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block px-4 py-2 text-sm text-text-base hover:bg-gray-light"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/kundcase" className="hover:text-brand-light transition">
            Kundcase
          </Link>
          <Link href="/om-oss" className="hover:text-brand-light transition">
            Om oss
          </Link>
          <Link href="/contact" className="hover:text-brand-light transition">
            Kontakt
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Link href="/register" className="hover:text-brand-light transition">
            Registrera dig
          </Link>
          <Link href="/login" className="hover:text-brand-light transition">
            Logga in
          </Link>
          <Link
            href="/boka"
            className="bg-brand-main text-white hover:text-brand-dark px-4 py-2 rounded-full hover:bg-brand-light transition text-center"
          >
            Gratis rådgivning
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center text-2xl"
          aria-label="Öppna meny"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 animate-fade-down">
          <div className="flex flex-col gap-4 text-sm font-semibold items-end px-10">
            <details className="group">
              <summary className="cursor-pointer hover:text-brand-light transition">
                Tjänster
              </summary>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm hover:text-brand-light"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/kundcase" onClick={() => setMenuOpen(false)}>
              Kundcase
            </Link>
            <Link href="/om-oss" onClick={() => setMenuOpen(false)}>
              Om oss
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Kontakt
            </Link>
            <Link href="/register" onClick={() => setMenuOpen(false)}>
              Registrera dig
            </Link>
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              Logga in
            </Link>
            <Link
              href="/boka"
              onClick={() => setMenuOpen(false)}
              className="bg-brand-main text-white px-4 py-2 rounded-full hover:bg-brand-light transition text-center"
            >
              Gratis rådgivning
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
