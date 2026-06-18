"use client";

const skillGroups = [
  {
    category: "Frontend",
    color: "#F0F9FF", borderColor: "#BAE6FD", textColor: "#0369A1",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "Figma"],
  },
  // {
  //   category: "Backend",
  //   color: "#F0FDF4", borderColor: "#BBF7D0", textColor: "#15803D",
  //   skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Auth"],
  // },
  {
    category: "AI & APIs",
    color: "#FAF5FF", borderColor: "#E9D5FF", textColor: "#7C3AED",
    skills: ["Groq AI (Llama 3.3)", "Gemini Vision API"],
  },
  {
    category: "Database & Storage",
    color: "#FFF7ED", borderColor: "#FED7AA", textColor: "#C2410C",
    skills: ["MongoDB Atlas", "PostgreSQL", "Cloudinary"],
  },
  {
    category: "Tools & Deployment",
    color: "#F8FAFC", borderColor: "#E2E8F0", textColor: "#475569",
    skills: ["Git & GitHub", "Vercel", "Render", "VS Code", "Postman"],
  },
];

const stats = [
  { value: "3", label: "Internships completed" },
  { value: "4+", label: "AI projects deployed" },
  { value: "MERN", label: "Core stack" },
  { value: "2026", label: "BCA batch" },
];

export default function About() {
  return (
    <>
      {/* ── ABOUT ── */}
      <section
        id="about"
        style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
          className="about-grid"
        >
          {/* Left */}
          <div>
            <p className="sec-label" style={{ marginBottom: 20 }}>About</p>
            <h2
              className="serif"
              style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#111111", marginBottom: 28 }}
            >
              Building for the web,
              <br />
              <span style={{ fontStyle: "italic", color: "#9A9A9A" }}>one project at a time.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#6B6B6B", marginBottom: 20 }}>
              I&apos;m a final-year BCA student and Frontend Developer from Dadri, G.B. Nagar (UP),
              with a strong focus on building responsive, clean, and user-friendly web interfaces
              using React.js, Tailwind CSS, and JavaScript.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#6B6B6B", marginBottom: 20 }}>
              I have completed 3 internships including hands-on roles at{" "}
              <strong style={{ color: "#111111", fontWeight: 600 }}>Alfido Tech</strong>,{" "}
              <strong style={{ color: "#111111", fontWeight: 600 }}>Codveda Technology</strong>, and{" "}
              <strong style={{ color: "#111111", fontWeight: 600 }}>Cognifyz Technologies</strong>.
              I have built and deployed production-ready AI-powered apps like AgriSmart, DocVerifyAI,
              and PitchAI — combining React with Groq and Gemini Vision APIs.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#6B6B6B" }}>
              I prefer remote work, write clean code, and care deeply about user experience.
              Always learning, always building.
            </p>
          </div>

          {/* Right */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{ padding: "28px 24px", backgroundColor: "white", border: "1px solid #E5E2DC", borderRadius: 16, transition: "border-color 0.2s ease" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#C8C4BC")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#E5E2DC")}
                >
                  <div className="serif" style={{ fontSize: 36, lineHeight: 1, color: "#111111", marginBottom: 8 }}>{stat.value}</div>
                  <div style={{ fontSize: 13, color: "#6B6B6B", fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ padding: 24, backgroundColor: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1D4ED8", marginBottom: 12 }}>
                Currently building
              </p>
              {[
                "SmartRecruit AI — AI-powered recruitment dashboard",
                "AgriSmart / KisanAI — BCA final year project",
              ].map((item) => (
                <p key={item} style={{ fontSize: 14, color: "#1D4ED8", fontWeight: 500, display: "flex", gap: 8, marginBottom: 8 }}>
                  <span style={{ opacity: 0.6 }}>→</span>{item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        id="skills"
        style={{ padding: "80px 24px", backgroundColor: "white" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="sec-label" style={{ marginBottom: 16 }}>Skills</p>
          <h2 className="serif" style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#111111", marginBottom: 48 }}>
            Technologies I work with
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {skillGroups.map((group) => (
              <div
                key={group.category}
                style={{ padding: 28, backgroundColor: group.color, border: `1px solid ${group.borderColor}`, borderRadius: 16, transition: "transform 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
              >
                <h3 style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: group.textColor, marginBottom: 16 }}>
                  {group.category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{ padding: "5px 12px", backgroundColor: "rgba(255,255,255,0.7)", border: `1px solid ${group.borderColor}`, borderRadius: 999, fontSize: 13, fontWeight: 500, color: "#111111" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </>
  );
}