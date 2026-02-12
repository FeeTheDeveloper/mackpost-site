"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "mackpost_intro_seen";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();

  function handleReplayIntro() {
    sessionStorage.removeItem(STORAGE_KEY);
    router.push("/");
    // Force a reload so the splash shows again on "/"
    router.refresh();
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo + brand name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Mackpost logo"
            width={36}
            height={36}
            className="rounded"
          />
          <span className="text-base font-semibold text-slate-900">
            Mackpost Management Group LLC
          </span>
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          {/* Main Menu link */}
          <Link
            href="/"
            className="font-semibold text-slate-900 transition hover:text-amber-600"
          >
            Main Menu
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-500"
          >
            Request Consult
          </Link>

          {/* Replay Intro */}
          <button
            type="button"
            onClick={handleReplayIntro}
            className="text-xs text-slate-400 transition hover:text-slate-700"
          >
            Replay Intro
          </button>
        </nav>
      </div>
    </header>
  );
}
