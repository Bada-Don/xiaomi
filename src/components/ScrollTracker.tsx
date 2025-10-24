'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollTracker() {
  const { scrollProgress, scrollY } = useScrollProgress();
  const [currentSection, setCurrentSection] = useState('Hero');

  useEffect(() => {
    const updateSection = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition < windowHeight * 3) {
        setCurrentSection('Hero');
      } else if (scrollPosition < windowHeight * 4.5) {
        setCurrentSection('Specifications');
      } else if (scrollPosition < windowHeight * 5.5) {
        setCurrentSection('Coming Soon');
      } else {
        setCurrentSection('Footer');
      }
    };

    updateSection();
    window.addEventListener('scroll', updateSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateSection);
    };
  }, []);

  return (
    <>
      {/* Vertical Progress Bar - Left Side */}
      <div className="fixed left-0 top-0 h-screen w-1 bg-gray-800/50 z-50">
        <motion.div
          className="w-full bg-gradient-to-b from-orange-500 via-orange-400 to-yellow-400"
          style={{ height: `${scrollProgress}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Scroll Percentage Indicator - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: scrollY > 100 ? 1 : 0, x: scrollY > 100 ? 0 : 20 }}
        className="fixed top-8 right-8 z-50 bg-black/80 backdrop-blur-md border border-gray-700 rounded-full px-6 py-3"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <svg className="transform -rotate-90 w-12 h-12">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-gray-700"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
                className="text-orange-500 transition-all duration-300"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-white">
                {Math.round(scrollProgress)}
              </span>
            </div>
          </div>
          <div className="text-white">
            <div className="text-xs text-gray-400">Scroll</div>
            <div className="text-sm font-semibold">{Math.round(scrollProgress)}%</div>
          </div>
        </div>
      </motion.div>

      {/* Current Section Indicator - Top Right (below percentage) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: scrollY > 100 ? 1 : 0, x: scrollY > 100 ? 0 : 20 }}
        className="fixed top-28 right-8 z-50 bg-black/80 backdrop-blur-md border border-gray-700 rounded-lg px-4 py-2"
      >
        <div className="text-xs text-gray-400">Section</div>
        <div className="text-sm font-semibold text-orange-500">{currentSection}</div>
      </motion.div>

      {/* Scroll Position Indicator - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: scrollY > 100 ? 1 : 0, y: scrollY > 100 ? 0 : 20 }}
        className="fixed bottom-8 right-8 z-50 bg-black/80 backdrop-blur-md border border-gray-700 rounded-lg px-4 py-2"
      >
        <div className="text-xs text-gray-400">Position</div>
        <div className="text-sm font-mono text-white">
          {Math.round(scrollY)}px
        </div>
      </motion.div>
    </>
  );
}
