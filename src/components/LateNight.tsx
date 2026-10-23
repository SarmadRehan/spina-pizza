import { lateNight } from "@/data/spina";

export function LateNight() {
  return (
    <section id="late-night" aria-labelledby="late-night-title" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-pink">After hours</p>
          <h2 id="late-night-title" className="mt-3 font-serif text-6xl italic sm:text-7xl">
            Late Night
          </h2>
          <p className="mt-5 text-2xl font-bold">
            {lateNight.days}, <span className="text-pink">{lateNight.start}</span>
          </p>
          <p className="mt-3 text-lg text-smoke">{lateNight.note}</p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {lateNight.items.map((item, index) => (
            <li
              key={item}
              className={`rounded-2xl px-5 py-6 text-center font-serif text-2xl ${
                index === 0 ? "col-span-2 bg-pink text-ink sm:col-span-1" : "border border-white/15"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
