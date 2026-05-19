"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);

    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    setScrollProgress(progress);

    const sections = navLinks.map((l) => l.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= 120) {
        setActiveSection(sections[i]);
        return;
      }
    }
    setActiveSection("");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-teal-deep/95 backdrop-blur-md shadow-sm shadow-black/10"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-cyan transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#" className="group">
          <Image
            src="/cfs-icon.png"
            alt="Candlelight Financial Solutions"
            width={40}
            height={40}
            priority
            className="h-9 w-9 rounded-md transition-transform duration-300 group-hover:scale-105"
            style={{ width: "2.25rem", height: "2.25rem" }}
          />
        </a>

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-200 hover:text-cyan ${
                activeSection === link.href.slice(1)
                  ? "text-cyan"
                  : "text-white/70"
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-cyan/60" />
              )}
            </a>
          ))}
          <Link
            href="/intake"
            className="ml-4 inline-flex items-center rounded-lg border border-cyan/30 bg-cyan/10 px-5 py-2.5 text-sm font-semibold text-cyan transition-all duration-300 hover:bg-cyan hover:text-teal-deep hover:border-cyan"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isMobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isMobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isMobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-teal-deep/[0.98] backdrop-blur-xl transition-opacity duration-400 lg:hidden ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-heading text-2xl font-semibold text-white transition-all duration-300 hover:text-cyan"
              style={{
                transitionDelay: isMobileOpen ? `${i * 50}ms` : "0ms",
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/intake"
            onClick={() => setIsMobileOpen(false)}
            className="mt-4 inline-flex items-center rounded-lg bg-cyan px-8 py-3 text-base font-semibold text-teal-deep transition-all hover:bg-cyan-light"
            style={{
              transitionDelay: isMobileOpen
                ? `${navLinks.length * 50}ms`
                : "0ms",
              opacity: isMobileOpen ? 1 : 0,
              transform: isMobileOpen ? "translateY(0)" : "translateY(10px)",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
