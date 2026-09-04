import Link from "next/link";
import { QuickDonate } from "@/components/QuickDonate";
import { siteConfig } from "@/lib/site";

type HeroProps = {
  title: string;
  lead: string;
  showDonate?: boolean;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function Hero({
  title,
  lead,
  showDonate = true,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="bg-bg-warm py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`grid gap-10 ${showDonate ? "lg:grid-cols-2 lg:items-start" : ""}`}
        >
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand">
              501(c)(3) Nonprofit · Founded {siteConfig.founded}
            </p>
            <h1>{title}</h1>
            <p className="mt-5 text-lg text-text-muted">{lead}</p>
            <blockquote className="mt-6 border-l-4 border-accent pl-5 text-base italic text-text">
              &ldquo;{siteConfig.quote}&rdquo;
            </blockquote>
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 font-bold text-white transition-colors hover:bg-brand-dark"
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-md border-2 border-brand px-6 py-3 font-bold text-brand transition-colors hover:bg-brand-light"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>
          {showDonate && <QuickDonate />}
        </div>
      </div>
    </section>
  );
}

export function PageHeader({
  title,
  lead,
  breadcrumbs,
}: {
  title: string;
  lead: string;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="border-b border-border bg-brand-light py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-text-muted">
          <ol className="flex flex-wrap items-center gap-1">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1">
                {i > 0 && (
                  <span aria-hidden="true" className="text-text-muted/50">
                    /
                  </span>
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="font-medium text-brand hover:text-brand-dark"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-text">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1>{title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-text-muted">{lead}</p>
      </div>
    </section>
  );
}

export function CompactHero({
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="bg-brand py-12 text-white md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {eyebrow && (
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="text-white">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/85">{lead}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-bold text-bg-dark transition-colors hover:bg-accent-dark"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-md border-2 border-white/80 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
