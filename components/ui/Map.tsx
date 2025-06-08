// components/ui/Map.tsx
type MapProps = {
  address: string;
};

export default function Map({ address }: MapProps) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

    return (
    <div className="w-full h-50 rounded-xl overflow-hidden">
      <iframe
        title="Google Maps"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}`}
        allowFullScreen
        loading="lazy"
        className="w-full h-full border-none"
      />
    </div>
  );
}
