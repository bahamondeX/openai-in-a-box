import { Card, CardContent } from "@/components/ui/card"
import { Server, Database, Cpu, Network } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Server className="h-12 w-12 text-blue-500" />,
      title: "AWS Infrastructure",
      description:
        "OpenAI In a Box runs on AWS infrastructure, leveraging H100 GPUs or 4xA40 GPUs for high-performance AI processing. The system is designed to scale horizontally as demand increases.",
    },
    {
      icon: <Database className="h-12 w-12 text-purple-500" />,
      title: "API Layer",
      description:
        "A fully documented REST API layer implements the complete OpenAI API specification, ensuring compatibility with all existing tools and SDKs that work with OpenAI.",
    },
    {
      icon: <Cpu className="h-12 w-12 text-pink-500" />,
      title: "Model Execution",
      description:
        "Optimized model execution pipelines ensure efficient inference for language models, image generation, audio processing, and vector operations with minimal latency.",
    },
    {
      icon: <Network className="h-12 w-12 text-blue-500" />,
      title: "Vector Storage",
      description:
        "Built-in vector storage capabilities enable semantic search and retrieval, with support for multiple indexing strategies and similarity metrics.",
    },
  ]

  return (
    <div className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 gradient-text glow-text title-font">🔄 How It Works</h2>
        <p className="text-gray-500 dark:text-white max-w-2xl mx-auto glassmorphic p-4 rounded-lg">
          OpenAI In a Box provides a complete, production-ready implementation of the OpenAI API specification on your
          own infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="border-0 shadow-lg glassmorphic hover:glow-border">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 gradient-text">{step.title}</h3>
                <p className="text-gray-500 dark:text-white">{step.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 glassmorphic p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 gradient-text text-center">Technical Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-500 dark:text-gray-200 mb-2">Hardware Requirements</h4>
            <ul className="list-disc pl-5 text-gray-500 dark:text-white space-y-1">
              <li>NVIDIA H100 GPU or 4x A40 GPUs</li>
              <li>Minimum 64GB RAM</li>
              <li>500GB+ NVMe storage</li>
              <li>10Gbps+ network connectivity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-500 dark:text-gray-200 mb-2">Software Stack</h4>
            <ul className="list-disc pl-5 text-gray-500 dark:text-white space-y-1">
              <li>Docker containerization</li>
              <li>CUDA 12.0+ and cuDNN</li>
              <li>Python 3.8+ runtime</li>
              <li>FastAPI web framework</li>
              <li>PostgreSQL for metadata storage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

