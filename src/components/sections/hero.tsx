'use client'

import { motion } from 'framer-motion'

export function HeroSection() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'});
    }
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I&apos;m <span className="text-primary">Odi Filipe</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Full Stack Developer | Creative Problem Solver
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90" onClick={() => handleScroll('projects')}>
            View Projects
          </button>
          <button className="px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg" onClick={() => handleScroll('contact')}>
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  )
}
