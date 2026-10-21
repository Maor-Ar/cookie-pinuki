import { type Locale } from "@/config/site";
import { getCopy } from "@/content/copy";
import { OrderLink } from "@/components/OrderLink";

export function MobileOrderBar({ locale }: { locale: Locale }) {
  const t = getCopy(locale).hero;

  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 bg-gradient-to-t from-cocoa via-cocoa/95 to-transparent p-4 pt-8 sm:hidden">
      <OrderLink
        iconSize={22}
        className="w-full rounded-dough py-4 font-rubik text-lg font-bold shadow-[0_8px_32px_rgba(30,140,140,0.5)]"
      >
        {t.cta}
      </OrderLink>
    </div>
  );
}
