export const locales = ["he", "en"] as const;

export type Locale = (typeof locales)[number];

export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(
  /\/$/,
  "",
);

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cookiepinuki.com"
).replace(/\/$/, "");

export function withBasePath(path: string) {
  if (!path || path.startsWith("http") || path.startsWith("#")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

export const BRAND_NAME = "Cookie Pinuki";
export const THEME_COLOR = "#3D1F0D";
export const BACKGROUND_COLOR = "#FDF6EC";

export const INSTAGRAM_HANDLE = "@cookiepinuki";
export const INSTAGRAM_URL = "https://www.instagram.com/cookiepinuki/";
export const INSTAGRAM_DM_URL = "https://ig.me/m/cookiepinuki";

export const PRICE_RANGE = "₪40-₪95";

export function localePath(locale: Locale) {
  return locale === "he" ? "/" : "/en";
}

export function localeDir(locale: Locale) {
  return locale === "he" ? "rtl" : "ltr";
}

export function absoluteUrl(path = "/") {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
