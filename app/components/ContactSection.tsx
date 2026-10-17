"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact-me" className="bg-[#24252a] text-white pt-24 pb-16 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight text-white leading-tight">
            Let&apos;s Create Something Together
          </h2>
          <p className="mt-4 text-[#9e9ea2] text-sm md:text-base leading-relaxed">
            Whether you&apos;re looking for a designer to join your team or a
            creative partner for your next project, I&apos;d love to connect and
            explore how we can bring ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="mailto:lattechi@gmail.com"
              className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold tracking-wider transition-all"
            >
              Let&apos;s Talk
            </a>
            <a
              href="https://www.linkedin.com/in/maviskao"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold tracking-wider transition-all"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Divider & Bottom Navigation */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-white font-bold text-sm tracking-wide">
              Mavis Kao
            </span>
            <Link
              href="/projects"
              className="text-[#9e9ea2] hover:text-white text-xs font-medium transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-[#9e9ea2] hover:text-white text-xs font-medium transition-colors"
            >
              About me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/maviskao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a
              href="mailto:lattechi@gmail.com"
              aria-label="Email"
              className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-[#6b6b70]">
            Copyright 2026 by Mavis Kao
          </p>
        </div>
      </div>
    </section>
  );
}
