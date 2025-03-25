"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Endpoints", href: "#endpoints" },
    { name: "Models", href: "#models" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Installation", href: "#installation" },
    { name: "Contact", href: "#contact" },
  ]

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    // Optional: Save user preference to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme-preference", newTheme)
    }
  }

  // Determine current theme for icon display
  const currentTheme = resolvedTheme || theme
  const isDark = currentTheme === "dark"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/10 dark:bg-gray-900/30 backdrop-blur-md shadow-sm glassmorphic" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span
              className={`text-xl font-bold font-orbitron ${
                isScrolled ? "text-gray-900 dark:text-white" : "text-white"
              }`}
            >
              OpenAI In a Box
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-primary dark:hover:text-blue-400 transition-colors ${
                  isScrolled ? "text-gray-700 dark:text-gray-300" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            {mounted && (
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                className={`rounded-full transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              >
                {isDark ? (
                  <Sun className="h-5 w-5 transition-transform duration-200 hover:rotate-45" />
                ) : (
                  <Moon className="h-5 w-5 transition-transform duration-200 hover:-rotate-12" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            <Button
              size="sm"
              variant={isScrolled ? "default" : "outline"}
              className={!isScrolled ? "border-white text-white hover:bg-white/10" : ""}
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            {/* Theme Toggle Mobile */}
            {mounted && (
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                className={`rounded-full mr-2 transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              >
                {isDark ? (
                  <Sun className="h-5 w-5 transition-transform duration-200 hover:rotate-45" />
                ) : (
                  <Moon className="h-5 w-5 transition-transform duration-200 hover:-rotate-12" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 glassmorphic">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button size="sm" className="w-full">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

