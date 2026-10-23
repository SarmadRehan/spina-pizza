type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, intro, id, tone = "light" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`text-sm font-bold uppercase tracking-[0.25em] ${dark ? "text-pink" : "text-tomato"}`}>{eyebrow}</p>
      <h2 id={id} className="mt-3 font-serif text-5xl text-balance sm:text-6xl">
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-smoke" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}
