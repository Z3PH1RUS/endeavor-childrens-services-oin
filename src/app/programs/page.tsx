import type { Metadata } from "next";
import Link from "next/link";
import { AppealCards } from "@/components/AppealCards";
import { CTABand } from "@/components/CTABand";
import { CompactHero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "I Am Who? Program",
  description:
    "I Am Who? — Endeavor Children's Services flagship psycho-social program for vulnerable children.",
};

const programCards = [
  {
    title: "Creative Expression",
    description:
      "Music, movement, creative drama, drawing, painting, collage, photography, storytelling, poetry, and personal reflection — illustrated by artist Diana Magnuson.",
    href: "/programs/book",
    label: "Explore the book",
  },
  {
    title: "Healing & Identity",
    description:
      "Comforting and effective aid for children dealing with identity and self-identification issues, whether induced by loss and trauma or by ordinary life.",
    href: "/programs/mission",
    label: "Read the mission",
  },
  {
    title: "11 Guided Activities",
    description:
      'From "My Big Self" to "My Thoughts Have Wings" — structured modules that guide children through self-discovery at their own pace.',
    href: "/programs/activities",
    label: "View activities",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <CompactHero
        eyebrow="Flagship Program"
        title="I Am Who?"
        lead="A UNICEF-recognized therapeutic tool that invites children into creative activities designed to enhance their emotional well-being — and creates a life book to be kept forever."
        primaryCta={{ href: "/programs/mission", label: "Program Mission" }}
        secondaryCta={{ href: "/programs/book", label: "About the Book" }}
      />

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2>Building Confidence, Hope &amp; Self-Esteem</h2>
            <p className="mt-3 text-text-muted">
              Endeavor&apos;s main focus is the I Am Who program — building
              confidence, hope and self-esteem in children with broken hearts.
              Each child creates their own life book, answering the question:{" "}
              <em>I Am Who?</em>
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold">{card.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex text-sm font-bold text-brand hover:text-brand-dark"
                >
                  {card.label} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImpactStats
        title="Measured Results"
        subtitle="2007–2009 evaluation with 400+ children over one year"
        stats={[
          { value: "89% → 5%", label: "Depression reduced" },
          { value: "9% → 90%", label: "Self-esteem increased" },
        ]}
      />

      <section className="bg-bg-warm py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2>Our Programs</h2>
            <p className="mt-3 text-text-muted">
              Endeavor provides holistic support for vulnerable children
              worldwide.
            </p>
          </div>
          <AppealCards />
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2>Beyond Material Needs</h2>
              <p className="mt-4 text-text-muted">
                Although all children need nutrition, housing, health care,
                school and family support, they also deeply need sustained and
                effective psycho-social intervention.
              </p>
              <p className="mt-4 text-text-muted">
                Studies confirm aid workers&apos; observations that many
                vulnerable children experience depression. Programs are needed to
                help children acknowledge their loss of loved ones, gain a sense
                of self-worth and place in the world, and come to believe that
                they can and will have a future.
              </p>
            </div>
            <blockquote className="rounded-xl border-l-4 border-accent bg-accent-light p-8 text-lg italic text-text">
              &ldquo;{siteConfig.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <CTABand
        title="Help us bring I Am Who? to more children"
        description="Your gift funds books, supplies, and training for caregivers in communities worldwide."
        buttonLabel="Donate Now"
        buttonHref="/get-involved"
      />
    </>
  );
}
