"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function DashboardChrome({ children }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const nav = [
    { 
      href: "/lessons", 
      label: "LEARN", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      href: "/alphabet", 
      label: "ALPHABET", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      )
    },
    { 
      href: "/quizzes", 
      label: "PRACTICE", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    { 
      href: "/about", 
      label: "ABOUT", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  return (
    <div className="relative min-h-dvh bg-slate-50 flex">
      {/* Sidebar - Fixed Left (Cieloes style) */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 flex flex-col ${open ? "block" : "hidden"} md:block z-50`}>
        {/* Logo */}
        <div className="p-6 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E07A7A] text-white font-bold text-lg">◆</span>
            <span className="text-xl font-bold text-[#E07A7A]">4B-EBOOK</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {nav.map(item => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold transition-all duration-200 ${
                    active
                      ? "bg-[#FEE2E2] text-[#E07A7A] border-2 border-[#E07A7A]"
                      : "text-slate-600 hover:bg-slate-50 border-2 border-transparent"
                  }`}
                >
                  {item.icon}
                  <span className="uppercase tracking-wide">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom profile placeholder - removed as requested */}
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 md:pl-8">
        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-100 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-50"
          >
            ☰
          </button>
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#E07A7A] text-white font-bold text-base">◆</span>
            <span className="text-lg font-bold text-[#E07A7A]">4B-EBOOK</span>
          </Link>
        </div>

        {/* Content */}
        <main className="pt-16 md:pt-0">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
