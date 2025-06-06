import Image from "next/image";
import Button from "./ui/Button";

export default function Nav() {
  return (
    <header className="bg-background-light text-text-base shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/Logotype.png"
            alt="ULO logotyp"
            width={80}
            height={30}
            className="w-auto h-6 md:h-8 object-contain"
          />
        </a>

        {/* Meny */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-sm font-semibold">
          <a href="/tjänster" className="hover:text-brand-light transition">
            Tjänster
          </a>
          <a href="/kundcase" className="hover:text-brand-light transition">
            Kundcase
          </a>
          <a href="/om-oss" className="hover:text-brand-light transition">
            Om oss
          </a>
          <a href="/kontakt" className="hover:text-brand-light transition">
            Kontakt
          </a>
        </nav>

        {/* Rätt sida */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <a href="/register" className="hover:text-brand-light transition">
            Registrera dig
          </a>
          <a href="/login" className="hover:text-brand-light transition">
            Logga in
          </a>
           <Button href="/boka" variant="dark">
            Boka rådgivning
          </Button>
        </div>
      </div>
    </header>
  );
}
