"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

// Inline Github component since lucide-react brand icons are absent in this version
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

export default function Projects() {
  const projects = [
    {
      title: "Maintain.AI",
      description: "An AI-powered preventive maintenance system utilizing Computer Vision to detect equipment fatigue before failure occurs, saving millions in potential downtime.",
      tags: ["Python", "YOLOv8", "Roboflow", "React", "Docker"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArk-UdByF7FoWZIhqIZUWDdIRPBVKlcMeqYGlWbKZLP7Nkbsq-E1NW0Zf-wB9QcfTG2sHspg5BTiMiqJH0jn4FNgWZ8V0APzTYdYTPDZuxkQl50_RzN-oc_pi1CSbZvjMNrCqakq7YObhTG9azLdfvVH6wSVfHSpsu9OctC5fGUuC5yNca8X9vkCSPecFx8mJ80jZ4Jv27dGn2oPQyaeEem5NF-SAfMRFpuRnhFE00_avhfzJLVSUm",
      github: "https://github.com/username/maintain-ai",
      demo: "https://maintain-ai-demo.com",
    },
    {
      title: "FoodLink",
      description: "Bridging the gap between restaurant surplus and local communities. A real-time logistics platform designed to eliminate food waste through smart routing.",
      tags: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Google Maps API"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSBFKew7jcdPwy3QhXfquA4zYwK1zdnxj5RX_0Ja0ZVVF3n3m9MlMdRq3xwIAiqXGcMMS6bSqF7dIMfuRUO86YxYdAkv-MKOtAyT7wCnGXH-bSnAu0gCd5JU7ZJgHPujfEM7PaNF8r-BuWh2WRh6_tN43zKfwbjEWG3mZKOe961lVt--UZAlPWGnZ4_Uo5It2hMPXCeWQyavuBF13RL-yDFS7KwiDIxpU_9R9HIVr0Bl9hA4Jo6ibZ",
      github: "https://github.com/username/foodlink",
      demo: "https://foodlink-demo.com",
    },
    {
      title: "Harin Learning",
      description: "AI-driven adaptive learning platform that personalizes curriculum based on real-time Natural Language processing of student feedback and performance.",
      tags: ["React", "FastAPI", "Python", "ChromaDB", "Tailwind CSS"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtxbfjNfPLXDYyjtE-TItuQCzRhBJqypw1CNM1VQrMf5M_ZEQZoedG-6tKg8KzjSlqNsbSjEEJ_61ZvjXpK3W6Rc4ngeLJvZyEZ2lgwynyyU5Xqws0jJaG8eC-_GM43EwZnO_zb-ek7EQaMO03NxRf2_tWtPVIi8uzQ_tqIg0lZbqyEDRQUucmlqEFf2G3lZVFBqYplgo2PG_oQcTzQ2cjhPhp7fYgtzf_cvKCimC32ye3Exuri5Y_",
      github: "https://github.com/username/harin-learning",
      demo: "https://harin-learning-demo.com",
    },
  ]

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
    <section className="py-16 md:py-20 section-gradient-projects section-blend-projects w-full" id="projects">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-label-caps text-primary tracking-widest mb-4 block font-bold">
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
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-card border border-outline-variant/40 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-300 group h-full"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div>
                {/* Image Column */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-outline-variant/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="font-headline-lg text-xl font-extrabold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 text-justify">
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

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
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
                      className="flex items-center gap-1.5 text-xs font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
