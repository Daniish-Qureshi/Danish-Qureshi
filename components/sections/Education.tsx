"use client";

const education = [
  {
    degree: "Bachelor of Computer Application",
    period: "2023 – 2026",
    institution: "Chaudhary Charan Singh University, Meerut",
    field: "Computer Application",
    highlights: ["Focus on Web Development", "Database Management Systems"],
    result: "Complete",
    resultColor: "#16A34A",
    resultBg: "#F0FDF4",
    resultBorder: "#BBF7D0",
  },
  {
    degree: "Higher Secondary (12th)",
    period: "2022 – 2023",
    institution: "Mihir Bhoj Inter College",
    field: "Science Stream (PCB)",
    highlights: ["Physics, Chemistry, Biology"],
    result: "66%",
    resultColor: "#D97706",
    resultBg: "#FFFBEB",
    resultBorder: "#FDE68A",
  },
  {
    degree: "Secondary (10th)",
    period: "2020 – 2021",
    institution: "Mihir Bhoj Inter College",
    field: "General Education",
    highlights: ["Core Academic Foundation"],
    result: "79%",
    resultColor: "#1D4ED8",
    resultBg: "#EFF6FF",
    resultBorder: "#BFDBFE",
  },
];

const awards = [
  { title: "Top 5 in Class (4th Semester)", desc: "Ranked among the top 5 students in 4th semester", emoji: "🏆" },
  { title: "PDP Class — Cup Award", desc: "Awarded a cup for achievement in PDP class", emoji: "🥇" },
  { title: "Hack.IT@BVP3.0 Participant", desc: "Built NyayAI solo — AI legal platform; cleared Ideathon round at BVCOE, New Delhi", emoji: "💻" },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <p className="sec-label" style={{ marginBottom: 16 }}>Education</p>
      <h2 className="serif" style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#111111", marginBottom: 56 }}>
        Academic journey
      </h2>

      {/* Education cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 80 }}>
        {education.map((edu, i) => (
          <div
            key={i}
            style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, padding: "28px 32px", backgroundColor: "white", border: "1px solid #E5E2DC", borderRadius: 20, transition: "all 0.2s ease", alignItems: "start" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#C8C4BC"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E5E2DC"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111111", letterSpacing: "-0.01em" }}>{edu.degree}</h3>
                <span style={{ fontSize: 12, color: "#9A9A9A", fontWeight: 500 }}>{edu.period}</span>
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#6B6B6B", marginBottom: 8 }}>{edu.institution}</p>
              <p style={{ fontSize: 13, color: "#9A9A9A", marginBottom: 12 }}>{edu.field}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {edu.highlights.map((h) => (
                  <span key={h} style={{ padding: "3px 10px", backgroundColor: "#F9F7F4", border: "1px solid #E5E2DC", borderRadius: 999, fontSize: 12, color: "#6B6B6B" }}>{h}</span>
                ))}
              </div>
            </div>
            <span style={{ padding: "5px 14px", backgroundColor: edu.resultBg, border: `1px solid ${edu.resultBorder}`, borderRadius: 999, fontSize: 13, fontWeight: 700, color: edu.resultColor, whiteSpace: "nowrap" }}>
              {edu.result}
            </span>
          </div>
        ))}
      </div>

      {/* Awards */}
      <div>
        <h3 className="serif" style={{ fontSize: 26, color: "#111111", marginBottom: 28, letterSpacing: "-0.01em" }}>Awards & Achievements</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {awards.map((award) => (
            <div key={award.title} style={{ display: "flex", gap: 16, padding: "20px 24px", backgroundColor: "white", border: "1px solid #E5E2DC", borderRadius: 16, transition: "all 0.2s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#C8C4BC"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E5E2DC"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <span style={{ fontSize: 24, flexShrink: 0 }}>{award.emoji}</span>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#111111", marginBottom: 4 }}>{award.title}</p>
                <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.5 }}>{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}