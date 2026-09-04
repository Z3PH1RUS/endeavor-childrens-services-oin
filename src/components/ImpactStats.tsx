type ImpactStatsProps = {
  title: string;
  subtitle?: string;
  stats: { value: string; label: string }[];
  source?: string;
};

export function ImpactStats({ title, subtitle, stats, source }: ImpactStatsProps) {
  return (
    <section className="py-14 md:py-18">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2>{title}</h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl mx-auto text-text-muted">{subtitle}</p>
          )}
        </div>
        <div
          className={`grid gap-8 text-center ${
            stats.length === 2
              ? "sm:grid-cols-2"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl border border-border bg-white p-8 shadow-sm"
            >
              <div className="font-display text-4xl font-bold text-brand md:text-5xl">
                {stat.value}
              </div>
              <p className="mt-3 text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        {source && (
          <p className="mt-8 text-center text-xs text-text-muted">{source}</p>
        )}
      </div>
    </section>
  );
}
