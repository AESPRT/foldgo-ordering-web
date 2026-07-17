'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/Button';
import { AppContainer } from '../../components/layout/AppContainer';

const ONBOARDING_SLIDES = [
  {
    icon: "🧺",
    title: "Drop Off Anywhere",
    description: "Book premium laundry care seamlessly. Select a nearby automated smart hub or local partner branch in minutes."
  },
  {
    icon: "⚡",
    title: "Express Processing",
    description: "Real-time automated scheduling. Monitor your clothes through sorting, deep washing, and tailored folding steps."
  },
  {
    icon: "🚚",
    title: "Real-time Tracking",
    description: "Track our driver right to your door. Get instant SMS token updates when delivery loops clear fulfillment."
  }
];

export const OnboardingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isSplash, setIsSplash] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (isSplash) {
    return (
      <AppContainer className="justify-center items-center p-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="text-center animate-fade-in space-y-4">
          <div className="w-24 h-24 bg-blue-600 rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-2xl shadow-blue-500/30 animate-bounce">
            🌀
          </div>
          <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Fold&Go
          </h1>
          <p className="text-blue-400/80 font-mono tracking-widest text-xs uppercase">Premium Laundry Ecosystem</p>
        </div>
      </AppContainer>
    );
  }

  const activeSlide = ONBOARDING_SLIDES[currentSlide];

  return (
    <AppContainer className="p-6 justify-between">
      {/* Top action skip region */}
      <div className="flex justify-end pt-4">
        <button 
          onClick={onComplete}
          className="text-slate-400 hover:text-white text-sm font-medium transition"
        >
          Skip
        </button>
      </div>

      {/* Slide graphics and content area */}
      <div className="my-auto space-y-8 text-center px-4">
        <div className="w-40 h-40 bg-slate-800/80 rounded-full mx-auto flex items-center justify-center text-6xl shadow-xl border border-slate-700/50 animate-pulse">
          {activeSlide.icon}
        </div>
        
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {activeSlide.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
            {activeSlide.description}
          </p>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 pt-2">
          {ONBOARDING_SLIDES.map((_, index) => (
            <div 
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700'}`}
            />
          ))}
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="pb-8 space-y-3">
        <Button 
          variant="primary"
          onClick={() => {
            if (currentSlide < ONBOARDING_SLIDES.length - 1) {
              setCurrentSlide(prev => prev + 1);
            } else {
              onComplete();
            }
          }}
        >
          {currentSlide === ONBOARDING_SLIDES.length - 1 ? "Get Started" : "Continue"}
        </Button>
      </div>
    </AppContainer>
  );
};