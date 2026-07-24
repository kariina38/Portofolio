"use client"

import * as React from "react"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ajeng-miftahul-carina/" },
    { label: "GitHub", href: "https://github.com/kariina38" },
    { label: "Instagram", href: "https://www.instagram.com/carinaajeng/" },
    { label: "Email", href: "mailto:carinahakam@gmail.com" },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  } as const

  return (
    <footer className="bg-transparent border-t border-outline-variant/30 w-full py-6 md:py-8">
      <motion.div
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="font-display-lg text-xl font-extrabold text-foreground tracking-tighter"
          variants={itemVariants}
        >
          Ajeng Miftahul Carina
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-6 text-muted-foreground font-semibold text-sm"
          variants={itemVariants}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
        <motion.div
          className="text-muted-foreground/60 text-sm font-medium mt-4 md:mt-0 text-center"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} AI/Full-Stack Architect.
        </motion.div>
      </motion.div>
    </footer>
  )
}
