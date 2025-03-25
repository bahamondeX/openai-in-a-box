import BlogPost from "@/components/blog-post"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DeepSeek R1 & Llama 70B: Revolutionizing AI Reasoning | OpenAI In a Box",
  description:
    "Learn how DeepSeek R1 and Llama 70B are setting new standards for AI reasoning with Chain of Thought capabilities and advanced problem-solving skills.",
  keywords: "DeepSeek R1, Llama 70B, AI reasoning, Chain of Thought, LLM, large language model, OpenAI In a Box",
  openGraph: {
    title: "DeepSeek R1 & Llama 70B: Revolutionizing AI Reasoning Capabilities",
    description:
      "Learn how DeepSeek R1 and Llama 70B are setting new standards for AI reasoning with Chain of Thought capabilities.",
    url: "https://openai-in-a-box.com/blog/deepseek-r1-llama-70b",
    type: "article",
    images: [
      {
        url: "/placeholder.svg?height=600&width=1200",
        width: 1200,
        height: 600,
        alt: "DeepSeek R1 & Llama 70B visualization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepSeek R1 & Llama 70B: Revolutionizing AI Reasoning Capabilities",
    description:
      "Learn how DeepSeek R1 and Llama 70B are setting new standards for AI reasoning with Chain of Thought capabilities.",
    images: ["/placeholder.svg?height=600&width=1200"],
  },
}

export default function DeepSeekBlogPage() {
  return <BlogPost />
}

