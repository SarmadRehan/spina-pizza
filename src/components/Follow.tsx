import { spina } from "@/data/spina";

export function Follow() {
  return (
    <section id="follow" aria-labelledby="follow-title" className="border-t border-ink/10 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-tomato">Follow along</p>
        <h2 id="follow-title" className="mt-3 font-serif text-5xl sm:text-6xl">
          See What&apos;s in the Oven
        </h2>
        <a
          href={spina.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-tomato-dark"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          {spina.instagramHandle} on Instagram
        </a>
      </div>
    </section>
  );
}
