"use client";

import { useParams } from 'next/navigation';
import { getLessonById } from '@/data/lessons';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function QuizPage() {
  const params = useParams();
  const lessonId = parseInt(params.id as string);
  const lesson = getLessonById(lessonId);

  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [draggedOption, setDraggedOption] = useState<string | null>(null);

  // Update page title
  useEffect(() => {
    if (lesson) {
      document.title = `${lesson.title} Quiz — 4B-EBook`;
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Quiz not found</h1>
          <Link href="/quizzes" className="inline-block bg-[#E07A7A] hover:bg-[#D06666] text-white px-6 py-3 rounded-2xl font-semibold transition-all">
            ← Back to Quizzes
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (questionIdx: number, answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIdx]: answer });
  };

  const handleDragStart = (option: string) => {
    setDraggedOption(option);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, questionIdx: number) => {
    e.preventDefault();
    if (draggedOption) {
      handleAnswerSelect(questionIdx, draggedOption);
      setDraggedOption(null);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    lesson.quiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const allAnswered = lesson.quiz.every((_, idx) => selectedAnswers[idx] !== undefined);

  if (showResults) {
    const percentage = Math.round((score / lesson.quiz.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl mb-6">{passed ? '🎉' : '📚'}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
            {passed ? 'Excellent Work!' : 'Keep Practicing!'}
          </h1>
          <p className="text-xl text-slate-600 mb-2">
            You got <span className="font-bold text-[#E07A7A]">{score}</span> out of{' '}
            <span className="font-bold">{lesson.quiz.length}</span> correct
          </p>
          <div className="text-3xl font-bold text-[#E07A7A] mb-8">{percentage}%</div>

          {/* Detailed Results */}
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-left">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Review:</h2>
            <div className="space-y-3">
              {lesson.quiz.map((q, idx) => {
                const isCorrect = selectedAnswers[idx] === q.correctAnswer;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{isCorrect ? '✅' : '❌'}</span>
                    <div className="flex-1 text-sm">
                      <p className="font-semibold text-slate-900 mb-1">{q.question}</p>
                      <p className="text-slate-600">
                        Your answer: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>{selectedAnswers[idx]}</span>
                      </p>
                      {!isCorrect && (
                        <p className="text-green-600">Correct answer: {q.correctAnswer}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="bg-[#E07A7A] hover:bg-[#D06666] text-white px-8 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-xl"
            >
              Try Again
            </button>
            <Link
              href="/quizzes"
              className="bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wide transition-all inline-block"
            >
              Back to Quizzes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-12">
      <div className="mx-auto max-w-4xl px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            Lesson {lesson.id} Quiz: {lesson.title}
          </h1>
          <p className="text-slate-600">Test your knowledge on Japanese {lesson.title.toLowerCase()}.</p>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {lesson.quiz.map((question, idx) => {
            const isAnswered = selectedAnswers[idx] !== undefined;

            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-6 md:p-8 transition-all duration-200"
              >
                {/* Question Header */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#E07A7A] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-base md:text-lg font-bold text-slate-900">{question.question}</p>
                    {question.type === 'fill-blank' && (
                      <p className="text-xs text-slate-500 mt-1">💡 Drag an answer into the box below</p>
                    )}
                  </div>
                </div>

                {/* Fill in the Blank - Drag & Drop */}
                {question.type === 'fill-blank' && (
                  <div className="space-y-4">
                    {/* Drop Zone */}
                    <div
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, idx)}
                      className={`min-h-[60px] border-2 border-dashed rounded-2xl flex items-center justify-center transition-all ${
                        isAnswered
                          ? 'border-[#E07A7A] bg-[#FEE2E2]'
                          : 'border-slate-300 bg-white hover:border-[#E07A7A] hover:bg-[#FEE2E2]/30'
                      }`}
                    >
                      {isAnswered ? (
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-[#E07A7A]">{selectedAnswers[idx]}</span>
                          <button
                            onClick={() => {
                              const newAnswers = { ...selectedAnswers };
                              delete newAnswers[idx];
                              setSelectedAnswers(newAnswers);
                            }}
                            className="text-slate-400 hover:text-slate-600 text-xs"
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <span className="text-slate-400 text-xs">Drop your answer here</span>
                      )}
                    </div>

                    {/* Draggable Options */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {question.options?.map((option) => (
                        <div
                          key={option}
                          draggable
                          onDragStart={() => handleDragStart(option)}
                          className={`cursor-move px-4 py-2.5 rounded-2xl border-2 text-center font-medium text-sm transition-all ${
                            selectedAnswers[idx] === option
                              ? 'border-slate-200 bg-slate-100 text-slate-400 opacity-50'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-[#E07A7A] hover:bg-[#FEE2E2] active:scale-95'
                          }`}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Multiple Choice */}
                {question.type === 'multiple-choice' && (
                  <div className="grid md:grid-cols-2 gap-3">
                    {question.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswerSelect(idx, option)}
                        className={`px-4 py-3 rounded-2xl border-2 text-left font-medium text-sm transition-all duration-200 ${
                          selectedAnswers[idx] === option
                            ? 'border-[#E07A7A] bg-[#FEE2E2] text-[#E07A7A]'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-[#E07A7A] hover:bg-[#FEE2E2]/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {/* True/False */}
                {question.type === 'true-false' && (
                  <div className="grid grid-cols-2 gap-3">
                    {question.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswerSelect(idx, option)}
                        className={`px-4 py-3 rounded-2xl border-2 font-semibold text-sm transition-all duration-200 ${
                          selectedAnswers[idx] === option
                            ? 'border-[#E07A7A] bg-[#FEE2E2] text-[#E07A7A]'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-[#E07A7A] hover:bg-[#FEE2E2]/50'
                        }`}
                      >
                        {option === 'True' ? '✓ True' : '✗ False'}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Button */}
        <div className="mt-10 text-center">
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`px-8 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wide transition-all shadow-lg ${
              allAnswered
                ? 'bg-[#E07A7A] hover:bg-[#D06666] text-white hover:shadow-xl'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {allAnswered ? 'Submit Answers' : `Answer all questions (${Object.keys(selectedAnswers).length}/${lesson.quiz.length})`}
          </button>
        </div>
      </div>
    </div>
  );
}
