"use client";

import { createContext, useCallback, useContext, useRef } from "react";

import { phoneHref, spina } from "@/data/spina";

import { Logo } from "./Logo";

const OrderDialogContext = createContext<(() => void) | null>(null);

/** Renders the single "pickup ordering coming soon" panel shared by every order button. */
export function OrderDialogProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = useCallback(() => dialogRef.current?.showModal(), []);
  const close = () => dialogRef.current?.close();

  return (
    <OrderDialogContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="order-dialog-title"
        aria-describedby="order-dialog-description"
        className="m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-3xl bg-cream p-0 text-ink shadow-2xl backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          // Clicks on the backdrop land on the <dialog> itself, not its content.
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="bg-checker h-4" />
        <div className="p-7 text-center sm:p-8">
          <Logo className="mx-auto w-24" />
          <p className="mt-5 inline-block rounded-full bg-pink px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-ink">
            Coming soon
          </p>
          <h2 id="order-dialog-title" className="mt-3 font-serif text-4xl">
            Order for Pickup
          </h2>
          <p id="order-dialog-description" className="mt-3 leading-relaxed text-muted">
            Ordering on this site isn&apos;t live yet. For now, call {spina.phone} or order on Uber Eats.
          </p>
          <div className="mt-6 grid gap-3">
            <a
              href={phoneHref(spina.phone)}
              className="rounded-full bg-ink px-6 py-3.5 text-lg font-bold text-white transition-colors hover:bg-tomato-dark"
            >
              Call {spina.phone}
            </a>
            <a
              href={spina.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-ink px-6 py-3 font-bold transition-colors hover:bg-ink hover:text-white"
            >
              Order on Uber Eats
            </a>
          </div>
          <button
            type="button"
            autoFocus
            onClick={close}
            className="mt-5 text-sm font-bold text-muted underline underline-offset-4 hover:text-ink"
          >
            Close
          </button>
        </div>
      </dialog>
    </OrderDialogContext.Provider>
  );
}

type OrderButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function OrderButton({ className, children }: OrderButtonProps) {
  const openDialog = useContext(OrderDialogContext);
  if (!openDialog) throw new Error("OrderButton must be rendered inside OrderDialogProvider");

  return (
    <button type="button" aria-haspopup="dialog" className={className} onClick={openDialog}>
      {children}
    </button>
  );
}
