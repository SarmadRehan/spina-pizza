import { phoneHref, spina } from "@/data/spina";

import { OrderButton } from "./OrderDialog";

/** Thumb-reachable call, order and directions buttons, shown on small screens only. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_1.35fr_1.15fr] gap-2 border-t border-ink/10 bg-cream/95 p-3 text-sm backdrop-blur min-[360px]:text-base md:hidden">
      <a href={phoneHref(spina.phone)} className="rounded-full border-2 border-ink py-2.5 text-center font-bold">
        Call
      </a>
      <OrderButton className="rounded-full bg-ink py-3 text-center font-bold text-white">Order pickup</OrderButton>
      <a
        href={spina.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 border-ink py-2.5 text-center font-bold"
      >
        Directions
      </a>
    </div>
  );
}
