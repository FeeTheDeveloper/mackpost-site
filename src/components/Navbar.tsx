"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "mackpost_intro_seen";
const REPLAY_EVENT = "mackpost:replay-intro";

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
    window.dispatchEvent(new Event(REPLAY_EVENT));
    router.push("/");
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label="Go to main menu"
        >
          <Image
            src="/logo.png"
            alt="Mackpost logo"
            width={40}
            height={40}
            className="rounded"
            priority
          />
          <span className="hidden text-base font-semibold text-slate-900 sm:inline">
            Mackpost Management Group LLC
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-3 text-sm font-medium text-slate-600">
          <Link
            href="/"
            aria-label="Open Main Menu"
            className="rounded-md px-2 py-1 font-semibold text-slate-900 transition hover:text-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Main Menu
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 transition hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={handleReplayIntro}
            aria-label="Replay intro splash"
            className="rounded-md px-2 py-1 text-xs text-slate-500 transition hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Replay Intro
          </button>
        </nav>
      </div>
    </header>
  );
}
