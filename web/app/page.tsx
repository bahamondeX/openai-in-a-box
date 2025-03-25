import Link from "next/link"
import { Github, Server, Code, Image, Mic, Database } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import EndpointTable from "@/components/endpoint-table"
import ModelCard from "@/components/model-card"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import UseCases from "@/components/use-cases"
import InstallationSteps from "@/components/installation-steps"
import ContactSection from "@/components/contact-section"
import SEOHead from "@/components/seo-head"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SEOHead />
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text glow-text title-font">✨ Key Features</h2>
            <p className="text-gray-500 dark:text-white max-w-2xl mx-auto glassmorphic p-4 rounded-lg">
              OpenAI In a Box provides a comprehensive solution for developers and businesses looking to leverage
              cutting-edge AI models without external dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code className="h-10 w-10 text-blue-500" />}
              title="100% OpenAI Compatible"
              description="Seamlessly integrate with existing applications using the familiar OpenAI API interface."
            />
            <FeatureCard
              icon={<Server className="h-10 w-10 text-purple-500" />}
              title="AWS Optimized"
              description="Designed to run efficiently on AWS infrastructure with high performance and scalability."
            />
            <FeatureCard
              icon={<Database className="h-10 w-10 text-pink-500" />}
              title="Vector Search"
              description="Built-in support for semantic search and vector storage capabilities."
            />
            <FeatureCard
              icon={<Image className="h-10 w-10 text-blue-500" />}
              title="Image Generation"
              description="Create, edit, and modify images using state-of-the-art generative models."
            />
            <FeatureCard
              icon={<Mic className="h-10 w-10 text-purple-500" />}
              title="Audio Processing"
              description="Text-to-speech and speech-to-text capabilities with premium quality models."
            />
            <FeatureCard
              icon={<Github className="h-10 w-10 text-pink-500" />}
              title="Open Source"
              description="Fully open source and extensible, encouraging community contributions and innovation."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <HowItWorks />
        </div>
      </section>

      {/* Endpoints Section */}
      <section id="endpoints" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text glow-text title-font">🌐 Supported Endpoints</h2>
            <p className="text-white max-w-2xl mx-auto glassmorphic p-4 rounded-lg">
              OpenAI In a Box supports all essential endpoints for generative AI applications.
            </p>
          </div>

          <div className="glassmorphic rounded-lg">
            <EndpointTable />
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text glow-text title-font">🔬 Supported Models</h2>
            <p className="text-gray-500 dark:text-white max-w-2xl mx-auto glassmorphic p-4 rounded-lg">
              Leverage state-of-the-art AI models across various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModelCard
              title="DeepSeek R1 & Llama 70B"
              category="Language Models"
              description="Advanced LLMs with Chain of Thoughts reasoning capabilities"
              badges={["Groq"]}
              href="/blog/deepseek-r1-llama-70b"
            />
            <ModelCard
              title="Nomic Embeddings"
              category="Vector Embeddings"
              description="Vector encoding for contextual data representation"
              badges={["Multimodal", "Nomic"]}
              href="/blog/nomic-embeddings"
            />
            <ModelCard
              title="Titan G1 Images"
              category="Image Generation"
              description="Create, edit and modify generative images"
              badges={["AWS"]}
              href="/blog/titan-g1-images"
            />
            <ModelCard
              title="Kokoro TTS"
              category="Text-to-Speech"
              description="Premium quality text-to-speech conversion"
              badges={["KokoroAI"]}
              href="/blog/kokoro-tts"
            />
            <ModelCard
              title="Whisper-Large-v3"
              category="Speech-to-Text"
              description="Advanced speech transcription and translation"
              badges={["OpenAI"]}
              href="/blog/whisper-large-v3"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <UseCases />
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20 rotate-180"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text glow-text title-font">🛠️ Installation & Setup</h2>
            <p className="text-gray-500 dark:text-white max-w-2xl mx-auto glassmorphic p-4 rounded-lg">
              Get up and running with OpenAI In a Box in minutes.
            </p>
          </div>

          <InstallationSteps />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold gradient-text font-orbitron">OpenAI In a Box</h3>
              <p className="text-gray-500 mt-2">Self-hosted OpenAI-compatible API for AWS</p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://github.com/bahamondex/openai-in-a-box"
                className="hover:text-blue-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#contact" className="hover:text-blue-400 transition-colors">
                <span className="sr-only">Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>🌟 Made with passion by Oscar Bahamonde to drive the future of artificial intelligence.</p>
            <p className="mt-2">© {new Date().getFullYear()} OpenAI In a Box. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

