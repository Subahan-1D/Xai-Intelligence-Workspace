'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
            Χ
          </div>
          <span className="text-xl font-bold">Xai</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-sm text-muted-foreground hover:text-foreground transition">
            Product
          </a>
          <a href="#flow" className="text-sm text-muted-foreground hover:text-foreground transition">
            How it works
          </a>
          <a href="#dashboard" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </a>
          <a href="#wow" className="text-sm text-muted-foreground hover:text-foreground transition">
            Experience
          </a>
        </nav>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition">
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.header>
  );
}
