"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const STEPS = [
  { id: 1, label: "About You" },
  { id: 2, label: "Financial Situation" },
  { id: 3, label: "Your Goals" },
  { id: 4, label: "Preferences" },
] as const;

const AGE_RANGES = ["Under 30", "30–40", "40–50", "50–60", "60+"];
const MARITAL_OPTIONS = ["Single", "Married", "Divorced", "Widowed"];
const INCOME_RANGES = [
  "Under $100K",
  "$100K – $250K",
  "$250K – $500K",
  "$500K+",
];
const ASSET_RANGES = [
  "Under $100K",
  "$100K – $500K",
  "$500K – $1M",
  "$1M – $5M",
  "$5M+",
];
const SERVICE_OPTIONS = [
  "Retirement Planning",
  "Investment Management",
  "Tax-Aware Planning",
  "Estate Planning",
  "Business Financial Strategies",
  "Comprehensive Financial Plan",
  "Second Opinion on Current Plan",
  "Other",
];
const MEETING_PREFS = ["In Person", "Virtual", "No Preference"];
const TIME_PREFS = ["Morning", "Afternoon", "Evening", "Weekends"];
const REFERRAL_SOURCES = [
  "Referral",
  "Google Search",
  "Social Media",
  "Other",
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ageRange: string;
  maritalStatus: string;
  hasDependents: string;
  dependentsCount: string;
  income: string;
  assets: string;
  hasAdvisor: string;
  hasRetirementPlan: string;
  servicesNeeded: string[];
  lifeEvent: string;
  biggestConcern: string;
  meetingPreference: string;
  timePreference: string[];
  referralSource: string;
  additionalNotes: string;
};

const initial: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  ageRange: "",
  maritalStatus: "",
  hasDependents: "",
  dependentsCount: "",
  income: "",
  assets: "",
  hasAdvisor: "",
  hasRetirementPlan: "",
  servicesNeeded: [],
  lifeEvent: "",
  biggestConcern: "",
  meetingPreference: "",
  timePreference: [],
  referralSource: "",
  additionalNotes: "",
};

function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M9.78 12.78a.75.75 0 01-1.06 0L4.47 8.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 111.06 1.06L6.06 8l3.72 3.72a.75.75 0 010 1.06z" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

/* ─── Shared input styles ─── */
const inputBase =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-cyan/50 focus:ring-2 focus:ring-cyan/15";
const selectBase =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 focus:border-cyan/50 focus:ring-2 focus:ring-cyan/15 appearance-none cursor-pointer";
const labelBase = "block text-sm font-medium text-slate-700 mb-1.5";
const radioGroupBase = "flex flex-wrap gap-3";

function RadioPill({
  name,
  value,
  label,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <label
      className={`inline-flex cursor-pointer items-center rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
        checked
          ? "border-cyan bg-cyan/10 text-cyan-muted"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      {label}
    </label>
  );
}

function CheckboxPill({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label
      className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
        checked
          ? "border-cyan bg-cyan/10 text-cyan-muted"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      {checked && <CheckIcon className="h-4 w-4 text-cyan" />}
      {label}
    </label>
  );
}

export default function IntakePage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleArray = (key: "servicesNeeded" | "timePreference", value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const canAdvance = (): boolean => {
    switch (step) {
      case 1:
        return !!(form.firstName && form.lastName && form.email && form.ageRange);
      case 2:
        return !!(form.income && form.assets);
      case 3:
        return form.servicesNeeded.length > 0;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (step !== 4 || submitting) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly at info@candlelightfs.com.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-slate-50 pt-28 pb-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <div className="rounded-2xl bg-white p-12 shadow-sm border border-slate-100">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan/10">
                <CheckIcon className="h-8 w-8 text-cyan" />
              </div>
              <h1 className="font-heading text-3xl font-bold text-slate-900">
                Thank you, {form.firstName}!
              </h1>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                We&apos;ve received your information and will be in touch within
                one business day to schedule your introductory meeting.
              </p>
              <div className="mt-8 rounded-xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  What happens next?
                </p>
                <ol className="mt-4 space-y-3 text-left text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 font-heading text-lg font-bold text-cyan/40">01</span>
                    <span>We review your responses to understand your situation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 font-heading text-lg font-bold text-cyan/40">02</span>
                    <span>We reach out to schedule a time that works for you</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 font-heading text-lg font-bold text-cyan/40">03</span>
                    <span>We meet for a relaxed, no-pressure introductory conversation</span>
                  </li>
                </ol>
              </div>
              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-teal-deep transition-all duration-300 hover:bg-cyan-light"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-muted">
              New Client Intake
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Let&apos;s get to know you
            </h1>
            <p className="mt-3 text-lg text-slate-500">
              Help us prepare for our first conversation by sharing a bit about
              your situation and goals.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              {STEPS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => s.id < step && setStep(s.id)}
                  disabled={s.id > step}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    s.id === step
                      ? "text-cyan-muted"
                      : s.id < step
                      ? "text-cyan cursor-pointer hover:text-cyan-muted"
                      : "text-slate-300"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                      s.id < step
                        ? "bg-cyan text-white"
                        : s.id === step
                        ? "bg-cyan/15 text-cyan-muted border border-cyan/30"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {s.id < step ? <CheckIcon className="h-3.5 w-3.5" /> : s.id}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
              ))}
            </div>
            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-cyan transition-all duration-500 ease-out"
                style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Form card */}
          <div>
            <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-sm border border-slate-100">
              {/* Step 1: About You */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-up">
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-slate-900">
                      About You
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Basic information so we know who we&apos;re speaking with.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className={labelBase}>
                        First name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => set("firstName", e.target.value)}
                        placeholder="First name"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelBase}>
                        Last name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => set("lastName", e.target.value)}
                        placeholder="Last name"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelBase}>
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="you@example.com"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelBase}>
                        Phone <span className="text-slate-400">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="(555) 555-5555"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelBase}>
                      Age range <span className="text-red-400">*</span>
                    </label>
                    <div className={radioGroupBase}>
                      {AGE_RANGES.map((v) => (
                        <RadioPill
                          key={v}
                          name="ageRange"
                          value={v}
                          label={v}
                          checked={form.ageRange === v}
                          onChange={(val) => set("ageRange", val)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelBase}>Marital status</label>
                    <div className={radioGroupBase}>
                      {MARITAL_OPTIONS.map((v) => (
                        <RadioPill
                          key={v}
                          name="maritalStatus"
                          value={v}
                          label={v}
                          checked={form.maritalStatus === v}
                          onChange={(val) => set("maritalStatus", val)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelBase}>Do you have dependents?</label>
                      <div className={radioGroupBase}>
                        {["Yes", "No"].map((v) => (
                          <RadioPill
                            key={v}
                            name="hasDependents"
                            value={v}
                            label={v}
                            checked={form.hasDependents === v}
                            onChange={(val) => set("hasDependents", val)}
                          />
                        ))}
                      </div>
                    </div>
                    {form.hasDependents === "Yes" && (
                      <div>
                        <label htmlFor="dependentsCount" className={labelBase}>
                          How many?
                        </label>
                        <input
                          id="dependentsCount"
                          type="number"
                          min="1"
                          max="20"
                          value={form.dependentsCount}
                          onChange={(e) => set("dependentsCount", e.target.value)}
                          placeholder="Number of dependents"
                          className={inputBase}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Financial Situation */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-up">
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-slate-900">
                      Your Financial Situation
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      A high-level picture helps us prepare the right
                      conversation for you. All information is confidential.
                    </p>
                  </div>

                  <div>
                    <label className={labelBase}>
                      Estimated annual household income{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <div className={radioGroupBase}>
                      {INCOME_RANGES.map((v) => (
                        <RadioPill
                          key={v}
                          name="income"
                          value={v}
                          label={v}
                          checked={form.income === v}
                          onChange={(val) => set("income", val)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelBase}>
                      Estimated investable assets{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <div className={radioGroupBase}>
                      {ASSET_RANGES.map((v) => (
                        <RadioPill
                          key={v}
                          name="assets"
                          value={v}
                          label={v}
                          checked={form.assets === v}
                          onChange={(val) => set("assets", val)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelBase}>
                      Do you currently work with a financial advisor?
                    </label>
                    <div className={radioGroupBase}>
                      {["Yes", "No"].map((v) => (
                        <RadioPill
                          key={v}
                          name="hasAdvisor"
                          value={v}
                          label={v}
                          checked={form.hasAdvisor === v}
                          onChange={(val) => set("hasAdvisor", val)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelBase}>
                      Do you have an employer-sponsored retirement plan (401k,
                      403b, etc.)?
                    </label>
                    <div className={radioGroupBase}>
                      {["Yes", "No", "Unsure"].map((v) => (
                        <RadioPill
                          key={v}
                          name="hasRetirementPlan"
                          value={v}
                          label={v}
                          checked={form.hasRetirementPlan === v}
                          onChange={(val) => set("hasRetirementPlan", val)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: What Brings You Here */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-up">
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-slate-900">
                      What Brings You Here
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Understanding your goals helps us prepare meaningful
                      recommendations from day one.
                    </p>
                  </div>

                  <div>
                    <label className={labelBase}>
                      What are you primarily looking for?{" "}
                      <span className="text-red-400">*</span>{" "}
                      <span className="text-slate-400 font-normal">
                        (select all that apply)
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {SERVICE_OPTIONS.map((v) => (
                        <CheckboxPill
                          key={v}
                          label={v}
                          checked={form.servicesNeeded.includes(v)}
                          onChange={() => toggleArray("servicesNeeded", v)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lifeEvent" className={labelBase}>
                      Is there a specific life event driving this?
                    </label>
                    <input
                      id="lifeEvent"
                      type="text"
                      value={form.lifeEvent}
                      onChange={(e) => set("lifeEvent", e.target.value)}
                      placeholder="e.g., new job, inheritance, selling a business, upcoming retirement"
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label htmlFor="biggestConcern" className={labelBase}>
                      What&apos;s your biggest financial concern right now?
                    </label>
                    <textarea
                      id="biggestConcern"
                      rows={3}
                      value={form.biggestConcern}
                      onChange={(e) => set("biggestConcern", e.target.value)}
                      placeholder="Tell us what's on your mind..."
                      className={`${inputBase} resize-none`}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Preferences */}
              {step === 4 && (
                <div className="space-y-6 animate-fade-up">
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-slate-900">
                      Meeting Preferences
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Let us know how and when you&apos;d like to connect.
                    </p>
                  </div>

                  <div>
                    <label className={labelBase}>
                      How do you prefer to meet?
                    </label>
                    <div className={radioGroupBase}>
                      {MEETING_PREFS.map((v) => (
                        <RadioPill
                          key={v}
                          name="meetingPreference"
                          value={v}
                          label={v}
                          checked={form.meetingPreference === v}
                          onChange={(val) => set("meetingPreference", val)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelBase}>
                      Preferred meeting times{" "}
                      <span className="text-slate-400 font-normal">
                        (select all that apply)
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {TIME_PREFS.map((v) => (
                        <CheckboxPill
                          key={v}
                          label={v}
                          checked={form.timePreference.includes(v)}
                          onChange={() => toggleArray("timePreference", v)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelBase}>
                      How did you hear about us?
                    </label>
                    <div className={radioGroupBase}>
                      {REFERRAL_SOURCES.map((v) => (
                        <RadioPill
                          key={v}
                          name="referralSource"
                          value={v}
                          label={v}
                          checked={form.referralSource === v}
                          onChange={(val) => set("referralSource", val)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalNotes" className={labelBase}>
                      Anything else you&apos;d like us to know before we meet?
                    </label>
                    <textarea
                      id="additionalNotes"
                      rows={4}
                      value={form.additionalNotes}
                      onChange={(e) => set("additionalNotes", e.target.value)}
                      placeholder="Feel free to share anything else..."
                      className={`${inputBase} resize-none`}
                    />
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="mt-6 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                ) : (
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-slate-600"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Home
                  </Link>
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => canAdvance() && setStep(step + 1)}
                    disabled={!canAdvance()}
                    className="group inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-teal-deep transition-all duration-300 hover:bg-cyan-light hover:gap-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:gap-2 disabled:hover:bg-cyan"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="group inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-teal-deep transition-all duration-300 hover:bg-cyan-light disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <CheckIcon className="h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-slate-400">
              Your information is confidential and will only be used to prepare
              for your meeting.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-teal-deep/95 backdrop-blur-md shadow-sm shadow-black/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group">
          <Image
            src="/cfs-icon.png"
            alt="Candlelight Financial Solutions"
            width={40}
            height={40}
            priority
            className="h-9 w-9 rounded-md transition-transform duration-300 group-hover:scale-105"
            style={{ width: "2.25rem", height: "2.25rem" }}
          />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-cyan"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </nav>
    </header>
  );
}
