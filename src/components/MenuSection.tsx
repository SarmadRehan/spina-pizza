import Image from "next/image";

import { menu, menuNote, type MenuSection as Section } from "@/data/spina";

import { SectionHeading } from "./SectionHeading";

export function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="border-t border-ink/10 bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="menu-title" eyebrow="Old World, wood-fired" title="The Menu" intro={menuNote} />

        <div className="mt-14 space-y-16 sm:space-y-20">
          {menu.map((section, index) => (
            <MenuBlock key={section.id} section={section} flip={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuBlock({ section, flip }: { section: Section; flip: boolean }) {
  const hasPhotos = section.photos.length > 0;
  return (
    <section
      aria-labelledby={`menu-${section.id}`}
      className={`grid gap-8 ${hasPhotos ? "lg:grid-cols-[1.1fr_1fr] lg:gap-12" : "mx-auto max-w-3xl"}`}
    >
      <div className={flip && hasPhotos ? "lg:order-2" : ""}>
        <h3 id={`menu-${section.id}`} className="flex items-center gap-4 font-serif text-4xl italic">
          {section.title}
          <span aria-hidden="true" className="h-px flex-1 bg-ink/15" />
        </h3>
        {section.note && <p className="mt-3 text-muted">{section.note}</p>}
        <ul className="mt-6 divide-y divide-ink/10">
          {section.dishes.map((dish) => (
            <li key={dish.name} className="py-4">
              <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-serif text-2xl">{dish.name}</span>
                {dish.tag && (
                  <span className="rounded-full bg-pink-soft px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-tomato-dark">
                    {dish.tag}
                  </span>
                )}
              </p>
              {dish.description && <p className="mt-1 leading-relaxed text-muted">{dish.description}</p>}
            </li>
          ))}
        </ul>
      </div>

      {hasPhotos && (
        <ul
          className={`grid content-start gap-4 ${section.photos.length > 1 ? "grid-cols-2" : ""} ${flip ? "lg:order-1" : ""}`}
        >
          {section.photos.map((photo, index) => (
            <li
              key={photo.caption}
              className={section.photos.length === 3 && index === 0 ? "col-span-2" : ""}
            >
              <figure>
                <div
                  className={`relative overflow-hidden rounded-3xl ${
                    section.photos.length === 3 && index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 30rem, 92vw"
                    className="object-cover"
                  />
                </div>
                {photo.caption && (
                  <figcaption className="mt-2 text-sm font-semibold text-muted">{photo.caption}</figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
