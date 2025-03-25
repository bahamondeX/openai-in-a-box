import { Mail, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text brightness-75 glow-text">👤 Contact</h2>
          <p className="text-gray-800 dark:text-white max-w-2xl mx-auto glassmorphic p-4 rounded-lg">
            Get in touch for support or inquiries about OpenAI In a Box.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-lg glassmorphic">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-6 text-center">
                  <Mail className="h-12 w-12 brightness-75 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 gradient-text brightness-75">Email Support</h3>
                  <p className="text-gray-800 dark:text-white mb-4">
                    Reach out via email for technical support or general inquiries.
                  </p>
                  <Button variant="outline" className="mt-auto glassmorphic hover:glow-border">
                    <a href="mailto:oscar.bahamonde.dev@gmail.com">oscar.bahamonde.dev@gmail.com</a>
                  </Button>
                </div>

                <div className="flex flex-col items-center p-6 text-center">
                  <Github className="h-12 brightness-75 w-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 gradient-text brightness-75">GitHub Issues</h3>
                  <p className="text-gray-800 dark:text-white mb-4">
                    Open a ticket on the official repository for bug reports or feature requests.
                  </p>
                  <Button variant="outline" className="mt-auto glassmorphic hover:glow-border">
                    <a
                      href="https://github.com/bahamondex/openai-in-a-box/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open an Issue
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

