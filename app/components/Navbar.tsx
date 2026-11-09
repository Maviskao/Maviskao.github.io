"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-4 right-4 top-4 z-50 rounded-full border border-black/[0.06] bg-[#fbfaf7]/90 shadow-[0_8px_30px_rgba(32,27,24,0.08)] backdrop-blur-xl md:left-12 md:right-12"
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        {/* Left: Logo Icon + "HEY, I'M MAVIS" */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition-opacity hover:opacity-80"
        >
          <div className="w-7 h-7 relative shrink-0">
            <Image
              src="/images/icons/favicon-light.png"
              alt="Mavis Kao Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1a1a18] md:text-base">
            MAVIS KAO
          </span>
        </Link>

        {/* Right: Nav items */}
          <nav className="hidden items-center gap-4 md:flex md:gap-8">
          <Link
            href="/projects"
              className={`text-xs font-medium transition-colors md:text-sm ${
              pathname === "/projects"
                ? "text-[#1a1a18] font-semibold"
                : "text-[#666663] hover:text-[#1a1a18]"
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
              className={`hidden text-xs font-medium transition-colors sm:block md:text-sm ${
              pathname === "/about"
                ? "text-[#1a1a18] font-semibold"
                : "text-[#666663] hover:text-[#1a1a18]"
            }`}
          >
            About me
          </Link>
          <Link
            href="#contact-me"
            className="rounded-full bg-[#f5cb4e] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#151515] transition-transform hover:-translate-y-0.5"
          >
            Contact me
          </Link>
        </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#d8d8d2] bg-[#fbfaf7] text-[#151515] md:hidden"
          >
            <span className={`block h-px w-4 bg-current transition-transform ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-4 bg-current transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>

          {menuOpen && (
            <nav className="absolute left-0 right-0 top-[calc(100%+12px)] rounded-[24px] border border-black/[0.06] bg-[#fbfaf7] p-3 shadow-[0_18px_40px_rgba(32,27,24,0.12)] md:hidden">
              <Link
                href="/projects"
                onClick={() => setMenuOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium ${pathname === "/projects" ? "bg-[#f5cb4e] text-[#151515]" : "text-[#656560]"}`}
              >
                Work
              </Link>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className={`mt-1 block rounded-2xl px-4 py-3 text-sm font-medium ${pathname === "/about" ? "bg-[#f5cb4e] text-[#151515]" : "text-[#656560]"}`}
              >
                About me
              </Link>
              <a
                href="#contact-me"
                onClick={() => setMenuOpen(false)}
                className="mt-1 block rounded-2xl bg-[#151515] px-4 py-3 text-sm font-bold text-white"
              >
                Contact me
              </a>
            </nav>
          )}
      </div>
    </motion.header>
  );
}
