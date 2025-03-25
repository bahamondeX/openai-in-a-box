import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background image with mask */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landscape.png"
          alt="High-performance AI server infrastructure"
          fill
          className="object-cover server-image-mask"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90 z-10"></div>
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient opacity-40 z-20"></div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block glassmorphic rounded-full p-4 mb-8 glow-border floating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-400 dark:text-blue-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-glow title-font">
            OpenAI In a Box
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-10 glassmorphic p-6 rounded-lg">
            A self-hosted, AWS-optimized implementation of an OpenAI-compatible
            API with support for multiple essential AI endpoints.
            Production-ready for enterprise applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white glow-border"
            >
              <a href="https://api.oscarbahamonde.cloud/docs">Get Started</a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-300 hover:bg-blue-900/20 glassmorphic"
            >
              <a
                href="https://github.com/bahamondex/openai-in-a-box"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" /> View on GitHub
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="glassmorphic p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-blue-300">OpenAI Compatible</p>
            </div>
            <div className="glassmorphic p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-white">9+</h3>
              <p className="text-blue-300">API Endpoints</p>
            </div>
            <div className="glassmorphic p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-white">5+</h3>
              <p className="text-blue-300">AI Models</p>
            </div>
            <div className="glassmorphic p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-white">AWS</h3>
              <p className="text-blue-300">Optimized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

