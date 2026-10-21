"use client";

import { useState } from "react";
import type { Product } from "@/content/copy";
import { INSTAGRAM_DM_URL, withBasePath } from "@/config/site";
import { InstagramIcon } from "@/components/icons";
import { useReveal } from "@/lib/use-reveal";

type ProductCardProps = {
  product: Product;
  index: number;
  orderLabel: string;
};

export function ProductCard({ product, index, orderLabel }: ProductCardProps) {
  const { ref, visible } = useReveal<HTMLElement>(0.1);
  const [size, setSize] = useState(product.sizes?.[0] ?? null);
  const raised = index % 3 === 1;
  const price = size ? size.price : product.price;

  return (
    <article
      ref={ref}
      className={`card-rise group reveal overflow-hidden rounded-[2rem] bg-white ${
        visible ? "is-in" : ""
      } ${raised ? "lg:-mt-4 lg:mb-4" : ""}`}
      style={{
        transitionDelay: `${index * 80}ms`,
        boxShadow:
          "0 8px 32px rgba(61,31,13,0.08), 0 2px 8px rgba(61,31,13,0.05)",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{ height: raised ? 240 : 200 }}
      >
        <img
          src={withBasePath(product.image)}
          alt={product.name}
          width={product.width}
          height={product.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {product.badge ? (
          <div
            className={`absolute top-3 start-3 rounded-dough px-3 py-1.5 font-rubik text-xs font-bold shadow-lg ${product.badgeClass}`}
          >
            {product.badge}
          </div>
        ) : null}
      </div>

      <div className="p-5 text-start sm:p-6">
        <h3 className="mb-1.5 font-rubik text-xl leading-tight font-bold text-cocoa">
          {product.name}
        </h3>
        <p className="mb-3 font-assistant text-base leading-relaxed text-cocoa/60">
          {product.description}
        </p>

        {product.sizes ? (
          <div className="mb-4 flex flex-wrap justify-start gap-2">
            {product.sizes.map((option) => {
              const selected = size?.label === option.label;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setSize(option)}
                  className={`rounded-dough border-2 px-3 py-1.5 font-rubik text-xs font-bold transition-all duration-150 ${
                    selected
                      ? "border-mint bg-mint text-white"
                      : "border-cocoa/20 text-cocoa/70 hover:border-mint"
                  }`}
                >
                  {option.label} — {option.price} ₪
                </button>
              );
            })}
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-3">
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-teal flex flex-1 items-center justify-center gap-2 rounded-dough px-5 py-2.5 font-rubik text-sm font-bold shadow-[0_4px_16px_rgba(30,140,140,0.25)]"
          >
            <InstagramIcon size={15} />
            {orderLabel}
          </a>
          <div className="shrink-0 text-start">
            <span className="font-rubik text-2xl font-black text-cocoa">
              {price}
            </span>
            <span className="ms-0.5 font-assistant text-sm text-cocoa/50">
              ₪
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
