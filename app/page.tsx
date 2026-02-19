'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Projects from '@/components/sections/Projects'
import Certificate from '@/components/sections/Certificate'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-20">
        {activeSection === 'about' && <About />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'certificate' && <Certificate />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  )
}
