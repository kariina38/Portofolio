"use client"

import * as React from "react"
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [status, setStatus] = React.useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: "" })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setStatus({
          type: "success",
          message: "Pesan Anda berhasil dikirim ke Gmail Carina! Terima kasih sudah menghubungi.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus({
          type: "error",
          message: data.error || "Gagal mengirim pesan. Silakan coba lagi.",
        })
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Terjadi kesalahan koneksi. Silakan coba beberapa saat lagi.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="pt-6 md:pt-8 pb-16 md:pb-20 mb-0 section-gradient-contact section-blend-contact w-full scroll-mt-16 md:scroll-mt-20" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="glass border border-outline-variant/30 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-xl bg-card/40 dark:bg-card/25 max-w-4xl mx-auto">
          {/* Background Glow */}
          <div className="glow-spot bg-primary -top-10 -right-10 opacity-20" />
          <div className="glow-spot bg-secondary -bottom-10 -left-10 opacity-20" />

          <div className="relative z-10 flex flex-col items-center text-center mb-10">
            <span className="text-label-caps text-secondary tracking-widest mb-3 block font-bold">
              GET IN TOUCH
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold leading-tight text-foreground mb-4">
              Let's build the future together.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl text-center">
              I'm open to full-time roles and high-impact AI collaborations. Send a message directly to my Gmail or connect via socials.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            {/* Left: Direct Gmail Contact Form */}
            <div className="lg:col-span-7 bg-card/80 dark:bg-card/50 border border-outline-variant/30 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Send a Direct Message
              </h3>

              {status.type && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs sm:text-sm font-semibold flex items-start gap-3 border ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                      : "bg-destructive/10 border-destructive/30 text-destructive"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 bg-background border border-outline-variant/40 rounded-xl text-sm font-medium text-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-2.5 bg-background border border-outline-variant/40 rounded-xl text-sm font-medium text-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Collaboration / Job Offer"
                    className="w-full px-4 py-2.5 bg-background border border-outline-variant/40 rounded-xl text-sm font-medium text-foreground focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2.5 bg-background border border-outline-variant/40 rounded-xl text-sm font-medium text-foreground focus:outline-none focus:border-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending to Gmail...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Social & Quick Connect Links */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
              <h3 className="font-bold text-base text-foreground mb-1">
                Quick Connect
              </h3>

              {/* Email */}
              <a
                href="mailto:carinahakam@gmail.com"
                className="flex items-center gap-3.5 p-3.5 bg-card/60 dark:bg-card/40 rounded-2xl border border-outline-variant/30 text-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 group/item"
              >
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">Email</div>
                  <span className="font-semibold text-xs truncate block">carinahakam@gmail.com</span>
                </div>
              </a>

              {/* Phone / WA */}
              <a
                href="https://wa.me/6285287824322"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 bg-card/60 dark:bg-card/40 rounded-2xl border border-outline-variant/30 text-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 group/item"
              >
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shrink-0">
                  <PhoneIcon className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">WhatsApp</div>
                  <span className="font-semibold text-xs">+62 852-8782-4322</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ajeng-miftahul-carina/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 bg-card/60 dark:bg-card/40 rounded-2xl border border-outline-variant/30 text-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 group/item"
              >
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shrink-0">
                  <LinkedinIcon className="h-4 w-4" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">LinkedIn</div>
                  <span className="font-semibold text-xs truncate block">ajeng-miftahul-carina</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/kariina38"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 bg-card/60 dark:bg-card/40 rounded-2xl border border-outline-variant/30 text-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 group/item"
              >
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shrink-0">
                  <GithubIcon className="h-4 w-4" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">GitHub</div>
                  <span className="font-semibold text-xs truncate block">kariina38</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/carinaajeng/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 bg-card/60 dark:bg-card/40 rounded-2xl border border-outline-variant/30 text-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 group/item"
              >
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shrink-0">
                  <InstagramIcon className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">Instagram</div>
                  <span className="font-semibold text-xs">@carinaajeng</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
