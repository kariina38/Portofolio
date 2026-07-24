"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Brain, Code2, Monitor, Database, Terminal } from "lucide-react"

export default function TechStack() {
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
    <section className="py-16 md:py-20 section-gradient-stack section-blend-stack w-full scroll-mt-20" id="stack">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-label-caps text-secondary tracking-widest mb-4 block font-bold">
            CORE CAPABILITIES
          </span>
          <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
            A stack optimized for intelligence.
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-bento-gap h-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1: AI Stack */}
          <motion.div
            className="md:col-span-2 bg-card border border-outline-variant/40 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-300 min-h-[240px]"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <div>
              <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary mb-6">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="font-headline-lg text-xl md:text-2xl font-extrabold mb-3 text-foreground">
                Artificial Intelligence
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 text-justify">
                Building intelligent systems with Machine Learning, Computer Vision, and NLP.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {[
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "YOLOv11",
                "Roboflow",
                "NLP",
                "OpenAI Whisper",
                "Hugging Face",
                "RAG",
                "Generative AI",
                "ChromaDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-primary/5 dark:bg-primary/10 text-primary border border-primary/20 dark:border-primary/30 rounded-full text-xs font-bold tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Programming Languages */}
          <motion.div
            className="md:col-span-2 bg-card border border-outline-variant/40 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-300 min-h-[240px]"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <div>
              <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary mb-6">
                <Code2 className="h-8 w-8" />
              </div>
              <h3 className="font-headline-lg text-xl md:text-2xl font-extrabold mb-3 text-foreground">
                Programming Languages
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 text-justify">
                Writing clean, maintainable, and efficient code.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {[
                "Python",
                "JavaScript",
                "TypeScript",
                "PHP",
                "Java",
                "C++",
                "Dart",
                "SQL",
                "HTML",
                "CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-primary/5 dark:bg-primary/10 text-primary border border-primary/20 dark:border-primary/30 rounded-full text-xs font-bold tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Frontend */}
          <motion.div
            className="md:col-span-1 bg-card border border-outline-variant/40 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-secondary/20 transition-all duration-300 min-h-[240px]"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <div>
              <div className="p-3 bg-secondary/10 rounded-xl w-fit text-secondary mb-6">
                <Monitor className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base md:text-lg text-foreground mb-2">
                Frontend & AI Interfaces
              </h3>
              <p className="text-on-surface-variant text-xs leading-relaxed mb-4 text-justify">
                Building responsive, accessible, and modern user interfaces & AI web apps.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {["React", "Next.js", "Vite", "Tailwind CSS", "Streamlit", "Gradio", "Flutter"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-secondary/5 dark:bg-secondary/15 text-secondary border border-secondary/10 dark:border-secondary/25 rounded-full text-[11px] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Backend */}
          <motion.div
            className="md:col-span-2 bg-card border border-outline-variant/40 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-300 min-h-[240px]"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <div>
              <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary mb-6">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="font-headline-lg text-xl md:text-2xl font-extrabold mb-3 text-foreground">
                Backend & Services
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 text-justify">
                Developing secure APIs, databases, and scalable backend services.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {[
                "Node.js",
                "Express.js",
                "Supabase",
                "PostgreSQL",
                "SQLite",
                "MySQL",
                "Flask",
                "REST API",
                "JWT & 2FA",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-primary/5 dark:bg-primary/10 text-primary border border-primary/20 dark:border-primary/30 rounded-full text-xs font-bold tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 5: Tools */}
          <motion.div
            className="md:col-span-1 bg-card border border-outline-variant/40 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-tertiary/20 transition-all duration-300 min-h-[240px]"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <div>
              <div className="p-3 bg-tertiary/10 rounded-xl w-fit text-tertiary mb-6">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base md:text-lg text-foreground mb-2">
                Tools & Environments
              </h3>
              <p className="text-on-surface-variant text-xs leading-relaxed mb-4 text-justify">
                Streamlining development, AI training, versioning, and deployment.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {["Git", "GitHub", "Docker", "Google Colab", "Postman", "Figma", "Nginx"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-tertiary/5 dark:bg-tertiary/15 text-tertiary border border-tertiary/10 dark:border-tertiary/25 rounded-full text-[11px] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
