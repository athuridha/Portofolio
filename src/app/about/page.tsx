'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { aboutData } from '@/app/data/aboutData'
import { Phone, Mail, Linkedin, Github } from 'lucide-react'

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
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <div className="overflow-hidden mb-4 sm:mb-0">
                  <Image
                    src={aboutData.image}
                    alt={aboutData.name}
                    width={800}
                    height={1200}
                    className="object-cover w-full h-full rounded-full lg:rounded-none"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{aboutData.name}</h3>
                  <p className="text-lg mb-2">{aboutData.role}</p>
                  <p className="text-base mb-4">
                    {aboutData.description}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="mr-2" />
                    {aboutData.contact.phone}
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-2" />
                    {aboutData.contact.email}
                  </li>
                  <li className="flex items-center">
                    <Linkedin className="mr-2" />
                    <a href={`https://${aboutData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{aboutData.contact.linkedin}</a>
                  </li>
                  <li className="flex items-center">
                    <Github className="mr-2" />
                    <a href={aboutData.contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{aboutData.contact.github}</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📍</span>
                    {aboutData.contact.location}
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-gray-100 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-2">
                      <skill.icon className="h-6 w-6" />
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
          {aboutData.education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 rounded-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold">{edu.institution}</h4>
              <p>{edu.degree}</p>
              <p className="text-sm text-gray-600">{edu.period}</p>
              <p className="mt-2">{edu.details}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6 mt-12">Work Experience</h2>
          {aboutData.workExperience.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
              <p className="text-lg mb-2">{exp.company} - {exp.location}</p>
              <p className="text-sm text-gray-600 mb-4">{exp.period}</p>
              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>
      </main>
    </div>
  )
}