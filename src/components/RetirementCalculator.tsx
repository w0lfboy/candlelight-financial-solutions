"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function parseMoney(s: string): number {
  const n = Number(String(s).replace(/[^0-9.-]/g, ""));
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

function futureValueRetirement({
  currentSavings,
  monthlyContribution,
  employerMatch,
  months,
  annualReturnPct,
}: {
  currentSavings: number;
  monthlyContribution: number;
  employerMatch: number;
  months: number;
  annualReturnPct: number;
}): number {
  if (months <= 0) return currentSavings;
  const pmt = monthlyContribution + employerMatch;
  const r = annualReturnPct / 100 / 12;
  if (Math.abs(r) < 1e-12) {
    return currentSavings + pmt * months;
  }
  return (
    currentSavings * Math.pow(1 + r, months) +
    pmt * ((Math.pow(1 + r, months) - 1) / r)
  );
}

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retireAge, setRetireAge] = useState(65);
  const [savingsInput, setSavingsInput] = useState("85,000");
  const [monthlyInput, setMonthlyInput] = useState("800");
  const [employerInput, setEmployerInput] = useState("200");
  const [includeMatch, setIncludeMatch] = useState(true);
  const [annualReturn, setAnnualReturn] = useState(6.5);

  const currentSavings = parseMoney(savingsInput);
  const monthlyContribution = parseMoney(monthlyInput);
  const employerMatch = includeMatch ? parseMoney(employerInput) : 0;
  const years = Math.max(0, retireAge - currentAge);
  const months = years * 12;

  const result = useMemo(() => {
    const balance = futureValueRetirement({
      currentSavings,
      monthlyContribution,
      employerMatch,
      months,
      annualReturnPct: annualReturn,
    });
    const newContributions = (monthlyContribution + employerMatch) * months;
    const fourPctAnnual = balance * 0.04;
    const fourPctMonthly = fourPctAnnual / 12;
    return { balance, newContributions, fourPctMonthly, fourPctAnnual };
  }, [
    currentSavings,
    monthlyContribution,
    employerMatch,
    months,
    annualReturn,
  ]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-7">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="age" className="text-sm font-medium text-slate-700">
                  Your age
                </label>
                <span className="font-heading text-2xl font-semibold text-teal-deep tabular-nums">
                  {currentAge}
                </span>
              </div>
              <input
                id="age"
                type="range"
                min={22}
                max={67}
                value={currentAge}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setCurrentAge(v);
                  if (retireAge <= v) setRetireAge(v + 1);
                }}
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-cyan"
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="retire" className="text-sm font-medium text-slate-700">
                  Target retirement age
                </label>
                <span className="font-heading text-2xl font-semibold text-teal-deep tabular-nums">
                  {retireAge}
                </span>
              </div>
              <input
                id="retire"
                type="range"
                min={currentAge + 1}
                max={75}
                value={retireAge}
                onChange={(e) => setRetireAge(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-cyan"
              />
              <p className="mt-1.5 text-xs text-slate-500">
                {years} years to grow ({months.toLocaleString()} months)
              </p>
            </div>

            <div>
              <label htmlFor="savings" className="text-sm font-medium text-slate-700">
                Current retirement savings
              </label>
              <input
                id="savings"
                type="text"
                inputMode="decimal"
                value={savingsInput}
                onChange={(e) => setSavingsInput(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-medium text-slate-900 outline-none transition focus:border-cyan/50 focus:bg-white focus:ring-2 focus:ring-cyan/15"
              />
            </div>

            <div>
              <label htmlFor="monthly" className="text-sm font-medium text-slate-700">
                Your monthly contribution
              </label>
              <input
                id="monthly"
                type="text"
                inputMode="decimal"
                value={monthlyInput}
                onChange={(e) => setMonthlyInput(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-medium text-slate-900 outline-none transition focus:border-cyan/50 focus:bg-white focus:ring-2 focus:ring-cyan/15"
              />
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={includeMatch}
                  onChange={(e) => setIncludeMatch(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-cyan focus:ring-cyan/30"
                />
                <span className="text-sm font-medium text-slate-700">
                  Include employer match (monthly)
                </span>
              </label>
              {includeMatch && (
                <input
                  type="text"
                  inputMode="decimal"
                  value={employerInput}
                  onChange={(e) => setEmployerInput(e.target.value)}
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan/50 focus:ring-2 focus:ring-cyan/15"
                  aria-label="Employer match monthly amount"
                />
              )}
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="return" className="text-sm font-medium text-slate-700">
                  Expected annual return
                </label>
                <span className="font-heading text-xl font-semibold text-cyan-muted tabular-nums">
                  {annualReturn.toFixed(1)}%
                </span>
              </div>
              <input
                id="return"
                type="range"
                min={2}
                max={12}
                step={0.5}
                value={annualReturn}
                onChange={(e) => setAnnualReturn(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-cyan"
              />
              <p className="mt-1.5 text-xs text-slate-500">
                Illustrative only — actual returns vary over time.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-teal-deep to-teal-dark p-6 text-white shadow-lg sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan/90">
              At retirement (age {retireAge})
            </p>
            <p className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-[2.75rem]">
              {currency.format(result.balance)}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              hypothetical ending balance
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-slate-400">New contributions</span>
                <span className="font-medium tabular-nums text-white">
                  {currency.format(result.newContributions)}
                </span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-slate-400">
                  Illustrative income @ 4% / year
                </span>
                <span className="font-medium tabular-nums text-cyan">
                  ~{currency.format(result.fourPctMonthly)}/mo
                </span>
              </div>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-slate-500">
              The “4% rule” is a rough, academic shorthand — not a recommendation.
              It ignores taxes, inflation, fees, and timing of returns.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm leading-relaxed text-amber-950/90">
        <strong className="font-semibold">Important:</strong> This calculator is for{" "}
        <strong>education only</strong> and is not personalized investment advice.
        Results are hypothetical and may be materially different from your real
        outcome. Speak with a fiduciary advisor before making decisions.
      </div>

      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-heading text-lg font-semibold text-slate-900">
            Want a plan built around your real numbers?
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Share your situation through our intake — we will follow up shortly.
          </p>
        </div>
        <Link
          href="/intake"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-teal-deep transition hover:bg-cyan-light"
        >
          Start client intake
        </Link>
      </div>
    </div>
  );
}
