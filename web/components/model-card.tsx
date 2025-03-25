import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ModelCardProps {
  title: string
  category: string
  description: string
  badges: string[]
  href?: string
}

export default function ModelCard({ title, category, description, badges, href }: ModelCardProps) {
  const getBadgeColor = (badge: string) => {
    const colors: Record<string, string> = {
      Groq: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      Multimodal: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      Nomic: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      AWS: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      KokoroAI: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      OpenAI: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    }

    return colors[badge] || "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-200"
  }

  const CardComponent = (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 glassmorphic hover:glow-border theme-transition h-full">
      <CardHeader className="pb-2">
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-500 theme-transition">{category}</span>
          <h3 className="text-xl font-bold gradient-text">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-white mb-4 theme-transition">{description}</p>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(badge)} theme-transition`}
            >
              {badge}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  if (href) {
    return (
      <Link href={href} className="block h-full transition-transform hover:scale-[1.02]">
        {CardComponent}
      </Link>
    )
  }

  return CardComponent
}

