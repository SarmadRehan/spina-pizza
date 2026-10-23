import { spina } from "@/data/spina";

export function DemoBanner() {
  return <p className="bg-ink px-4 py-2 text-center text-sm font-semibold text-white">{spina.demoNotice}</p>;
}
