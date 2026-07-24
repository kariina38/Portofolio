"use client"

import * as React from "react"
import { motion } from "framer-motion"


export default function Experience() {
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
  const experiences = [
    {
      role: "Vice Head of Internal Relations",
      organization: "PUFA Computer Science (BEM Faculty) – President University",
      period: "Oct 2025 – Present",
      description: "Led the Internal Relations division by coordinating member engagement programs, internal events, and cross-functional collaboration to strengthen organizational communication and culture.",
      color: "border-primary text-primary",
    },
    {
      role: "Member of Internal Relations Division",
      organization: "PUFA Computer Science (BEM Faculty) – President University",
      period: "Oct 2024 – Oct 2025",
      description: "Planned and coordinated internal events while facilitating cross-team communication to enhance member engagement and organizational effectiveness.",
      color: "border-secondary text-secondary",
    },
    {
      role: "PIC of Event Organizer Division",
      organization: "COMPSPHERE 2025 – President University",
      period: "Feb 2025 – Oct 2025",
      description: "Coordinated event operations and logistics with 130 committee members across 15 divisions, contributing to the successful execution of a technology event attended by over 1,000 participants.",
      color: "border-tertiary text-tertiary",
    },
  ]

  return (
    <section className="py-16 md:py-20 section-gradient-experience section-blend-experience w-full" id="experience">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col mb-12">
          <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground mb-4">
            Experience & Leadership
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed text-justify max-w-2xl">
            Beyond the screen, I lead organizational teams, coordinate university events, and facilitate educational technology workshops.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.role + exp.organization}
              className={`bg-surface-container-low p-6 rounded-2xl border-l-4 ${exp.color} hover:translate-y-[-4px] transition-all duration-300 shadow-sm flex flex-col justify-between`}
              variants={cardVariants}
            >
              <div>
                <div className="text-label-caps font-extrabold mb-1">
                   {exp.role}
                </div>
                <div className="font-bold text-base text-foreground mb-0.5">
                  {exp.organization}
                </div>
                <div className="text-xs font-semibold text-muted-foreground/75 mb-3">
                  {exp.period}
                </div>
              </div>
              <div className="text-sm text-on-surface-variant leading-relaxed text-justify mt-2">
                {exp.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
