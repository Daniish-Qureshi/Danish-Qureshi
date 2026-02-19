import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    console.log('[v0] Contact form received:', { name, email, subject, message })

    // Send email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'danishwork29@gmail.com',
        subject: `New Contact Form: ${subject}`,
        html: `
          <h2>New Message from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('[v0] Email send failed:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('[v0] Email sent successfully:', data)
    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 })
  } catch (error) {
    console.error('[v0] Error in contact API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
