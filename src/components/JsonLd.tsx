import {
  BRAND_NAME,
  INSTAGRAM_URL,
  PRICE_RANGE,
  SITE_URL,
  absoluteUrl,
  localePath,
  type Locale,
} from "@/config/site";
import { getCopy, getProducts } from "@/content/copy";

export function JsonLd({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  const products = getProducts(locale);
  const pageUrl = absoluteUrl(localePath(locale));
  const logo = absoluteUrl("/images/logo.png");
  const image = absoluteUrl("/images/og.jpg");

  const bakeryId = `${SITE_URL}/#bakery`;
  const catalogId = `${SITE_URL}/#menu`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Bakery",
        "@id": bakeryId,
        name: BRAND_NAME,
        url: SITE_URL,
        image,
        logo: {
          "@type": "ImageObject",
          url: logo,
        },
        description: t.seo.description,
        priceRange: PRICE_RANGE,
        currenciesAccepted: "ILS",
        sameAs: [INSTAGRAM_URL],
        areaServed: {
          "@type": "Country",
          name: locale === "he" ? "ישראל" : "Israel",
        },
        servesCuisine: locale === "he" ? "מאפים" : "Bakery",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "75",
          reviewCount: String(t.reviews.items.length),
        },
        review: t.reviews.items.map((review) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: review.name,
          },
          reviewBody: review.text,
          reviewRating: {
            "@type": "Rating",
            ratingValue: String(review.stars),
            bestRating: "5",
          },
        })),
        hasOfferCatalog: {
          "@id": catalogId,
        },
      },
      {
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: t.products.title,
        itemListElement: products.map((product, index) => ({
          "@type": "Offer",
          position: index + 1,
          url: `${pageUrl}#products`,
          priceCurrency: "ILS",
          price: product.sizes?.[0]?.price ?? product.price,
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: absoluteUrl(product.image),
            brand: {
              "@type": "Brand",
              name: BRAND_NAME,
            },
          },
        })),
      },
      {
        "@type": "HowTo",
        name: t.how.title,
        description: t.how.tag,
        step: t.how.steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.desc,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND_NAME,
        inLanguage: locale === "he" ? "he-IL" : "en-US",
        publisher: {
          "@id": bakeryId,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t.seo.title,
        description: t.seo.description,
        inLanguage: locale === "he" ? "he-IL" : "en-US",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": bakeryId,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: image,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
