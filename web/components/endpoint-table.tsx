import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function EndpointTable() {
  const endpoints = [
    { name: "/models", description: "List available models" },
    { name: "/completions", description: "Text generation" },
    { name: "/chat/completions", description: "Interactive AI chat" },
    { name: "/embeddings", description: "Vector representations for semantic search" },
    { name: "/audio", description: "Audio processing (TTS and STT)" },
    { name: "/images", description: "Image generation, editing and variations" },
    { name: "/files", description: "File management" },
    { name: "/vector_stores", description: "Efficient data indexing and retrieval" },
    { name: "/search", description: "Advanced semantic search", isNew: true },
  ]

  return (
    <div className="rounded-lg border shadow-sm overflow-hidden dark:border-gray-700">
      <Table>
        <TableHeader className="bg-gray-100 dark:bg-gray-800">
          <TableRow className="border-gray-200 dark:border-gray-700">
            <TableHead className="w-1/3 text-gray-700 dark:text-gray-200">Endpoint</TableHead>
            <TableHead className="text-gray-700 dark:text-gray-200">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {endpoints.map((endpoint) => (
            <TableRow
              key={endpoint.name}
              className="border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              <TableCell className="font-mono text-gray-500 dark:text-gray-200">
                {endpoint.name}
                {endpoint.isNew && (
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    New
                  </span>
                )}
              </TableCell>
              <TableCell className="text-gray-500 dark:text-white">{endpoint.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

