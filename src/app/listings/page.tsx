import type { Metadata } from "next";
import Section from "@/components/Section";
import ListingGallery from "@/components/ListingGallery";
import { listings } from "@/lib/listings";

export const metadata: Metadata = {
  title: "Listings",
  description:
    "Browse current property listings managed by Mackpost Management Group LLC.",
  keywords: [
    "property listings",
    "Texas rentals",
    "managed properties",
    "veteran-owned rentals",
  ],
  openGraph: {
    title: "Listings | Mackpost Management Group LLC",
    description:
      "Current property listings under Mackpost management.",
    type: "website",
  },
};

export default function ListingsPage() {
  return (
    <Section
      title="Current Listings"
      subtitle="Properties currently under Mackpost management."
    >
      {listings.length === 0 ? (
        <p className="text-sm text-slate-500">
          No listings available at this time. Check back soon.
        </p>
      ) : (
        <ListingGallery listings={listings} />
      )}
    </Section>
  );
}
