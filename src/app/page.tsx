import type { Metadata } from "next";
import Link from "next/link";
import { AppealCards } from "@/components/AppealCards";
import { CTABand } from "@/components/CTABand";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { StoryCards } from "@/components/StoryCards";
import { impactStats, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hope for Every Child",
  description:
    "Endeavor Children's Services brings hope and opportunity to orphans and vulnerable children around the world through innovative programs including I Am Who?",
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Changing the world, one child at a time"
        lead="Endeavor Children's Services brings hope and opportunity to orphans and vulnerable children around the world through innovative programs in health, nutrition, education, and psycho-social care."
        primaryCta={{ href: "/programs", label: "Explore Programs" }}
        secondaryCta={{ href: "/about", label: "About Us" }}
      />

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2>Our Programs</h2>
            <p className="mt-3 text-text-muted">
              Your support makes a lasting difference in the lives of orphans
              and vulnerable children. Endeavor develops innovative
              children&apos;s services programs while providing food, health
              care access, and education.
            </p>
          </div>
          <AppealCards />
        </div>
      </section>

      <section className="bg-bg-warm py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2>Who We Serve</h2>
            <p className="mt-3 text-text-muted">
              With a special focus on children living in extreme poverty, we
              draw upon the expertise of professionals in health, nutrition,
              education, law, psychology, and art who share a dedication to
              improving the lives of children most in need — anywhere in the
              world.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Global Reach",
                text:
                  "Guided by a community of professionals, Endeavor serves orphans and vulnerable children across continents.",
              },
              {
                title: "Holistic Care",
                text:
                  "Beyond material needs, children deeply need sustained psycho-social support alongside food, health care, and education.",
              },
              {
                title: "Volunteer-Led",
                text:
                  "Our board, staff, and expert advisors all volunteer their time and expertise.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-white p-6"
              >
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImpactStats
        title="The Difference You Make"
        subtitle="Formal evaluation of the I Am Who? program (2007–2009, 400+ children over one year)"
        stats={[...impactStats]}
        source="Source: I Am Who? program evaluation, as reported on endeavorchildrensservices.org"
      />

      <section className="bg-bg-warm py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2>Stories of Impact</h2>
            <p className="mt-3 text-text-muted">
              Real words from children participating in the I Am Who? program
            </p>
          </div>
          <StoryCards />
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-xl border border-border bg-brand-light p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2>Get Involved</h2>
                <p className="mt-3 text-text-muted">
                  Join our community of supporters and make a lasting impact.
                  Your tax-deductible gift helps cover food for hungry children,
                  I Am Who? books, project supplies, caregiver expenses, and
                  travel for trainers and evaluators.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href={siteConfig.paypalDonate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-bold text-bg-dark transition-colors hover:bg-accent-dark"
                >
                  Donate Now
                </a>
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center rounded-md border-2 border-brand px-6 py-3 font-bold text-brand transition-colors hover:bg-white"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Every child deserves to be loved, wanted, and nurtured"
        description="Join us in bringing hope and opportunity to the world's most vulnerable children."
        buttonLabel="Donate Now"
        buttonHref={siteConfig.paypalDonate}
        external
      />
    </>
  );
}
