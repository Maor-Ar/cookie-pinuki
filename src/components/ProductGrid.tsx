import { type Locale } from "@/config/site";
import { getCopy, getProducts } from "@/content/copy";
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ locale }: { locale: Locale }) {
  const t = getCopy(locale).products;
  const products = getProducts(locale);

  return (
    <section id="products" className="bg-flour py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-start sm:mb-16">
          <p className="mb-2 font-assistant text-base font-semibold tracking-widest text-mint uppercase">
            {t.tag}
          </p>
          <h2
            className="font-rubik leading-tight font-black text-cocoa"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            {t.title}
          </h2>
          <p className="mt-3 max-w-lg font-assistant text-lg text-cocoa/60">
            {t.sub}
          </p>
          <div className="mt-4 h-1 w-16 rounded-full bg-mint" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              orderLabel={t.order}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
