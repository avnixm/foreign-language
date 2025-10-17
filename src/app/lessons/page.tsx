"use client";

import { getAllLessons } from '@/data/lessons';
import Link from 'next/link';
import { useEffect } from 'react';

export default function LessonsPage() {
  useEffect(() => {
    document.title = "Lessons — 4B-EBook";
  }, []);
  const lessons = getAllLessons();

  const lessonColors = [
    "from-pink-100 to-rose-100",
    "from-blue-100 to-cyan-100",
    "from-amber-100 to-orange-100",
    "from-purple-100 to-violet-100",
    "from-green-100 to-emerald-100",
    "from-red-100 to-pink-100",
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8 md:px-12 md:py-12">
      {/* Header with back button */}
      <div className="max-w-3xl mx-auto mb-6">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-[#E07A7A] text-center">Beginner</h1>
      </div>

      {/* Lessons Grid - Compact and Mobile-friendly */}
      <div className="max-w-3xl mx-auto space-y-4">
        {lessons.map((lesson, idx) => (
          <div
            key={lesson.id}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-200"
          >
            <div className="p-4 md:p-5">
              <div className="flex items-center gap-3 md:gap-4">
                {/* Icon - smaller */}
                <div className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br ${lessonColors[idx % lessonColors.length]} flex items-center justify-center`}>
                  <span className="text-xl md:text-2xl">✨</span>
                </div>

                {/* Content - compact, stacks on mobile */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1">
                    Lesson {lesson.id}: {lesson.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 line-clamp-2 md:line-clamp-1">
                    {lesson.description}
                  </p>
                </div>

                {/* Just Start button - responsive */}
                <Link
                  href={`/lessons/${lesson.id}`}
                  className="flex-shrink-0 bg-white border-2 border-[#E07A7A] text-[#E07A7A] hover:bg-[#E07A7A] hover:text-white px-4 md:px-6 py-2 rounded-2xl font-bold text-xs md:text-sm uppercase tracking-wide transition-all duration-200"
                >
                  START!
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
