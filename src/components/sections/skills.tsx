'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Material UI']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'MongoDB', 'PostgreSQL']
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Jira', 'Vercel', 'Figma']
  }
]

export function SkillsSection() {
  return (
    <section id='skills' className="w-full min-h-screen py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
