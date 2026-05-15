import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://candlelightfs.com"),
  title: {
    default:
      "Candlelight Financial Solutions | Independent Financial Planning & Wealth Management",
    template: "%s | Candlelight Financial Solutions",
  },
  description:
    "Candlelight Financial Solutions is an independent, fiduciary Registered Investment Advisor (RIA) offering personalized financial planning, retirement strategies, investment management, tax-aware planning, and estate coordination for families and professionals.",
  keywords: [
    "financial advisor",
    "financial planning",
    "wealth management",
    "retirement planning",
    "investment management",
    "independent RIA",
    "registered investment advisor",
    "fiduciary financial advisor",
    "estate planning",
    "tax planning",
    "business planning",
    "Charles Schwab custodian",
    "personalized financial planning",
    "healthcare professional financial advisor",
    "business owner financial planning",
  ],
  authors: [{ name: "Candlelight Financial Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://candlelightfs.com",
    siteName: "Candlelight Financial Solutions",
    title:
      "Candlelight Financial Solutions | Bringing Your Full Financial Picture to Light",
    description:
      "Independent, fiduciary financial planning and wealth management. Retirement, investment, tax, and estate planning tailored to your life.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Candlelight Financial Solutions — Bringing Your Full Financial Picture to Light",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Candlelight Financial Solutions",
    description:
      "Independent, fiduciary financial planning and wealth management for families and professionals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://candlelightfs.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Candlelight Financial Solutions",
    description:
      "Independent Registered Investment Advisor providing comprehensive financial planning, wealth management, retirement planning, and investment advisory services.",
    url: "https://candlelightfs.com",
    email: "info@candlelightfs.com",
    areaServed: "United States",
    priceRange: "$$",
    serviceType: [
      "Financial Planning",
      "Wealth Management",
      "Retirement Planning",
      "Investment Management",
      "Estate Planning Coordination",
      "Tax-Aware Planning",
      "Business Planning Strategies",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Financial Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Comprehensive Financial Planning",
            description:
              "Personalized financial plans that coordinate income, assets, goals, and risk into a single cohesive strategy.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Investment Management",
            description:
              "Disciplined, diversified portfolio strategies aligned with your goals, timeline, and risk tolerance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Retirement Planning",
            description:
              "Retirement strategies designed around how you actually want to live, including income planning and Social Security optimization.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a fiduciary financial advisor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A fiduciary financial advisor is legally obligated to act in your best interest. At Candlelight Financial Solutions, we operate as an independent Registered Investment Advisor (RIA), meaning we provide advice free from broker-dealer affiliations and always put your needs first.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Candlelight Financial Solutions provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide comprehensive financial planning and wealth management services including retirement planning, investment management, tax-aware planning, estate planning coordination, and business planning strategies.",
        },
      },
      {
        "@type": "Question",
        name: "Where are client assets held?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Client assets are primarily custodied with Charles Schwab & Co., Inc., an independent company not affiliated with Candlelight Financial Solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Who does Candlelight Financial Solutions work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with healthcare and tech professionals, business owners, retirees and pre-retirees, and young families who value long-term relationships and collaborative financial planning.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
