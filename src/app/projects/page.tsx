'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { projects } from '@/app/data/projectsData'

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-gray-100 p-4 rounded-lg flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-sm mb-4 flex-grow">{project.description}</p>
                <Button variant="outline" className="self-start text-black border-black hover:bg-gray-200">
                  View Project
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}