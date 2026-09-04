import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { ContentImage } from "@/components/ContentImage";
import { PageHeader } from "@/components/Hero";
import { QuickDonate } from "@/components/QuickDonate";
import { siteImages } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Support Endeavor Children's Services — make a tax-deductible donation to help vulnerable children worldwide.",
};

const fundingItems = [
  "Food for hungry children",
  '"I Am Who?" books for children in trauma',
  "Project supplies for creative activities",
  "Expenses for caregivers and workers in communities being served",
  "Travel for trainers and evaluators",
  "Other program expenses",
];

const supportCards = [
  {
    title: "Spread the Word",
    description:
      "Follow and share our work on Facebook to help more people learn about the I Am Who? program and Endeavor's global mission.",
    href: siteConfig.facebook,
    linkLabel: "Visit our Facebook page",
    external: true,
  },
  {
    title: "Get in Touch",
    description:
      "Have questions about Endeavor's programs or how to support our work? We'd love to hear from you.",
    href: "/contact",
    linkLabel: "Contact us",
  },
  {
    title: "Learn About I Am Who?",
    description:
      "Understanding our flagship program helps you see the direct impact your support makes in children's lives.",
    href: "/programs",
    linkLabel: "Explore programs",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        title="How Can You Help?"
        lead="Your gift brings hope, healing, and opportunity to children who need it most."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved" },
        ]}
      />

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2>Every Dollar Makes a Difference</h2>
              <p className="mt-4 text-text-muted">
                Endeavor Children&apos;s Services was formed in 2011. It is a
                501(c)(3) non-profit private foundation. Endeavor develops
                programs that are innovative in the field of children&apos;s
                services.
              </p>
              <p className="mt-4 text-text-muted">
                Endeavor&apos;s board, staff and expert advisors all volunteer
                their time and expertise. Help is needed to cover the costs of
                carrying out Endeavor&apos;s mission.
              </p>
              <p className="mt-4 italic text-text-muted">
                Note: As a private foundation, this may limit your tax
                deductions. Please consult your tax advisor.
              </p>

              <h3 className="mt-8 text-lg font-bold">Your gift supports:</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-text-muted">
                {fundingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <QuickDonate />
              <div className="rounded-xl border border-border bg-brand-light p-6">
                <ContentImage
                  src={siteImages.logo.src}
                  alt={siteImages.logo.alt}
                  width={siteImages.logo.width}
                  height={siteImages.logo.height}
                  className="mb-4 h-auto w-full max-w-xs"
                />
                <ContentImage
                  src={siteImages.childrenCommunity.src}
                  alt={siteImages.childrenCommunity.alt}
                  width={siteImages.childrenCommunity.width}
                  height={siteImages.childrenCommunity.height}
                  className="h-auto w-full rounded-lg border border-border shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-warm py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2>Other Ways to Support</h2>
            <p className="mt-3 text-text-muted">
              Beyond financial gifts, you can help spread awareness of
              Endeavor&apos;s mission.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {supportCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold">{card.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{card.description}</p>
                {card.external ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-bold text-brand hover:text-brand-dark"
                  >
                    {card.linkLabel} →
                  </a>
                ) : (
                  <Link
                    href={card.href}
                    className="mt-4 inline-flex text-sm font-bold text-brand hover:text-brand-dark"
                  >
                    {card.linkLabel} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Together, we can change a child's world"
        description="Thank you for considering a gift to Endeavor Children's Services."
        buttonLabel="Donate Now"
        buttonHref={siteConfig.paypalDonate}
        external
      />
    </>
  );
}
