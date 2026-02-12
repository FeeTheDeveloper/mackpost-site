import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission-driven, veteran-owned property management built on disciplined execution and operational excellence.",
  keywords: [
    "veteran-owned property management",
    "Texas real estate operations",
    "operational excellence",
  ],
  openGraph: {
    title: "About | Mackpost Management Group LLC",
    description:
      "Structured, accountable property management led by mission-first leadership.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <Section
      title="Mission-Driven Oversight"
      subtitle="Veteran-owned leadership delivering disciplined property management across Texas."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Our Mission</h3>
          <p className="mt-3 text-sm text-slate-600">
            We provide structured, accountable property management that protects asset
            performance and elevates tenant experiences. Every action is guided by a
            mission-first mindset, transparent reporting, and disciplined execution.
          </p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Operational Excellence</h3>
          <p className="mt-3 text-sm text-slate-600">
            Our processes emphasize readiness, documentation, and consistent follow-through.
            We operate with the same standards of clarity and accountability expected in
            military environments, without making exaggerated claims or guarantees.
          </p>
        </div>
      </div>
    </Section>
  );
}
