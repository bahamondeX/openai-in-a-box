"use client "
import { useState } from "react"
import Header from "~/components/Header"
import Hero from "~/components/Hero"
import Models from "~/components/Models"
import Installation from "~/components/Installation"
import Usage from "~/components/Usage"
import Footer from "~/components/Footer"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Models />
        <Installation />
        <Usage />
      </main>
      <Footer />
    </div>
  )
}