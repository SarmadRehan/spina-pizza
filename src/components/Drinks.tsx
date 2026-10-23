import Image from "next/image";

import { drinks, drinksImage } from "@/data/spina";

export function Drinks() {
  return (
    <section id="drinks" aria-labelledby="drinks-title" className="bg-basil py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div className="text-center lg:order-2 lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-pink-soft">+ Vino</p>
          <h2 id="drinks-title" className="mt-3 font-serif text-5xl italic sm:text-6xl">
            Wine &amp; Cocktails
          </h2>
          <ul className="mt-8 space-y-6 text-left">
            {drinks.map((drink) => (
              <li key={drink.title} className="border-l-4 border-pink pl-5">
                <h3 className="font-serif text-3xl">{drink.title}</h3>
                <p className="mt-1 text-lg leading-relaxed text-pink-soft">{drink.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:order-1">
          <Image src={drinksImage.src} alt={drinksImage.alt} fill sizes="(min-width: 1024px) 32rem, 92vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
