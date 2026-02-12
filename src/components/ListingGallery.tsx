"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Listing } from "@/lib/listings";

/** Fallback shown when an image fails to load. */
function ImageFallback({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-100 text-center">
      <p className="px-4 text-sm font-medium text-slate-400">{label}</p>
    </div>
  );
}

export default function ListingGallery({
  listings,
}: {
  listings: Listing[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [errorSet, setErrorSet] = useState<Set<string>>(new Set());

  const open = (i: number) => setActiveIndex(i);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(
    () =>
      setActiveIndex((c) =>
        c !== null ? (c - 1 + listings.length) % listings.length : null
      ),
    [listings.length]
  );

  const next = useCallback(
    () =>
      setActiveIndex((c) =>
        c !== null ? (c + 1) % listings.length : null
      ),
    [listings.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, close, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const handleError = (id: string) => {
    setErrorSet((prev) => new Set(prev).add(id));
  };

  return (
    <>
      {/* ── Grid ── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing, i) => (
          <button
            key={listing.id}
            type="button"
            onClick={() => open(i)}
            className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              {errorSet.has(listing.id) ? (
                <ImageFallback label={listing.alt} />
              ) : (
                <Image
                  src={listing.image}
                  alt={listing.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition group-hover:scale-[1.03]"
                  onError={() => handleError(listing.id)}
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-slate-900">
                {listing.alt}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox Modal ── */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={listings[activeIndex].alt}
          onClick={close}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={close}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 rounded-full bg-slate-800/80 p-2 text-white transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous listing"
            className="absolute left-4 rounded-full bg-slate-800/80 p-2 text-white transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative mx-16 h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {errorSet.has(listings[activeIndex].id) ? (
              <div className="flex h-full items-center justify-center rounded-xl bg-slate-800">
                <p className="text-lg text-slate-400">
                  {listings[activeIndex].alt} — image unavailable
                </p>
              </div>
            ) : (
              <Image
                src={listings[activeIndex].image}
                alt={listings[activeIndex].alt}
                fill
                sizes="90vw"
                className="rounded-xl object-contain"
                priority
                onError={() => handleError(listings[activeIndex].id)}
              />
            )}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next listing"
            className="absolute right-4 rounded-full bg-slate-800/80 p-2 text-white transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 text-sm text-slate-400">
            {activeIndex + 1} / {listings.length}
          </p>
        </div>
      )}
    </>
  );
}
