'use client'

export default function Resume() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Lead development of scalable web applications, mentor junior developers',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2021 - 2023',
      description: 'Developed and maintained multiple client projects using React and Node.js',
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc',
      period: '2020 - 2021',
      description: 'Built frontend components and basic backend APIs',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold mb-12 text-foreground">Resume</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-primary">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</p>
            </div>
            <p className="text-foreground leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-primary/10 p-8 rounded-lg border border-primary/20">
        <h3 className="text-2xl font-bold text-primary mb-4">Key Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-foreground mb-2">Frontend Skills</p>
            <p className="text-muted-foreground">HTML5, CSS3, JavaScript, React, Next.js, TypeScript, Tailwind CSS</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Backend Skills</p>
            <p className="text-muted-foreground">Node.js, Express, PostgreSQL, MongoDB, REST APIs, GraphQL</p>
          </div>
        </div>
      </div>
    </section>
  )
}
