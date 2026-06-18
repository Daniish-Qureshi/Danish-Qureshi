import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danish Qureshi — Full Stack Developer",
  description:
    "BCA final-year student and Full Stack Developer specializing in React, Next.js, Node.js, and AI-powered applications.",
  keywords: ["Danish Qureshi", "Full Stack Developer", "React", "Next.js", "Node.js", "AI Developer"],
  authors: [{ name: "Danish Qureshi" }],
  openGraph: {
    title: "Danish Qureshi — Full Stack Developer",
    description: "Building modern web apps and AI-powered tools. Open to remote opportunities.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}