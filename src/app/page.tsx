'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useVideoScroll } from '@/hooks/useVideoScroll';
import Footer from '@/components/footer';
import ScrollTracker from '@/components/ScrollTracker';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useVideoScroll(videoRef, containerRef);

  return (
    <main className="bg-black">
      {/* Scroll Progress Tracker */}
      <ScrollTracker />

      {/* Navbar with subtle overlay */}
      <Navbar />

      {/* Hero Section - Video */}
      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen w-screen overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/S12_scrub_optimized.mp4"
            preload="metadata"
            muted
            playsInline
          />
        </div>
      </div>

      {/* Second Section - Features */}
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="blur" threshold={0.3}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">
              Specifications
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Display', desc: '6.73" AMOLED\n120Hz Refresh Rate', animation: 'slideUp' as const },
              { title: 'Camera', desc: '200MP Main Sensor\n8K Video Recording', animation: 'slideUp' as const },
              { title: 'Performance', desc: 'Snapdragon 8 Gen 2\n12GB RAM', animation: 'slideUp' as const },
              { title: 'Battery', desc: '5000mAh\n120W Fast Charging', animation: 'scale' as const },
              { title: 'Design', desc: 'Premium Glass\nIP68 Water Resistant', animation: 'scale' as const },
              { title: 'Storage', desc: 'Up to 512GB\nUFS 4.0', animation: 'scale' as const },
            ].map((feature, index) => (
              <AnimatedSection
                key={index}
                animation={feature.animation}
                delay={index * 0.1}
                threshold={0.2}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 whitespace-pre-line">{feature.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Third Section - Coming Soon */}
      <section className="min-h-screen bg-black flex items-center justify-center px-8">
        <AnimatedSection animation="scale" threshold={0.3} className="text-center">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8">
            Coming Soon
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            Experience the future of mobile technology
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Notify Me
          </motion.button>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
