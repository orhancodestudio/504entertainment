"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const links = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#sanatcilar", label: "Sanatçılar" },
  { href: "#klipler", label: "Klipler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#iletisim", label: "İletişim" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/55 border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between transition-[height] duration-500 ease-out ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <a
          href="#top"
          className="flex items-center group"
          aria-label="504 Entertainment"
        >
          <span
            className={`font-display font-black uppercase tracking-[0.18em] leading-none whitespace-nowrap transition-[font-size] duration-500 ease-out ${
              scrolled ? "text-[1.05rem]" : "text-[1.35rem]"
            }`}
          >
            504<span className="text-brand-bright"> ENTERTAINMENT</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button
          href="#iletisim"
          size="sm"
          className="hidden lg:inline-flex"
        >
          Bize Ulaşın
        </Button>

        <button
          aria-label="Menüyü aç/kapat"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground/80 hover:text-white hover:border-brand-bright/60 transition"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-96 border-b border-border" : "max-h-0"
        }`}
      >
        <nav className="px-5 pb-5 pt-1 flex flex-col gap-1 bg-black/85 backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-foreground/85 hover:text-white hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            href="#iletisim"
            size="sm"
            onClick={() => setOpen(false)}
            className="mt-2"
          >
            Bize Ulaşın
          </Button>
        </nav>
      </div>
    </header>
  );
}
