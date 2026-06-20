"use client";

const certificates = [
  {
    title: "Oracle Cloud Infrastructure 2025 – AI Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2025",
    desc: "Certified in AI Foundations on Oracle Cloud Infrastructure — covering ML concepts, AI services, and cloud-based AI deployment.",
    credentialId: null,
    color: "#FFF7ED", borderColor: "#FED7AA", textColor: "#C2410C",
  },
  {
    title: "AWS Security: Securing Generative AI on AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "Jul 2025",
    desc: "Completed AWS training on securing generative AI workloads — covering IAM, data protection, and responsible AI practices.",
    credentialId: null,
    color: "#FFF7ED", borderColor: "#FED7AA", textColor: "#C2410C",
  },
  {
    title: "NIELIT – Yuva AI for All",
    issuer: "National Institute of Electronics & IT (Govt. of India)",
    date: "Apr 2026",
    desc: "Government-recognized AI certification covering foundational AI/ML concepts, applications, and responsible AI practices.",
    credentialId: null,
    color: "#F0FDF4", borderColor: "#BBF7D0", textColor: "#15803D",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Aug 2025",
    desc: "Certified in SQL basics — covering SELECT queries, JOINs, aggregations, subqueries and database management fundamentals.",
    credentialId: "11E98A2FD901",
    color: "#FAF5FF", borderColor: "#E9D5FF", textColor: "#7C3AED",
  },
  {
    title: "React.js",
    issuer: "Simplilearn",
    date: "Oct 2024",
    desc: "Completed React.js training covering components, hooks, state management, React Router and building production-ready UI.",
    credentialId: "7495694",
    color: "#F0F9FF", borderColor: "#BAE6FD", textColor: "#0369A1",
  },
  {
    title: "JavaScript",
    issuer: "Infosys Springboard",
    date: "Aug 2024",
    desc: "Completed JavaScript training covering ES6+, DOM manipulation, async programming, and modern JS development practices.",
    credentialId: null,
    color: "#FFFBEB", borderColor: "#FDE68A", textColor: "#D97706",
  },
  {
    title: "HTML5",
    issuer: "Spoken Tutorial — IIT Bombay",
    date: "Jun 2024",
    desc: "Completed HTML5 training covering semantic structure, forms, tables, media elements, and responsive webpage fundamentals.",
    credentialId: "3859121N48",
    color: "#FFF7ED", borderColor: "#FED7AA", textColor: "#C2410C",
  },
];

export default function Certificate() {
  return (
    <section id="certificates" style={{ padding: "80px 24px", backgroundColor: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p className="sec-label" style={{ marginBottom: 16 }}>Credentials</p>
        <h2 className="serif" style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#111111", marginBottom: 56 }}>
          Certificates & Courses
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {certificates.map((cert) => (
            <div
              key={cert.title}
              style={{ padding: 28, backgroundColor: cert.color, border: `1px solid ${cert.borderColor}`, borderRadius: 20, display: "flex", flexDirection: "column", gap: 12, transition: "transform 0.2s ease" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                <div style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255,255,255,0.7)", border: `1px solid ${cert.borderColor}`, borderRadius: 10, flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke={cert.textColor} strokeWidth="1.6"/>
                    <path d="M8 14h8l1 7H7l1-7z" stroke={cert.textColor} strokeWidth="1.6" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: cert.textColor, backgroundColor: "rgba(255,255,255,0.6)", padding: "3px 10px", borderRadius: 999, border: `1px solid ${cert.borderColor}`, whiteSpace: "nowrap" }}>
                  {cert.date}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111111", marginBottom: 4, lineHeight: 1.3 }}>{cert.title}</h3>
                <p style={{ fontSize: 13, fontWeight: 600, color: cert.textColor, marginBottom: 10 }}>{cert.issuer}</p>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "#6B6B6B" }}>{cert.desc}</p>
              </div>

              {cert.credentialId && (
                <div style={{ paddingTop: 12, borderTop: `1px solid ${cert.borderColor}` }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Credential ID</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#111111", fontFamily: "monospace" }}>{cert.credentialId}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}