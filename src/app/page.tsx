'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Menu, User, Briefcase, Phone, ChevronRight, X, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/app/data/projectsData'
import { aboutData } from '@/app/data/aboutData'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000) // Simulate loading time
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sections = [
    { id: "hero", title: "About & Skills", icon: User },
    { id: "projects", title: "Projects", icon: Briefcase },
    { id: "contact", title: "Contact", icon: Phone },
  ]

  const SplashScreen = () => (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-4xl sm:text-6xl font-bold text-white"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        AMAR
      </motion.div>
    </motion.div>
  )

  const NavBar = () => {
    return (
      <>
        <nav
          className="fixed left-0 top-0 h-screen w-16 bg-black/90 backdrop-blur flex flex-col items-center py-8 gap-6 border-r border-gray-800 z-40 hidden lg:flex"
        >
          {sections.map(({ id, title, icon: Icon }) => (
            <NavItem key={id} id={id} title={title} Icon={Icon} setActiveSection={setActiveSection} />
          ))}
        </nav>
        <div className="lg:hidden">
          {!loading && (
            <Button
              variant="outline"
              size="icon"
              className="fixed top-4 right-4 z-40 text-white border-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed inset-y-0 right-0 w-64 bg-black/90 backdrop-blur z-40 overflow-y-auto"
              >
                <motion.nav
                  className="flex flex-col items-start justify-start h-full p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  {sections.map(({ id, title, icon: Icon }) => (
                    <NavItemMobile
                      key={id}
                      id={id}
                      title={title}
                      Icon={Icon}
                      setActiveSection={setActiveSection}
                      onClick={() => setIsMobileMenuOpen(false)}
                    />
                  ))}
                  <Button className="mt-4 w-full bg-white text-black hover:bg-gray-200">
                      <Link href="/Amara Thuridha-resume.pdf" download> {/* Menambahkan atribut download */}
                        Download CV
                      </Link>
                  </Button>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    )
  }

  const NavItem = ({ id, title, Icon, setActiveSection }: { id: string; title: string; Icon: React.ElementType; setActiveSection: (section: string) => void }) => (
    <div className="relative group">
      <a
        href={`#${id}`}
        className={cn(
          "p-3 rounded-xl flex items-center justify-center transition-colors duration-200",
          activeSection === id ? "bg-white text-black" : "text-white hover:bg-gray-800"
        )}
        onClick={(e) => {
          e.preventDefault()
          const element = document.getElementById(id)
          if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
          setActiveSection(id)
        }}
      >
        <Icon className="h-6 w-6" />
        <span className="sr-only">{title}</span>
      </a>
      <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {title}
      </div>
    </div>
  )

  const NavItemMobile = ({ id, title, Icon, setActiveSection, onClick }: { id: string; title: string; Icon: React.ElementType; setActiveSection: (section: string) => void; onClick?: () => void }) => (
    <a
      href={`#${id}`}
      className={cn(
        "p-3 rounded-xl flex items-center justify-start w-full transition-colors duration-200 mb-2",
        activeSection === id ? "bg-white text-black" : "text-white hover:bg-gray-800"
      )}
      onClick={(e) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
        setActiveSection(id)
        if (onClick) onClick()
      }}
    >
      <Icon className="h-6 w-6 mr-3" />
      <span>{title}</span>
    </a>
  )

  const HeroSection = () => {
    const { scrollYProgress } = useScroll()
    //const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
      <motion.section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity }}
      >
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {aboutData.name}
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {aboutData.role}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </motion.div>
      </motion.section>
    )
  }

  const AboutSection = () => {
    return (
      <div>
        <section id="about" className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-black">About Me & Skills</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 text-black">
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
                    <Button asChild className="mt-4">
                      <Link href="/about">Read More About Me</Link>
                    </Button>
                  </div>
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
          </div>
        </section>
      </div>
    )
  }

  const ProjectsSection = () => {
    return (
      <section id="projects" className="mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">Projects</h2>
            <Button asChild variant="outline" className="text-black border-black hover:bg-gray-100">
              <Link href="/projects">
                <ChevronRight className="mr-2 h-4 w-4" />
                View All Projects
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-gray-100 p-4 rounded-lg flex flex-col text-black"
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
                <Button variant="outline" className="self-start text-black border-black hover:bg-gray-200">View Project</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <AnimatePresence>
        {loading && <SplashScreen />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-black text-white">
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 bg-white origin-left z-30"
          style={{ scaleX }}
        />
        <NavBar />
        <main className="lg:pl-16 min-h-screen overflow-y-auto">
          <HeroSection />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <AboutSection />
            <ProjectsSection />

            <section id="contact" className="mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-black">Get in Touch</h2>
                <div className="flex flex-col items-center">
                  <div className="flex space-x-4 mb-6">
                    {[Mail, Github, Linkedin].map((Icon, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Button variant="outline" size="icon" className="text-black border-black hover:bg-gray-100">
                          <Icon className="h-6 w-6" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Button className="bg-black text-white hover:bg-gray-800" asChild>
                      <Link href="/Amara Thuridha-resume.pdf" download> {/* Menambahkan atribut download */}
                        Download CV
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}