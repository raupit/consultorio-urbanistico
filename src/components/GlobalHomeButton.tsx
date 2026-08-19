"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";

export default function GlobalHomeButton() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      aria-label="Volver a Consultorio Urbanístico"
      className="fixed bottom-5 left-5 z-[100] inline-flex items-center gap-2 rounded-full bg-[#1f1f1f] px-5 py-3 text-sm font-bold text-white shadow-xl"
    >
      <Home className="h-4 w-4" />
      Inicio
    </Link>
  );
}
