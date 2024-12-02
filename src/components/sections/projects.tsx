'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'My Portfolio',
    description: 'My Portfolio showcases my web development projects with a modern and functional design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    image: '/of-portfolio.png',
    link: '/'
  },
  {
    title: 'Onda Dura',
    description: 'Project developed voluntarily for the Onda Dura church.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    image: '/onda-dura.png',
    link: '#'
  },
  // Add more projects as needed
]

export function ProjectsSection() {
  return (
    <section id='projects' className="w-full min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden border"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-muted" />
                {/* Add project image here */}
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
