"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const STORAGE_KEY = "mackpost_intro_seen";

export default function SplashIntro() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Only show on the home route and only if not already seen this session
    if (pathname !== "/") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    setVisible(true);
  }, [pathname]);

  // Focus the "Enter Site" button when the overlay becomes visible
  useEffect(() => {
    if (visible) {
      btnRef.current?.focus();
    }
  }, [visible]);

  // Dismiss on ESC
  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900/95 text-white backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Mackpost Management Group"
    >
      <Image
        src="/logo.png"
        alt="Mackpost Management Group LLC logo"
        width={140}
        height={140}
        className="mb-6"
        priority
      />

      <h1 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Mackpost Management Group LLC
      </h1>
      <p className="mb-8 max-w-md text-center text-sm text-slate-300">
        Mission Forward. Results Driven.
      </p>

      <button
        ref={btnRef}
        onClick={dismiss}
        className="rounded-xl bg-amber-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Enter Site
      </button>
    </div>
  );
}
