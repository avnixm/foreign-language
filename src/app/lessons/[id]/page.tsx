"use client";

import { useParams } from 'next/navigation';
import { getLessonById } from '@/data/lessons';
import Link from 'next/link';
import FloatingQuizCTA from '@/components/FloatingQuizCTA';
import { useState, useEffect, useMemo } from 'react';

type LessonStep = 'introduction' | 'vocabulary' | 'grammar' | 'conversations' | 'cultural-notes' | 'summary';

export default function LessonDetail() {
  const params = useParams();
  const lessonId = parseInt(params.id as string);
  const lesson = getLessonById(lessonId);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState<LessonStep>('introduction');
  const [vocabularyQuizAnswers, setVocabularyQuizAnswers] = useState<{ [key: number]: string }>({});
  const [grammarQuizAnswers, setGrammarQuizAnswers] = useState<{ [key: number]: string }>({});
  const [showVocabQuizResults, setShowVocabQuizResults] = useState(false);
  const [showGrammarQuizResults, setShowGrammarQuizResults] = useState(false);

  // Update page title
  useEffect(() => {
    if (lesson) {
      document.title = `${lesson.title} — 4B-EBook`;
    }
  }, [lesson]);

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  // Generate mini-quiz questions from vocabulary (memoized to prevent regeneration)
  const vocabularyQuiz = useMemo(() => {
    if (!lesson || lesson.vocabulary.length < 4) return [];
    
    // Randomly select 3 vocabulary items
    const shuffled = [...lesson.vocabulary].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3).map((item, idx) => {
      // Create wrong answers from other vocabulary
      const wrongAnswers = lesson.vocabulary
        .filter(v => v.word !== item.word)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(v => v.meaning);
      
      const allOptions = [item.meaning, ...wrongAnswers].sort(() => Math.random() - 0.5);
      
      return {
        id: idx,
        question: `What does "${item.word}" mean?`,
        word: item.word,
        options: allOptions,
        correctAnswer: item.meaning,
      };
    });
  }, [lesson]);

  // Generate mini-quiz questions from grammar (memoized to prevent regeneration)
  const grammarQuiz = useMemo(() => {
    if (!lesson || lesson.grammar.length < 2) return [];
    
    // Randomly select 2 grammar points
    const shuffled = [...lesson.grammar].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2).map((item, idx) => {
      // Create wrong answers from other grammar points
      const wrongAnswers = lesson.grammar
        .filter(g => g.title !== item.title)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(g => g.explanation);
      
      const allOptions = [item.explanation, ...wrongAnswers].sort(() => Math.random() - 0.5);
      
      return {
        id: idx,
        question: `What does "${item.title}" mean?`,
        title: item.title,
        options: allOptions,
        correctAnswer: item.explanation,
      };
    });
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

  // Define lesson steps
  const steps: { id: LessonStep; title: string; icon: string }[] = [
    { id: 'introduction', title: 'Introduction', icon: '📖' },
    { id: 'vocabulary', title: 'Vocabulary', icon: '📝' },
    { id: 'grammar', title: 'Grammar', icon: '📚' },
    { id: 'conversations', title: 'Conversations', icon: '💬' },
    ...(lesson.culturalNotes && lesson.culturalNotes.length > 0 
      ? [{ id: 'cultural-notes' as LessonStep, title: 'Cultural Notes', icon: '🎌' }] 
      : []),
    { id: 'summary', title: 'Summary', icon: '✨' },
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const goToNextStep = () => {
    if (!isLastStep) {
      setCurrentStep(steps[currentStepIndex + 1].id);
      // Reset quiz states when moving to next step
      setShowVocabQuizResults(false);
      setShowGrammarQuizResults(false);
    }
  };

  const goToPreviousStep = () => {
    if (!isFirstStep) {
      setCurrentStep(steps[currentStepIndex - 1].id);
    }
  };

  const checkVocabularyQuiz = () => {
    setShowVocabQuizResults(true);
  };

  const checkGrammarQuiz = () => {
    setShowGrammarQuizResults(true);
  };

  const retryVocabularyQuiz = () => {
    setVocabularyQuizAnswers({});
    setShowVocabQuizResults(false);
  };

  const retryGrammarQuiz = () => {
    setGrammarQuizAnswers({});
    setShowGrammarQuizResults(false);
  };

  const getVocabQuizScore = () => {
    let correct = 0;
    vocabularyQuiz.forEach(q => {
      if (vocabularyQuizAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: vocabularyQuiz.length };
  };

  const getGrammarQuizScore = () => {
    let correct = 0;
    grammarQuiz.forEach(q => {
      if (q && grammarQuizAnswers[q.id]?.toLowerCase().trim() === q.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: grammarQuiz.length };
  };

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
    <div className="min-h-screen bg-white">
      {/* Fixed Header on Mobile */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-200 md:relative md:border-0">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-3 md:py-6">
          {/* Breadcrumb - Hidden on mobile */}
          <nav className="hidden md:flex text-xs text-slate-500 mb-4 items-center gap-2">
            <Link href="/lessons" className="hover:text-[#E07A7A] transition-colors">Lessons</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Lesson {lesson.id}</span>
          </nav>
          
          <div className="mb-3 md:mb-4">
            <h1 className="text-lg md:text-3xl font-bold text-slate-900 mb-1 md:mb-2 leading-tight">
              Lesson {lesson.id}: {lesson.title}
            </h1>
            <p className="text-slate-600 text-xs md:text-sm leading-snug">{lesson.description}</p>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700">
                Step {currentStepIndex + 1} of {steps.length}
              </span>
              <span className="text-xs font-semibold text-[#E07A7A] bg-[#E07A7A]/10 px-2 py-0.5 rounded-full">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-[#E07A7A] to-[#f08888] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-6 pb-24 md:pb-16 pt-4 md:pt-0">

        {/* Step Navigation Tabs */}
        <div className="mb-4 md:mb-8 -mx-4 md:mx-0">
          <div className="overflow-x-auto scrollbar-hide py-1">
            <div className="flex gap-2 px-4 md:px-0 pb-2 min-w-max">
              {steps.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`flex items-center gap-1.5 px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap touch-manipulation ${
                    currentStep === step.id
                      ? 'bg-[#E07A7A] text-white shadow-lg'
                      : idx <= currentStepIndex
                      ? 'bg-slate-200 text-slate-700 active:bg-slate-300 shadow-sm'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-60'
                  }`}
                  disabled={idx > currentStepIndex}
                >
                  <span className="text-sm">{step.icon}</span>
                  <span className="hidden sm:inline">{step.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area - Changes based on current step */}
        <div className="min-h-[50vh] md:min-h-[400px]">
          {/* Introduction */}
          {currentStep === 'introduction' && (
            <div className="animate-fadeIn">
              <div className="bg-gradient-to-br from-[#E07A7A]/10 to-[#E07A7A]/5 rounded-2xl p-4 md:p-6 border-2 border-[#E07A7A]/20 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📖</span>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    What you&apos;ll learn
                  </h2>
                </div>
                <ul className="space-y-2.5 text-sm md:text-base text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E07A7A] text-lg flex-shrink-0 mt-0.5">📝</span>
                    <span><strong className="text-slate-900">{lesson.vocabulary.length} vocabulary words</strong> to expand your Japanese lexicon</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E07A7A] text-lg flex-shrink-0 mt-0.5">📚</span>
                    <span><strong className="text-slate-900">{lesson.grammar.length} grammar concepts</strong> to build sentence structure</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E07A7A] text-lg flex-shrink-0 mt-0.5">💬</span>
                    <span><strong className="text-slate-900">Conversation practice</strong> with real-world dialogues</span>
                  </li>
                  {lesson.culturalNotes && lesson.culturalNotes.length > 0 && (
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#E07A7A] text-lg flex-shrink-0 mt-0.5">🎌</span>
                      <span><strong className="text-slate-900">Cultural insights</strong> about Japanese customs and society</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-4 text-center">
                  <div className="text-3xl mb-2">⏱️</div>
                  <h4 className="font-bold text-slate-900 mb-1 text-xs md:text-sm">Estimated Time</h4>
                  <p className="text-xs text-slate-600">{lesson.estimatedMinutes} min</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-4 text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-bold text-slate-900 mb-1 text-xs md:text-sm">Learning Goals</h4>
                  <p className="text-xs text-slate-600">Master basics</p>
                </div>
              </div>
            </div>
          )}

          {/* Vocabulary */}
          {currentStep === 'vocabulary' && (
            <div className="animate-fadeIn">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                <span>📝</span>
                <span className="text-base md:text-2xl">Vocabulary ({lesson.vocabulary.length} words)</span>
              </h2>

              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            {lesson.vocabulary.map((item, idx) => (
              <div 
                key={idx} 
                    className="bg-white border-2 border-slate-200 rounded-2xl p-3 md:p-4 active:border-[#E07A7A] transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-2 mb-1.5 md:mb-2">
                          <span className="text-lg md:text-2xl font-bold text-slate-900">{item.word}</span>
                      {item.reading && (
                            <span className="text-xs md:text-sm text-slate-500">({item.reading})</span>
                      )}
                    </div>
                        <div className="text-xs md:text-sm text-slate-700">{item.meaning}</div>
                  </div>
                  <button 
                    onClick={() => handlePlayAudio(item.word, idx)}
                        className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-100 active:bg-[#E07A7A] active:text-white flex items-center justify-center transition-all flex-shrink-0 touch-manipulation ${
                      playingAudio === idx ? 'bg-[#E07A7A] text-white scale-110' : 'text-slate-600'
                    }`}
                    aria-label={`Play pronunciation for ${item.word}`}
                  >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.06 5.5 5.5 0 010 7.78.75.75 0 001.06 1.06 7 7 0 000-9.9z" />
                      <path d="M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

              {/* Vocabulary Quick Check */}
              {vocabularyQuiz.length > 0 && (
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl">🧠</span>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">Quick Check!</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4">Test your vocabulary knowledge before moving on:</p>
                  
                  <div className="space-y-3 md:space-y-4">
                    {vocabularyQuiz.map((q) => (
                      <div key={q.id} className="bg-white rounded-xl p-3 md:p-4">
                        <p className="font-semibold text-slate-900 mb-2 md:mb-3 text-sm md:text-base">{q.question}</p>
                        <div className="space-y-2">
                          {q.options.map((option, optIdx) => {
                            const isSelected = vocabularyQuizAnswers[q.id] === option;
                            const isCorrect = option === q.correctAnswer;
                            const showResult = showVocabQuizResults;
                            const isWrong = showResult && isSelected && !isCorrect;
                            const isRight = showResult && isSelected && isCorrect;
                            const showCorrectAnswer = showResult && isCorrect && !isSelected;
                            
                            return (
                              <button
                                key={optIdx}
                                onClick={() => !showVocabQuizResults && setVocabularyQuizAnswers({ ...vocabularyQuizAnswers, [q.id]: option })}
                                disabled={showVocabQuizResults}
                                className={`w-full text-left px-3 md:px-4 py-2.5 md:py-3 rounded-xl border-2 transition-all touch-manipulation ${
                                  isRight
                                    ? 'border-green-500 bg-green-50 text-green-900'
                                    : isWrong
                                    ? 'border-red-500 bg-red-50 text-red-900'
                                    : showCorrectAnswer
                                    ? 'border-green-300 bg-green-50/50 text-green-800'
                                    : isSelected && !showResult
                                    ? 'border-purple-500 bg-purple-50'
                                    : 'border-slate-200 hover:border-purple-300'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <span className="text-sm">{option}</span>
                                    {showCorrectAnswer && (
                                      <span className="text-xs text-green-700 ml-2">(Correct answer)</span>
                                    )}
                                  </div>
                                  {isRight && <span className="text-green-600 text-lg">✓</span>}
                                  {isWrong && <span className="text-red-600 text-lg">✗</span>}
                                  {showCorrectAnswer && <span className="text-green-600 text-lg">✓</span>}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {!showVocabQuizResults ? (
                    <button
                      onClick={checkVocabularyQuiz}
                      disabled={Object.keys(vocabularyQuizAnswers).length < vocabularyQuiz.length}
                      className={`mt-3 md:mt-4 w-full py-2.5 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all touch-manipulation ${
                        Object.keys(vocabularyQuizAnswers).length < vocabularyQuiz.length
                          ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                          : 'bg-purple-500 text-white active:bg-purple-600'
                      }`}
                    >
                      Check Answers
                    </button>
                  ) : (
                    <div className="mt-3 md:mt-4 bg-white rounded-xl p-3 md:p-4">
                      <div className="text-center mb-3">
                        <div className="text-xl md:text-2xl mb-1 md:mb-2">
                          {getVocabQuizScore().correct === vocabularyQuiz.length ? '🎉' : '💪'}
                        </div>
                        <p className="font-semibold text-slate-900 text-sm md:text-base">
                          You got {getVocabQuizScore().correct} out of {getVocabQuizScore().total} correct!
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 mt-1">
                          {getVocabQuizScore().correct === vocabularyQuiz.length
                            ? 'Perfect! Ready to move on!'
                            : 'Review the correct answers above.'}
                        </p>
                      </div>
                      {getVocabQuizScore().correct < vocabularyQuiz.length && (
                        <button
                          onClick={retryVocabularyQuiz}
                          className="w-full py-2 md:py-2.5 rounded-xl font-medium text-sm md:text-base bg-purple-100 text-purple-700 active:bg-purple-200 transition-all touch-manipulation"
                        >
                          🔄 Try Again
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Grammar */}
          {currentStep === 'grammar' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span>📚</span>
                Grammar Points ({lesson.grammar.length} concepts)
              </h2>

              <div className="space-y-4 mb-8">
            {lesson.grammar.map((point, idx) => (
                  <div key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-5">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {idx + 1}. {point.title}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed mb-4">{point.explanation}</p>

                {/* Examples */}
                {point.examples.length > 0 && (
                  <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Examples:</h4>
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

              {/* Inline Tips - Show relevant tips after grammar points */}
              {lesson.tips && lesson.tips.length > 0 && (
                <div className="mb-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-2xl p-4 md:p-5">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl">💡</span>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">Key Tips & Notes</h3>
                  </div>
                  <div className="space-y-2 md:space-y-2.5">
                    {lesson.tips.map((tip, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-2.5 md:p-3 border border-amber-200"
                      >
                        <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                          {tip}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Grammar Practice */}
              {grammarQuiz.length > 0 && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">✏️</span>
                    <h3 className="text-lg font-bold text-slate-900">Practice Time!</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">Apply what you&apos;ve learned:</p>
                  
                  <div className="space-y-4">
                    {grammarQuiz.map((q) => {
                      if (!q) return null;
                      const userAnswer = grammarQuizAnswers[q.id]?.toLowerCase().trim() || '';
                      const isCorrect = userAnswer === q.correctAnswer;
                      
                      return (
                        <div key={q.id} className="bg-white rounded-xl p-4">
                          <p className="font-semibold text-slate-900 mb-2">{q.question}</p>
                          
                          <input
                            type="text"
                            value={grammarQuizAnswers[q.id] || ''}
                            onChange={(e) => !showGrammarQuizResults && setGrammarQuizAnswers({ ...grammarQuizAnswers, [q.id]: e.target.value })}
                            disabled={showGrammarQuizResults}
                            placeholder="Type your answer..."
                            className={`w-full px-4 py-3 rounded-xl border-2 text-sm transition-all ${
                              showGrammarQuizResults && isCorrect
                                ? 'border-green-500 bg-green-50'
                                : showGrammarQuizResults && !isCorrect
                                ? 'border-red-500 bg-red-50'
                                : 'border-slate-200 focus:border-blue-400 focus:outline-none'
                            }`}
                          />
                          
                          {showGrammarQuizResults && (
                            <div className={`mt-2 text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                              {isCorrect ? (
                                <span>✓ Correct!</span>
                              ) : (
                                <span>✗ The correct answer is: {q.correctAnswer}</span>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {!showGrammarQuizResults ? (
                    <button
                      onClick={checkGrammarQuiz}
                      disabled={Object.keys(grammarQuizAnswers).length < grammarQuiz.length}
                      className={`mt-4 w-full py-3 rounded-xl font-semibold transition-all ${
                        Object.keys(grammarQuizAnswers).length < grammarQuiz.length
                          ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      Check Answers
                    </button>
                  ) : (
                    <div className="mt-4 bg-white rounded-xl p-4">
                      <div className="text-center mb-3">
                        <div className="text-2xl mb-2">
                          {getGrammarQuizScore().correct === grammarQuiz.length ? '🎉' : '📝'}
                        </div>
                        <p className="font-semibold text-slate-900">
                          You got {getGrammarQuizScore().correct} out of {getGrammarQuizScore().total} correct!
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          {getGrammarQuizScore().correct === grammarQuiz.length
                            ? 'Excellent work!'
                            : 'Review the correct answers above.'}
                        </p>
                      </div>
                      {getGrammarQuizScore().correct < grammarQuiz.length && (
                        <button
                          onClick={retryGrammarQuiz}
                          className="w-full py-2.5 rounded-xl font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all"
                        >
                          🔄 Try Again
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Conversations */}
          {currentStep === 'conversations' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span>💬</span>
                Conversation Practice
              </h2>

          <div className="space-y-6">
            {lesson.conversations.map((conversation, convIdx) => (
                  <div key={convIdx}>
                    <h3 className="text-sm font-semibold text-slate-500 mb-3">Dialogue {convIdx + 1}</h3>
                    <div className="bg-white border-2 border-slate-200 rounded-2xl p-5">
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
              </div>
            ))}
          </div>

              {/* Conversation Comprehension */}
              <div className="mt-8 bg-teal-50 border-2 border-teal-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-lg font-bold text-slate-900">Think About It</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm font-semibold text-slate-900 mb-2">💭 Reflection Questions:</p>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li>• Can you identify the key grammar patterns used in these conversations?</li>
                      <li>• Try reading the dialogue out loud - practice makes perfect!</li>
                      <li>• How would you respond in a similar situation?</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm font-semibold text-slate-900 mb-2">🎤 Practice Tip:</p>
                    <p className="text-sm text-slate-600">
                      Record yourself reading these conversations, then listen back. 
                      This helps improve pronunciation and build confidence!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* Cultural Notes */}
          {currentStep === 'cultural-notes' && lesson.culturalNotes && lesson.culturalNotes.length > 0 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span>🎌</span>
                Cultural Notes
              </h2>

              <div className="space-y-4">
              {lesson.culturalNotes.map((note, idx) => (
                  <div key={idx} className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
                    <div className="flex gap-3">
                      <div className="text-2xl flex-shrink-0">💡</div>
                  <p className="text-sm text-slate-700 leading-relaxed">{note}</p>
                    </div>
                </div>
              ))}
              </div>
            </div>
          )}

          {/* Summary */}
          {currentStep === 'summary' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span>✨</span>
                Lesson Complete!
              </h2>

              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6 mb-6">
                <div className="text-center">
                  <div className="text-5xl mb-3">🎉</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Great job!</h3>
                  <p className="text-slate-700 mb-4">You&apos;ve completed Lesson {lesson.id}: {lesson.title}</p>
                </div>
              </div>

              <div className="grid gap-4 mb-6">
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5">
                  <h4 className="font-semibold text-slate-900 mb-3">What you learned:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>✓ {lesson.vocabulary.length} new vocabulary words</li>
                    <li>✓ {lesson.grammar.length} grammar concepts</li>
                    <li>✓ Real conversation examples</li>
                    {lesson.culturalNotes && lesson.culturalNotes.length > 0 && (
                      <li>✓ Cultural insights about Japan</li>
                    )}
                  </ul>
                </div>

                <div className="bg-[#E07A7A] rounded-2xl p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">Ready to test your knowledge?</h3>
                  <p className="text-white/90 mb-4 text-sm">Take the quiz to practice what you&apos;ve learned</p>
                  <Link
                    href={`/quizzes/${lesson.id}`}
                    className="inline-block bg-white text-[#E07A7A] px-6 py-2.5 rounded-2xl font-semibold text-sm hover:bg-slate-50 transition-all"
                  >
                    Take Quiz →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fixed Bottom Navigation - Only show when not on summary */}
        {currentStep !== 'summary' && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-slate-200 shadow-2xl md:relative md:border-0 md:shadow-none md:mt-6 z-20">
            <div className="mx-auto max-w-5xl px-4 py-3 md:py-0">
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={goToPreviousStep}
                  disabled={isFirstStep}
                  className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm md:text-base transition-all touch-manipulation ${
                    isFirstStep
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-200 text-slate-700 active:bg-slate-300 shadow-md'
                  }`}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Previous</span>
                </button>

                <button
                  onClick={goToNextStep}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm md:text-base bg-gradient-to-r from-[#E07A7A] to-[#f08888] text-white active:from-[#D06666] active:to-[#e07777] transition-all touch-manipulation shadow-lg"
                >
                  <span>Next Step</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <FloatingQuizCTA lessonId={lesson.id} />
    </div>
  );
}
