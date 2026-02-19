'use client'

import { GraduationCap, BookOpen, Award, Code2 } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Application',
      field: 'Computer Application',
      university: 'Chaudhary Charan Singh University, Meerut',
      year: '2023 - 2026',
      cgpa: 'Pursuing',
      details: [
        'Focus on Web Development',
        // 'Advanced Programming Concepts',
        'Database Management Systems',
        // 'Mobile Application Development'
      ],
      icon: <GraduationCap className="w-6 h-6 text-primary" />
    },
    {
      degree: 'Higher Secondary (12th)',
      field: 'Science Stream (PCB)',
      university: 'Mihir Bhoj Inter College',
      year: '2022 - 2023',
      cgpa: '66%',
      details: [
        'Physics, Chemistry, Biology',
      ],
      icon: <BookOpen className="w-6 h-6 text-primary" />
    },
    {
      degree: 'Secondary (10th)',
      field: 'General Education',
      university: 'Mihir Bhoj Inter College',
      year: '2020 - 2021',
      cgpa: '79%',
      details: [
        'Core Academic Foundation',
      ],
      icon: <Award className="w-6 h-6 text-primary" />
    }
  ]

  // Additional skills section
  const skills = [
    { name: 'Web Development', level: '70%' },
    { name: 'UI/UX Design', level: '40%' },
    { name: 'Frontend Frameworks', level: '45%' },
    { name: 'Problem Solving', level: '40%' }
  ]

  return (
    <section id="education" className="py-16 bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education & Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4">My academic journey and technical expertise</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="md:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative mb-10 pl-16 group">
                  {/* Icon container */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {edu.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{edu.year}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{edu.university}</p>
                    <p className="text-muted-foreground text-sm mb-4">{edu.field}</p>
                    
                    <ul className="space-y-2 mt-3">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                        {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center mb-6">
                <Code2 className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
              </div>
              
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Awards</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  {/* <span className="text-primary mr-2 mt-1">🏆</span>
                  <div>
                    <h4 className="font-medium text-foreground">Academic Excellence</h4>
                    <p className="text-sm text-muted-foreground">Consistent performance in academics</p>
                  </div> */}
                </li>
                <li className="flex items-start">
                  {/* <span className="text-primary mr-2 mt-1">🚀</span>
                  <div>
                    <h4 className="font-medium text-foreground">Hackathon Winner</h4>
                    <p className="text-sm text-muted-foreground">1st prize in college coding competition</p>
                  </div> */}
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">🎖️</span>
                  <div>
                    <h4 className="font-medium text-foreground">Top 5 in Class (4th Semester)</h4>
                    <p className="text-sm text-muted-foreground">Ranked among the top 5 students in 4th semester</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">🏆</span>
                  <div>
                    <h4 className="font-medium text-foreground">PDP Class — Cup Award</h4>
                    <p className="text-sm text-muted-foreground">Awarded a cup for achievement in PDP class</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
