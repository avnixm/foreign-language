"use client";

import Link from 'next/link';

export default function FloatingNav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#E07A7A] text-white font-bold text-lg">◆</span>
            <span className="text-xl font-bold text-[#E07A7A]">4B-EBOOK</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link href="/lessons" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Lessons</Link>
            <Link href="/alphabet" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Alphabet</Link>
            <Link href="/quizzes" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Quizzes</Link>
            <Link href="/about" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


