import WhisperBlog from "@/components/whisper-blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Whisper-Large-v3: State-of-the-Art Speech Recognition | OpenAI In a Box",
  description:
    "Explore OpenAI's groundbreaking speech recognition model with unprecedented accuracy across 100+ languages and challenging acoustic environments.",
  keywords:
    "Whisper-Large-v3, speech recognition, transcription, multilingual, OpenAI, speech-to-text, OpenAI In a Box",
  openGraph: {
    title: "Whisper-Large-v3: State-of-the-Art Speech Recognition",
    description:
      "Explore OpenAI's groundbreaking speech recognition model with unprecedented accuracy across languages and acoustic environments.",
    url: "https://openai-in-a-box.com/blog/whisper-large-v3",
    type: "article",
    images: [
      {
        url: "/placeholder.svg?height=600&width=1200",
        width: 1200,
        height: 600,
        alt: "Whisper-Large-v3 - Audio waveform and transcription visualization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whisper-Large-v3: State-of-the-Art Speech Recognition",
    description:
      "Explore OpenAI's groundbreaking speech recognition model with unprecedented accuracy across languages and acoustic environments.",
    images: ["/placeholder.svg?height=600&width=1200"],
  },
}

export default function WhisperBlogPage() {
  return <WhisperBlog />
}

