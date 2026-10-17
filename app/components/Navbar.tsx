"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-black/[0.04]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
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
          <span className="font-extrabold text-sm md:text-base tracking-wider text-[#1a1a18] uppercase">
            HEY, I&apos;M MAVIS
          </span>
        </Link>

        {/* Right: Nav items */}
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            href="/projects"
            className={`text-sm font-medium transition-colors ${
              pathname === "/projects"
                ? "text-[#1a1a18] font-semibold"
                : "text-[#666663] hover:text-[#1a1a18]"
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${
              pathname === "/about"
                ? "text-[#1a1a18] font-semibold"
                : "text-[#666663] hover:text-[#1a1a18]"
            }`}
          >
            About me
          </Link>
          <Link
            href="#contact-me"
            className="px-4 py-1.5 rounded-full border border-[#d6d6d4] text-[#1a1a18] text-xs font-semibold hover:bg-black hover:text-white hover:border-black transition-all shadow-2xs"
          >
            Contact me
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
