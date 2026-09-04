import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function TopBar() {
  return (
    <div className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 text-white/90 transition-colors hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
              />
            </svg>
            {siteConfig.phone} (USA)
          </a>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 transition-colors hover:text-white"
          >
            Facebook
          </a>
        </div>
        <Link
          href="/programs"
          className="font-medium text-accent transition-colors hover:text-accent-light"
        >
          I Am Who? Program
        </Link>
      </div>
    </div>
  );
}
