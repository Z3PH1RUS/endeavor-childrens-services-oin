import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { PageHeader } from "@/components/Hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Endeavor Children's Services — phone and social media.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        lead="We'd love to hear from you. Reach out to learn more about our programs or how to support our mission."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-14 md:py-16" aria-labelledby="contact-methods-heading">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="contact-methods-heading" className="sr-only">
            Ways to reach us
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-white p-8 text-center shadow-sm">
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-6 w-6"
                >
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold">Phone</h3>
              <p className="mt-2">
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-brand hover:text-brand-dark"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p className="mt-2 text-sm text-text-muted">USA</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-8 text-center shadow-sm">
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold">Facebook</h3>
              <p className="mt-2">
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand hover:text-brand-dark"
                >
                  {siteConfig.facebookHandle}
                </a>
              </p>
              <p className="mt-2 text-sm text-text-muted">
                Follow our I Am Who? program
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-8 text-center shadow-sm">
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-accent-dark"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-6 w-6"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold">Donate</h3>
              <p className="mt-2">
                <Link
                  href="/get-involved"
                  className="font-semibold text-brand hover:text-brand-dark"
                >
                  Make a gift
                </Link>
              </p>
              <p className="mt-2 text-sm text-text-muted">
                Tax-deductible via PayPal
              </p>
            </div>

            <div className="rounded-xl border border-dashed border-border bg-bg-warm p-8 text-center">
              <h3 className="text-lg font-bold">Email</h3>
              <p className="mt-2 text-sm font-medium text-text-muted">
                Not published
              </p>
              <p className="mt-2 text-sm text-text-muted">
                No email address was listed on the original Endeavor website.
              </p>
            </div>

            <div className="rounded-xl border border-dashed border-border bg-bg-warm p-8 text-center sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold">Mailing Address</h3>
              <p className="mt-2 text-sm font-medium text-text-muted">
                Not published
              </p>
              <p className="mt-2 text-sm text-text-muted">
                No physical address was listed on the original Endeavor website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to make a difference?"
        description="Your support helps bring food, education, health care, and healing to vulnerable children worldwide."
        buttonLabel="Support Our Mission"
        buttonHref="/get-involved"
      />
    </>
  );
}
