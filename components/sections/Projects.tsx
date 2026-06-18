"use client";

const projects = [
  {
    number: "01",
    title: "AgriSmart (KisanAI)",
    tagline: "AI-powered farming platform — BCA Final Year Project",
    description: "A full-stack AI farming platform with 22+ pages — Live Weather, Government Schemes, Crop Disease Detection via Groq Vision AI, Equipment Rental Marketplace, and Farmer Wallet with Razorpay payment gateway. Built with multilingual support (Hindi + English) and a premium dark green/gold UI.",
    tags: ["React.js", "Node.js", "PostgreSQL", "Groq AI", "Razorpay", "Tailwind CSS"],
    live: "https://agri-smart-ai-xi.vercel.app/",
    github: "https://github.com/Daniish-Qureshi/AgriSmart-AI",
    badge: "Live", badgeColor: "#16A34A", badgeBg: "#F0FDF4",
  },
  {
    number: "02",
    title: "PitchAI",
    tagline: "AI-powered pitch deck generator",
    description: "Generate investor-ready pitch decks in seconds. Powered by Groq AI (Llama 3.3 70B), this tool takes your startup idea and produces a complete, structured slide deck tailored to impress investors. Features Apple-style dark glassmorphism UI and deck history dashboard.",
    tags: ["React + Vite", "Node.js", "Express", "MongoDB Atlas", "Groq AI", "Tailwind CSS"],
    live: "https://ai-pitch-deck-one.vercel.app/",
    github: "https://github.com/Daniish-Qureshi/ai-pitch-deck",
    badge: "Live", badgeColor: "#16A34A", badgeBg: "#F0FDF4",
  },
  {
    number: "03",
    title: "DocVerifyAI",
    tagline: "AI document verification system",
    description: "Intelligent document verification using computer vision and AI. Upload a document and get instant authenticity checks, tampering detection, and data extraction — powered by OpenCV and Google Gemini Vision API. Microservice architecture with Python FastAPI + Node.js.",
    tags: ["React.js", "Python FastAPI", "OpenCV", "Gemini Vision API", "Node.js", "Tailwind CSS"],
    live: "https://doc-verify-ai-eight.vercel.app/",
    github: "https://github.com/Daniish-Qureshi/DocVerifyAI",
    badge: "Live", badgeColor: "#16A34A", badgeBg: "#F0FDF4",
  },
  {
    number: "04",
    title: "Lost & Found Portal",
    tagline: "Real-time community lost & found platform",
    description: "A production-grade web platform built during my internship at Codveda Technology. Features real-time notifications via Socket.io, image uploads with Cloudinary, JWT authentication, and a fully mobile-responsive UI with category-based filtering.",
    tags: ["Node.js", "Express", "MongoDB", "Socket.io", "Cloudinary", "React.js"],
    live: "https://lost-and-found-website-six.vercel.app/",
    github: "https://github.com/Daniish-Qureshi/Lost-And-Found-Website",
    badge: "Live", badgeColor: "#16A34A", badgeBg: "#EFF6FF",
  },
];

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <p className="sec-label" style={{ marginBottom: 16 }}>Projects</p>
      <h2 className="serif" style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#111111", marginBottom: 56 }}>
        Things I&apos;ve built
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {projects.map((p) => (
          <article
            key={p.title}
            style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 32, padding: 36, backgroundColor: "white", border: "1px solid #E5E2DC", borderRadius: 20, transition: "all 0.25s ease" }}
            className="project-card"
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#C8C4BC"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.07)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E5E2DC"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >
            <div className="serif" style={{ fontSize: 48, lineHeight: 1, color: "#E5E2DC", fontStyle: "italic", paddingTop: 4 }}>{p.number}</div>

            <div>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111111", letterSpacing: "-0.02em" }}>{p.title}</h3>
                    <span style={{ padding: "3px 10px", backgroundColor: p.badgeBg, color: p.badgeColor, fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", borderRadius: 999 }}>
                      {p.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, color: "#6B6B6B", fontWeight: 500 }}>{p.tagline}</p>
                </div>

                <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
                  <a
                    href={p.github} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "7px 14px", fontSize: 13, fontWeight: 600, color: "#6B6B6B", backgroundColor: "#F9F7F4", textDecoration: "none", borderRadius: 8, border: "1px solid #E5E2DC", transition: "all 0.2s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#111111"; (e.currentTarget as HTMLElement).style.borderColor = "#C8C4BC"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#6B6B6B"; (e.currentTarget as HTMLElement).style.borderColor = "#E5E2DC"; }}
                  >
                    GitHub <Arrow />
                  </a>
                  {p.live && (
                    <a
                      href={p.live} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "7px 14px", fontSize: 13, fontWeight: 600, color: "white", backgroundColor: "#111111", textDecoration: "none", borderRadius: 8, transition: "opacity 0.2s ease" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    >
                      Live <Arrow />
                    </a>
                  )}
                </div>
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6B6B6B", marginBottom: 20 }}>{p.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {p.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div style={{ marginTop: 48, textAlign: "center" }}>
        <a
          href="https://github.com/Daniish-Qureshi" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "#6B6B6B", textDecoration: "none", padding: "12px 24px", border: "1px solid #E5E2DC", borderRadius: 10, transition: "all 0.2s ease" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#111111"; (e.currentTarget as HTMLElement).style.borderColor = "#C8C4BC"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#6B6B6B"; (e.currentTarget as HTMLElement).style.borderColor = "#E5E2DC"; }}
        >
          View all projects on GitHub <Arrow />
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .project-card { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}