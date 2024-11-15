'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { PenTool, Film, Camera, Terminal, Code } from 'lucide-react'
import Link from 'next/link'

const skills = [
  { name: 'Adobe Photoshop', level: 90, icon: <PenTool className="h-6 w-6" /> },
  { name: 'Adobe After Effects', level: 85, icon: <Film className="h-6 w-6" /> },
  { name: 'Adobe Premiere Pro', level: 80, icon: <Camera className="h-6 w-6" /> },
  { name: 'Python', level: 75, icon: <Terminal className="h-6 w-6" /> },
  { name: 'Front-End Development', level: 85, icon: <Code className="h-6 w-6" /> },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/">Back to Home</Link>
        </Button>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-6 mb-6">
                <Image
                  src="/images/amar.png?height=150&width=150"
                  alt="Your Name"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <div>
                  <p className="text-base mb-4">
                    Here&apos;s where you can write a more detailed introduction about yourself, your journey in web development and design, and what motivates you in your career. You can expand on your experiences, achievements, and future goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-gray-100 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-2">
                      {skill.icon}
                      <h4 className="text-base font-semibold ml-2">{skill.name}</h4>
                    </div>
                    <motion.div 
                      className="w-full bg-gray-300 rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <motion.div
                        className="bg-black h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (index * 0.1) + 0.5 }}
                      ></motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Education</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Your University</h3>
            <p className="text-base mb-2">Degree in Computer Science</p>
            <p>Graduation Year: 20XX</p>
            <p className="mt-4">You can add more details about your educational background, relevant coursework, academic achievements, or any significant projects you worked on during your studies.</p>
          </div>
        </motion.section>
      </main>
    </div>
  )
}