import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageSquare, Search, FileText, Brain, Bot, Code } from "lucide-react"

export default function UseCases() {
  const cases = [
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
      title: "Enterprise Chatbots",
      description:
        "Deploy advanced conversational AI systems that can access your internal knowledge base while keeping all data within your security perimeter.",
    },
    {
      icon: <Search className="h-10 w-10 text-purple-500" />,
      title: "Semantic Search",
      description:
        "Implement powerful semantic search capabilities across your organization's documents, code, and knowledge repositories.",
    },
    {
      icon: <FileText className="h-10 w-10 text-pink-500" />,
      title: "Document Processing",
      description:
        "Automate extraction, summarization, and analysis of information from documents, reports, and unstructured data sources.",
    },
    {
      icon: <Brain className="h-10 w-10 text-blue-500" />,
      title: "Research & Development",
      description:
        "Accelerate R&D efforts with AI-powered analysis, hypothesis generation, and literature review capabilities.",
    },
    {
      icon: <Bot className="h-10 w-10 text-purple-500" />,
      title: "Customer Support",
      description:
        "Enhance customer support with AI agents that can understand complex queries and provide accurate, contextual responses.",
    },
    {
      icon: <Code className="h-10 w-10 text-pink-500" />,
      title: "Code Generation",
      description:
        "Boost developer productivity with AI-assisted code generation, documentation, and debugging capabilities.",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-20 rotate-180"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text glow-text title-font">🚀 Use Cases</h2>
          <p className="text-gray-500 dark:text-white max-w-2xl mx-auto glassmorphic p-4 rounded-lg">
            OpenAI In a Box enables a wide range of AI applications while maintaining complete control over your data
            and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <Card key={index} className="border-0 shadow-lg glassmorphic hover:glow-border">
              <CardHeader className="pb-2">
                <div className="flex justify-center">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-center mt-4 gradient-text">{useCase.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-white text-center">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 glassmorphic p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 gradient-text text-center">Industry Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-gray-500 dark:text-gray-200 mb-2">Financial Services</h4>
              <ul className="list-disc pl-5 text-gray-500 dark:text-white space-y-1">
                <li>Risk assessment automation</li>
                <li>Fraud detection systems</li>
                <li>Personalized financial advice</li>
                <li>Regulatory compliance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-500 dark:text-gray-200 mb-2">Healthcare</h4>
              <ul className="list-disc pl-5 text-gray-500 dark:text-white space-y-1">
                <li>Medical research assistance</li>
                <li>Patient data analysis</li>
                <li>Treatment recommendation</li>
                <li>Administrative automation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-500 dark:text-gray-200 mb-2">Legal</h4>
              <ul className="list-disc pl-5 text-gray-500 dark:text-white space-y-1">
                <li>Contract analysis</li>
                <li>Legal research</li>
                <li>Case precedent search</li>
                <li>Document preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

