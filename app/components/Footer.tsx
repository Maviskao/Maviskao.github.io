"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-12 border-t border-[#333]"
      style={{ backgroundColor: "#22262f" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-base tracking-tight hover:opacity-70 transition-opacity"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          <span className="text-white">M</span>
          <span className="text-[#828282]">avis Kao</span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          {["Work", "About me"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-[#828282] hover:text-white transition-colors"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p
          className="text-xs text-[#444]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Copyright 2026 by Mavis Kao
        </p>
      </div>
    </footer>
  );
}

