import TitanG1Blog from "@/components/titan-g1-blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Titan G1 Images: AWS's Revolutionary Approach to Image Generation | OpenAI In a Box",
  description:
    "Discover AWS's powerful image generation model that combines enterprise-grade reliability with cutting-edge creative capabilities for visual content creation at scale.",
  keywords: "Titan G1, AWS Bedrock, image generation, AI images, generative AI, AWS AI, OpenAI In a Box",
  openGraph: {
    title: "Titan G1 Images: AWS's Revolutionary Approach to Image Generation",
    description:
      "Discover AWS's powerful image generation model that combines enterprise-grade reliability with cutting-edge creative capabilities.",
    url: "https://openai-in-a-box.com/blog/titan-g1-images",
    type: "article",
    images: [
      {
        url: "/placeholder.svg?height=600&width=1200",
        width: 1200,
        height: 600,
        alt: "Titan G1 Images - AI generated artwork showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Titan G1 Images: AWS's Revolutionary Approach to Image Generation",
    description:
      "Discover AWS's powerful image generation model that combines enterprise-grade reliability with cutting-edge creative capabilities.",
    images: ["/placeholder.svg?height=600&width=1200"],
  },
}

export default function TitanG1BlogPage() {
  return <TitanG1Blog />
}

