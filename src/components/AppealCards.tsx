import Link from "next/link";
import { programAppeals, siteConfig } from "@/lib/site";

export function AppealCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {programAppeals.map((appeal) => (
        <article
          key={appeal.title}
          className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <div
            className={`h-36 bg-gradient-to-br ${appeal.gradient}`}
            aria-hidden="true"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold">{appeal.title}</h3>
            <p className="mt-3 text-sm text-text-muted">{appeal.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={siteConfig.paypalDonate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-bold text-bg-dark transition-colors hover:bg-accent-dark"
              >
                Donate Now
              </a>
              <Link
                href={appeal.href}
                className="inline-flex items-center justify-center rounded-md border border-brand px-4 py-2 text-sm font-bold text-brand transition-colors hover:bg-brand-light"
              >
                Learn More
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
