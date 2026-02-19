'use client'

// Skill categories with their respective colors
const skillColors = {
  frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  backend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  tools: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  database: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
}

export default function About() {
  const handleScroll = (sectionId: string) => {
    // This will trigger the header's navigation system
    const event = new CustomEvent('sectionChange', { detail: sectionId });
    window.dispatchEvent(event);
    
    // Scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const frontendSkills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Tailwind CSS',
    'Bootstrap',
    'Figma',
    'React.js'
  ]

  const backendSkills = [
    'Node.js',
    'Express'
  ]

  const databaseSkills = [
    'MongoDB',
    'MySQL',
    // 'Supabase',
    // 'Google Firestore'
  ]

  const tools = [
    'Git & GitHub',
    'VS Code',
    'Vercel',
    'Firebase',
    // 'Terminal',
    'Stitch',
    'Uizard',
    'Google AI Studio',
    // 'n8n',
    // 'Appili',
    'Google Firebase Studio',
    'Google Firebase Console',
    'Responsive Design'
  ]



  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Front-End Developer
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Final-year student with a strong passion for Front-End Web Development, with a primary focus on frontend technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll('projects')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View Projects
            </button>
            <a
              href="/BMW Resume.pdf"
              download
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Download Resume
            </a>
            <button
              onClick={() => handleScroll('contact')}
              className="border-2 border-muted-foreground text-muted-foreground px-8 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I am a final-year student with a strong interest in Front-End Web Development, with a primary focus on frontend technologies. I have built over 50 projects, which has helped me develop a solid understanding of creating responsive, clean, and user-friendly interfaces.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I enjoy working on the frontend because it allows me to combine logic with design and directly improve the user experience. Alongside frontend development, I am also building my skills in backend technologies to grow as a well-rounded full stack developer.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I am passionate about learning, experimenting with new tools, and improving my development workflow through hands-on projects. I am currently looking for opportunities where I can apply my skills, gain real-world experience, and continue growing as a developer.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="bg-card/60 rounded-xl p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Skills & Tools</h2>
          <div className="mx-auto mb-6 w-24 h-1 rounded-full bg-primary/30" />

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-card/40 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${skillColors.frontend} shadow-sm ring-1 ring-primary/10 transition-transform hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-card/40 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Database & Storage</h3>
              <div className="flex flex-wrap gap-3">
                {databaseSkills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${skillColors.database} shadow-sm ring-1 ring-amber-300/20 transition-transform hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-card/40 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${skillColors.tools} shadow-sm ring-1 ring-purple-300/20 transition-transform hover:scale-105`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
          <div className="text-4xl mb-3">40+</div>
          <h3 className="text-lg font-semibold text-foreground">Projects Built</h3>
          <p className="text-muted-foreground text-sm">Hands-on experience across various domains</p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
          <div className="text-4xl mb-3">Frontend</div>
          <h3 className="text-lg font-semibold text-foreground">Specialization</h3>
          <p className="text-muted-foreground text-sm">HTML5, CSS3, Javascript, Tailwind, React.js, UI/UX</p>
        </div>
        {/* <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
          <div className="text-4xl mb-3">Full Stack</div>
          <h3 className="text-lg font-semibold text-foreground">Growth</h3>
          <p className="text-muted-foreground text-sm">Building backend skills continuously</p>
        </div> */}
      </div>


    </section>
  )
}
