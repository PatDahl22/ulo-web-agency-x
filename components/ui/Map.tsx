// components/ui/Map.tsx
import React from "react";
import { cn } from "@/utils/cn"; 

type MapProps = {
  address: string;
  height?: string; 
  className?: string; 
};

export default function Map({
  address,
  height = "h-96",
  className,
}: MapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

  if (!apiKey) {
    console.error("Google Maps API key is missing.");
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
        <strong className="font-bold">Fel:</strong>
        <span className="block sm:inline">
          {" "}
          Google Maps API-nyckel saknas. Kartan kan inte visas.
        </span>
      </div>
    );
  }

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
    address
  )}`;

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-xl",
        height, // Använd den flexibla höjden
        className
      )}
    >
      <iframe
        title={`Karta som visar platsen för ${address}`} 
        src={mapSrc}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0" 
      />
    </div>
  );
}
