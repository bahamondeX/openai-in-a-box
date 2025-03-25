import { CheckCircle2, Terminal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function InstallationSteps() {
  const prerequisites = ["Docker", "AWS Account", "Python 3.8+"]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="border-0 shadow-lg glassmorphic hover:glow-border">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4 gradient-text">🔹 Prerequisites</h3>
          <ul className="space-y-3">
            {prerequisites.map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg glassmorphic hover:glow-border">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4 gradient-text">👉 Quick Installation</h3>
          <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm">
            <div className="flex items-start mb-3">
              <Terminal className="h-5 w-5 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-500 mb-1"># Clone the repository</p>
                <p>git clone https://github.com/bahamondex/openai-in-a-box.git</p>
                <p>cd openai-in-a-box</p>
              </div>
            </div>
            <div className="flex items-start">
              <Terminal className="h-5 w-5 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-500 mb-1"># Build and run with Docker</p>
                <p>docker-compose up --build</p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-800 text-blue-300 rounded-md">
            <p className="font-medium">Once deployed, the API will be available at:</p>
            <p className="font-mono mt-2 text-blue-400 glow-text">http://localhost:80</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

