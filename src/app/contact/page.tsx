import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Mackpost Management Group LLC for disciplined property management support across Texas.",
  keywords: [
    "contact property management",
    "Texas veteran-owned business",
    "asset management contact",
  ],
  openGraph: {
    title: "Contact | Mackpost Management Group LLC",
    description:
      "Request a consultation and receive a structured operating plan.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <Section
      title="Contact Command"
      subtitle="Send your request and receive a structured response plan."
    >
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />

        <div className="rounded-xl bg-slate-900 p-6 text-slate-100 shadow-lg">
          <h3 className="text-lg font-semibold">Direct Contact</h3>
          <p className="mt-3 text-sm text-slate-300">
            For immediate coordination, connect with our operations desk.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-200">
            <p>
              <span className="font-semibold text-slate-100">Email:</span> 
              <a className="underline" href="mailto:contact@mackpostmgt.com">
                contact@mackpostmgt.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-slate-100">Location:</span> Texas
            </p>
            <p>
              <span className="font-semibold text-slate-100">Response Window:</span> 
              1-2 business days
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
