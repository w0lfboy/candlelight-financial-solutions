import Image from "next/image";
import Link from "next/link";

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M9.78 12.78a.75.75 0 01-1.06 0L4.47 8.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 111.06 1.06L6.06 8l3.72 3.72a.75.75 0 010 1.06z" />
    </svg>
  );
}

export default function SubpageHeader({ backHref = "/" }: { backHref?: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-teal-deep/95 backdrop-blur-md shadow-sm shadow-black/10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Subpage navigation"
      >
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
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-cyan"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </nav>
    </header>
  );
}
