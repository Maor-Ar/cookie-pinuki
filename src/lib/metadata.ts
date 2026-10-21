import type { Metadata, Viewport } from "next";
import {
  BRAND_NAME,
  SITE_URL,
  THEME_COLOR,
  BACKGROUND_COLOR,
  type Locale,
  absoluteUrl,
  localePath,
} from "@/config/site";
import { getCopy } from "@/content/copy";

export const siteViewport: Viewport = {
  themeColor: THEME_COLOR,
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export function createMetadata(locale: Locale): Metadata {
  const { seo } = getCopy(locale);
  const path = localePath(locale);
  const isHe = locale === "he";

  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    applicationName: BRAND_NAME,
    authors: [{ name: BRAND_NAME, url: SITE_URL }],
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
    category: "food",
    keywords: isHe
      ? [
          "Cookie Pinuki",
          "עוגיות",
          "קרמבו",
          "רוגלך",
          "מאפיית בוטיק",
          "אפייה בעבודת יד",
          "עוגיות שוקולד צ'יפס",
          "דונאטס",
        ]
      : [
          "Cookie Pinuki",
          "handmade cookies",
          "krembo",
          "rugelach",
          "boutique bakery",
          "Israel bakery",
          "chocolate chip cookies",
          "donuts",
        ],
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        he: absoluteUrl("/"),
        en: absoluteUrl("/en"),
        "x-default": absoluteUrl("/"),
      },
    },
    openGraph: {
      type: "website",
      locale: isHe ? "he_IL" : "en_US",
      alternateLocale: isHe ? ["en_US"] : ["he_IL"],
      url: absoluteUrl(path),
      siteName: BRAND_NAME,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: absoluteUrl("/images/og.jpg"),
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} — handmade boutique bakery`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [absoluteUrl("/images/og.jpg")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    appleWebApp: {
      capable: true,
      title: BRAND_NAME,
      statusBarStyle: "black-translucent",
    },
    other: {
      "theme-color": THEME_COLOR,
      "msapplication-TileColor": THEME_COLOR,
      "msapplication-navbutton-color": THEME_COLOR,
    },
    icons: {
      icon: [{ url: absoluteUrl("/icon.png"), type: "image/png" }],
      apple: [{ url: absoluteUrl("/apple-icon.png"), type: "image/png" }],
    },
    manifest: absoluteUrl("/manifest.webmanifest"),
  };
}

export { BACKGROUND_COLOR };
