"use client"

import * as React from "react"
import { motion } from "framer-motion"

export default function About() {
  const stats = [
    {
      value: "3+",
      title: "AI Projects",
      description: "From Computer Vision models to NLP applications.",
      hoverClass: "hover:bg-primary-container",
    },
    {
      value: "4+",
      title: "Full-stack",
      description: "Robust production-ready web and mobile platforms.",
      hoverClass: "hover:bg-secondary-container",
    },
    {
      value: "3",
      title: "Organizations",
      description: "Leading teams and managing internal relations.",
      hoverClass: "hover:bg-tertiary-container",
    },
  ]

  return (
    <section className="py-16 md:py-20 section-gradient-about section-blend-about w-full" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Heading */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label-caps text-primary tracking-widest mb-4 block font-bold">
              ABOUT ME
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground mb-4">
              Fusing Artificial Intelligence with full-stack engineering.
            </h2>
            <p className="text-body-md text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
              Final-year Informatics student at President University with a strong passion for Artificial Intelligence and full-stack software development. Experienced in building AI-powered web applications using Python, JavaScript, and TypeScript, with hands-on expertise in React, Next.js, and Supabase. Skilled in Machine Learning, Computer Vision, and Natural Language Processing, with a strong interest in developing intelligent, scalable solutions for real-world challenges.
            </p>
          </motion.div>

          {/* Right Cards Grid */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-bento-gap"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-surface-container rounded-3xl p-6 transition-all duration-300 group cursor-default flex flex-col justify-between min-h-[180px] shadow-sm border border-outline-variant/20 hover:scale-102 hover:shadow-lg ${stat.hoverClass} hover:text-white`}
              >
                <div>
                  <div className="text-display-lg text-4xl md:text-5xl font-black leading-none mb-3 text-foreground group-hover:text-white transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="font-bold text-base md:text-lg mb-1 text-foreground group-hover:text-white transition-colors duration-300">
                    {stat.title}
                  </div>
                </div>
                <p className="text-body-md text-sm text-on-surface-variant group-hover:text-white/80 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
