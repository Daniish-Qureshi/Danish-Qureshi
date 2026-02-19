'use client'

import React from "react"

import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatusType('error')
        setStatusMessage(data.error || 'Failed to send message. Please try again.')
        console.error('[v0] Form submission error:', data)
        return
      }

      setStatusType('success')
      setStatusMessage('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      console.log('[v0] Message sent successfully:', data)
    } catch (error) {
      setStatusType('error')
      setStatusMessage('An error occurred. Please try again later.')
      console.error('[v0] Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold mb-12 text-foreground">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8">Contact Information</h3>

          <div className="space-y-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
            >
              <Phone className="text-primary group-hover:scale-110 transition-transform" size={24} />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+91 93546 02025</p>
              </div>
            </a>

            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
            >
              <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">danishwork29@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
              <MapPin className="text-primary" size={24} />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Dadri, G.B.Nagar, Uttar Pradesh, IND - 203207</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              placeholder="Message subject"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
              placeholder="Your message"
            />
          </div>

          {statusMessage && (
            <div
              className={`p-4 rounded-lg text-sm font-medium ${
                statusType === 'success'
                  ? 'bg-green-500/10 text-green-600 border border-green-500/20'
                  : 'bg-red-500/10 text-red-600 border border-red-500/20'
              }`}
            >
              {statusMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
