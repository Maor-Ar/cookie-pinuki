import { type Locale, withBasePath } from "@/config/site";
import { getCopy } from "@/content/copy";
import { OrderLink } from "@/components/OrderLink";

export function Hero({ locale }: { locale: Locale }) {
  const t = getCopy(locale).hero;
  const isHe = locale === "he";

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={withBasePath("/images/hero-snowy-cookies.png")}
        alt=""
        width={822}
        height={1024}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className={`absolute inset-0 ${
          isHe
            ? "bg-gradient-to-l from-cocoa/85 via-cocoa/60 to-cocoa/20"
            : "bg-gradient-to-r from-cocoa/85 via-cocoa/60 to-cocoa/20"
        }`}
      />
      <div className="absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-t from-cocoa/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 pt-36 sm:px-10">
        <div className="me-auto max-w-xl text-start">
          <div
            className="hero-in mb-6 inline-flex items-center gap-2 rounded-dough border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-sm"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="font-assistant text-sm font-semibold text-white/90">
              {t.badge}
            </span>
          </div>

          <h1
            className="hero-in mb-6 font-rubik font-black text-white"
            style={{
              animationDelay: "0.35s",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              lineHeight: 1.15,
            }}
          >
            {t.line1}
            <br />
            <span className="text-[#B8E0E0]">{t.line2}</span>
            <br />
            <span className="text-flour/90">{t.line3}</span>
          </h1>

          <p
            className="hero-in mb-10 font-assistant text-lg leading-relaxed text-white/80 sm:text-xl"
            style={{ animationDelay: "0.5s" }}
          >
            {t.sub1}
            <br />
            {t.sub2}
          </p>

          <div
            className="hero-in hidden items-center justify-end gap-4 sm:flex"
            style={{ animationDelay: "0.65s" }}
          >
            <OrderLink
              iconSize={22}
              className="rounded-dough px-8 py-4 font-rubik text-lg font-bold shadow-[0_8px_32px_rgba(30,140,140,0.4)]"
            >
              {t.cta}
            </OrderLink>
            <a
              href="#products"
              className="border-b border-white/40 pb-0.5 font-assistant font-semibold text-white/80 transition-colors hover:text-white"
            >
              {t.menu}
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute top-1/3 end-8 hidden h-3 w-3 rounded-full bg-flour/20 md:block" />
      <div className="pointer-events-none absolute top-1/2 end-24 hidden h-2 w-2 rounded-full bg-flour/15 md:block" />
      <div className="pointer-events-none absolute bottom-1/3 end-16 hidden h-4 w-4 rounded-full bg-flour/10 md:block" />
    </section>
  );
}
