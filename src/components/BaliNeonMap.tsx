import { ExternalLink, MapPin } from "lucide-react";

import type { Locale } from "@/lib/locale-config";

const mapCopy = {
  en: { title: "Nailea Bali service map", label: "Selected mobile routes", hint: "Drag or zoom the map", attribution: "OpenStreetMap contributors" },
  id: { title: "Peta layanan Nailea di Bali", label: "Rute panggilan terpilih", hint: "Geser atau perbesar peta", attribution: "Kontributor OpenStreetMap" },
  ru: { title: "Карта выездов Nailea на Бали", label: "Выбранные маршруты", hint: "Перемещайте и масштабируйте карту", attribution: "Участники OpenStreetMap" },
} as const;

const markers = [
  { name: "Canggu", left: "47%", top: "54%" },
  { name: "Seminyak", left: "55%", top: "62%" },
  { name: "Kerobokan", left: "54%", top: "54%" },
  { name: "Ubud", left: "78%", top: "29%" },
  { name: "Sanur", left: "78%", top: "59%" },
  { name: "Uluwatu", left: "34%", top: "87%" },
];

export function BaliNeonMap({ locale }: { locale: Locale }) {
  const copy = mapCopy[locale];
  const mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=114.95%2C-8.9%2C115.35%2C-8.35&layer=mapnik";

  return (
    <div className="bali-neon-map">
      <iframe src={mapUrl} title={copy.title} loading="lazy" referrerPolicy="no-referrer" />
      <div className="map-neon-wash" aria-hidden="true" />
      <div className="map-scanlines" aria-hidden="true" />
      <div className="map-route-line" aria-hidden="true" />
      {markers.map((marker) => (
        <span className="map-marker" style={{ left: marker.left, top: marker.top }} key={marker.name}>
          <i><MapPin aria-hidden="true" size={13} /></i><b>{marker.name}</b>
        </span>
      ))}
      <div className="map-topline"><span>NAILEA / BALI</span><strong>{copy.label}</strong></div>
      <div className="map-bottomline">
        <span>{copy.hint}</span>
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© {copy.attribution} <ExternalLink aria-hidden="true" size={11} /></a>
      </div>
    </div>
  );
}
