"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

/**
 * A custom hook that provides theme-related functionality with effects
 * @returns An object containing theme information and utility functions
 */
export function useThemeEffect() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [themeTransitioning, setThemeTransitioning] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle theme transitions
  useEffect(() => {
    if (!mounted) return

    const handleThemeChange = () => {
      setThemeTransitioning(true)
      setTimeout(() => {
        setThemeTransitioning(false)
      }, 300) // Match this with your CSS transition duration
    }

    // Listen for theme changes
    window.addEventListener("themeChange", handleThemeChange)

    // Initial check
    handleThemeChange()

    return () => {
      window.removeEventListener("themeChange", handleThemeChange)
    }
  }, [mounted])

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    if (theme && mounted) {
      localStorage.setItem("theme-preference", theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    // Dispatch custom event for theme change
    const themeChangeEvent = new CustomEvent("themeChange", { detail: { theme: newTheme } })
    window.dispatchEvent(themeChangeEvent)
  }

  return {
    theme,
    resolvedTheme,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    toggleTheme,
    mounted,
    themeTransitioning,
  }
}

