"use client"

import * as React from "react"
import { Mail } from "lucide-react"

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
  return (
    <section className="pt-6 md:pt-8 pb-16 md:pb-20 mb-0 section-gradient-contact section-blend-contact w-full scroll-mt-16 md:scroll-mt-20" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="glass border border-outline-variant/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl bg-card/40 dark:bg-card/25 max-w-3xl mx-auto text-center">
          {/* Background Glow */}
          <div className="glow-spot bg-primary -top-10 -right-10 opacity-20" />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold leading-tight text-foreground mb-4">
              Let's build the future together.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto text-justify sm:text-center">
              I'm currently open to full-time roles and high-impact AI
              collaborations. Reach out and let's start a conversation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              {/* Email */}
              <a
                href="mailto:carinahakam@gmail.com"
                className="flex items-center gap-4 px-6 py-4 bg-foreground/5 rounded-2xl border border-foreground/10 text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 group/item"
              >
                <div className="p-2.5 bg-foreground/5 rounded-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">Email</div>
                  <span className="font-semibold text-sm truncate block">carinahakam@gmail.com</span>
                </div>
              </a>

              {/* Phone / WA */}
              <a
                href="https://wa.me/6285287824322"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-4 bg-foreground/5 rounded-2xl border border-foreground/10 text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 group/item"
              >
                <div className="p-2.5 bg-foreground/5 rounded-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shrink-0">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">WhatsApp</div>
                  <span className="font-semibold text-sm">+62 852-8782-4322</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ajeng-miftahul-carina/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-4 bg-foreground/5 rounded-2xl border border-foreground/10 text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 group/item"
              >
                <div className="p-2.5 bg-foreground/5 rounded-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shrink-0">
                  <LinkedinIcon className="h-5 w-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">LinkedIn</div>
                  <span className="font-semibold text-sm truncate block">linkedin.com/in/ajeng-miftahul-carina</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/kariina38"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-4 bg-foreground/5 rounded-2xl border border-foreground/10 text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 group/item"
              >
                <div className="p-2.5 bg-foreground/5 rounded-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shrink-0">
                  <GithubIcon className="h-5 w-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">GitHub</div>
                  <span className="font-semibold text-sm truncate block">github.com/kariina38</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/carinaajeng/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-4 bg-foreground/5 rounded-2xl border border-foreground/10 text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 group/item sm:col-span-2 justify-start sm:justify-center"
              >
                <div className="p-2.5 bg-foreground/5 rounded-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shrink-0">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">Instagram</div>
                  <span className="font-semibold text-sm">@carinaajeng</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
