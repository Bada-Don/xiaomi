"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  "Store",
  "Phones",
  "Tablets",
  "Discover",
  "Support",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-auto mt-4 px-6 transition-all duration-500 ease-in-out lg:px-12 ${
          scrolled
            ? "bg-black/70 max-w-4xl rounded-2xl backdrop-blur-lg shadow-lg lg:px-5"
            : "max-w-7xl"
        }`}
      >
        <div className="flex items-center justify-between py-3 lg:py-4 text-white">
        {/* Left: Logo */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/xiaomi-brand-logo.png"
              alt="Xiaomi Logo"
              width={100}
              height={32}
              className="object-contain"
            />
          </Link>
        </motion.div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium flex-1 justify-center">
          <AnimatePresence>
            {navLinks.map((link, index) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors relative group"
                >
                  {link}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right: Icons */}
        <motion.div
          className="flex items-center space-x-5 flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {[Search, ShoppingCart, User].map((Icon, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-full"
            >
              <Icon className="w-5 h-5" />
            </motion.button>
          ))}
        </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
