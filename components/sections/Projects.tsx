'use client'

import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Hospital Management System',
      description: 'A comprehensive console-based Hospital Management System built using C language. This project efficiently manages patients, doctors, and appointments using data structures, file handling, and a user-friendly menu-driven interface.',
      tags: ['C Language',],
      github: 'https://github.com/Daniish-Qureshi/Hospital-Management-System-in-C',
      live: '#',
    },
    {
      title: 'Captcha Generator',
      description: 'A simple and interactive CAPTCHA generator built with HTML, CSS, and JavaScript. This project provides a basic implementation of a CAPTCHA system that can be integrated into web applications for basic bot protection.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Captcha-Generator',
      live: 'https://captcha-generator-orpin.vercel.app/',
    },
    {
      title: 'Bus Reservation System',
      description: 'A console-based Bus Reservation System that allows users to book bus tickets, view available buses, and manage reservations efficiently.',
      tags: ['C++ Language'],
      github: 'https://github.com/Daniish-Qureshi/Bus-Reservation-System-in-Cpp',
      live: '#',
    },
    {
      title: 'Contact Management System',
      description: 'A lightweight, command-line based Contact Management System implemented in C. This project provides a simple yet functional way to manage your contacts through an easy-to-use text interface.',
      tags: ['C Language'],
      github: 'https://github.com/Daniish-Qureshi/Contact-Mangement-System-in-C',
      live: '#',
    },
    {
      title: 'Bank Management System',
      description: 'A simple yet powerful Bank Management System implemented in C language. This console-based application provides essential banking operations for account management.',
      tags: ['C Language'],
      github: 'https://github.com/Daniish-Qureshi/Bank-Management-System-in-C',
      live: '#',
    },
    {
      title: 'Simple Calculator',
      description: 'A modern, responsive calculator web application built with HTML, CSS, and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/SimpleCalculator',
      live: 'https://simple-calculator-two-rust.vercel.app/',
    },
    {
      title: 'Netflix Clone',
      description: 'A simple and responsive Netflix Clone built using HTML and CSS. This project mimics the homepage design of Netflix and is fully user-friendly with a clean layout, optimized for different screen sizes.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Netflix-Clone',
      live: 'https://netflix-clone-eight-inky-35.vercel.app/',
    },
    {
      title: 'Radiant Dental Website',
      description: 'Radiant Dental is a modern website for a dental practice, providing an online presence that highlights expert dental care services. The site aims to build trust with potential patients by presenting information about services, the experienced team of dentists, and ways to get in touch. It features a clean, user-friendly design optimized for both desktop and mobile devices.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Radiant-Dental-Website',
      live: 'https://radiant-dental-website.vercel.app/',
    },
    {
      title: 'Add Book Library System',
      description: 'A modern and responsive Book Library System built using HTML, CSS, and JavaScript This project allows users to add, delete, mark as complete, and manage their favorite books-- all with a clean, responsive, and user-friendly interface.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Add-Book-Library-System',
      live: 'https://add-book-library-system.vercel.app/',
    },
    {
      title: 'Burger King Website Clone',
      description: 'A modern, responsive Burger King website clone built using HTML, CSS, and JavaScript. This project replicates Burger King’s official website with a clean, interactive, and mobile-friendly design. Perfect for learning front-end development and practicing responsive layouts.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Burger-King',
      live: 'https://burger-king-jade.vercel.app/',
    },
    {
      title: 'Anon E-commerce Website',
      description: 'A modern, responsive e-commerce website for a fashion store built with HTML, CSS, and JavaScript. The website features a clean, user-friendly interface with multiple pages for shopping, blog, about, and contact.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Anon-E-commers',
      live: 'https://anon-e-commers.vercel.app/',
    },
    {
      title: 'CareerMatch - AI-Powered Career Suggestion Tool',
      description: 'CareerMatch is an intelligent career assessment tool that helps you discover the perfect career path based on your skills, interests, education, and work preferences. Our AI-powered algorithm analyzes your profile and matches you with the most suitable careers from a database of 50+ professions. Whether you are a student exploring options or a professional considering a career change, CareerMatch provides personalized recommendations to guide you towards a fulfilling career. With an intuitive interface and comprehensive insights, CareerMatch is your go-to resource for making informed career decisions.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/CareerMatch',
      live: 'https://career-match-red.vercel.app/',
    },
    {
      title: 'Dairy Management System in C',
      description: 'A simple dairy management system built in C programming language. This project manages dairy products, suppliers, and sales records with a user-friendly console interface.',
      tags: ['C Programming'],
      github: 'https://github.com/Daniish-Qureshi/Dairy-Management-System-in-C-Language',
      live: '',
    },
    {
      title: 'Coffee Lading Page',
      description: 'A simple and responsive Coffee Lading Page built using HTML, CSS and JavaScript. This project mimics the homepage design of Coffee Website and is fully user-friendly with a clean layout, optimized for different screen sizes.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Coffee-Lading-Page',
      live: 'https://coffee-lading-page.vercel.app/',
    },
    {
      title: 'To-Do List Web Application',
      description: 'A simple and responsive To-Do List web application built using HTML, CSS, and JavaScript. The application allows users to add, manage, and track their daily tasks efficiently through an interactive and user-friendly interface.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Todo-list-App',
      live: 'https://todo-list-app-nine-rho.vercel.app/',
    },
    {
      title: 'Text to Voice Converter',
      description: 'A web-based Text to Voice Converter built using HTML, CSS, and JavaScript that converts written text into speech using the Web Speech API. The application provides an intuitive interface where users can enter text and instantly hear the spoken output.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Text-To-Voice-Converter',
      live: 'https://text-to-voice-converter-iota.vercel.app/',
    },
    {
      title: 'QR Code Generator',
      description: 'A QR Code Generator web application built using HTML, CSS, and JavaScript that allows users to generate QR codes instantly from text or URLs. The application dynamically creates QR codes using a public QR API and displays them in real time.',
      tags: ['HTML5','CSS3','JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/QR-Code-Generator',
      live: 'https://person-age-calculator-jv9f.vercel.app/',
    },
    {
      title: 'Person Age Calculator',
      description: 'A responsive Age Calculator web application built using HTML, CSS, and JavaScript that calculates a person’s exact age based on their date of birth. The application dynamically computes the age in years, months, and days using JavaScript date functions.',
      tags: ['HTML5','CSS3','JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Person-Age-Calculator',
      live: 'https://person-age-calculator.vercel.app/',
    },
    {
      title: 'Notes App',
      description: 'A simple and responsive Notes App built using HTML, CSS, and JavaScript that allows users to create, edit, and delete notes directly in the browser. The application stores notes using Local Storage, ensuring data persistence even after page refresh.',
      tags: ['HTML5','CSS3','JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Notes-App',
      live: 'https://notes-app-eta-rouge.vercel.app/',
    },
    {
      title: 'Text to Image Generator',
      description: 'A web-based Text to Image Generator built using HTML, CSS, and JavaScript that converts user-provided text prompts into AI-generated images using an external image generation API. The application provides a simple interface for entering prompts and dynamically displays generated images.',
      tags: ['HTML5','CSS3','JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Image-Search-Engine',
      live: 'https://image-search-engine-eight-lake.vercel.app/',
    },
    {
      title: 'Furniture Flair – Furniture Website',
      description: 'Furniture Flair ek modern and responsive furniture showcase website hai, built using HTML, CSS, and JavaScript. Is project ka focus clean UI design, product presentation, aur smooth user experience par hai.',
      tags: ['HTML5','CSS3','JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Furniture-Flair-Website',
      live: 'https://furniture-flair-website.vercel.app/',
    },
    {
      title: 'Gameon Galaxy – Gaming Website',
      description: 'GameOn Galaxy ek modern and responsive gaming-themed website hai, built using HTML, CSS, and JavaScript. Is project ka focus engaging UI design, interactive sections, aur gaming-oriented visual experience create karna tha.',
      tags: ['HTML5','CSS3','JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Gameon-Galaxy-Website',
      live: 'https://gameon-galaxy-website.vercel.app/',
    },
    {
      title: 'Fitness Fusion – Fitness & Gym Website',
      description: 'Fitness Fusion ek modern and responsive fitness-themed website hai, built using HTML, CSS, and JavaScript. Is project ka focus strong visual design, structured content layout, aur engaging user experience create karna tha for a gym or fitness brand.',
      tags: ['HTML5','CSS3','JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/Fitness-Website',
      live: 'https://fitness-website-sigma-brown.vercel.app/',
    },
    {
      title: 'EduPathway – Educational Website',
      description: 'EduPathway ek responsive and structured educational website hai, built using HTML, CSS, and JavaScript. Is project ka purpose students ko courses, career paths, aur learning resources ke baare me clear information provide karna tha through a clean and organized interface.',
      tags: ['HTML5','CSS3','JavaScript'],
      github: 'https://github.com/Daniish-Qureshi/EduPathWay-Website',
      live: 'https://edu-path-way-website.vercel.app/',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold mb-12 text-foreground">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card rounded-lg border border-border p-6 hover:border-primary transition-all hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-primary mb-3">{project.title}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={20} />
                <span>Live</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
