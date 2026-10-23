import Image from "next/image";

import { heroImage, spina } from "@/data/spina";

import { Logo } from "./Logo";
import { OrderButton } from "./OrderDialog";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-14 sm:px-6 sm:pt-14 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-20">
        <div className="text-center lg:text-left">
          <Logo className="mx-auto w-28 sm:w-36 lg:mx-0" priority />
          <h1 id="hero-title" className="mt-6 font-serif text-6xl leading-none sm:text-7xl">
            {spina.name}
          </h1>
          <p className="mt-4 font-serif text-2xl text-muted italic sm:text-3xl">{spina.tagline}</p>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed lg:mx-0">
            Wood-fired pies, Old World pasta and natural wine in Reynoldstown. Dine in, or call in for pickup.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <OrderButton className="w-full rounded-full bg-ink px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-tomato-dark sm:w-auto">
              Order for pickup
            </OrderButton>
            <a
              href="#menu"
              className="w-full rounded-full border-2 border-ink px-8 py-3.5 text-center text-lg font-bold transition-colors hover:bg-ink hover:text-white sm:w-auto"
            >
              See the menu
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div aria-hidden="true" className="absolute -inset-2 -rotate-2 rounded-[2.5rem] bg-pink sm:-inset-4 sm:-rotate-3" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
