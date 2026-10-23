import Image from "next/image";

import { story, storyImage } from "@/data/spina";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          <Image src={storyImage.src} alt={storyImage.alt} fill sizes="(min-width: 1024px) 36rem, 92vw" className="object-cover" />
        </div>

        <div className="text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-tomato">Our story</p>
          <h2 id="story-title" className="mt-3 font-serif text-5xl text-balance sm:text-6xl">
            A Family of Pizza Makers
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {story.map((sentence) => (
              <p key={sentence}>{sentence}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
