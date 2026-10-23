import { DemoBanner } from "@/components/DemoBanner";
import { Drinks } from "@/components/Drinks";
import { Follow } from "@/components/Follow";
import { Hero } from "@/components/Hero";
import { HoursVisit } from "@/components/HoursVisit";
import { LateNight } from "@/components/LateNight";
import { MenuSection } from "@/components/MenuSection";
import { MobileActionBar } from "@/components/MobileActionBar";
import { OrderDialogProvider } from "@/components/OrderDialog";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <OrderDialogProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <DemoBanner />
      <SiteHeader />
      <main id="main">
        <Hero />
        <MenuSection />
        <HoursVisit />
        <LateNight />
        <Story />
        <Drinks />
        <Follow />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </OrderDialogProvider>
  );
}
