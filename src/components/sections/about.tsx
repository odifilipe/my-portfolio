'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I&apos;m a passionate developer with experience in building modern web applications.
              I love creating elegant solutions to complex problems.
            </p>
            <p className="text-muted-foreground">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open source, or working on side projects.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Facts</h3>
            <ul className="space-y-2">
              <li>🎓 Computer Science Graduate</li>
              <li>💼 X years of professional experience</li>
              <li>🌍 Based in [Your Location]</li>
              <li>✨ Always learning new technologies</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
