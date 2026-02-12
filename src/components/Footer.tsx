import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Listings", href: "/listings" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-slate-500">
        <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Mackpost Management Group LLC. All rights reserved.</p>
          <p>Veteran-Owned Property Management | Texas</p>
        </div>
      </div>
    </footer>
  );
}
