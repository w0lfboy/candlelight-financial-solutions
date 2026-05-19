import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import Image from "next/image";
import Link from "next/link";

/* ─── Service icons ─── */

function RetirementIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InvestmentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TaxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EstateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ComprehensiveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Arrow icon ─── */

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
    </svg>
  );
}

/* ─── Data ─── */

const services = [
  { title: "Retirement Planning", description: "Build a retirement strategy that reflects how you actually want to live — not just a number on a spreadsheet.", icon: <RetirementIcon /> },
  { title: "Investment Management", description: "Disciplined, diversified portfolio strategies aligned with your goals, timeline, and comfort with risk.", icon: <InvestmentIcon /> },
  { title: "Tax-Aware Planning", description: "Coordinate investment decisions and financial strategies to help minimize your tax burden over time.", icon: <TaxIcon /> },
  { title: "Estate Planning", description: "Coordinate your estate strategy so your wealth is protected and your wishes are carried out clearly.", icon: <EstateIcon /> },
  { title: "Business Strategies", description: "Whether you're growing, transitioning, or selling — align your business decisions with your personal financial goals.", icon: <BusinessIcon /> },
  { title: "Comprehensive Planning", description: "See your full financial picture — income, assets, goals, and risks — woven into one cohesive plan.", icon: <ComprehensiveIcon /> },
];

const clientProfiles = [
  { title: "Healthcare & Tech Professionals", description: "Navigating equity compensation, high-income tax planning, and building long-term wealth alongside demanding careers." },
  { title: "Business Owners", description: "Aligning business growth with personal wealth — from cash flow strategies to succession and exit planning." },
  { title: "Retirees & Pre-Retirees", description: "Transitioning into retirement with confidence through income strategies, Social Security optimization, and legacy planning." },
  { title: "Young Families", description: "Getting ahead early with college savings, insurance coverage, budgeting, and building a foundation for generational wealth." },
];

const processSteps = [
  { step: "01", title: "Introduction", description: "Schedule a relaxed conversation so we can learn about each other. No pressure, no commitment — just a genuine connection." },
  { step: "02", title: "Discovery", description: "We gather your statements, goals, concerns, and dreams to understand the full picture of where you are and where you want to be." },
  { step: "03", title: "Strategy", description: "We build a personalized financial plan with clear recommendations — and walk through every detail together until it feels right." },
  { step: "04", title: "Partnership", description: "Ongoing guidance, proactive adjustments, and regular check-ins. Life changes, and your plan evolves with you." },
];

const insightsPlaceholder = [
  { category: "Retirement", title: "When Should You Actually Start Planning for Retirement?", excerpt: "The best time to start was yesterday. The second best time is today. Here's what to focus on at every stage.", date: "Coming Soon" },
  { category: "Tax Planning", title: "5 Tax Strategies Most Families Overlook", excerpt: "Smart tax planning isn't about tricks — it's about intentional decisions that compound over decades.", date: "Coming Soon" },
  { category: "Life Transitions", title: "Navigating Financial Decisions During Major Life Changes", excerpt: "Marriage, new baby, career change, inheritance — how to make confident financial moves when everything feels uncertain.", date: "Coming Soon" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#insights" },
  { label: "Calculator", href: "/calculator" },
  { label: "Contact", href: "#contact" },
];

const faqs = [
  { q: "What is a fiduciary financial advisor?", a: "A fiduciary is legally obligated to act in your best interest — not sell you products. As an independent RIA, Candlelight Financial Solutions operates under the fiduciary standard at all times, with no broker-dealer affiliations influencing our recommendations." },
  { q: "Do I need a minimum amount of assets to work with you?", a: "We work with clients at various stages of their financial journey. Whether you're just starting to build wealth or managing a complex portfolio, we'd love to have a conversation to see if we're a good fit for each other." },
  { q: "Where will my assets be held?", a: "Client assets are primarily custodied with Charles Schwab & Co., Inc. — one of the largest and most trusted custodians in the industry. Schwab is an independent company and is not affiliated with Candlelight Financial Solutions." },
  { q: "What does the first meeting look like?", a: "The first conversation is relaxed and low-pressure. We'll learn about each other, talk through your goals and concerns, and see if there's a mutual fit. There's no cost or commitment — just a genuine conversation about where you are and where you want to be." },
];

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-teal-deep">
        {/* Subtle glow */}
        <div
          className="absolute top-[35%] left-1/2 h-[600px] w-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(78,197,212,0.12) 0%, rgba(78,197,212,0.03) 40%, transparent 70%)",
            animation: "hero-glow 8s ease-in-out infinite",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center lg:px-8 lg:pt-40">
          <h1 className="animate-fade-up font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Bringing Your Full
            <br />
            <span className="text-cyan">Financial Picture</span>
            <br />
            to Light
          </h1>

          <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Independent, fiduciary financial planning built on one idea:
            your plan should be as personal as your life.
          </p>

          <div className="animate-fade-up delay-400 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/intake"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan px-8 py-3.5 text-base font-semibold text-teal-deep transition-all duration-300 hover:bg-cyan-light hover:gap-3"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#about"
              className="inline-flex items-center rounded-lg border border-white/15 px-8 py-3.5 text-base font-medium text-white/80 transition-all duration-300 hover:border-cyan/40 hover:text-cyan"
            >
              Learn More
            </a>
          </div>

          <div className="animate-fade-in delay-700 mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan/60" />
              Independent RIA
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan/60" />
              Fiduciary Standard
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan/60" />
              Schwab Custodied
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <ScrollReveal animation="slide-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-muted">
                Our Approach
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                Independent advice.
                <br className="hidden sm:block" />
                Your best interest. Always.
              </h2>
              <div className="mt-4 h-0.5 w-12 bg-cyan" />
              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                As an independent Registered Investment Advisor, we&apos;re free
                from broker-dealer affiliations. That means our advice starts and
                ends with what&apos;s right for you — not a product shelf or a
                sales quota.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We believe financial planning should provide clarity and
                confidence, guiding you through every stage of life with a
                strategy that evolves alongside you.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={200}>
              <div className="relative">
                <div className="rounded-xl bg-teal-deep p-10 lg:p-12">
                  <Image src="/cfs-icon.png" alt="" width={32} height={32} className="h-8 w-8 rounded mb-6" style={{ width: "2rem", height: "2rem" }} aria-hidden="true" />
                  <blockquote className="font-heading text-xl font-medium leading-snug text-white lg:text-2xl">
                    &ldquo;We want clients to feel comfortable, understood, and
                    supported — not like just another account number.&rdquo;
                  </blockquote>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-sm text-slate-400">
                      Candlelight Financial Solutions
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-muted">
              What We Do
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              Comprehensive planning,
              <br className="hidden sm:block" />
              personally delivered
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
              Every service is woven into a single, cohesive strategy — because
              your finances don&apos;t exist in silos.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 70} className="h-full">
                <div className="card-lift group h-full flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-7 lg:p-8 hover:border-cyan/30 hover:bg-white">
                  <div className="mb-5 inline-flex items-center justify-center rounded-lg bg-cyan-pale p-3 text-teal transition-colors duration-300 group-hover:bg-cyan/15 group-hover:text-cyan-muted">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.938rem] leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE SERVE ─── */}
      <section className="relative bg-teal-deep py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(78,197,212,0.15) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
              Who We Serve
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Built for people building
              <br className="hidden sm:block" />
              <span className="text-cyan">long-term wealth</span>
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {clientProfiles.map((profile, i) => (
              <ScrollReveal key={profile.title} delay={i * 80} className="h-full">
                <div className="group h-full flex flex-col rounded-xl border border-white/8 bg-teal-dark/60 p-7 lg:p-8 backdrop-blur-sm transition-all duration-400 hover:border-cyan/20 hover:bg-teal-dark/80">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {profile.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.938rem] leading-relaxed text-slate-400">
                    {profile.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-muted">
              How It Works
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              From first conversation
              <br className="hidden sm:block" /> to lasting partnership
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="relative lg:text-center">
                  {i < processSteps.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+24px)] hidden h-px w-[calc(100%-48px)] bg-slate-200 lg:block" />
                  )}
                  <span className="font-heading text-5xl font-bold text-cyan/20">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.938rem] leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST SIGNALS ─── */}
      <section className="bg-white py-16 lg:py-20 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-8 sm:grid-cols-3 text-center">
              <div>
                <p className="font-heading text-4xl font-bold text-teal-deep lg:text-5xl">
                  <CountUp target={100} suffix="%" />
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-500 uppercase tracking-[0.15em]">
                  Fiduciary — Always
                </p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold text-teal-deep lg:text-5xl">
                  Independent
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-500 uppercase tracking-[0.15em]">
                  No Broker-Dealer Ties
                </p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold text-teal-deep lg:text-5xl">
                  Schwab
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-500 uppercase tracking-[0.15em]">
                  Custodian of Choice
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── INSIGHTS ─── */}
      <section id="insights" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-muted">
                  Insights
                </p>
                <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Learn with us
                </h2>
              </div>
              <a href="#" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-muted transition-colors hover:text-cyan">
                View all articles
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insightsPlaceholder.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 80} className="h-full">
                <article className="card-lift group h-full flex flex-col rounded-xl border border-slate-200 bg-white p-7 lg:p-8 hover:border-cyan/30">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-muted">
                    {post.category}
                  </p>
                  <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-teal">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                    {post.excerpt}
                  </p>
                  <p className="mt-5 text-xs font-semibold tracking-wider text-slate-300 uppercase">
                    {post.date}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-muted">
              Common Questions
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              What to know before we meet
            </h2>
          </ScrollReveal>

          <div className="mt-12 divide-y divide-slate-200">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer items-center justify-between text-left font-heading text-base font-semibold text-slate-900 lg:text-lg">
                    {faq.q}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className="ml-4 h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-45"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <p className="mt-3 pr-12 text-[0.938rem] leading-relaxed text-slate-500">
                    {faq.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA ─── */}
      <section id="contact" className="relative bg-teal-deep py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(78,197,212,0.08) 0%, transparent 60%)",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <Image src="/cfs-icon.png" alt="" width={32} height={32} className="mx-auto mb-6 h-8 w-8 rounded opacity-60" style={{ width: "2rem", height: "2rem" }} aria-hidden="true" />
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
              The first step is simple — reach out. No pressure, no obligation.
              Let&apos;s see if we&apos;re the right fit.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mx-auto mt-12 max-w-2xl space-y-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-center sm:gap-5">
                <Link
                  href="/intake"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan px-8 py-4 text-base font-semibold text-teal-deep shadow-sm transition-all duration-300 hover:bg-cyan-light hover:shadow-md sm:max-w-xs"
                >
                  Start client intake
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-cyan/40 hover:bg-white/10 hover:text-cyan sm:max-w-xs"
                >
                  Try retirement calculator
                </Link>
              </div>
              <p className="text-center text-sm leading-relaxed text-slate-400">
                The intake takes a few minutes and helps us prepare for a
                focused first conversation. Prefer email only?{" "}
                <a
                  href="mailto:info@candlelightfs.com"
                  className="font-medium text-cyan underline-offset-2 hover:text-cyan-light hover:underline"
                >
                  info@candlelightfs.com
                </a>
              </p>
              <p className="text-center text-xs text-slate-500/80">
                We&apos;ll respond within one business day. Your information is
                kept private and secure.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-teal-deep border-t border-white/6">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/cfs-icon.png"
                  alt="CFS"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-md"
                  style={{ width: "2.25rem", height: "2.25rem" }}
                />
                <span className="font-heading text-lg font-semibold text-white tracking-wide">
                  Candlelight Financial Solutions
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                Independent, fiduciary financial planning and wealth management.
                Guiding families and professionals toward clarity, confidence,
                and financial well-being.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-cyan"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-cyan"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Get in Touch
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>
                  <a href="mailto:info@candlelightfs.com" className="transition-colors hover:text-cyan">
                    info@candlelightfs.com
                  </a>
                </li>
                <li>
                  <Link href="/intake" className="transition-colors hover:text-cyan">
                    Schedule a consultation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Compliance */}
          <div className="mt-14 border-t border-white/6 pt-8">
            <div className="space-y-3 text-xs leading-relaxed text-slate-400/50">
              <p>
                Candlelight Financial Solutions is a Registered Investment
                Advisor (RIA). Registration does not imply a certain level of
                skill or training. All investment advisory services are offered
                solely by Candlelight Financial Solutions. The firm is not
                affiliated with any broker-dealer.
              </p>
              <p>
                Client assets are primarily custodied with Charles Schwab &amp;
                Co., Inc. Charles Schwab &amp; Co., Inc. is an independent
                company not affiliated with Candlelight Financial Solutions.
              </p>
              <p>
                All investing involves risk, including the potential loss of
                principal. No investment strategy can guarantee a profit or
                protect against loss. Past performance is not indicative of
                future results. The information on this website is for
                educational purposes and is not intended as personalized
                investment advice.
              </p>
              <p>
                For more information about Candlelight Financial Solutions,
                including fees and services, please review our Form ADV Part 2A,
                which is available upon request.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-400/35">
                &copy; {new Date().getFullYear()} Candlelight Financial
                Solutions. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs text-slate-400/35">
                <a href="#" className="transition-colors hover:text-slate-400">Privacy Policy</a>
                <a href="#" className="transition-colors hover:text-slate-400">Disclosures</a>
                <a href="#" className="transition-colors hover:text-slate-400">Form ADV</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
