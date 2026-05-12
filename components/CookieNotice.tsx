"use client";

import { useEffect, useState } from "react";

export default function CookieNotice() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem("cookie_notice_choice");

    if (!savedChoice) {
      setShowNotice(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookie_notice_choice", "accepted");
    setShowNotice(false);
  }

  function dismissCookies() {
    localStorage.setItem("cookie_notice_choice", "dismissed");
    setShowNotice(false);
  }

  if (!showNotice) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900 p-5 text-white shadow-2xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold">Cookies and analytics</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            We use cookies and analytics to understand how visitors use this
            website, improve the calculator, and measure affiliate button
            clicks. See our cookie policy for more information.
          </p>

          <a
            href="/cookie-policy"
            className="mt-2 inline-flex text-sm font-medium text-emerald-300 hover:text-emerald-200"
          >
            Read cookie policy
          </a>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            onClick={dismissCookies}
            className="rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Dismiss
          </button>

          <button
            onClick={acceptCookies}
            className="rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}