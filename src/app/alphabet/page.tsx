"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAlphabetData, AlphabetCharacter } from '@/data/alphabet';

export default function AlphabetPage() {
  const [selectedAlphabet, setSelectedAlphabet] = useState<'hiragana' | 'katakana'>('hiragana');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [studyMode, setStudyMode] = useState<'learn' | 'quiz'>('learn');

  useEffect(() => {
    document.title = "Japanese Alphabets — 4B-EBook";
  }, []);

  const alphabetData = getAlphabetData(selectedAlphabet);
  const currentCharacter = alphabetData.characters[currentCardIndex];

  const playAudio = (character: string, romaji: string) => {
    setPlayingAudio(romaji);
    const utterance = new SpeechSynthesisUtterance(character);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    utterance.onend = () => setPlayingAudio(null);
    speechSynthesis.speak(utterance);
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % alphabetData.characters.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + alphabetData.characters.length) % alphabetData.characters.length);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const resetCards = () => {
    setIsFlipped(false);
    setCurrentCardIndex(0);
  };

  if (!currentCharacter) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="text-6xl mb-4">🔤</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">No characters found</h1>
          <Link href="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 md:px-12 md:py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6 md:mb-8">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-[#E07A7A] text-center">Japanese Alphabets</h1>
        </div>

        {/* Alphabet Selector */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="bg-white rounded-2xl p-1 md:p-2 shadow-sm border border-slate-100 w-full max-w-sm">
            <button
              onClick={() => {
                setSelectedAlphabet('hiragana');
                resetCards();
              }}
              className={`w-full px-4 py-3 md:px-6 rounded-xl font-semibold transition-all text-sm md:text-base ${
                selectedAlphabet === 'hiragana'
                  ? 'bg-[#E07A7A] text-white'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Hiragana (ひらがな)
            </button>
            <button
              onClick={() => {
                setSelectedAlphabet('katakana');
                resetCards();
              }}
              className={`w-full px-4 py-3 md:px-6 rounded-xl font-semibold transition-all text-sm md:text-base ${
                selectedAlphabet === 'katakana'
                  ? 'bg-[#E07A7A] text-white'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Katakana (カタカナ)
            </button>
          </div>
        </div>
      </div>

      {/* Main Flashcard */}
      <div className="max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <div className="text-center mb-4 md:mb-6">
          <div className="text-xs md:text-sm text-slate-600 mb-2">
            Card {currentCardIndex + 1} of {alphabetData.characters.length}
          </div>
          <div className="w-full bg-slate-200 rounded-full h-1 md:h-2">
            <div 
              className="bg-[#E07A7A] h-1 md:h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentCardIndex + 1) / alphabetData.characters.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Flashcard */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-slate-200 overflow-hidden mb-6 md:mb-8">
          <div className="aspect-[3/2] md:aspect-[4/3] relative">
            {/* Card Content */}
            <div 
              className={`absolute inset-0 transition-transform duration-500 transform-gpu ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of Card */}
              <div className="absolute inset-0 backface-hidden">
                <div className="h-full flex flex-col items-center justify-center p-4 md:p-8">
                  <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-slate-800 mb-2 md:mb-4">
                    {currentCharacter.character}
                  </div>
                  <div className="text-sm md:text-xl text-slate-600 mb-3 md:mb-6">
                    {selectedAlphabet === 'hiragana' ? 'Hiragana' : 'Katakana'}
                  </div>
                  <button
                    onClick={() => playAudio(currentCharacter.character, currentCharacter.romaji)}
                    disabled={playingAudio === currentCharacter.romaji}
                    className={`px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl font-semibold transition-all text-sm md:text-base ${
                      playingAudio === currentCharacter.romaji
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-[#E07A7A] hover:bg-[#D06666] text-white'
                    }`}
                  >
                    {playingAudio === currentCharacter.romaji ? '🔊 Playing...' : '🔊 Pronounce'}
                  </button>
                </div>
              </div>

              {/* Back of Card */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <div className="h-full flex flex-col items-center justify-center p-4 md:p-8">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E07A7A] mb-2 md:mb-4">
                    {currentCharacter.romaji}
                  </div>
                  <div className="text-sm md:text-lg text-slate-600 mb-3 md:mb-6">
                    Pronunciation
                  </div>
                  {currentCharacter.examples && currentCharacter.examples.length > 0 && (
                    <div className="text-center">
                      <div className="text-xs md:text-sm text-slate-500 mb-1 md:mb-2">Examples:</div>
                      <div className="text-sm md:text-lg text-slate-700">
                        {currentCharacter.examples.join(', ')}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Flip Button */}
            <button
              onClick={flipCard}
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 shadow-md transition-all"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-6 md:mb-8">
          <button
            onClick={prevCard}
            className="px-4 py-2 md:px-6 md:py-3 bg-white hover:bg-slate-50 text-slate-700 rounded-xl md:rounded-2xl font-semibold transition-all border border-slate-200 shadow-sm text-sm md:text-base"
          >
            ← Previous
          </button>
          
          <button
            onClick={flipCard}
            className="px-6 py-2 md:px-8 md:py-3 bg-[#E07A7A] hover:bg-[#D06666] text-white rounded-xl md:rounded-2xl font-semibold transition-all shadow-sm text-sm md:text-base"
          >
            {isFlipped ? 'Show Character' : 'Show Pronunciation'}
          </button>
          
          <button
            onClick={nextCard}
            className="px-4 py-2 md:px-6 md:py-3 bg-white hover:bg-slate-50 text-slate-700 rounded-xl md:rounded-2xl font-semibold transition-all border border-slate-200 shadow-sm text-sm md:text-base"
          >
            Next →
          </button>
        </div>

        {/* Quick Navigation Grid */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-200 mb-6 md:mb-8">
          <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-3 md:mb-4 text-center">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-1 md:gap-2">
            {alphabetData.characters.map((char, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentCardIndex(index);
                  setIsFlipped(false);
                }}
                className={`p-1 md:p-2 rounded-md md:rounded-lg text-xs md:text-sm font-medium transition-all ${
                  index === currentCardIndex
                    ? 'bg-[#E07A7A] text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {char.character}
              </button>
            ))}
          </div>
        </div>

        {/* Learning Tips */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 md:p-6 border border-pink-200">
          <h3 className="text-base md:text-lg font-semibold text-[#E07A7A] mb-2 md:mb-3 flex items-center gap-2">
            💡 Learning Tips
          </h3>
          <div className="space-y-1 md:space-y-2 text-sm md:text-base text-slate-700">
            <p>• <strong>Practice daily:</strong> Spend 10-15 minutes each day reviewing flashcards</p>
            <p>• <strong>Use audio:</strong> Listen to pronunciations to improve your accent</p>
            <p>• <strong>Write them down:</strong> Practice writing characters by hand</p>
            <p>• <strong>Group learning:</strong> Learn characters in groups (a-row, ka-row, etc.)</p>
            <p>• <strong>Test yourself:</strong> Use quiz mode to check your knowledge</p>
          </div>
        </div>
      </div>
    </div>
  );
}