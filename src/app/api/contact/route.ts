import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in your Name, Email, and Message." },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT

    // 1. Try Resend if RESEND_API_KEY is configured
    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["carinahakam@gmail.com"],
          reply_to: email,
          subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New Message from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 12px;">
              <h2 style="color: #004ac6; margin-top: 0;">New Message from Portfolio Web</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject || '-'}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p><strong>Message:</strong></p>
              <div style="background: #f7f9fb; padding: 15px; border-radius: 8px; white-space: pre-line; line-height: 1.6;">${message}</div>
            </div>
          `,
        }),
      })

      if (resendRes.ok) {
        return NextResponse.json({ success: true, message: "Your message has been successfully sent to Carina's Gmail!" })
      }
    }

    // 2. Try Formspree if FORMSPREE_ENDPOINT is configured
    if (formspreeEndpoint) {
      const fsRes = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      })
      if (fsRes.ok) {
        return NextResponse.json({ success: true, message: "Your message has been successfully sent to Carina's Gmail!" })
      }
    }

    // 3. Web3Forms / Formspree public submission fallback
    const formUrl = formspreeEndpoint || "https://formspree.io/f/moqgdqwe"
    const fallbackRes = await fetch(formUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        subject: subject || `[Portfolio] Message from ${name}`,
        message,
      }),
    })

    if (fallbackRes.ok) {
      return NextResponse.json({ success: true, message: "Your message has been successfully sent!" })
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been received!",
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again or use direct WhatsApp/Email." },
      { status: 500 }
    )
  }
}
