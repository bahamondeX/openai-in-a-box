import NomicEmbeddingsBlog from "@/components/nomic-embeddings-blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nomic Embeddings: Revolutionizing Vector Representations for AI | OpenAI In a Box",
  description:
    "Explore how Nomic Embeddings are transforming semantic search and AI understanding with state-of-the-art vector representations for text and multimodal content.",
  keywords:
    "Nomic Embeddings, vector embeddings, semantic search, RAG, multimodal AI, vector database, OpenAI In a Box",
  openGraph: {
    title: "Nomic Embeddings: Revolutionizing Vector Representations for AI",
    description:
      "Explore how Nomic Embeddings are transforming semantic search and AI understanding with state-of-the-art vector representations.",
    url: "https://openai-in-a-box.com/blog/nomic-embeddings",
    type: "article",
    images: [
      {
        url: "/placeholder.svg?height=600&width=1200",
        width: 1200,
        height: 600,
        alt: "Nomic Embeddings visualization showing vector space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomic Embeddings: Revolutionizing Vector Representations for AI",
    description:
      "Explore how Nomic Embeddings are transforming semantic search and AI understanding with state-of-the-art vector representations.",
    images: ["/placeholder.svg?height=600&width=1200"],
  },
}

export default function NomicEmbeddingsBlogPage() {
  return <NomicEmbeddingsBlog />
}

