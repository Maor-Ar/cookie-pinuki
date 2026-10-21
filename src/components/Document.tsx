import { Assistant, Rubik } from "next/font/google";
import { localeDir, type Locale } from "@/config/site";
import "@/app/globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-assistant-family",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-rubik-family",
  display: "swap",
});

type DocumentProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function Document({ locale, children }: DocumentProps) {
  return (
    <html
      lang={locale}
      dir={localeDir(locale)}
      className={`${assistant.variable} ${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-flour font-assistant text-cocoa">
        {children}
      </body>
    </html>
  );
}
