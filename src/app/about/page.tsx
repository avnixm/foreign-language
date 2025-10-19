"use client";

import { useEffect } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About — 4B-EBook";
  }, []);

  return (
    <div className="max-w-4xl mx-auto pt-25">
      {/* Hero Section - More compact */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E07A7A] to-pink-400 text-white text-3xl mb-4 shadow-md">
          🎌
        </div>
        <h1 className="text-3xl font-bold mb-2 text-slate-900">About 4B-EBook</h1>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          Making Japanese learning accessible and enjoyable for everyone
        </p>
      </div>

      {/* Class Photo Section */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-6">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Meet the 4B Class</h2>
          <p className="text-sm text-slate-600">
            The amazing students behind 4B-EBook - passionate about Japanese learning and education
          </p>
        </div>
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
          <Image
            src="/4bclasspic.jpeg"
            alt="4B Class - Japanese Learning Community"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-500">
            Our dedicated team of students working together to make Japanese learning accessible and fun
          </p>
        </div>
      </div>

      {/* Cards Grid - Smaller and tighter */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Mission Card */}
        <div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-xl mb-3">
            🎯
          </div>
          <h2 className="text-lg font-bold mb-2 text-slate-900">Our Mission</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            4B-EBook is designed to help students learn Japanese through easy lessons and fun quizzes. No sign-ups, no accounts — just pure learning.
          </p>
        </div>

        {/* Story Card */}
        <div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-violet-100 flex items-center justify-center text-xl mb-3">
            📚
          </div>
          <h2 className="text-lg font-bold mb-2 text-slate-900">Our Story</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Developed by the amazing students of 4B Class as part of our Foreign Language subject project at OLSHCO. We&apos;re passionate about making Japanese learning accessible and fun for everyone.
          </p>
        </div>
      </div>

      {/* Thank You Card - More compact */}
      <div className="bg-gradient-to-br from-[#FEE2E2] to-pink-50 rounded-2xl p-5 border border-[#E07A7A]/20 shadow-sm mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-white/80 flex items-center justify-center text-xl">
            💝
          </div>
          <div>
            <h3 className="text-base font-bold mb-1 text-slate-900">Special Thanks</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Special thanks to our teachers and mentors for their guidance and support throughout this journey. Their passion for education inspired us to create 4B-EBook.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid - More compact */}
      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        <div className="text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="text-2xl mb-1">✨</div>
          <div className="font-semibold text-sm text-slate-900 mb-0.5">Easy to Learn</div>
          <div className="text-xs text-slate-600">Step-by-step lessons</div>
        </div>
        <div className="text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="text-2xl mb-1">🎮</div>
          <div className="font-semibold text-sm text-slate-900 mb-0.5">Interactive</div>
          <div className="text-xs text-slate-600">Fun quizzes & practice</div>
        </div>
        <div className="text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="text-2xl mb-1">🚀</div>
          <div className="font-semibold text-sm text-slate-900 mb-0.5">No Sign-up</div>
          <div className="text-xs text-slate-600">Start learning instantly</div>
        </div>
      </div>

      {/* Footer - More compact */}
      <div className="text-center py-6 border-t border-slate-100">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} 4B-EBook. Created with <span className="text-[#E07A7A] font-semibold">❤</span> for learning.
        </p>
      </div>
    </div>
  );
}
