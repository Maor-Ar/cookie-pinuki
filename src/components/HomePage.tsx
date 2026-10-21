import { type Locale } from "@/config/site";
import { getCopy } from "@/content/copy";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { MobileOrderBar } from "@/components/MobileOrderBar";

export function HomePage({ locale }: { locale: Locale }) {
  const skip = getCopy(locale).skip;

  return (
    <>
      <JsonLd locale={locale} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:z-[60] focus:rounded-dough focus:bg-mint focus:px-4 focus:py-2 focus:text-white"
      >
        {skip}
      </a>
      <Header locale={locale} />
      <main id="main">
        <Hero locale={locale} />
        <ProductGrid locale={locale} />
        <HowItWorks locale={locale} />
        <Reviews locale={locale} />
      </main>
      <Footer locale={locale} />
      <MobileOrderBar locale={locale} />
    </>
  );
}
