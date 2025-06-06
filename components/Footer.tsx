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
          <p>
            Ringvägen 45A
            <br />
            118 63, Stockholm
            <br />
            SWEDEN
          </p>
          <p className="mt-2">
            Tel: +46(0)7 0742 7467
            <br />
            E-post: info@ulo.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:opacity-75">
              TikTok
            </a>
            <a href="#" className="hover:opacity-75">
              Instagram
            </a>
            <a href="#" className="hover:opacity-75">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="text-center bg-brand-dark py-4 text-xs">
        &copy; {currentYear} ULO. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
