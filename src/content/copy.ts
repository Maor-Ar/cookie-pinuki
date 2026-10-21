import type { Locale } from "@/config/site";

export type ProductSize = {
  label: string;
  price: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price?: string;
  sizes?: readonly ProductSize[];
  image: string;
  width: number;
  height: number;
  badge: string | null;
  badgeClass: string;
};

export type Review = {
  name: string;
  location: string;
  text: string;
  stars: number;
  emoji: string;
  initial: string;
  avatar: string;
};

const images = {
  krembo: "/images/krembo.png",
  chocolateChip: "/images/chocolate-chip.png",
  rugelach: "/images/rugelach.png",
  snowy: "/images/hero-snowy-cookies.png",
  donuts: "/images/donuts.png",
  spread: "/images/instagram-spread.jpg",
} as const;

const productMedia = {
  1: { image: images.krembo, width: 1024, height: 768 },
  2: { image: images.krembo, width: 1024, height: 768 },
  3: { image: images.chocolateChip, width: 823, height: 1024 },
  4: { image: images.rugelach, width: 758, height: 1024 },
  5: { image: images.snowy, width: 822, height: 1024 },
  6: { image: images.donuts, width: 818, height: 1024 },
} as const;

export const copy = {
  he: {
    skip: "דלגו לתוכן",
    seo: {
      title: "Cookie Pinuki | אפיית בוטיק בעבודת יד — עוגיות, קרמבו ורוגלך",
      description:
        "Cookie Pinuki — מאפיית בוטיק ישראלית. מארזי קרמבו, עוגיות שוקולד צ'יפס ענקיות, רוגלך ודונאטס נאפים בעבודת יד אחרי כל הזמנה. הזמנה קלה באינסטגרם.",
    },
    header: {
      nav: [
        { label: "המארזים שלנו", href: "#products" },
        { label: "איך מזמינים", href: "#how-it-works" },
        { label: "לקוחות ממליצים", href: "#testimonials" },
      ],
      cta: "הזמן עכשיו",
      menuLabel: "תפריט",
      closeLabel: "סגירת תפריט",
      lang: "EN",
      langHref: "/en",
      langLabel: "Switch to English",
    },
    hero: {
      badge: "✦ אפיית בוטיק בעבודת יד",
      line1: "Cookie Pinuki",
      line2: "אפיית בוטיק",
      line3: "בעבודת יד",
      sub1: "מאפים מושחתים, עוגיות ענקיות וקרמבואים צבעוניים",
      sub2: "שעושים שמח בלב.",
      cta: "הזמן באינסטגרם",
      menu: "לתפריט המלא ↓",
    },
    products: {
      tag: "✦ הבוטיק שלנו",
      title: "המארזים שלנו",
      sub: "כל מארז נאפה בעבודת יד לאחר ההזמנה, עם אהבה והקפדה.",
      order: "הזמן באינסטגרם",
      items: [
        {
          id: 1,
          name: "מארז 6 קרמבו בוטיק",
          description: "טעמים משתנים לפי צבע, על בסיס עוגייה פריכה",
          price: "80",
          badge: "הבסטסלר שלנו",
          badgeClass: "bg-mint text-white",
        },
        {
          id: 2,
          name: "מארז 6 קרמבו בוטיק ללא גלוטן",
          description: "הטעמים האהובים, בגרסה בטוחה וללא גלוטן",
          price: "95",
          badge: "ללא גלוטן",
          badgeClass: "bg-[#5C8A3A] text-white",
        },
        {
          id: 3,
          name: "מארז 6 עוגיות שוקולד צ'יפס משוחתות",
          description:
            "עוגיות ענקיות עם שוקולד צ'יפס מושחת, פריכות מבחוץ ורכות מבפנים",
          price: "75",
          badge: "חדש!",
          badgeClass: "bg-[#C7520A] text-white",
        },
        {
          id: 4,
          name: "רוגלך",
          description: "רוגלך שוקולד עסיסיים בעבודת יד, רכים ומושחתים",
          sizes: [
            { label: "קטן (כ-8 יחידות)", price: "40" },
            { label: "גדול (כ-16 יחידות)", price: "80" },
          ],
          badge: null,
          badgeClass: "",
        },
        {
          id: 5,
          name: "מארז 15 עוגיות מושלגות",
          description: "שוקולד עשיר במעטפת אבקת סוכר",
          price: "55",
          badge: "מומלץ",
          badgeClass: "bg-cocoa text-flour",
        },
        {
          id: 6,
          name: "מארז 6 דונאטס",
          description: "דונאטס קלאסיים ורכים בזיגוג מושלם",
          price: "75",
          badge: null,
          badgeClass: "",
        },
      ],
    },
    how: {
      tag: "✦ פשוט כמו לנגוס בעוגייה",
      title: "איך זה עובד?",
      steps: [
        {
          emoji: "🍪",
          title: "בוחרים",
          desc: "בוחרים את המארזים המושחתים שהכי מדברים אליכם מהתפריט שלנו.",
        },
        {
          emoji: "💬",
          title: "שולחים",
          desc: "שולחים לנו הודעה באינסטגרם בלחיצת כפתור — פשוט וקליל!",
        },
        {
          emoji: "🛵",
          title: "מקבלים",
          desc: "אוספים באהבה, או מקבלים במשלוח בהתאם לאזור — טריים ועטופים יפה.",
        },
      ],
      cta: "מוכנים להזמין? בואו נתחיל!",
    },
    reviews: {
      tag: "✦ הלקוחות שלנו מדברים",
      title: "מה אומרים עלינו?",
      items: [
        {
          name: "מיכל ל.",
          location: "תל אביב",
          text: "הזמנתי מארז קרמבו לאירוע משפחתי וכולם פשוט השתגעו! הטעמים כל כך ייחודיים ואת מרגישה שאפו את זה עם אהבה אמיתית.",
          stars: 5,
          emoji: "🍪",
          initial: "מ",
          avatar: "#1E8C8C",
        },
        {
          name: "דנה כ.",
          location: "רעננה",
          text: "עוגיות הניו-יורק שינו לי את ההגדרה של עוגייה. מושלמות בפנים, פריכות בחוץ. כבר הזמנתי שלוש פעמים החודש!",
          stars: 5,
          emoji: "✨",
          initial: "ד",
          avatar: "#3D1F0D",
        },
        {
          name: "אורי ב.",
          location: "הרצליה",
          text: "הזמנה בוואטסאפ הייתה פשוטה ומהירה, המשלוח הגיע ממש מהר. עוגת השמרים הייתה הדבר הטעים ביותר שאכלתי השנה.",
          stars: 5,
          emoji: "🥹",
          initial: "א",
          avatar: "#8C4A1E",
        },
      ] satisfies Review[],
      stats: [
        { num: "75+", label: "לקוחות מרוצים" },
        { num: "100%", label: "עבודת יד" },
        { num: "4.7★", label: "דירוג ממוצע" },
      ],
    },
    footer: {
      follow: "עקבו אחרינו באינסטגרם",
      nav: "ניווט מהיר",
      contact: "צרו קשר",
      tagline:
        "מאפים מושחתים, עוגיות ענקיות וקרמבואים צבעוניים שעושים שמח בלב.",
      copyrightPrefix: "© 2023–2026 Cookie Pinuki.",
      copyrightSuffix: "כל הזכויות שמורות.",
      handmade: "Handmade with",
      est: "Est. 2023",
      logoAlt: "Cookie Pinuki",
    },
    notFound: {
      title: "העמוד לא נמצא",
      body: "חזרה לעמוד הבית של Cookie Pinuki.",
      cta: "לעמוד הבית",
    },
  },
  en: {
    skip: "Skip to content",
    seo: {
      title:
        "Cookie Pinuki | Handmade Boutique Bakery — Cookies, Krembo & Rugelach",
      description:
        "Cookie Pinuki is a handmade boutique bakery in Israel. Order krembo boxes, giant chocolate chip cookies, rugelach, and donuts on Instagram — baked fresh after every order.",
    },
    header: {
      nav: [
        { label: "Our Boxes", href: "#products" },
        { label: "How to Order", href: "#how-it-works" },
        { label: "Reviews", href: "#testimonials" },
      ],
      cta: "Order Now",
      menuLabel: "Menu",
      closeLabel: "Close menu",
      lang: "HE",
      langHref: "/",
      langLabel: "מעבר לעברית",
    },
    hero: {
      badge: "✦ Handmade Boutique Bakery",
      line1: "Cookie Pinuki",
      line2: "Boutique Bakery",
      line3: "Handmade",
      sub1: "Indulgent pastries, giant cookies and colorful krembos",
      sub2: "that warm your heart.",
      cta: "Order on Instagram",
      menu: "See full menu ↓",
    },
    products: {
      tag: "✦ Our Boutique",
      title: "Our Boxes",
      sub: "Every box is baked by hand after ordering, with love and care.",
      order: "Order on Instagram",
      items: [
        {
          id: 1,
          name: "Krembo Boutique Box (6)",
          description: "Rotating flavors by color, on a crispy cookie base",
          price: "80",
          badge: "Bestseller",
          badgeClass: "bg-mint text-white",
        },
        {
          id: 2,
          name: "Gluten-Free Krembo Box (6)",
          description: "Your favorite flavors in a safe, gluten-free version",
          price: "95",
          badge: "Gluten-Free",
          badgeClass: "bg-[#5C8A3A] text-white",
        },
        {
          id: 3,
          name: "Indulgent Chocolate Chip Cookies (6)",
          description:
            "Giant cookies with rich chocolate chips — crispy outside, soft inside",
          price: "75",
          badge: "New!",
          badgeClass: "bg-[#C7520A] text-white",
        },
        {
          id: 4,
          name: "Rugelach",
          description: "Handmade chocolate rugelach — soft and indulgent",
          sizes: [
            { label: "Small (~8 pieces)", price: "40" },
            { label: "Large (~16 pieces)", price: "80" },
          ],
          badge: null,
          badgeClass: "",
        },
        {
          id: 5,
          name: "Snowy Cookies Box (15)",
          description: "Rich chocolate in a powdered sugar coating",
          price: "55",
          badge: "Recommended",
          badgeClass: "bg-cocoa text-flour",
        },
        {
          id: 6,
          name: "Donuts Box (6)",
          description: "Classic, soft donuts with perfect glaze",
          price: "75",
          badge: null,
          badgeClass: "",
        },
      ],
    },
    how: {
      tag: "✦ Simple as taking a bite",
      title: "How it works",
      steps: [
        {
          emoji: "🍪",
          title: "Choose",
          desc: "Pick the indulgent boxes that speak to you from our menu.",
        },
        {
          emoji: "💬",
          title: "Message",
          desc: "Send us a quick message on Instagram — easy and breezy!",
        },
        {
          emoji: "🛵",
          title: "Receive",
          desc: "Pick up with love, or get delivery depending on your area — fresh and beautifully wrapped.",
        },
      ],
      cta: "Ready to order? Let's go!",
    },
    reviews: {
      tag: "✦ Our customers talk",
      title: "What people say",
      items: [
        {
          name: "Michal L.",
          location: "Tel Aviv",
          text: "I ordered a krembo box for a family event and everyone went wild! The flavors are so unique, and you can feel they were baked with real love.",
          stars: 5,
          emoji: "🍪",
          initial: "M",
          avatar: "#1E8C8C",
        },
        {
          name: "Dana K.",
          location: "Ra'anana",
          text: "The New York cookies redefined what a cookie is for me. Perfect inside, crispy outside. I've already ordered three times this month!",
          stars: 5,
          emoji: "✨",
          initial: "D",
          avatar: "#3D1F0D",
        },
        {
          name: "Ori B.",
          location: "Herzliya",
          text: "Ordering was simple and fast, and delivery arrived really quickly. The yeast cake was the most delicious thing I've eaten this year.",
          stars: 5,
          emoji: "🥹",
          initial: "O",
          avatar: "#8C4A1E",
        },
      ] satisfies Review[],
      stats: [
        { num: "75+", label: "Happy customers" },
        { num: "100%", label: "Handmade" },
        { num: "4.7★", label: "Average rating" },
      ],
    },
    footer: {
      follow: "Follow us on Instagram",
      nav: "Quick Navigation",
      contact: "Contact",
      tagline:
        "Indulgent pastries, giant cookies and colorful krembos that warm your heart.",
      copyrightPrefix: "© 2023–2026 Cookie Pinuki.",
      copyrightSuffix: "All rights reserved.",
      handmade: "Handmade with",
      est: "Est. 2023",
      logoAlt: "Cookie Pinuki",
    },
    notFound: {
      title: "Page not found",
      body: "Head back to the Cookie Pinuki homepage.",
      cta: "Back home",
    },
  },
} as const;

export const instagramPosts = [
  {
    src: images.snowy,
    alt: { he: "עוגיות מושלגות של Cookie Pinuki", en: "Cookie Pinuki snowy cookies" },
    width: 822,
    height: 1024,
  },
  {
    src: images.krembo,
    alt: { he: "קרמבו בוטיק צבעוני", en: "Colorful boutique krembo" },
    width: 1024,
    height: 768,
  },
  {
    src: images.spread,
    alt: { he: "עטרת שמרים בטעם שוקולד", en: "Chocolate babka loaf" },
    width: 768,
    height: 1024,
  },
  {
    src: images.chocolateChip,
    alt: { he: "עוגיות שוקולד צ'יפס מושחתות", en: "Indulgent chocolate chip cookies" },
    width: 823,
    height: 1024,
  },
  {
    src: images.donuts,
    alt: { he: "דונאטס מזוגגים", en: "Glazed donuts" },
    width: 818,
    height: 1024,
  },
  {
    src: images.rugelach,
    alt: { he: "רוגלך שוקולד טריים", en: "Fresh chocolate rugelach" },
    width: 758,
    height: 1024,
  },
] as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}

export function getProducts(locale: Locale): Product[] {
  return copy[locale].products.items.map((item) => ({
    ...item,
    badge: item.badge,
    ...productMedia[item.id],
  }));
}
