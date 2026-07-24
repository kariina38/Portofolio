"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Brain, ArrowRight, Download } from "lucide-react"

export default function Hero() {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768
      const navbarOffset = isMobile ? 64 : 76
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - navbarOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] lg:min-h-[680px] flex items-center overflow-hidden section-gradient-hero w-full scroll-mt-20" id="home">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-12 lg:py-0 w-full relative z-10">
        {/* Background Accents */}
        <div className="glow-spot bg-primary -top-20 -left-20" />
        <div className="glow-spot bg-secondary -bottom-20 -right-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-bento-gap items-center w-full">
        {/* Left Content Column */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display-xl text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 font-extrabold tracking-tight">
            Ajeng Miftahul <span className="text-primary italic font-serif">Carina</span>
          </h1>
          <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed text-justify">
            Hi, I'm Carina. A final-year Informatics student at President University specializing in AI and Full-Stack development to build intelligent, scalable solutions.
          </p>
          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <button
              onClick={handleScrollToProjects}
              className="ethereal-gradient text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 active:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Ajeng_Miftahul_Carina.pdf"
              className="border-2 border-outline px-6 py-3 rounded-2xl font-bold text-sm hover:bg-surface-container-low transition-all duration-300 flex items-center gap-2 text-foreground w-full sm:w-auto justify-center cursor-pointer"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Media Column */}
        <motion.div
          className="lg:col-span-5 mt-12 lg:mt-0 flex items-center justify-center relative w-full order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Centered container for spinning circles and profile image */}
          <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[400px] aspect-square flex items-center justify-center">
            {/* Decorative outer spinning circle */}
            <div className="absolute w-[100%] h-[100%] rounded-full border-2 border-dashed border-primary/30 dark:border-primary/20 animate-[spin_40s_linear_infinite]" />
            
            {/* Secondary counter-rotating dashed circle */}
            <div className="absolute w-[108%] h-[108%] rounded-full border border-dashed border-secondary/20 dark:border-secondary/10 animate-[spin_60s_linear_infinite_reverse]" />

            {/* Ambient glowing ring in background */}
            <div className="absolute w-[94%] h-[94%] rounded-full bg-gradient-to-tr from-primary/10 via-secondary/15 to-transparent blur-xl" />

            {/* Glowing gradient rotating border */}
            <div className="absolute w-[94%] h-[94%] rounded-full p-[3px] bg-gradient-to-tr from-primary via-secondary to-tertiary animate-[spin_10s_linear_infinite] shadow-xl">
              <div className="w-full h-full bg-background rounded-full" />
            </div>

            {/* Image container frame */}
            <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden bg-gradient-to-b from-primary/10 via-surface-container-low to-secondary/10 shadow-2xl border border-outline-variant/30 z-10">
              <Image
                src="/profile.JPG"
                alt="Ajeng Miftahul Carina"
                fill
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
