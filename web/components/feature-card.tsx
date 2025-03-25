import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 glassmorphic hover:glow-border theme-transition">
      <CardHeader className="pb-2">
        <div className="flex justify-center">{icon}</div>
        <h3 className="text-xl font-bold text-center mt-4 gradient-text">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-white text-center theme-transition">{description}</p>
      </CardContent>
    </Card>
  )
}

