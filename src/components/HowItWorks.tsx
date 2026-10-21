"use client";

import { type Locale } from "@/config/site";
import { getCopy } from "@/content/copy";
import { OrderLink } from "@/components/OrderLink";
import { useReveal } from "@/lib/use-reveal";

export function HowItWorks({ locale }: { locale: Locale }) {
  const t = getCopy(locale).how;
  const { ref, visible } = useReveal<HTMLElement>(0.15);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: "#F5ECD8" }}
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cocoa/5" />
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-mint/10" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-14 text-center sm:mb-20">
          <p className="mb-2 font-assistant text-base font-semibold tracking-widest text-mint uppercase">
            {t.tag}
          </p>
          <h2
            className="font-rubik font-black text-cocoa"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            {t.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-mint" />
        </div>

        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {t.steps.map((step, index) => (
            <li
              key={step.title}
              className={`reveal text-center ${visible ? "is-in" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative mx-auto mb-6 h-20 w-20">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cocoa/20" />
                <div className="shadow-cookie absolute inset-2 flex items-center justify-center rounded-full bg-white">
                  <span className="text-3xl" aria-hidden="true">
                    {step.emoji}
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-mint shadow-lg">
                  <span className="font-rubik text-xs font-black text-white">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="mb-3 font-rubik text-xl font-bold text-cocoa">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs font-assistant text-base leading-relaxed text-cocoa/65">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>

        <div
          className={`reveal mt-14 text-center ${visible ? "is-in" : ""}`}
          style={{ transitionDelay: "500ms" }}
        >
          <OrderLink
            iconSize={20}
            className="rounded-dough px-8 py-4 font-rubik text-lg font-bold shadow-[0_8px_32px_rgba(30,140,140,0.3)]"
          >
            {t.cta}
          </OrderLink>
        </div>
      </div>
    </section>
  );
}
