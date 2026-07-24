"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, X, Info, Sparkles, CheckCircle2, Calendar, User } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

// Inline Github component
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

interface Project {
  title: string
  subtitle: string
  description: string
  longDescription: string
  role: string
  timeline: string
  features: string[]
  tags: string[]
  image: string
  github?: string
  demo?: string
}

const defaultProjects: Project[] = [
  {
    title: "PERFINT – Personal Finance Tracker",
    subtitle: "AI-Powered Personal Finance Management Platform",
    description: "An AI-powered personal finance management platform that helps users track income and expenses, manage multiple wallets, set budgets, and receive intelligent financial insights.",
    longDescription: "PERFINT is a mobile-first web application designed to simplify personal financial management through AI-driven automation. The platform features an interactive financial dashboard, AI-powered receipt scanning (OCR), spending forecasts, budget management with automated alerts, multi-wallet support, and FinAI, an intelligent financial assistant. It also provides secure authentication using JWT and Two-Factor Authentication (2FA).",
    role: "Full-Stack Developer",
    timeline: "February 2026 – May 2026",
    features: [
      "Interactive Financial Dashboard",
      "AI Receipt OCR Scanner",
      "FinAI Financial Assistant",
      "Budget Planning & Spending Alerts",
      "Multi-Wallet Management",
      "Spending Forecast",
      "JWT Authentication & Two-Factor Authentication (2FA)"
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express.js", "SQLite", "Google Gemini AI", "Docker", "Nginx"],
    image: "/projects/perfint.png",
    github: "https://github.com/kariina38/PERFINT",
    demo: "https://perfint-swart.vercel.app/",
  },
  {
    title: "Harin Learning – AI-Powered E-Learning Platform",
    subtitle: "Interactive E-Learning Platform & AI Study Assistant",
    description: "An AI-powered e-learning platform that enhances online learning through intelligent study planning, AI assistance, interactive courses, and real-time learning analytics.",
    longDescription: "Harin Learning was developed to provide a modern and engaging digital learning experience. The platform enables course management, student enrollment, and community discussions while integrating AI-powered features such as an AI Study Planner and AI Assistant chatbot. It also includes a Teacher Dashboard with real-time analytics for monitoring student engagement, course performance, and revenue.",
    role: "Full-Stack Developer",
    timeline: "May 2026 – July 2026",
    features: [
      "AI Study Planner",
      "AI Assistant Chatbot",
      "Course Management",
      "Student Enrollment",
      "Teacher Dashboard",
      "Real-Time Analytics",
      "Community Discussion",
      "Certificate Generation"
    ],
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL", "OpenRouter API"],
    image: "/projects/harin.jpeg",
    github: "https://github.com/Pusri27/AiLearning",
    demo: "https://harin-ailearning.vercel.app/",
  },
  {
    title: "FoodLink – Surplus Food Distribution Platform",
    subtitle: "AI-Powered Food Donation & Distribution Platform",
    description: "A surplus food redistribution platform that connects food donors with social organizations through secure role-based dashboards and real-time distribution management.",
    longDescription: "FoodLink was developed to reduce food waste by connecting surplus food providers with social organizations in need. The platform features role-based dashboards for donors, recipients, and administrators, along with real-time food distribution tracking, analytics dashboards, and distribution heatmaps. To ensure data privacy and secure access, the system implements Row Level Security (RLS) using Supabase.",
    role: "Full-Stack Developer (Team Project)",
    timeline: "June 2026 – July 2026",
    features: [
      "Role-Based Dashboard",
      "Food Donation Management",
      "Real-Time Distribution Tracking",
      "Analytics Dashboard & Heatmaps",
      "Secure Authentication",
      "Row Level Security (RLS)"
    ],
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    image: "/projects/foodlink.jpeg",
    github: "https://github.com/Pusri27/FoodLink",
    demo: undefined,
  },
  {
    title: "Tech Museum",
    subtitle: "Digital Technology Exhibition Platform",
    description: "A web-based digital exhibition platform designed to showcase innovative technology projects created by President University students through an interactive and responsive experience.",
    longDescription: "Tech Museum was developed to document and promote technology projects from the Informatics and Information Systems programs at President University. As the Front-End Developer, I designed and implemented responsive user interfaces, project catalogs, testimonial pages, project submission forms, and an admin dashboard while ensuring an intuitive user experience across all devices.",
    role: "Front-End Developer",
    timeline: "2025",
    features: [
      "Responsive Digital Exhibition Platform",
      "Student Project Catalog & Detail Pages",
      "Testimonial & Rating System",
      "Project Submission Portal",
      "Daily Inspirational Quotes",
      "Admin Dashboard"
    ],
    tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
    image: "/projects/techmuseum.png",
    github: "https://github.com/kariina38/TechMuseum",
    demo: "http://techmuseum.great-site.net/",
  },
  {
    title: "IndoorVision – YOLOv11 Instance Segmentation",
    subtitle: "Computer Vision & Deep Learning",
    description: "IndoorVision is a computer vision project developed to perform indoor object instance segmentation using the YOLOv11 segmentation model.",
    longDescription: "IndoorVision is a computer vision project developed to perform indoor object instance segmentation using the YOLOv11 segmentation model. The project covers the complete machine learning pipeline, including dataset preprocessing and augmentation with Roboflow, model training in Google Colab, performance evaluation using Precision, Recall, Average Precision (AP), and Mean Intersection over Union (mIoU), and deployment through an interactive Gradio interface for real-time image inference and visualization.",
    role: "Machine Learning Engineer",
    timeline: "2026",
    features: [
      "Indoor object instance segmentation using YOLOv11",
      "Dataset preprocessing and augmentation with Roboflow",
      "Model training and evaluation in Google Colab",
      "Performance metrics (Precision, Recall, AP, mIoU)",
      "Interactive Gradio interface for real-time predictions",
      "Segmentation visualization with overlay comparison"
    ],
    tags: ["Python", "YOLOv11", "Computer Vision", "Deep Learning", "Roboflow", "Google Colab", "Gradio", "OpenCV", "NumPy", "Matplotlib"],
    image: "/projects/indoorvision.jpg",
    github: undefined,
    demo: undefined,
  },
  {
    title: "SmartAssist – Hybrid E-Commerce Customer Service Chatbot",
    subtitle: "Natural Language Processing & Generative AI",
    description: "SmartAssist is a hybrid AI-powered customer service chatbot designed for e-commerce applications combining speech recognition, intent classification, RAG, and LLMs.",
    longDescription: "SmartAssist is a hybrid AI-powered customer service chatbot designed for e-commerce applications. The system combines speech recognition, intent classification, Retrieval-Augmented Generation (RAG), and Large Language Models (LLMs) to deliver intelligent and context-aware customer support. My primary contribution focused on developing the speech processing pipeline using Whisper for speech-to-text transcription and implementing the intent classification module, enabling the chatbot to accurately identify customer requests before processing them through the conversational workflow.",
    role: "NLP Engineer (Speech Processing & Intent Classification) Team Project",
    timeline: "2026",
    features: [
      "Speech-to-Text using OpenAI Whisper",
      "Intent classification for customer requests",
      "Hybrid chatbot combining rule-based logic and LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "Named Entity Recognition (NER)",
      "Conversation summarization and BART vs PEGASUS model comparison"
    ],
    tags: ["Python", "Natural Language Processing", "Whisper", "Hugging Face", "Streamlit", "RAG", "Generative AI", "Groq API", "Gemini API", "BART", "PEGASUS"],
    image: "/projects/smartassist.jpg",
    github: "https://github.com/RainW1/NLP-FInal-Project-Chatbot-CS",
    demo: undefined,
  },
]

function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]/g, '')
}

export default function Projects() {
  const [projectsList, setProjectsList] = React.useState<Project[]>(defaultProjects)
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    async function loadProjectsFromSupabase() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
        if (data && data.length > 0) {
          const mapped: Project[] = data.map((item: any) => {
            const defaultMatch = defaultProjects.find(
              (p) => normalizeTitle(p.title).includes(normalizeTitle(item.title)) || normalizeTitle(item.title).includes(normalizeTitle(p.title))
            )
            const dbLongDesc = item.long_description || ''
            const isTruncated = !dbLongDesc || dbLongDesc.trim().endsWith('...') || dbLongDesc.trim().endsWith('…')
            const finalLongDesc = (isTruncated && defaultMatch?.longDescription) ? defaultMatch.longDescription : (dbLongDesc || item.description || defaultMatch?.longDescription || '')

            return {
              title: item.title,
              subtitle: item.subtitle || defaultMatch?.subtitle || '',
              description: item.description || defaultMatch?.description || '',
              longDescription: finalLongDesc,
              role: item.role || defaultMatch?.role || '',
              timeline: item.timeline || defaultMatch?.timeline || '',
              features: item.features || defaultMatch?.features || [],
              tags: item.tags || defaultMatch?.tags || [],
              image: item.image_url || defaultMatch?.image || '',
              github: item.github_url || defaultMatch?.github,
              demo: item.demo_url || defaultMatch?.demo,
            }
          })

          // Strict deduplication by normalized title
          const seen = new Set<string>()
          const combined: Project[] = []

          for (const proj of mapped) {
            const norm = normalizeTitle(proj.title)
            if (norm && !seen.has(norm)) {
              seen.add(norm)
              combined.push(proj)
            }
          }

          for (const dp of defaultProjects) {
            const norm = normalizeTitle(dp.title)
            const isAlreadyAdded = Array.from(seen).some(
              (s) => s.includes(norm) || norm.includes(s)
            )
            if (!isAlreadyAdded) {
              seen.add(norm)
              combined.push(dp)
            }
          }

          setProjectsList(combined)
        }
      } catch (e) {
        // Fallback to defaultProjects on connection issue
      }
    }
    loadProjectsFromSupabase()
  }, [])

  // Close modal when pressing ESC key & prevent body scrolling when modal is open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null)
    }
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const

  return (
    <section className="py-16 md:py-20 section-gradient-projects section-blend-projects w-full relative" id="projects">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-label-caps text-secondary tracking-widest mb-4 block font-bold">
              PROJECTS
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
              Selected works that define precision and purpose.
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-bento-gap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsList.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="bg-card border border-outline-variant/40 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:border-primary/30 transition-all duration-300 group h-full"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div>
                {/* Clean 16:9 Image Container */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-outline-variant/20 group/img bg-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Overlay Detail Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2.5 bg-primary text-primary-foreground font-bold text-xs rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform active:scale-95 cursor-pointer"
                    >
                      <Info className="w-4 h-4" />
                      Project Details
                    </button>
                  </div>
                </div>

                {/* Content Area - Complete description without cutting off */}
                <div className="p-6">
                  <span className="text-[11px] font-bold text-primary tracking-wider uppercase mb-1 block">
                    {project.subtitle}
                  </span>
                  <h3 className="font-headline-lg text-xl font-extrabold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags & Action Links */}
              <div className="px-6 pb-6 mt-auto">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-primary/5 dark:bg-primary/10 text-primary border border-primary/10 dark:border-primary/20 rounded-full text-[10px] font-bold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links & Detail Button */}
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <GithubIcon className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-primary hover:opacity-80 transition-opacity"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Render Clean Compact Rectangular Modal via React Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/75 backdrop-blur-md z-[99999]"
              />

              {/* Modal Card: Sleek Compact Rectangle (max-w-lg) with integrated header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-lg bg-card border border-outline-variant/40 rounded-2xl overflow-hidden shadow-2xl z-[100000] max-h-[85vh] flex flex-col my-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-[100010] p-2 bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full border border-outline-variant/30 transition-all hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Body (Scrollable, 100% of all text details shown clearly) */}
                <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-grow">
                  {/* Title & Category Block */}
                  <div className="pr-8">
                    <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-full inline-block mb-1.5">
                      {selectedProject.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Role & Timeline Meta Bar */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground pb-3 border-b border-outline-variant/20">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" />
                      <span>{selectedProject.role}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{selectedProject.timeline}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-xs font-bold text-foreground mb-1.5 flex items-center gap-2 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-primary" /> Description
                    </h4>
                    <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed text-justify whitespace-pre-line">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-on-surface-variant">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[11px] font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="p-4 sm:p-5 bg-card border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
                  <div className="flex items-center gap-3">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-3.5 py-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}
