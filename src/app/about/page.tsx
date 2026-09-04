import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { ContentImage } from "@/components/ContentImage";
import { PageHeader } from "@/components/Hero";
import { siteImages } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Endeavor Children's Services — our mission, history, and Executive Director Janice Neilson.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Endeavor"
        lead="Working to change the world, one child at a time."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2>Our Mission</h2>
              <p className="mt-4 text-text-muted">
                Endeavor Children&apos;s Services is a 501(c)(3) non-profit
                private foundation, working to change the world, one child at a
                time.
              </p>
              <p className="mt-4 text-text-muted">
                Launched in 2011, Endeavor brings hope and opportunity to
                orphans and vulnerable children around the world, guided by a
                community of professionals in the fields of health, nutrition,
                education, law, psychology, and art who share a dedication to
                improving the lives of children.
              </p>
              <p className="mt-4 text-text-muted">
                Endeavor develops programs that are innovative in the field of
                children&apos;s services, while providing food to hungry children,
                access to health care and education. Endeavor&apos;s main focus
                is the <strong>I Am Who</strong> program — building confidence,
                hope and self-esteem in children with broken hearts.
              </p>
              <p className="mt-4 text-text-muted">
                All of Endeavor&apos;s board, staff and expert advisors volunteer
                their time and expertise to improve the lives of children in
                need.
              </p>
            </div>
            <div>
              <blockquote className="rounded-xl border-l-4 border-accent bg-accent-light p-6 text-lg italic text-text">
                &ldquo;{siteConfig.quote}&rdquo;
              </blockquote>
              <div className="mt-6 rounded-xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">At a Glance</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-text-muted">
                  <li>Founded in 2011</li>
                  <li>501(c)(3) nonprofit private foundation</li>
                  <li>Volunteer-led board, staff, and advisors</li>
                  <li>Programs serving vulnerable children globally</li>
                  <li>Flagship program: I Am Who?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-warm py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2>Executive Director — Janice Neilson</h2>
              <p className="mt-4 text-text-muted">
            The founding executive director of Endeavor Children&apos;s Services,
            Janice Secord Neilson, draws upon decades of experience in
            international child welfare services.
          </p>

          <h3 className="mt-8 text-lg font-bold">FXB China &amp; I Am Who?</h3>
          <p className="mt-4 text-text-muted">
            As creator and executive director of a program in China sponsored by
            the Association Francois-Xavier Bagnoud (
            <a
              href="https://www.fxb.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:text-brand-dark"
            >
              fxb.org
            </a>
            ) in partnership with UNICEF and the Chinese Women&apos;s
            Federation, Janice introduced a unique pilot project to demonstrate
            that strategic community-based intervention can profoundly improve
            the lives of orphans and vulnerable children and the families who
            care for them.
          </p>
          <p className="mt-4 text-text-muted">
            The four-year FXB China project&apos;s outcomes are commended in the
            UNICEF Best Practices publication{" "}
            <em>&ldquo;Responding to Children, Young People and AIDS.&rdquo;</em>{" "}
            During this project, Janice wrote and published <em>I AM WHO</em>, a
            book of expressive therapies that has been shown significantly to
            improve the psycho-social well-being of children in trauma.
          </p>

          <h3 className="mt-8 text-lg font-bold">
            World Association for Children and Parents (WACAP)
          </h3>
          <p className="mt-4 text-text-muted">
            Prior to undertaking the FXB China project, Janice was the executive
            director and president of the World Association for Children and
            Parents (
            <a
              href="https://www.wacap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:text-brand-dark"
            >
              wacap.org
            </a>
            ), one of the largest adoption and child assistance agencies in the
            United States. Under Janice&apos;s leadership, WACAP provided health
            care, education and nutrition to more than 200,000 children and
            placed nearly 10,000 children in adoptive families.
          </p>
          <p className="mt-4 text-text-muted">
            Janice created programs in the US, China, Russia, Romania, India,
            Korea, Thailand, the Philippines, Colombia and Ecuador, including the
            Peony Project in Henan, China, which serves children with
            disabilities. As Bill Gates, Sr., told the media, &ldquo;WACAP has
            been a shining light in the lives of thousands of children with
            special needs.&rdquo;
          </p>

          <h3 className="mt-8 text-lg font-bold">Recognition</h3>
          <p className="mt-4 text-text-muted">
            Janice has served on the board of the Joint Council of International
            Children&apos;s Services (Washington, DC), and on the Washington
            State Governor&apos;s task force on children&apos;s issues; advised
            the US Congressional Coalition on Adoption and the Evan B. Donaldson
            Institute (New York); been named an &ldquo;Angel in Adoption&rdquo; by
            the U.S. Congress and nominated for the &ldquo;World Citizen
            Award&rdquo; of the World Affairs Council.
          </p>
          <p className="mt-4 text-text-muted">
            She has received awards honoring her work from the Bureau of Civil
            Affairs (People&apos;s Republic of China), the Department of Public
            Welfare (Thailand), The Child Welfare League of the Philippines
            (Philippines) and Holt Children&apos;s Services (Korea).
              </p>
            </div>
            <div className="space-y-6">
              <ContentImage
                src={siteImages.janiceWithChildren.src}
                alt={siteImages.janiceWithChildren.alt}
                width={siteImages.janiceWithChildren.width}
                height={siteImages.janiceWithChildren.height}
                className="h-auto w-full rounded-xl border border-border shadow-sm"
              />
              <ContentImage
                src={siteImages.janiceNeilson.src}
                alt={siteImages.janiceNeilson.alt}
                width={siteImages.janiceNeilson.width}
                height={siteImages.janiceNeilson.height}
                className="h-auto w-full rounded-xl border border-border shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Support our work around the world"
        description="Help us bring food, education, health care, and healing to children who need it most."
        buttonLabel="Get Involved"
        buttonHref="/get-involved"
      />
    </>
  );
}
