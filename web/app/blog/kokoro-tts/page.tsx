import KokoroTTSBlog from "@/components/kokoro-tts-blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kokoro TTS: Next-Generation Text-to-Speech Technology | OpenAI In a Box",
  description:
    "Discover how Kokoro TTS is transforming voice technology with natural-sounding, emotionally expressive speech synthesis across 40+ languages.",
  keywords: "Kokoro TTS, text-to-speech, voice AI, speech synthesis, multilingual TTS, emotional TTS, OpenAI In a Box",
  openGraph: {
    title: "Kokoro TTS: Next-Generation Text-to-Speech Technology",
    description:
      "Discover how Kokoro TTS is transforming voice technology with natural-sounding, emotionally expressive speech synthesis.",
    url: "https://openai-in-a-box.com/blog/kokoro-tts",
    type: "article",
    images: [
      {
        url: "/placeholder.svg?height=600&width=1200",
        width: 1200,
        height: 600,
        alt: "Kokoro TTS - Audio waveform visualization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kokoro TTS: Next-Generation Text-to-Speech Technology",
    description:
      "Discover how Kokoro TTS is transforming voice technology with natural-sounding, emotionally expressive speech synthesis.",
    images: ["/placeholder.svg?height=600&width=1200"],
  },
}

export default function KokoroTTSBlogPage() {
  return <KokoroTTSBlog />
}

