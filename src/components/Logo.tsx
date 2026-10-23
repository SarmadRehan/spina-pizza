import Image from "next/image";

import logo from "@/assets/images/logo.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/** Spina's own logo from their Instagram, with the white background made transparent. */
export function Logo({ className = "", priority = false }: LogoProps) {
  return <Image src={logo} alt="Spina Pizza" className={`h-auto ${className}`} sizes="14rem" priority={priority} />;
}
