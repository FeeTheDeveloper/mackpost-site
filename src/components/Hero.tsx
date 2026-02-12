type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base text-slate-600 md:text-lg">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-500"
            >
              {primaryCta.label}
            </a>
            {secondaryCta ? (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
              >
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
        <div className="w-full max-w-sm rounded-xl bg-slate-900 p-6 text-slate-100 shadow-lg">
          <h2 className="text-lg font-semibold">Command Snapshot</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
              Veteran-led operational leadership
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
              Structured reporting and asset visibility
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
              Texas-aligned compliance standards
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
