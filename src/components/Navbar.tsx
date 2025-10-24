'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Subtle dark overlay for navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm" />
      
      {/* Navbar content */}
      <div className="relative px-8 py-6">
        <h1 className="text-2xl md:text-3xl font-light tracking-wider text-white">
          Xiaomi | S12 Ultra
        </h1>
      </div>
    </motion.nav>
  );
}
