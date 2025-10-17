"use client";

import { useParams } from 'next/navigation';
import { getLessonById } from '@/data/lessons';
import Link from 'next/link';
import FloatingQuizCTA from '@/components/FloatingQuizCTA';
import { useState, useEffect } from 'react';

export default function LessonDetail() {
  const params = useParams();
  const lessonId = parseInt(params.id as string);
  const lesson = getLessonById(lessonId);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);

  // Update page title
  useEffect(() => {
    if (lesson) {
      document.title = `${lesson.title} — 4B-EBook`;
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Lesson not found</h1>
          <Link href="/lessons" className="inline-block bg-[#E07A7A] hover:bg-[#D06666] text-white px-6 py-3 rounded-2xl font-semibold transition-all">
            ← Back to Lessons
          </Link>
        </div>
      </div>
    );
  }

  const handlePlayAudio = (text: string, idx: number) => {
    setPlayingAudio(idx);
    
    // Check if browser supports speech synthesis
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Create speech utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP'; // Japanese language
      utterance.rate = 0.8; // Slightly slower for learning
      utterance.pitch = 1;
      
      // Handle when speech ends
      utterance.onend = () => {
        setPlayingAudio(null);
      };
      
      utterance.onerror = () => {
        setPlayingAudio(null);
      };
      
      // Speak the text
      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback if speech synthesis not supported
      alert('Text-to-speech is not supported in your browser');
      setPlayingAudio(null);
    }
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="mx-auto max-w-5xl px-6 py-4 md:py-8">
        {/* Header with Breadcrumb */}
        <div className="mb-8">
          <nav className="text-xs text-slate-500 mb-4 flex items-center gap-2">
            <Link href="/lessons" className="hover:text-[#E07A7A] transition-colors">Lessons</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Lesson {lesson.id}</span>
          </nav>
          
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Lesson {lesson.id}: {lesson.title}
            </h1>
            <p className="text-slate-600 text-sm">{lesson.description}</p>
          </div>
        </div>

        {/* Learning Objectives */}
        <section className="mb-8">
          <div className="bg-slate-50 rounded-2xl p-5 border-2 border-slate-200">
            <div className="flex items-start gap-3">
              <div className="text-xl">📚</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">In this lesson:</h3>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li>• {lesson.vocabulary.length} vocabulary words</li>
                  <li>• {lesson.grammar.length} grammar concepts</li>
                  <li>• Conversation practice</li>
                  {lesson.culturalNotes && lesson.culturalNotes.length > 0 && (
                    <li>• Cultural insights</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vocabulary Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Vocabulary</h2>

          <div className="space-y-3">
            {lesson.vocabulary.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border-2 border-slate-200 rounded-2xl p-4 hover:border-[#E07A7A] transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-slate-900">{item.word}</span>
                      {item.reading && (
                        <span className="text-sm text-slate-500">({item.reading})</span>
                      )}
                    </div>
                    <div className="text-sm text-slate-700">{item.meaning}</div>
                  </div>
                  <button 
                    onClick={() => handlePlayAudio(item.word, idx)}
                    className={`w-10 h-10 rounded-full bg-slate-100 hover:bg-[#E07A7A] hover:text-white flex items-center justify-center transition-all flex-shrink-0 ${
                      playingAudio === idx ? 'bg-[#E07A7A] text-white scale-110' : 'text-slate-600'
                    }`}
                    aria-label={`Play pronunciation for ${item.word}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.06 5.5 5.5 0 010 7.78.75.75 0 001.06 1.06 7 7 0 000-9.9z" />
                      <path d="M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grammar Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Grammar</h2>

          <div className="space-y-3">
            {lesson.grammar.map((point, idx) => (
              <div key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-4">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  {point.title}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed mb-4">{point.explanation}</p>

                {/* Examples */}
                {point.examples.length > 0 && (
                  <div className="space-y-2">
                    {point.examples.map((example, exIdx) => (
                      <div key={exIdx} className="bg-slate-50 rounded-xl p-3">
                        <div className="text-sm font-semibold text-slate-900 mb-1">
                          {example.japanese}
                        </div>
                        <div className="text-xs text-slate-500 mb-1">
                          {example.romaji}
                        </div>
                        <div className="text-xs text-slate-600">
                          {example.english}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Conversation Practice */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Conversations</h2>

          <div className="space-y-6">
            {lesson.conversations.map((conversation, convIdx) => (
              <div key={convIdx} className="bg-white border-2 border-slate-200 rounded-2xl p-5">
                <div className="space-y-4">
                  {conversation.map((line, lineIdx) => {
                    const isRight = lineIdx % 2 === 1;
                    return (
                      <div key={lineIdx} className={`flex items-end gap-2 ${isRight ? 'flex-row-reverse' : ''}`}>
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${
                          isRight 
                            ? 'bg-[#E07A7A]' 
                            : 'bg-slate-400'
                        }`}>
                          {line.speaker.charAt(0)}
                        </div>

                        {/* Message bubble */}
                        <div className={`flex flex-col gap-1 max-w-[75%] ${isRight ? 'items-end' : 'items-start'}`}>
                          <div className="text-xs font-medium text-slate-500">
                            {line.speaker}
                          </div>
                          <div className={`rounded-2xl px-4 py-2.5 ${
                            isRight
                              ? 'bg-[#E07A7A] text-white rounded-br-sm'
                              : 'bg-slate-100 text-slate-900 rounded-bl-sm'
                          }`}>
                            <div className="font-medium text-sm mb-0.5">
                              {line.text}
                            </div>
                            <div className={`text-xs mb-1 ${isRight ? 'text-white/70' : 'text-slate-500'}`}>
                              {line.romaji}
                            </div>
                            {line.translation && (
                              <div className={`text-xs ${isRight ? 'text-white/80' : 'text-slate-600'}`}>
                                {line.translation}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Notes */}
        {lesson.culturalNotes && lesson.culturalNotes.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Cultural Notes</h2>

            <div className="space-y-3">
              {lesson.culturalNotes.map((note, idx) => (
                <div key={idx} className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
                  <p className="text-sm text-slate-700 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Practice Reminder */}
        <section>
          <div className="bg-[#E07A7A] rounded-2xl p-6 text-white text-center">
            <h3 className="text-lg font-bold mb-2">Ready to test your knowledge?</h3>
            <p className="text-white/90 mb-4 text-sm">Take the quiz to practice what you&apos;ve learned</p>
            <Link
              href={`/quizzes/${lesson.id}`}
              className="inline-block bg-white text-[#E07A7A] px-6 py-2.5 rounded-2xl font-semibold text-sm hover:bg-slate-50 transition-all"
            >
              Take Quiz
            </Link>
          </div>
        </section>
      </div>
      <FloatingQuizCTA lessonId={lesson.id} />
    </div>
  );
}
