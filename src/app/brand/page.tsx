import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Guide",
  robots: { index: false, follow: false },
};

const colors = {
  primary: [
    { name: "Teal Deep", hex: "#091f2c", text: "white" },
    { name: "Teal Dark", hex: "#0c2d3d", text: "white" },
    { name: "Teal Mid", hex: "#133d50", text: "white" },
    { name: "Teal", hex: "#1a5c73", text: "white" },
    { name: "Cyan", hex: "#4ec5d4", text: "#091f2c" },
    { name: "Cyan Light", hex: "#6fd6e3", text: "#091f2c" },
  ],
  neutral: [
    { name: "Slate 50", hex: "#f7f9fa", text: "#142129" },
    { name: "Slate 100", hex: "#eef2f4", text: "#142129" },
    { name: "Slate 200", hex: "#dce3e6", text: "#142129" },
    { name: "Slate 400", hex: "#8a9da6", text: "white" },
    { name: "Slate 500", hex: "#647983", text: "white" },
    { name: "Slate 900", hex: "#142129", text: "white" },
  ],
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-16 lg:py-20 ${className}`}>{children}</section>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-muted mb-3">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
      {children}
    </h2>
  );
}

function ColorSwatch({ name, hex, text }: { name: string; hex: string; text: string }) {
  return (
    <div className="flex flex-col">
      <div
        className="h-20 rounded-lg border border-slate-200"
        style={{ backgroundColor: hex }}
      />
      <p className="mt-2 text-sm font-semibold text-slate-900">{name}</p>
      <p className="text-xs font-mono text-slate-500">{hex}</p>
    </div>
  );
}

export default function BrandGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-teal-deep py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan mb-4">
            Brand Identity System
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Candlelight Financial
            <br />
            Solutions
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto">
            Brand guidelines, color palette, typography, and logo usage for
            consistent visual identity across all touchpoints.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ─── Logo System ─── */}
        <Section>
          <SectionLabel>01 — Logo System</SectionLabel>
          <SectionTitle>Primary Logos</SectionTitle>
          <p className="mt-3 text-slate-500 max-w-2xl">
            The CFS logo consists of the monogram with integrated candle flame,
            paired with the full company name. Use the appropriate version based
            on background color.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Dark bg — transparent logo */}
            <div className="rounded-xl bg-teal-deep p-10 flex items-center justify-center min-h-[200px]">
              <Image src="/logo-dark.png" alt="CFS Logo on dark background" width={400} height={100} style={{ width: "auto", height: "auto", maxWidth: "320px" }} />
            </div>
            {/* Light bg — transparent logo */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-10 flex items-center justify-center min-h-[200px]">
              <Image src="/logo-light.png" alt="CFS Logo on light background" width={400} height={100} style={{ width: "auto", height: "auto", maxWidth: "320px" }} />
            </div>
          </div>

          <h3 className="mt-12 font-heading text-xl font-semibold text-slate-900">
            Secondary Formats
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {/* Stacked */}
            <div className="rounded-xl bg-teal-deep p-8 flex items-center justify-center min-h-[180px]">
              <Image src="/logo-stacked.png" alt="CFS Stacked" width={300} height={200} style={{ width: "auto", height: "auto", maxHeight: "140px" }} />
            </div>
            {/* Icon */}
            <div className="rounded-xl bg-teal-deep p-8 flex items-center justify-center min-h-[180px]">
              <Image src="/logo-icon.png" alt="CFS Icon" width={200} height={200} style={{ width: "auto", height: "auto", maxHeight: "140px" }} />
            </div>
            {/* One-color */}
            <div className="rounded-xl bg-teal-deep p-8 flex items-center justify-center min-h-[180px]">
              <Image src="/logo-onecolor.png" alt="CFS One-color white" width={300} height={100} style={{ width: "auto", height: "auto", maxWidth: "220px" }} />
            </div>
          </div>
          <div className="mt-4 grid gap-6 sm:grid-cols-3 text-center">
            <p className="text-sm text-slate-500">Stacked Layout</p>
            <p className="text-sm text-slate-500">Icon / Favicon</p>
            <p className="text-sm text-slate-500">One-Color White</p>
          </div>
        </Section>

        <hr className="border-slate-100" />

        {/* ─── Color Palette ─── */}
        <Section>
          <SectionLabel>02 — Color Palette</SectionLabel>
          <SectionTitle>Brand Colors</SectionTitle>
          <p className="mt-3 text-slate-500 max-w-2xl">
            The primary palette is anchored by deep teal and cyan. Cyan is the
            signature accent — used for CTAs, highlights, and interactive
            elements. Dark teal provides authority and depth.
          </p>

          <h3 className="mt-10 font-heading text-lg font-semibold text-slate-900">
            Primary
          </h3>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {colors.primary.map((c) => (
              <ColorSwatch key={c.hex} {...c} />
            ))}
          </div>

          <h3 className="mt-10 font-heading text-lg font-semibold text-slate-900">
            Neutrals
          </h3>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {colors.neutral.map((c) => (
              <ColorSwatch key={c.hex} {...c} />
            ))}
          </div>

          {/* Usage example */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-teal-deep p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">Dark Section</p>
              <p className="font-heading text-2xl font-bold text-white">Heading text in white</p>
              <p className="mt-2 text-sm text-slate-400">Body text uses Slate 400 for comfortable contrast on dark backgrounds.</p>
              <button className="mt-4 rounded-lg bg-cyan px-5 py-2.5 text-sm font-semibold text-teal-deep">Primary CTA</button>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-muted mb-3">Light Section</p>
              <p className="font-heading text-2xl font-bold text-slate-900">Heading text in Slate 900</p>
              <p className="mt-2 text-sm text-slate-500">Body text uses Slate 500 on light backgrounds for readability.</p>
              <button className="mt-4 rounded-lg bg-cyan px-5 py-2.5 text-sm font-semibold text-teal-deep">Primary CTA</button>
            </div>
          </div>
        </Section>

        <hr className="border-slate-100" />

        {/* ─── Typography ─── */}
        <Section>
          <SectionLabel>03 — Typography</SectionLabel>
          <SectionTitle>Type System</SectionTitle>
          <p className="mt-3 text-slate-500 max-w-2xl">
            Two typefaces form the typographic foundation: Sora for headings and
            UI elements, Manrope for body text and descriptions.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Sora */}
            <div className="rounded-xl border border-slate-200 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-muted mb-4">
                Headings
              </p>
              <p className="font-heading text-5xl font-bold text-slate-900 leading-tight">
                Sora
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Google Fonts &middot; Weights: 600, 700
              </p>
              <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                <p className="font-heading text-3xl font-bold text-slate-900">The quick brown fox</p>
                <p className="font-heading text-xl font-semibold text-slate-900">The quick brown fox jumps over the lazy dog</p>
                <p className="font-heading text-base font-semibold text-slate-900">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="font-heading text-base font-semibold text-slate-500">abcdefghijklmnopqrstuvwxyz 0123456789</p>
              </div>
            </div>
            {/* Manrope */}
            <div className="rounded-xl border border-slate-200 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-muted mb-4">
                Body
              </p>
              <p className="text-5xl font-bold text-slate-900 leading-tight">
                Manrope
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Google Fonts &middot; Weights: 400, 500, 600
              </p>
              <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                <p className="text-lg text-slate-900">The quick brown fox jumps over the lazy dog.</p>
                <p className="text-base text-slate-500">Independent, fiduciary financial planning built on one idea: your plan should be as personal as your life.</p>
                <p className="text-base font-semibold text-slate-900">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-base text-slate-500">abcdefghijklmnopqrstuvwxyz 0123456789</p>
              </div>
            </div>
          </div>

          {/* Type scale */}
          <h3 className="mt-12 font-heading text-lg font-semibold text-slate-900">
            Type Scale
          </h3>
          <div className="mt-6 space-y-6">
            <div className="flex items-baseline gap-6 border-b border-slate-100 pb-4">
              <span className="text-xs font-mono text-slate-400 w-16 shrink-0">H1</span>
              <span className="font-heading text-4xl font-bold text-slate-900 lg:text-5xl">Bringing Your Full Financial Picture to Light</span>
            </div>
            <div className="flex items-baseline gap-6 border-b border-slate-100 pb-4">
              <span className="text-xs font-mono text-slate-400 w-16 shrink-0">H2</span>
              <span className="font-heading text-2xl font-bold text-slate-900 lg:text-3xl">Comprehensive planning, personally delivered</span>
            </div>
            <div className="flex items-baseline gap-6 border-b border-slate-100 pb-4">
              <span className="text-xs font-mono text-slate-400 w-16 shrink-0">H3</span>
              <span className="font-heading text-lg font-semibold text-slate-900">Retirement Planning</span>
            </div>
            <div className="flex items-baseline gap-6 border-b border-slate-100 pb-4">
              <span className="text-xs font-mono text-slate-400 w-16 shrink-0">Body</span>
              <span className="text-[0.938rem] text-slate-500 leading-relaxed">Build a retirement strategy that reflects how you actually want to live — not just a number on a spreadsheet.</span>
            </div>
            <div className="flex items-baseline gap-6">
              <span className="text-xs font-mono text-slate-400 w-16 shrink-0">Label</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-muted">Section Label</span>
            </div>
          </div>
        </Section>

        <hr className="border-slate-100" />

        {/* ─── UI Components ─── */}
        <Section>
          <SectionLabel>04 — UI Components</SectionLabel>
          <SectionTitle>Buttons & Cards</SectionTitle>

          <div className="mt-10 space-y-8">
            {/* Buttons */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-slate-900 mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-teal-deep">
                  Primary Action
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4"><path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" /></svg>
                </button>
                <button className="inline-flex items-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700">
                  Secondary Action
                </button>
                <button className="inline-flex items-center rounded-lg border border-cyan/30 bg-cyan/10 px-6 py-3 text-sm font-semibold text-cyan-muted">
                  Ghost / Nav CTA
                </button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-slate-900 mb-4">Service Card</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-7">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-cyan-pale p-3 text-teal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-slate-900">Service Title</h4>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">Description text in Slate 500 with relaxed line height for readability.</p>
                </div>
                <div className="rounded-xl border border-cyan/30 bg-white p-7 -translate-y-1 shadow-sm">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-cyan/15 p-3 text-cyan-muted">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-slate-900">Hover State</h4>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">Cards lift on hover with cyan border accent and white background.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-7">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-cyan-pale p-3 text-teal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-slate-900">Default State</h4>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">Default cards use Slate 50 background with Slate 200 border.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <hr className="border-slate-100" />

        {/* ─── Brand Voice ─── */}
        <Section>
          <SectionLabel>05 — Brand Voice</SectionLabel>
          <SectionTitle>Tone & Language</SectionTitle>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-8">
              <p className="font-heading text-lg font-semibold text-teal mb-4">Do</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-cyan shrink-0">&#10003;</span> Professional but approachable</li>
                <li className="flex gap-2"><span className="text-cyan shrink-0">&#10003;</span> Direct and clear — short sentences</li>
                <li className="flex gap-2"><span className="text-cyan shrink-0">&#10003;</span> &ldquo;Get Started&rdquo; / &ldquo;Schedule a Conversation&rdquo;</li>
                <li className="flex gap-2"><span className="text-cyan shrink-0">&#10003;</span> &ldquo;Your plan should be as personal as your life&rdquo;</li>
                <li className="flex gap-2"><span className="text-cyan shrink-0">&#10003;</span> Relationship language: &ldquo;partnership&rdquo;, &ldquo;conversation&rdquo;</li>
              </ul>
            </div>
            <div className="rounded-xl bg-slate-50 p-8">
              <p className="font-heading text-lg font-semibold text-red-500 mb-4">Don&apos;t</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-red-400 shrink-0">&#10007;</span> Overly corporate or stiff</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">&#10007;</span> Salesy or aggressive — no &ldquo;ACT NOW&rdquo;</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">&#10007;</span> Financial jargon without explanation</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">&#10007;</span> Guarantees or unrealistic promises</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">&#10007;</span> Cold transactional language: &ldquo;client acquisition&rdquo;</li>
              </ul>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="bg-teal-deep py-12 mt-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400">
            Candlelight Financial Solutions &middot; Brand Identity System &middot; {new Date().getFullYear()}
          </p>
          <p className="mt-2 text-xs text-slate-400/50">
            Confidential — for internal and partner use only
          </p>
        </div>
      </footer>
    </div>
  );
}
