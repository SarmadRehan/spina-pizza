"use client";

import { useEffect, useState } from "react";

import { phoneHref, spina, weekHours } from "@/data/spina";

import { SectionHeading } from "./SectionHeading";

const shortWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekdayInAtlanta = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: spina.timeZone });

// Shown Tuesday first, the order their Instagram bio lists the week in.
const displayOrder = [2, 3, 4, 5, 6, 0, 1];

export function HoursVisit() {
  // Unknown on the static render; set after mount, from Atlanta's date rather than the visitor's.
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(shortWeekdays.indexOf(weekdayInAtlanta.format(new Date())));
  }, []);

  return (
    <section id="hours" aria-labelledby="hours-title" className="border-t border-ink/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="hours-title"
          eyebrow="Hours & visit"
          title="We Open at 4pm"
          intro="Dinner starts at 4pm, Tuesday through Sunday. Closed Mondays."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl bg-ink p-6 text-white sm:p-9">
            <h3 className="font-serif text-3xl italic">Hours</h3>
            <dl className="mt-5 divide-y divide-white/15">
              {displayOrder.map((index) => {
                const entry = weekHours[index];
                const isToday = index === today;
                return (
                  <div
                    key={entry.day}
                    className={`-mx-3 flex items-center justify-between gap-4 rounded-xl px-3 py-3.5 ${isToday ? "bg-pink text-ink" : ""}`}
                  >
                    <dt className="text-lg font-bold">
                      {entry.day}
                      {isToday && <span className="ml-2 text-xs font-bold uppercase tracking-wider">Today</span>}
                    </dt>
                    <dd className={`text-lg ${entry.hours ? "" : isToday ? "" : "text-smoke"}`}>
                      {entry.hours ?? "Closed"}
                    </dd>
                  </div>
                );
              })}
            </dl>
            <p className="mt-5 text-sm text-smoke">Late night slices Thursday to Saturday from 10pm, takeout only.</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-paper">
            <div className="p-6 sm:p-8">
              <h3 className="font-serif text-3xl">{spina.name}</h3>
              <address className="mt-3 text-lg not-italic leading-relaxed">
                {spina.street}
                <br />
                {spina.city}, {spina.state} {spina.postalCode}
              </address>
              <p className="mt-2 text-muted">{spina.locationNote}.</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm font-bold">
                <li className="rounded-full bg-pink-soft px-3 py-1">Dine-in</li>
                <li className="rounded-full bg-pink-soft px-3 py-1">Takeout</li>
                <li className="rounded-full bg-pink-soft px-3 py-1">Call-in pickup orders</li>
              </ul>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={phoneHref(spina.phone)}
                  className="rounded-full bg-ink px-5 py-3 text-center font-bold text-white transition-colors hover:bg-tomato-dark"
                >
                  Call {spina.phone}
                </a>
                <a
                  href={spina.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-ink px-5 py-2.5 text-center font-bold transition-colors hover:bg-ink hover:text-white"
                >
                  Directions
                </a>
              </div>
            </div>
            <iframe
              title={`Map of ${spina.name} at ${spina.street}, ${spina.city}`}
              src={spina.mapEmbedUrl}
              className="h-72 w-full border-0 border-t border-ink/10"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
