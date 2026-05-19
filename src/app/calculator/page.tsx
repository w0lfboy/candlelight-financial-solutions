import type { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import RetirementCalculator from "@/components/RetirementCalculator";

export const metadata: Metadata = {
  title: "Retirement savings calculator",
  description:
    "Educational retirement savings projection calculator. Illustrative only — not personalized investment advice. Candlelight Financial Solutions.",
  alternates: {
    canonical: "https://candlelightfs.com/calculator",
  },
};

export default function CalculatorPage() {
  return (
    <>
      <SubpageHeader />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:max-w-6xl lg:px-8">
          <header className="mx-auto max-w-2xl text-center lg:max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-muted">
              Tools
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Retirement savings calculator
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              See how steady saving and compounding might affect a simplified
              projection. Adjust the sliders to explore different scenarios.
            </p>
          </header>

          <div className="mx-auto mt-12 max-w-5xl">
            <RetirementCalculator />
          </div>
        </div>
      </main>
    </>
  );
}
