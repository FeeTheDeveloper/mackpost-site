import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service property management, asset oversight, and maintenance coordination for Texas owners.",
  keywords: [
    "property management services",
    "asset oversight",
    "maintenance coordination",
    "owner support",
  ],
  openGraph: {
    title: "Services | Mackpost Management Group LLC",
    description:
      "Structured services delivering oversight, compliance alignment, and performance visibility.",
    type: "website",
  },
};

const serviceSections = [
  {
    title: "Full-Service Property Management",
    bullets: [
      "Leasing coordination, tenant onboarding, and lease compliance oversight.",
      "Rent collection, payment tracking, and variance reporting.",
      "Structured communication cadence for owners and stakeholders.",
    ],
  },
  {
    title: "Asset Oversight & Performance Control",
    bullets: [
      "Monthly reporting with key performance indicators and trend analysis.",
      "Budget alignment, expense monitoring, and variance explanations.",
      "Proactive recommendations based on asset performance data.",
    ],
  },
  {
    title: "Maintenance & Risk Management",
    bullets: [
      "Vendor coordination and documented scope-of-work approvals.",
      "Preventive maintenance scheduling aligned with asset needs.",
      "Issue escalation protocols for safety and compliance considerations.",
    ],
  },
  {
    title: "Owner Support",
    bullets: [
      "Dedicated reporting and communication channels for decision makers.",
      "Portfolio visibility with clear status updates and timelines.",
      "Compliance alignment with Texas regulations and fair housing standards.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <Section
      title="Structured Services"
      subtitle="Focused, repeatable service lines built to protect asset value and tenant experience."
    >
      <div className="grid gap-6">
        {serviceSections.map((section) => (
          <div
            key={section.title}
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {section.title}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
