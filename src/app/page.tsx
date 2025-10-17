"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    document.title = "4B-EBook — Learn Japanese";
  }, []);

  return (
    <div className="relative bg-white" style={{ height: 'calc(100vh - 4rem)' }}>
      {/* Main Hero Section - Exact Cieloes Layout */}
      <section className="h-full flex items-center justify-center px-6 -mt-16 pt-16">
        <div className="mx-auto max-w-5xl w-full">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left: Mascot/Illustration */}
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="relative">
                {/* Japanese learning mascot - cute character */}
                <svg className="w-72 h-72 md:w-80 md:h-80" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Shadow/ground */}
                  <ellipse cx="250" cy="420" rx="140" ry="20" fill="#FCA5A5" opacity="0.2"/>
                  
                  {/* Character body */}
                  <ellipse cx="250" cy="320" rx="100" ry="110" fill="#FECACA"/>
                  
                  {/* Head */}
                  <circle cx="250" cy="200" r="110" fill="#FEE2E2"/>
                  
                  {/* Ears */}
                  <ellipse cx="165" cy="150" rx="30" ry="40" fill="#FCA5A5"/>
                  <ellipse cx="335" cy="150" rx="30" ry="40" fill="#FCA5A5"/>
                  
                  {/* Inner ears */}
                  <ellipse cx="165" cy="155" rx="15" ry="20" fill="#FEE2E2"/>
                  <ellipse cx="335" cy="155" rx="15" ry="20" fill="#FEE2E2"/>
                  
                  {/* Eyes - happy closed */}
                  <path d="M 210 190 Q 220 200 230 190" stroke="#1F2937" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  <path d="M 270 190 Q 280 200 290 190" stroke="#1F2937" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  
                  {/* Blush */}
                  <circle cx="180" cy="210" r="15" fill="#FCA5A5" opacity="0.5"/>
                  <circle cx="320" cy="210" r="15" fill="#FCA5A5" opacity="0.5"/>
                  
                  {/* Happy smile */}
                  <path d="M 210 230 Q 250 260 290 230" stroke="#1F2937" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  
                  {/* Book being held */}
                  <rect x="180" y="380" width="70" height="55" rx="5" fill="#10B981"/>
                  <rect x="186" y="386" width="58" height="43" rx="3" fill="#D1FAE5"/>
                  <line x1="215" y1="386" x2="215" y2="429" stroke="#10B981" strokeWidth="2"/>
                  
                  {/* Japanese character on book */}
                  <text x="215" y="418" fontSize="28" fill="#059669" fontWeight="bold" textAnchor="middle" fontFamily="Arial">あ</text>
                  
                  {/* Sparkles around character */}
                  <g fill="#F59E0B">
                    <path d="M 380 130 L 385 135 L 390 130 L 385 125 Z"/>
                    <path d="M 400 180 L 403 183 L 406 180 L 403 177 Z"/>
                    <path d="M 120 160 L 123 163 L 126 160 L 123 157 Z"/>
                    <path d="M 100 210 L 105 215 L 110 210 L 105 205 Z"/>
                    <circle cx="370" cy="240" r="4"/>
                    <circle cx="130" cy="280" r="4"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="text-center md:text-left order-1 md:order-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#E07A7A] mb-6 leading-tight">
                The fun way of learning Japanese is here!
              </h1>
              
              <Link 
                href="/lessons" 
                className="inline-block bg-[#E07A7A] hover:bg-[#D06666] text-white px-10 py-3.5 rounded-2xl font-bold text-base uppercase tracking-wide shadow-lg hover:shadow-xl transition-all"
              >
                CONTINUE LEARNING
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
