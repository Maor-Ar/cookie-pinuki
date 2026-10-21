import type { MetadataRoute } from "next";
import {
  BACKGROUND_COLOR,
  BRAND_NAME,
  THEME_COLOR,
} from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND_NAME,
    short_name: "Pinuki",
    description:
      "Handmade boutique bakery in Israel. Order cookies, krembo, rugelach, and donuts on Instagram.",
    start_url: "/",
    display: "standalone",
    background_color: BACKGROUND_COLOR,
    theme_color: THEME_COLOR,
    lang: "he",
    dir: "rtl",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
