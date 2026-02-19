'use client'

import { Award } from 'lucide-react'

export default function Certificate() {
  const certificates = [
    {
      title: 'C Programming Language',
      issuer: 'Infosys Springboard',
      date: 'October 2024',
      credentialId: '',
      credentialUrl: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01384323703937433634517_shared/1-24186848-4716-4344-af37-baafa7d63886.pdf',
      description: 'Completed foundational training in C programming, covering syntax, data types, functions, pointers, and problem-solving concepts.',
    },
    {
      title: 'Advance C++ Course',
      issuer: 'Simplilearn',
      date: 'August 2024',
      credentialId: '7207847',
      credentialUrl: 'https://certificates.simplicdn.net/share/7207847_1723264791.pdf',
      description: 'Completed training in C++ programming, covering OOP concepts, STL basics, memory management, and structured problem solving.',
    },
    {
      title: 'Advance C++',
      issuer: 'Simplilearn',
      date: 'August 2024',
      credentialId: '7207847',
      credentialUrl: 'https://certificates.simplicdn.net/share/7207847_1723264791.pdf',
      description: 'Completed training in C++ programming, covering OOP concepts, STL basics, memory management, and structured problem solving.',
    },
    {
      title: 'HTML5',
      issuer: 'Spoken Tutorial - IIT Bombay',
      date: 'June 2024',
      credentialId: '3859121N48',
      credentialUrl: 'https://spoken-tutorial.org/software-training/test/participant/certificate/115298/3859121/',
      description: 'Completed training in HTML, covering semantic structure, forms, tables, media elements, and responsive webpage structuring fundamentals.',
    },
    {
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      date: 'May 2022',
      credentialId: 'FCC-2022-33333',
      credentialUrl: '#',
      description: 'In-depth course on JavaScript fundamentals, algorithms and data structures',
    },
    {
      title: 'Git & GitHub Mastery',
      issuer: 'Udemy',
      date: 'February 2022',
      credentialId: 'UDEMY-2022-44444',
      credentialUrl: '#',
      description: 'Professional Git and GitHub workflow course for version control and collaboration',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold mb-12 text-foreground">Certificates & Credentials</h2>

      <div className="space-y-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-card rounded-lg border border-border p-8 hover:border-primary transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <Award className="text-primary mt-1 flex-shrink-0" size={24} />
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-primary">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.issuer}</p>
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap">{cert.date}</p>
            </div>

            <p className="text-foreground leading-relaxed mb-4">{cert.description}</p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground">Credential ID:</p>
                <p className="font-mono text-sm text-primary">{cert.credentialId}</p>
              </div>
              <a
                href={cert.credentialUrl}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                View Credential
                <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-12 bg-primary/10 p-8 rounded-lg border border-primary/20">
        <h3 className="text-2xl font-bold text-primary mb-4">Professional Development</h3>
        <p className="text-foreground leading-relaxed">
          I'm committed to continuous learning and professional development. I regularly pursue certifications
          in cloud technologies, programming languages, and emerging technologies to stay current with industry trends
          and best practices.
        </p>
      </div> */}
    </section>
  )
}
