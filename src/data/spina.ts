import type { StaticImageData } from "next/image";

import beefRagu from "@/assets/images/beef-ragu.jpg";
import branzino from "@/assets/images/branzino.jpg";
import capo from "@/assets/images/capo.jpg";
import cocktails from "@/assets/images/cocktails.jpg";
import diavola from "@/assets/images/diavola.jpg";
import figCarpaccio from "@/assets/images/fig-carpaccio.jpg";
import hotBoy from "@/assets/images/hot-boy.jpg";
import oven from "@/assets/images/oven.jpg";
import pepperoniRicotta from "@/assets/images/pepperoni-ricotta.jpg";

// Facts come from the verified table in the demo brief (checked 2026-10-24) unless a comment
// names another source; "IG" means Spina's own Instagram posts, with the post date.
export const spina = {
  name: "Spina Pizza",
  // IG bio.
  tagline: "Old World pizza + vino at the Atlanta Dairies",
  description:
    "Wood-fired Old World pies, pasta, small plates and natural wine at the Atlanta Dairies in Reynoldstown. Dine in, or call in for pickup.",
  demoNotice: "Demo by Sarmad Rehan · not the official Spina Pizza website",
  // Google Maps and IG bio: call-in orders for pickup.
  phone: "(404) 824-7594",
  street: "777 Memorial Dr SE, Suite B102",
  city: "Atlanta",
  state: "GA",
  postalCode: "30316",
  // IG bio, Google Maps, The Infatuation.
  locationNote: "At the Atlanta Dairies in Reynoldstown, next to Small Fry",
  instagramUrl: "https://www.instagram.com/spinapizza/",
  instagramHandle: "@spinapizza",
  // Their IG bio's bit.ly link, resolved to the store page without its tracking parameters.
  uberEatsUrl: "https://www.ubereats.com/store/spina-pizza/EmiOpAz0U4-K4937hA1-9Q",
  // Address rather than the business name, so the embed doesn't show Google's star-rating card.
  mapEmbedUrl: "https://www.google.com/maps?q=777+Memorial+Dr+SE,+Atlanta,+GA+30316&output=embed",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Spina+Pizza+777+Memorial+Dr+SE+Atlanta+GA+30316",
  timeZone: "America/New_York",
} as const;

export function phoneHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export type DayHours = { day: string; short: string; hours: string | null };

// The owner's own hours from the IG bio. Google Maps says Fri–Sat until 1am; the brief says to
// use the IG hours. Index 0 is Sunday, like Date#getDay.
export const weekHours: DayHours[] = [
  { day: "Sunday", short: "Sun", hours: "4pm – 10pm" },
  { day: "Monday", short: "Mon", hours: null },
  { day: "Tuesday", short: "Tue", hours: "4pm – 10pm" },
  { day: "Wednesday", short: "Wed", hours: "4pm – 10pm" },
  { day: "Thursday", short: "Thu", hours: "4pm – 10pm" },
  { day: "Friday", short: "Fri", hours: "4pm – 12am" },
  { day: "Saturday", short: "Sat", hours: "4pm – 12am" },
];

// IG, Oct 9, 2026 ("Late Night Menu"): Thu–Sat from 10pm, take out only. The post gives no end
// time ("til the wheels fall off"), so the page doesn't either.
export const lateNight = {
  days: "Thursday – Saturday",
  start: "from 10pm",
  note: "Take out only. Whole pies clock out, slices clock in.",
  items: ["Big slices", "Garlic knots", "Salads", "Strong drinks", "Rotating soft serve"],
};

export type Photo = { src: StaticImageData; alt: string; caption?: string };

// Photos only from Spina's own Instagram posts.
export const heroImage: Photo = {
  src: pepperoniRicotta,
  alt: "A wood-fired pepperoni pizza with piped ricotta, basil and shaved Parmigiano on a wooden table",
};

export const storyImage: Photo = {
  src: oven,
  alt: "Spina's wood-fired oven, its black mosaic dome tiled with the pink SPINA logo, with a fire burning inside",
};

export const drinksImage: Photo = {
  src: cocktails,
  alt: "Three cocktails on a pale wood table: a dark red spritz with basil, a pale gold spritz and a red drink on ice with lemon",
};

export type Dish = { name: string; description?: string; tag?: string };

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  dishes: Dish[];
  photos: Photo[];
};

export const menu: MenuSection[] = [
  {
    id: "pies",
    title: "Pies",
    // Brief: wood-fired 12-inch pies. IG, Sep 3, 2026: 30-month Parmigiano on everything.
    note: "Wood-fired, 12 inches, finished with a generous snowfall of 30-month Parmigiano Reggiano.",
    dishes: [
      // IG, Oct 17, 2026: "Proofed Dough. Fresh Mozz."
      { name: "Margherita", description: "Proofed dough and fresh mozz. The classic." },
      { name: "Funghi", description: "The mushroom pie." },
      // Brief: the "Hot Boy" pepperoni with hot honey.
      { name: "Hot Boy", description: "Pepperoni and hot honey." },
      { name: "Pepperoni & Ricotta", description: "Pepperoni, piped ricotta, basil and Parmigiano." },
      // IG, Sep 3, 2026.
      {
        name: "Diavola",
        description: "Slathered in Calabrian pesto, piled high with shallots and sausage. Calabrian ranch on the side if you need it.",
      },
      // IG, Sep 16, 2026.
      {
        name: "The Capo",
        description:
          "Prosciutto di Parma, gorgonzola, hand-sliced pear, shallots, roasted garlic crème fraîche, vincotto and 30-month Parmigiano Reggiano. Their most labor-intensive pie.",
      },
    ],
    photos: [
      { src: hotBoy, alt: "Close-up of the Hot Boy: cupped pepperoni, fresh mozzarella, basil and shaved Parmigiano", caption: "Hot Boy" },
      { src: capo, alt: "Close-up of the Capo: prosciutto, pesto and shaved Parmigiano with a vincotto drizzle", caption: "The Capo" },
      { src: diavola, alt: "A Diavola with sausage and Calabrian pesto in a pink Spina box, with basil and a cup of Calabrian ranch", caption: "Diavola" },
    ],
  },
  {
    id: "pasta",
    title: "Pasta & Big Plates",
    dishes: [
      // Brief: rigatoni with heavy marinara.
      { name: "Rigatoni", description: "Old World pasta in a heavy marinara." },
      // IG, Sep 25, 2026.
      {
        name: "Lasagna for 2",
        description:
          "Two days in the making: Sunday gravy, beef and pork Bolognese, fresh mozz, 30-month Reggiano and a dab of pesto, with house focaccia for scarpetta.",
      },
      {
        name: "Branzino Divorciado",
        description: "Butterflied and wood-fired crispy. Half asparagus-basil pesto, half Calabrian fig jam and berbere pesto.",
      },
      // IG, Oct 7, 2026: a nightly special, so it's tagged as one.
      {
        name: "Braised Beef Ragù",
        description: "Braised with red wine, cherry tomato and Sicilian oregano, over creamy polenta with Pecorino Romano.",
        tag: "Recent special",
      },
    ],
    photos: [
      { src: branzino, alt: "Butterflied branzino on a floral plate, half covered in green pesto and half in a dark red fig jam", caption: "Branzino Divorciado" },
      { src: beefRagu, alt: "Braised beef ragù over creamy polenta with basil, in afternoon sun with focaccia and red wine", caption: "Braised beef ragù" },
    ],
  },
  {
    id: "small",
    title: "Small Plates",
    dishes: [
      // IG, Sep 3, 2026.
      { name: "Stuffed Long Hot Peppers", description: "Sausage and provolone stuffed, in a bed of Sunday gravy, with focaccia." },
      { name: "Caesar Salad" },
      // IG, Sep 5, 2026: Black Mission figs at the end of summer.
      {
        name: "Fig Carpaccio",
        description: "Black Mission figs with stracciatella, good olive oil, Meyer lemon and Maldon salt.",
        tag: "Seasonal",
      },
    ],
    photos: [
      { src: figCarpaccio, alt: "A sunny table with fig carpaccio and stracciatella, garlic bread in pink checkered paper and an aperitivo", caption: "Fig carpaccio" },
    ],
  },
  {
    id: "sweet",
    title: "Sweet",
    dishes: [
      { name: "Tiramisu", description: "House-made." },
      // IG, Oct 9, 2026.
      { name: "Soft Serve", description: "A rotating cast of flavors, on the late-night menu." },
    ],
    photos: [],
  },
];

export const menuNote = "The menu rotates, so ask about tonight's specials.";

// Brief: aperitivo cocktails and natural wine. IG, Aug 21, 2026: an Italian wine program that's
// "lean, thoughtful". IG, Oct 7, 2026: Lambrusco and young Nebbiolo as pairings.
export const drinks = [
  { title: "Aperitivo cocktails", text: "Aperitivo-style cocktails to start the night, or to keep it going." },
  { title: "Natural wine", text: "A lean, thoughtful Italian list. Ask about a Lambrusco or a young Nebbiolo with your pie." },
];

// Atlanta Magazine (2026-08-26), IG posts, The Infatuation.
export const story = [
  "Chef and owner Anthony Spina Jr. comes from a family of pizza makers: his father started O4W Pizza.",
  "After about five years of delays and a run of pop-ups, Spina finally opened at the Atlanta Dairies on August 27, 2026.",
];
