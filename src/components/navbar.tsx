"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  const [activeSection, setActiveSection] = React.useState("")

  // Avoid hydration mismatch by waiting for mount
  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    // Scrollspy to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-30% 0px -50% 0px" }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((sec) => observer.observe(sec))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const navLinks = [
    { label: "Stack", href: "#stack", id: "stack" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const delay = isMobile ? 250 : 0
    
    setTimeout(() => {
      if (href === "#" || href === "body" || href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" })
        return
      }
      const element = document.querySelector(href)
      if (element) {
        const navbarOffset = isMobile ? 56 : 60
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - navbarOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    }, delay)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-outline-variant/30 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, "body")}
          className="font-display-xl text-xl md:text-2xl font-extrabold tracking-tighter text-foreground hover:opacity-80 transition-opacity"
        >
          Ajeng M. Carina
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 font-semibold text-sm text-muted-foreground">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`transition-all duration-300 relative group py-1 ${
                  isActive ? "text-primary font-bold" : "hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            )
          })}
        </div>

        {/* Desktop Buttons & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-10 h-10 transition-transform duration-300 hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-primary" />}
            </Button>
          )}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold text-sm hover:opacity-80 transition-opacity"
          >
            CV
          </a>

        </div>

        {/* Mobile Header Buttons (Menu & Theme toggle) */}
        <div className="flex md:hidden items-center gap-3">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-9 h-9"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-primary" />}
            </Button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-outline-variant/30 z-40 overflow-hidden shadow-lg flex flex-col items-center py-8 gap-5"
          >
            {navLinks.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-bold text-foreground hover:text-primary transition-colors w-full text-center py-1"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="w-[80%] h-[1px] bg-outline-variant/20 my-1"
            />
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 + 0.05 }}
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-primary hover:opacity-80 transition-opacity w-full text-center py-1"
              onClick={() => setIsOpen(false)}
            >
              CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
