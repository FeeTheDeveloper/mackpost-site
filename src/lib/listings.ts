export interface Listing {
  id: string;
  /** Path to the listing PNG inside public/listings/ */
  image: string;
  /** Human-readable alt text */
  alt: string;
}

/**
 * Total number of listing images.
 * To add a new listing, drop a PNG named `listing_XX.png` into
 * `public/listings/` and bump this count.
 *
 * Naming convention:  listing_01.png, listing_02.png, …
 */
const LISTING_COUNT = 9;

/** Pad a number to two digits: 1 → "01" */
function pad(n: number): string {
  return String(n).padStart(2, "0");
}

/**
 * Auto-generates the listings array from the file-naming convention.
 * Each entry maps to  `/listings/listing_XX.png`.
 */
export const listings: Listing[] = Array.from(
  { length: LISTING_COUNT },
  (_, i) => {
    const num = pad(i + 1);
    return {
      id: `listing_${num}`,
      image: `/listings/listing_${num}.png`,
      alt: `Property listing ${num}`,
    };
  }
);

/** Flat array of image paths — convenience export. */
export const listingImages: string[] = listings.map((l) => l.image);
