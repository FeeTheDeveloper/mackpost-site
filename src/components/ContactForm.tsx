"use client";

import { useFormState } from "react-dom";
import { submitContact } from "@/app/contact/actions";

const initialState = {
  status: "idle" as const,
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <form
      action={formAction}
      className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Name
          <input
            name="name"
            type="text"
            required
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            name="email"
            type="email"
            required
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Message
          <textarea
            name="message"
            required
            rows={5}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-500"
      >
        Submit Request
      </button>
      {state.message ? (
        <p
          className={`mt-4 text-sm ${
            state.status === "error" ? "text-red-600" : "text-emerald-600"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
