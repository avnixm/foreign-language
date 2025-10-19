"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About — 4B-EBook";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8 md:px-12 md:py-12">
      {/* Header with back button */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-[#E07A7A] text-center">About 4B-EBook</h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">

        {/* Class Photo Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 md:p-5">
            <div className="text-center mb-4">
              <h2 className="text-lg font-bold text-slate-900 mb-2">Meet the 4B Class</h2>
              <p className="text-sm text-slate-600">
                The amazing students behind 4B-EBook - passionate about Japanese learning and education
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-50">
              <Image
                src="/4bclasspic.jpeg"
                alt="4B Class - Japanese Learning Community"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-500">
                Our dedicated team of students working together to make Japanese learning accessible and fun
              </p>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-200">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-sm md:text-base font-bold text-slate-900 mb-1">Our Mission</h2>
                <p className="text-xs md:text-sm text-slate-600 line-clamp-3">
                  4B-EBook is designed to help students learn Japanese through easy lessons and fun quizzes. No sign-ups, no accounts — just pure learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-200">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-purple-100 to-violet-100 flex items-center justify-center">
                <span className="text-xl">📚</span>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-sm md:text-base font-bold text-slate-900 mb-1">Our Story</h2>
                <p className="text-xs md:text-sm text-slate-600 line-clamp-3">
                  Developed by the amazing students of 4B Class as part of our Foreign Language subject project at OLSHCO. We&apos;re passionate about making Japanese learning accessible and fun for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Card */}
        <div className="bg-gradient-to-br from-[#FEE2E2] to-pink-50 rounded-2xl shadow-sm border border-[#E07A7A]/20 overflow-hidden">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-2xl bg-white/80 flex items-center justify-center">
                <span className="text-xl">💝</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1">Special Thanks</h3>
                <p className="text-xs md:text-sm text-slate-700 line-clamp-3">
                  Special thanks to our teachers and mentors for their guidance and support throughout this journey. Their passion for education inspired us to create 4B-EBook.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-200">
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">✨</div>
              <div className="font-semibold text-sm text-slate-900 mb-1">Easy to Learn</div>
              <div className="text-xs text-slate-600">Step-by-step lessons</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-200">
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">🎮</div>
              <div className="font-semibold text-sm text-slate-900 mb-1">Interactive</div>
              <div className="text-xs text-slate-600">Fun quizzes & practice</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-200">
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">🚀</div>
              <div className="font-semibold text-sm text-slate-900 mb-1">No Sign-up</div>
              <div className="text-xs text-slate-600">Start learning instantly</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-6 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} 4B-EBook. Created with <span className="text-[#E07A7A] font-semibold">❤</span> for learning.
          </p>
        </div>
      </div>
    </div>
  );
}
