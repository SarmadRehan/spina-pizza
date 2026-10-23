import { phoneHref, spina, weekHours } from "@/data/spina";

import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-paper text-muted">
      <div aria-hidden="true" className="bg-checker h-5" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo className="w-24" />
          <p className="mt-4 max-w-xs font-serif text-lg text-ink italic">{spina.tagline}</p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-tomato">Visit</h2>
          <address className="mt-3 text-sm not-italic leading-relaxed">
            {spina.street}
            <br />
            {spina.city}, {spina.state} {spina.postalCode}
            <br />
            <a href={phoneHref(spina.phone)} className="font-bold text-ink hover:text-tomato">
              {spina.phone}
            </a>
            <br />
            <a href={spina.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              Instagram
            </a>
          </address>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-tomato">Hours</h2>
          <ul className="mt-3 space-y-0.5 text-sm">
            {[2, 3, 4, 5, 6, 0, 1].map((index) => (
              <li key={weekHours[index].day}>
                {weekHours[index].short}: {weekHours[index].hours ?? "Closed"}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-28 sm:px-6 md:pb-10">
        <p className="rounded-full bg-ink px-4 py-2.5 text-center text-sm font-semibold text-white">{spina.demoNotice}</p>
      </div>
    </footer>
  );
}
