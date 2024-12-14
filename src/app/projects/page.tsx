'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { projects } from '@/app/data/projectsData'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/">Back to Home</Link>
        </Button>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-gray-100 p-6 rounded-lg flex flex-col shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-200 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="outline" className="flex items-center gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="default" className="flex items-center gap-2">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}

