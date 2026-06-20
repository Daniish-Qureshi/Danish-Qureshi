"use client";

import { useState, useEffect } from "react";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Certificate from "../components/sections/Certificate";
import Education from "../components/sections/Education";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <main style={{ backgroundColor: "#F9F7F4" }}>

      {/* ── NAVBAR ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(249,247,244,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E5E2DC" : "1px solid transparent",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#home" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "#111111", textDecoration: "none" }}>
            DQ<span style={{ color: "#1D4ED8" }}>.</span>
          </a>
          <nav style={{ display: "flex", alignItems: "center", gap: 8 }} className="nav-desktop">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={{ padding: "6px 14px", fontSize: 14, fontWeight: 500, color: "#6B6B6B", textDecoration: "none", borderRadius: 8 }}>
                {link.label}
              </a>
            ))}
            <a href="/public/DANISH QURESHI FRONTEND DEVELOPER RESUME.pdf" target="_blank" rel="noopener noreferrer"
              style={{ marginLeft: 8, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "white", backgroundColor: "#111111", textDecoration: "none", borderRadius: 8 }}>
              Resume ↗
            </a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mob-btn"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "#111111" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <><line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>
              ) : (
                <><line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="nav-mob-menu" style={{ backgroundColor: "#F9F7F4", borderTop: "1px solid #E5E2DC", padding: "16px 24px 24px" }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "12px 0", fontSize: 16, fontWeight: 500, color: "#111111", textDecoration: "none", borderBottom: "1px solid #E5E2DC" }}>
                {link.label}
              </a>
            ))}
            <a href="/public/DANISH QURESHI FRONTEND DEVELOPER RESUME.pdf" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: 16, padding: "10px 24px", fontSize: 14, fontWeight: 600, color: "white", backgroundColor: "#111111", textDecoration: "none", borderRadius: 8 }}>
              Resume ↗
            </a>
          </div>
        )}
        <style>{`
          @media(min-width:640px){.nav-desktop{display:flex!important}.nav-mob-btn{display:none!important}.nav-mob-menu{display:none!important}}
          @media(max-width:639px){.nav-desktop{display:none!important}.nav-mob-btn{display:block!important}}
        `}</style>
      </header>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ width: "100%", paddingTop: 80, paddingBottom: 80 }}>
          <div className="f1" style={{ marginBottom: 32 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 999, fontSize: 13, fontWeight: 500, color: "#16A34A" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#22C55E", boxShadow: "0 0 0 3px rgba(34,197,94,0.25)", display: "inline-block" }} />
              Open to remote opportunities
            </span>
          </div>
          <h1 className="serif f2" style={{ fontSize: "clamp(44px,7vw,80px)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#111111", marginBottom: 8 }}>Danish Qureshi</h1>
          <h2 className="serif f2" style={{ fontSize: "clamp(44px,7vw,80px)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#9A9A9A", fontStyle: "italic", marginBottom: 32 }}>Front-End Developer</h2>
          <p className="f3" style={{ fontSize: 18, lineHeight: 1.7, color: "#6B6B6B", maxWidth: 540, marginBottom: 48 }}>
            BCA final-year student building modern web apps and AI-powered tools. Passionate about clean interfaces, scalable backends, and shipping things that actually work.
          </p>
          <div className="f4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#projects" style={{ padding: "13px 28px", fontSize: 15, fontWeight: 600, color: "white", backgroundColor: "#111111", textDecoration: "none", borderRadius: 10 }}>View Projects</a>
            <a href="#contact" style={{ padding: "13px 28px", fontSize: 15, fontWeight: 600, color: "#111111", backgroundColor: "transparent", textDecoration: "none", borderRadius: 10, border: "1.5px solid #C8C4BC" }}>Get in Touch</a>
          </div>
          <div className="f5" style={{ display: "flex", gap: 20, marginTop: 64, paddingTop: 32, borderTop: "1px solid #E5E2DC", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, color: "#9A9A9A" }}>Find me on</span>
            <a href="https://github.com/Daniish-Qureshi" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, color: "#6B6B6B", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/danishqureshi786/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, color: "#6B6B6B", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Education />
      <Certificate />
      <Contact />

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #E5E2DC", padding: "32px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <span className="serif" style={{ fontSize: 18, color: "#111111" }}>DQ<span style={{ color: "#1D4ED8" }}>.</span></span>
          <p style={{ fontSize: 13, color: "#9A9A9A" }}>© {new Date().getFullYear()} Danish Qureshi. Front-End Web Developer.</p>
          <a href="https://github.com/Daniish-Qureshi/Danish-Qureshi" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#9A9A9A", textDecoration: "none" }}>View source ↗</a>
        </div>
      </footer>
    </main>
  );
}