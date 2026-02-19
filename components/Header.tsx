'use client';

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const sections = ['about', 'education', 'projects', 'contact']

  const handleClick = (section: string) => {
    setActiveSection(section)
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur border-b border-border z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">Danish Qureshi</div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden md:flex gap-8">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => handleClick(section)}
                className={`capitalize font-medium transition-colors ${
                  activeSection === section
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border">
          <ul className="px-4 py-4 space-y-3">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleClick(section)}
                  className={`w-full text-left capitalize font-medium transition-colors ${
                    activeSection === section
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
