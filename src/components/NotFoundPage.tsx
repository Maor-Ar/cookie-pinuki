import Link from "next/link";
import { localePath, type Locale, withBasePath } from "@/config/site";
import { getCopy } from "@/content/copy";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = getCopy(locale).notFound;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-flour px-6 text-center">
      <img
        src={withBasePath("/images/logo.png")}
        alt="Cookie Pinuki"
        width={180}
        height={98}
        className="mb-8 h-28 w-auto object-contain"
      />
      <h1 className="mb-3 font-rubik text-3xl font-black text-cocoa">
        {t.title}
      </h1>
      <p className="mb-8 max-w-md font-assistant text-lg text-cocoa/60">
        {t.body}
      </p>
      <Link
        href={localePath(locale)}
        className="btn-teal rounded-dough px-8 py-3 font-rubik font-bold"
      >
        {t.cta}
      </Link>
    </main>
  );
}
