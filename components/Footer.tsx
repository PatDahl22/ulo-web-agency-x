"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-main text-white text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-12 items-start justify-center">
        <div>
          <h4 className="font-semibold mb-4">TJÄNSTER</h4>
          <ul className="space-y-2">
            <li>
              <a href="/hemsidor" className="hover:text-brand-light transition">
                Hemsidor
              </a>
            </li>
            <li>
              <a href="/design" className="hover:text-brand-light transition">
                Design
              </a>
            </li>
            <li>
              <a
                href="/analytics"
                className="hover:text-brand-light transition"
              >
                Analytics
              </a>
            </li>
            <li>
              <a
                href="/marknadsforing"
                className="hover:text-brand-light transition"
              >
                Marknadsföring
              </a>
            </li>
            <li>
              <a href="/strategi" className="hover:text-brand-light transition">
                Strategi
              </a>
            </li>
            <li>
              <a
                href="/forvaltning"
                className="hover:text-brand-light transition"
              >
                Förvaltning
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">KUNDSERVICE</h4>
          <ul className="space-y-2">
            <li>
              <a href="/om-oss" className="hover:text-brand-light transition">
                Om oss
              </a>
            </li>
            <li>
              <a href="/kundcase" className="hover:text-brand-light transition">
                KUNDCASE
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-brand-light transition">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/allmanna-villkor"
                className="hover:text-brand-light transition"
              >
                ALLMÄNNA VILLKOR
              </a>
            </li>
            <li>
              <a
                href="/integritet-och-policy"
                className="hover:text-brand-light transition"
              >
                INTEGRITET OCH POLICY
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">KONTAKT</h4>
          <p className="my-2">
            <a
              href="https://www.google.com/maps/dir//Arkens+V%C3%A4g+26,+136+37+Handen/@59.1622103,18.0545629,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x465f9d707de273d5:0xbc36dbfba3b8b2a1!2m2!1d18.1369626!2d59.1622364?hl=sv&authuser=1&entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arkens väg 26, <br />
              136 37 Handen, <br />
              SWEDEN
            </a>
          </p>
          <p className="my-2">
            📧 <a href="mailto:info@nrsstockholm.com">info@nrsstockholm.com</a>
            <br />
            <a
              href="tel:+46765962253"
              className="hover:text-brand-light transition"
            >
              Tel: +46(0)7 6596 2253
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/Nailrichstudio"
              target="_blank"
              rel="noreferrer"
              aria-label="Besök vår Facebook-sida"
            >
              <img
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="Facebook"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.instagram.com/nailrichstudio"
              target="_blank"
              rel="noreferrer"
              aria-label="Besök vår Instagram-sida"
            >
              <img
                src="https://img.icons8.com/fluency/48/instagram-new.png"
                alt="Instagram"
                className="w-10 h-10"
              />
            </a>
            <a href="#" className="hover:opacity-75">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="text-center bg-brand-dark py-4 text-xs">
        &copy; {currentYear} NRS Stockholm. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
