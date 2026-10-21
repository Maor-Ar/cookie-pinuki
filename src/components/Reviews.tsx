"use client";

import { type Locale } from "@/config/site";
import { getCopy } from "@/content/copy";
import { StarIcon } from "@/components/icons";
import { useReveal } from "@/lib/use-reveal";

export function Reviews({ locale }: { locale: Locale }) {
  const t = getCopy(locale).reviews;
  const { ref, visible } = useReveal<HTMLElement>(0.1);

  return (
    <section id="testimonials" ref={ref} className="bg-flour py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-start sm:mb-16">
          <p className="mb-2 font-assistant text-base font-semibold tracking-widest text-mint uppercase">
            {t.tag}
          </p>
          <h2
            className="font-rubik font-black text-cocoa"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            {t.title}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-mint" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {t.items.map((review, index) => (
            <blockquote
              key={review.name}
              className={`reveal relative overflow-hidden rounded-[2rem] bg-white p-6 text-start sm:p-7 ${
                visible ? "is-in" : ""
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
                boxShadow:
                  "0 8px 32px rgba(61,31,13,0.07), 0 2px 8px rgba(61,31,13,0.04)",
              }}
            >
              <div className="absolute top-4 end-4 select-none text-4xl opacity-10">
                {review.emoji}
              </div>
              <div className="mb-3 flex justify-start gap-0.5" aria-label="5 stars">
                {Array.from({ length: review.stars }).map((_, star) => (
                  <StarIcon
                    key={star}
                    className="fill-[#F5A623] text-[#F5A623]"
                  />
                ))}
              </div>
              <p className="mb-5 font-assistant text-base leading-relaxed text-cocoa/75 sm:text-[17px]">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="flex items-center justify-start gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-rubik text-sm font-bold text-white"
                  style={{ backgroundColor: review.avatar }}
                  aria-hidden="true"
                >
                  {review.initial}
                </div>
                <div>
                  <cite className="font-rubik text-sm font-bold text-cocoa not-italic">
                    {review.name}
                  </cite>
                  <p className="font-assistant text-xs text-cocoa/45">
                    {review.location}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div
          className={`reveal mt-12 flex flex-wrap items-center justify-center gap-6 ${
            visible ? "is-in" : ""
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {t.stats.map((stat) => (
            <div key={stat.label} className="px-6 text-center">
              <div className="font-rubik text-3xl font-black text-mint" dir="ltr">
                {stat.num}
              </div>
              <div className="mt-1 font-assistant text-sm text-cocoa/55">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
