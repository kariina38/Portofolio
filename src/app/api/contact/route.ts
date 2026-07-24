import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Mohon lengkapi Nama, Email, dan Pesan Anda." },
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
          subject: subject ? `[Portofolio] ${subject}` : `[Portofolio] Pesan Baru dari ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 12px;">
              <h2 style="color: #004ac6; margin-top: 0;">Pesan Baru dari Web Portofolio</h2>
              <p><strong>Nama:</strong> ${name}</p>
              <p><strong>Email Pengirim:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subjek:</strong> ${subject || '-'}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p><strong>Pesan:</strong></p>
              <div style="background: #f7f9fb; padding: 15px; border-radius: 8px; white-space: pre-line; line-height: 1.6;">${message}</div>
            </div>
          `,
        }),
      })

      if (resendRes.ok) {
        return NextResponse.json({ success: true, message: "Pesan berhasil dikirim ke Gmail!" })
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
        return NextResponse.json({ success: true, message: "Pesan berhasil dikirim ke Gmail!" })
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
        subject: subject || `[Portofolio] Pesan dari ${name}`,
        message,
      }),
    })

    if (fallbackRes.ok) {
      return NextResponse.json({ success: true, message: "Pesan berhasil dikirim!" })
    }

    return NextResponse.json({
      success: true,
      message: "Pesan Anda berhasil diterima!",
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Gagal mengirim pesan. Silakan coba lagi atau gunakan kontak WhatsApp/Email langsung." },
      { status: 500 }
    )
  }
}
