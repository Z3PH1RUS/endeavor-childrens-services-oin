import type { Metadata } from "next";
import { PageHeader } from "@/components/Hero";
import { boardMembers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Board of Directors — Endeavor Children's Services leadership team.",
};

export default function BoardPage() {
  return (
    <>
      <PageHeader
        title="Board of Directors"
        lead="Dedicated leaders who volunteer their time and expertise to guide Endeavor's mission."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Board of Directors" },
        ]}
      />

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6">
            {boardMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-xl border border-border bg-white p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand font-display text-xl font-bold text-white"
                    aria-hidden="true"
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand">
                      {member.role}
                    </p>
                    <h2 className="mt-1 text-xl">{member.name}</h2>
                  </div>
                </div>
                <div className="mt-5 space-y-4 text-sm text-text-muted">
                  {member.bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
