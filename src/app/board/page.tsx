import type { Metadata } from "next";
import { ContentImage } from "@/components/ContentImage";
import { PageHeader } from "@/components/Hero";
import { siteImages } from "@/lib/images";
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
            {boardMembers.map((member) => {
              const image = siteImages[member.imageKey];
              return (
              <article
                key={member.name}
                className="rounded-xl border border-border bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <ContentImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full max-w-[180px] shrink-0 rounded-xl border border-border shadow-sm"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand">
                      {member.role}
                    </p>
                    <h2 className="mt-1 text-xl">{member.name}</h2>
                    <div className="mt-5 space-y-4 text-sm text-text-muted">
                      {member.bio.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
