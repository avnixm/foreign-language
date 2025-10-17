"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  lessonId?: number;
};

export default function FloatingQuizCTA({ lessonId }: Props) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  // Hide on home and on any quiz route
  const isHome = pathname === "/";
  const isQuiz = pathname.startsWith("/quizzes");

  useEffect(() => {
    if (isHome || isQuiz) {
      setVisible(false);
      return;
    }

    const dismissed = typeof window !== "undefined" && localStorage.getItem("hideFloatingQuizCTA") === "1";
    if (dismissed) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => setVisible(true), 600); // subtle delay like the Rizal site
    return () => clearTimeout(t);
  }, [pathname, isHome, isQuiz]);

  if (!visible) return null;

  const href = lessonId ? `/quizzes/${lessonId}` : "/quizzes";

  const dismiss = () => {
    try {
      localStorage.setItem("hideFloatingQuizCTA", "1");
    } catch {}
    setVisible(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      <div className="relative">
        {/* Dismiss button */}
        <button
          onClick={dismiss}
          aria-label="Dismiss quiz button"
          className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-slate-800/80 text-white text-xs grid place-items-center shadow-md hover:bg-slate-900"
        >
          ×
        </button>

        {/* Card-like pill to match the Rizal site style */}
        <Link
          href={href}
          className="flex items-center gap-3 rounded-2xl border border-amber-300 bg-white px-4 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-all hover:translate-y-[-2px]"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/90 text-white text-lg shadow-sm">📝</span>
          <div className="leading-tight">
            <div className="text-sm font-bold text-amber-700">{lessonId ? "Take Quiz" : "Practice Quiz"}</div>
            <div className="text-[11px] text-slate-500">Instant feedback • No sign-in</div>
          </div>
        </Link>
      </div>
    </div>
  );
}


