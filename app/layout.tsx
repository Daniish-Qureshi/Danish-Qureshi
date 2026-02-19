import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Danish Qureshi - Frontend Developer Portfolio',
  description: 'This is my latest and professional portfolio website. It showcases my skills, projects, and experience in the field of software development.',
  generator: 'danish-qureshi',
  icons: {
    icon: [
      {
        url: '/public/danih-png.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/public/danih-dark-png.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/public/danish.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
