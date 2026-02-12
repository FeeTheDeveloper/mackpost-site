"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const STORAGE_KEY = "mackpost_intro_seen";
const REPLAY_EVENT = "mackpost:replay-intro";

/* ── Safe sessionStorage helpers (never throw) ── */
function safeGetItem(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* storage unavailable — silently ignore */
  }
}

function safeRemoveItem(key: string): void {
  try {
    sessionStorage.removeItem(key);
  } catch {
    /* storage unavailable — silently ignore */
  }
}

export { safeRemoveItem, REPLAY_EVENT, STORAGE_KEY };

export default function SplashIntro() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (pathname !== "/") return;
    if (safeGetItem(STORAGE_KEY) === "1") return;
    setVisible(true);
  }, [pathname]);

  useEffect(() => {
    const handleReplay = () => {
      if (pathname === "/") {
        setVisible(true);
      }
    };

    window.addEventListener(REPLAY_EVENT, handleReplay);
    return () => window.removeEventListener(REPLAY_EVENT, handleReplay);
  }, [pathname]);

  // Focus the "Enter Site" button with a short delay to ensure the DOM is ready
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      btnRef.current?.focus();
    }, 50);
    return () => clearTimeout(timer);
  }, [visible]);

  const dismiss = useCallback(() => {
    safeSetItem(STORAGE_KEY, "1");
    setVisible(false);
  }, []);

  // Dismiss on ESC
  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [visible, dismiss]);

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
        width={420}
        height={420}
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
        aria-label="Enter the Mackpost site"
        className="rounded-xl bg-amber-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Enter Site
      </button>
    </div>
  );
}
