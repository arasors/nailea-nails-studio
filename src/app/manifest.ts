import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nailea Nails Art Studio",
    short_name: "Nailea",
    description: "Luxury home nail service in Bali.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf8",
    theme_color: "#f2b7c3",
    icons: [
      {
        src: "/images/nailea/logo-square.png",
        sizes: "1063x1063",
        type: "image/png",
      },
    ],
  };
}
