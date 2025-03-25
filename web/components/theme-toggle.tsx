"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useThemeEffect } from "@/hooks/use-theme-effect"

interface ThemeToggleProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function ThemeToggle({ variant = "ghost", size = "icon", className = "" }: ThemeToggleProps) {
  const { isDark, toggleTheme, mounted } = useThemeEffect()

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={`rounded-full ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <Sun className="h-5 w-5 theme-toggle-icon sun" /> : <Moon className="h-5 w-5 theme-toggle-icon moon" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

