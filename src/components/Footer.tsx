import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  type Locale,
  withBasePath,
} from "@/config/site";
import { getCopy, instagramPosts } from "@/content/copy";
import { HeartIcon, InstagramIcon } from "@/components/icons";

export function Footer({ locale }: { locale: Locale }) {
  const t = getCopy(locale).footer;
  const nav = getCopy(locale).header.nav;

  return (
    <footer className="bg-cocoa pt-16 pb-28 text-flour sm:pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-center gap-3">
            <InstagramIcon size={20} className="text-flour/70" />
            <p className="font-assistant text-base text-flour/70">{t.follow}</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-assistant text-sm font-semibold text-mint transition-colors hover:text-[#5ecece]"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {instagramPosts.map((post) => (
              <a
                key={post.src + post.alt.en}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-[1rem]"
              >
                <img
                  src={withBasePath(post.src)}
                  alt={post.alt[locale]}
                  width={post.width}
                  height={post.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-mint/0 transition-colors duration-300 group-hover:bg-mint/25">
                  <InstagramIcon
                    size={18}
                    className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-10 border-t border-flour/15" />

        <div className="mb-12 grid grid-cols-1 gap-10 text-start sm:grid-cols-3">
          <div>
            <img
              src={withBasePath("/images/logo.png")}
              alt={t.logoAlt}
              width={160}
              height={88}
              className="mb-4 h-20 w-auto object-contain opacity-90"
            />
            <p className="font-assistant text-sm leading-relaxed text-flour/55">
              {t.tagline}
            </p>
          </div>

          <div>
            <p className="mb-4 font-rubik text-base font-bold text-flour/80">
              {t.nav}
            </p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-assistant text-sm text-flour/55 transition-colors hover:text-mint"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-rubik text-base font-bold text-flour/80">
              {t.contact}
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-2 text-mint transition-colors hover:text-[#5ecece]"
            >
              <InstagramIcon size={16} />
              <span className="font-assistant text-sm">{INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-flour/10 pt-6 text-center sm:flex-row">
          <p className="font-assistant text-xs text-flour/35">
            <span dir="ltr">{t.copyrightPrefix}</span> {t.copyrightSuffix}
          </p>
          <p
            className="flex items-center gap-1.5 font-assistant text-xs text-flour/45"
            dir="ltr"
          >
            <span>{t.handmade}</span>
            <HeartIcon className="fill-red-400 text-red-400" />
            <span>{t.est}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
