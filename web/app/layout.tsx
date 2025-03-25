import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter, Orbitron } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "OpenAI In a Box - Self-hosted OpenAI-compatible API",
  description:
    "A self-hosted, AWS-optimized implementation of an OpenAI-compatible API with support for multiple essential AI endpoints for chatbots and generative AI applications.",
  keywords:
    "OpenAI API, self-hosted AI, chatbot API, AI API, generative AI, LLM API, vector search, embeddings API, AWS AI, AI infrastructure",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://api.oscarbahamonde.cloud",
    title: "OpenAI In a Box - Self-hosted OpenAI-compatible API",
    description:
      "A self-hosted, AWS-optimized implementation of an OpenAI-compatible API with support for multiple essential AI endpoints for chatbots and generative AI applications.",
    siteName: "OpenAI In a Box",
    images: [
      {
        url: "/landscape.png",
        width: 1200,
        height: 630,
        alt: "OpenAI In a Box - High-performance AI infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenAI In a Box - Self-hosted OpenAI-compatible API",
    description:
      "A self-hosted, AWS-optimized implementation of an OpenAI-compatible API with support for multiple essential AI endpoints for chatbots and generative AI applications.",
    images: [
      "/landscape.png",
    ],
    creator: "@bahamondex",
  },
  alternates: {
    canonical: "https://openai-in-a-box.com",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans theme-transition`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

