import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Veteran-owned property management delivering disciplined oversight, clear reporting, and accountable execution across Texas.",
  keywords: [
    "Texas property management",
    "veteran-owned business",
    "real estate operations",
    "asset oversight",
  ],
  openGraph: {
    title: "Mackpost Management Group LLC | Mission Forward. Results Driven.",
    description:
      "Structured property management for owners who demand clarity, control, and reliable execution.",
    type: "website",
  },
};

const servicePillars = [
  {
    title: "Operational Discipline",
    description:
      "Standard operating procedures, documented workflows, and measurable performance targets.",
  },
  {
    title: "Asset Accountability",
    description:
      "Monthly reporting, variance analysis, and proactive recommendations to protect value.",
  },
  {
    title: "Tenant-Centered Execution",
    description:
      "Clear communication, timely responses, and consistent enforcement of lease standards.",
  },
];

export default function HomePage() {
  return (
    <div>
      <Hero
        eyebrow="Veteran-Owned Property Management"
        title="Mission Forward. Results Driven."
        subtitle="Mackpost Management Group LLC brings disciplined oversight, structured reporting, and decisive action to Texas real estate assets."
        primaryCta={{ label: "Explore Services", href: "/services" }}
        secondaryCta={{ label: "Contact Command", href: "/contact" }}
      />

      <Section
        title="Service Pillars"
        subtitle="A structured operating model built for owners who demand clarity and control."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {servicePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Veteran-Owned Leadership"
        subtitle="Military-grade discipline applied to property operations and asset oversight."
      >
        <div className="rounded-xl bg-slate-900 p-8 text-slate-100 shadow-lg">
          <p className="text-base leading-relaxed text-slate-200">
            Our leadership team brings a mission-first mindset, structured accountability,
            and clear command channels. We operate with precision, documentation, and
            readiness, so owners maintain full visibility into every decision.
          </p>
        </div>
      </Section>

      <Section
        title="Ready for Command-Level Oversight?"
        subtitle="Start with a focused discovery call and get a clear, actionable operating plan."
      >
        <div className="flex flex-col gap-4 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-600">
            We serve owners across Texas with disciplined management, structured reporting,
            and consistent tenant coordination.
          </p>
          <a
            className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-500"
            href="/contact"
          >
            Schedule a Consultation
          </a>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Aligned with Texas regulations and fair housing standards.
        </p>
      </Section>
    </div>
  );
}
