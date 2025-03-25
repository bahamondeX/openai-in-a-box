import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Calculator, Zap, Clock } from "lucide-react"
import ShareButton from "@/components/share-button"

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text glow-text title-font">
          DeepSeek R1 & Llama 70B: Revolutionizing AI Reasoning Capabilities
        </h1>
        <p className="text-gray-500 dark:text-white mb-6">Published on March 17, 2025 • 8 min read</p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            #LargeLanguageModels
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            #AIReasoning
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
            #OpenSource
          </span>
        </div>
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src="/llm_bg.png"
            alt="DeepSeek R1 & Llama 70B visualization"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-gray-700 dark:text-gray-200">
          In the rapidly evolving landscape of artificial intelligence, reasoning capabilities have become the new
          frontier. DeepSeek's latest innovation, the DeepSeek R1 Distill Llama 70B, represents a significant leap
          forward in this domain, offering unprecedented Chain of Thought reasoning capabilities while maintaining
          computational efficiency.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">The Power of Knowledge Distillation</h2>

        <p>
          DeepSeek R1 Distill Llama 70B is not just another large language model. Built upon Meta's Llama
          3.3-70B-Instruct foundation, this model employs sophisticated knowledge distillation techniques to enhance its
          reasoning capabilities without the computational overhead typically associated with larger models.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <Card className="border-0 shadow-lg glassmorphic hover:glow-border">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Brain className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Advanced Reasoning</h3>
                <p className="text-gray-500 dark:text-white">
                  Excels at complex mathematical and logical reasoning tasks with human-like step-by-step thinking.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg glassmorphic hover:glow-border">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Live Coding</h3>
                <p className="text-gray-500 dark:text-white">
                  Demonstrates exceptional performance on LiveCodeBench, producing functional and efficient code.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg glassmorphic hover:glow-border">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Calculator className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Mathematical Prowess</h3>
                <p className="text-gray-500 dark:text-white">
                  Achieves impressive results on AIME 2024 and MATH-500 benchmarks, rivaling specialized models.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">
          Chain of Thought: The Reasoning Revolution
        </h2>

        <p>
          What truly sets DeepSeek R1 Distill Llama 70B apart is its Chain of Thought (CoT) reasoning capabilities.
          Unlike traditional models that jump directly to answers, DeepSeek R1 employs a human-like reasoning process:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
          <h4 className="font-bold mb-3">Example: Complex Mathematical Problem Solving</h4>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <p className="font-medium text-gray-500 dark:text-gray-200">Problem:</p>
              <p className="text-gray-700 dark:text-white">
                Find all pairs of positive integers (a,b) such that a² - b² = 2023.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <p className="font-medium text-gray-500 dark:text-gray-200">DeepSeek R1's Chain of Thought:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-white">
                <li>I need to factor 2023 as a difference of squares: a² - b² = (a+b)(a-b) = 2023</li>
                <li>
                  So I need to find all factor pairs of 2023 where both factors have the same parity (both odd or both
                  even)
                </li>
                <li>Let's find the prime factorization of 2023: 2023 = 7 × 289 = 7 × 17²</li>
                <li>The factor pairs are: (1, 2023), (7, 289), (17, 119), (119, 17), (289, 7), (2023, 1)</li>
                <li>For each pair (p,q), I can compute a = (p+q)/2 and b = (p-q)/2 if both are integers</li>
                <li>Checking each pair... [detailed calculations]</li>
                <li>Therefore, the valid pairs (a,b) are: (1012, 1011), (148, 141), (68, 51), (1012, 1011)</li>
              </ol>
            </div>
          </div>
        </div>

        <p>
          This step-by-step reasoning process allows DeepSeek R1 to tackle complex problems that would stump many other
          models. By breaking down problems into logical steps, the model not only arrives at correct answers but also
          provides transparent reasoning that users can follow and verify.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">
          Technical Specifications That Enable Reasoning
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <Clock className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Extended Context Window</h3>
                <p className="text-gray-700 dark:text-white">
                  With a 128K token context window, DeepSeek R1 can maintain coherent reasoning across extremely long
                  documents and conversations, enabling complex multi-step problem solving.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <Zap className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Speculative Decoding</h3>
                <p className="text-gray-700 dark:text-white">
                  The SpecDec variant employs advanced speculative decoding techniques, dramatically reducing response
                  latency while maintaining the quality of complex reasoning chains.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Real-World Applications</h2>

        <p>
          The advanced reasoning capabilities of DeepSeek R1 Distill Llama 70B open up numerous practical applications:
        </p>

        <ul className="list-disc list-inside space-y-2 my-4 text-gray-700 dark:text-white">
          <li>
            <strong>Scientific Research:</strong> Assisting researchers in hypothesis generation and data analysis with
            transparent reasoning
          </li>
          <li>
            <strong>Education:</strong> Providing step-by-step explanations for complex concepts in mathematics,
            physics, and other disciplines
          </li>
          <li>
            <strong>Software Development:</strong> Generating well-reasoned, efficient code with clear explanations of
            design decisions
          </li>
          <li>
            <strong>Financial Analysis:</strong> Breaking down complex financial models and risk assessments with
            logical reasoning chains
          </li>
          <li>
            <strong>Legal Reasoning:</strong> Analyzing legal documents and precedents with structured, transparent
            logic
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Accessibility and Deployment</h2>

        <p>
          One of the most significant aspects of DeepSeek R1 Distill Llama 70B is its accessibility. With an MIT
          open-source license, this powerful reasoning engine is available to developers, researchers, and organizations
          through multiple platforms:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-5 rounded-lg text-center">
            <h4 className="font-bold mb-2">GroqCloud™</h4>
            <p className="text-sm text-gray-700 dark:text-white">Instant reasoning with full 128K context support</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-5 rounded-lg text-center">
            <h4 className="font-bold mb-2">Hugging Face</h4>
            <p className="text-sm text-gray-700 dark:text-white">Ideal for research and experimentation</p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 p-5 rounded-lg text-center">
            <h4 className="font-bold mb-2">Ollama</h4>
            <p className="text-sm text-gray-700 dark:text-white">Perfect for lightweight local deployments</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">The Future of AI Reasoning</h2>

        <p>
          DeepSeek R1 Distill Llama 70B represents a significant milestone in the evolution of AI reasoning. By
          demonstrating that sophisticated reasoning capabilities can be achieved through knowledge distillation rather
          than simply scaling model size, it points toward a future where AI systems can provide transparent, verifiable
          reasoning at scale.
        </p>

        <p>
          As organizations integrate this model into their workflows, we can expect to see new applications that
          leverage its Chain of Thought capabilities to solve increasingly complex problems across domains.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
          <h3 className="font-bold text-lg mb-2">Key Takeaway</h3>
          <p className="text-gray-700 dark:text-white">
            DeepSeek R1 Distill Llama 70B demonstrates that the future of AI isn't just about bigger models—it's about
            smarter distillation techniques that enhance reasoning capabilities while maintaining efficiency. With its
            open-source license and multi-platform availability, it's democratizing access to advanced AI reasoning for
            developers and organizations worldwide.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Getting Started</h2>

        <p>
          Ready to experience the reasoning capabilities of DeepSeek R1 Distill Llama 70B? Here's how you can get
          started:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">Via GroqCloud API:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                <code>
                  {`curl -X POST https://api.groq.com/openai/v1/chat/completions *
  -H "Authorization: Bearer $GROQ_API_KEY" *
  -H "Content-Type: application/json" *
  -d '{
    "model": "deepseek-r1-distill-llama-70b",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant that uses chain-of-thought reasoning."
      },
      {
        "role": "user",
        "content": "Solve this step by step: If 3x + 7 = 22, what is the value of x?"
      }
    ]
  }'`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-10">
          <ShareButton
            title="DeepSeek R1 & Llama 70B: Revolutionizing AI Reasoning Capabilities"
            description="Learn how DeepSeek R1 and Llama 70B are setting new standards for AI reasoning with Chain of Thought capabilities."
          />
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
          <h3 className="font-bold text-xl mb-4">References</h3>
          <ul className="space-y-2 text-gray-700 dark:text-white">
            <li>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                DeepSeek R1 Distill Llama 70B on Groq
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                Hugging Face Model Repository
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                Ollama Model Access
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}