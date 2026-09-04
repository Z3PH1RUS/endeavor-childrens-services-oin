import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { ContentImage } from "@/components/ContentImage";
import { PageHeader } from "@/components/Hero";
import { siteImages } from "@/lib/images";
import { programActivities } from "@/lib/site";

export const metadata: Metadata = {
  title: "I Am Who? Activities",
  description:
    "I Am Who? Activities — eleven creative modules guiding children through self-discovery and healing.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        title="I Am Who? Activities"
        lead="Myself: There Is Only One of Me! — eleven guided modules for self-discovery and healing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: "Activities" },
        ]}
      />

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2>Guided Creative Modules</h2>
              <p className="mt-3 text-text-muted">
                Each activity begins with a creative &ldquo;game.&rdquo; When
                completed, the child makes an entry in their book — photos,
                artwork, reflections, and memories that build a lasting record of
                their resilience.
              </p>
            </div>
            <ContentImage
              src={siteImages.childrenProgram.src}
              alt={siteImages.childrenProgram.alt}
              width={siteImages.childrenProgram.width}
              height={siteImages.childrenProgram.height}
              className="h-auto w-full rounded-xl border border-border shadow-sm"
            />
          </div>

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programActivities.map((activity, index) => (
              <li
                key={activity}
                className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 shadow-sm"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="text-sm font-semibold text-text">{activity}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bg-warm py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2>Designed for Sensitivity</h2>
              <p className="mt-4 text-text-muted">
                Activities are completed over time to allow children&apos;s
                comfort with the process to grow, involve family members in
                supporting children&apos;s efforts, and let children create
                items or seek information at their own pace.
              </p>
              <p className="mt-4 text-text-muted">
                Because some subjects are very sensitive, children must be made
                comfortable at all times, offered the opportunity to express
                their feelings, and allowed to substitute activities of their own
                choosing.
              </p>
            </div>
            <div>
              <h2>A Lasting Record</h2>
              <p className="mt-4 text-text-muted">
                The I Am Who? book is the personal and permanent possession of
                each child. It contains all activity information so children can
                complete activities at any time in the future and return to this
                memory book&apos;s evidence of their own resilience.
              </p>
              <Link
                href="/programs/book"
                className="mt-6 inline-flex items-center justify-center rounded-md border-2 border-brand px-6 py-3 font-bold text-brand transition-colors hover:bg-brand-light"
              >
                Learn About the Book
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Fund I Am Who? books for children in need"
        description="Your donation provides books and supplies for caregivers delivering the program worldwide."
        buttonLabel="Donate Now"
        buttonHref="/get-involved"
      />
    </>
  );
}
