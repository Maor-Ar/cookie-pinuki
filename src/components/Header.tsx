"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { INSTAGRAM_DM_URL, type Locale, withBasePath } from "@/config/site";
import { getCopy } from "@/content/copy";
import { CloseIcon, InstagramIcon, MenuIcon } from "@/components/icons";

export function Header({ locale }: { locale: Locale }) {
  const t = getCopy(locale).header;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-cocoa shadow-[0_4px_24px_rgba(61,31,13,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between sm:h-20">
          <button
            type="button"
            className="rounded-cookie p-2 text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.closeLabel : t.menuLabel}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-assistant text-base font-semibold tracking-wide text-white transition-colors duration-200 hover:text-mint"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`absolute left-1/2 -translate-x-1/2 translate-y-8 ${open ? "z-0" : "z-10"}`}
            aria-label="Cookie Pinuki"
          >
            <img
              src={withBasePath("/images/logo.png")}
              alt="Cookie Pinuki"
              width={176}
              height={96}
              className="h-36 w-auto object-contain drop-shadow-lg sm:h-44"
            />
          </button>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href={t.langHref}
              hrefLang={locale === "he" ? "en" : "he"}
              className="rounded-full border border-white/30 px-3 py-1.5 font-rubik text-xs font-bold text-white/80 transition-all duration-200 hover:border-white/60 hover:text-white"
              aria-label={t.langLabel}
            >
              {t.lang}
            </Link>
            <a
              href={INSTAGRAM_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal shadow-cookie flex items-center gap-2 rounded-dough px-5 py-2.5 font-rubik text-sm font-bold"
            >
              <InstagramIcon size={16} />
              {t.cta}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={t.langHref}
              hrefLang={locale === "he" ? "en" : "he"}
              className="rounded-full border border-white/30 px-2.5 py-1 font-rubik text-xs font-bold text-white/80 hover:text-white"
              aria-label={t.langLabel}
            >
              {t.lang}
            </Link>
          </div>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-4 border-t border-white/10 bg-cocoa px-6 py-6 md:hidden"
        >
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-start font-assistant text-lg font-semibold text-flour/90 transition-colors hover:text-mint"
            >
              {item.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-teal mt-2 flex items-center justify-center gap-2 rounded-dough px-6 py-3 font-rubik font-bold"
          >
            <InstagramIcon size={18} />
            {t.cta}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
