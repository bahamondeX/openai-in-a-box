"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Share2, Twitter, Facebook, Linkedin, Link, Copy } from "lucide-react"

interface ShareButtonProps {
  title?: string
  description?: string
  className?: string
}

export default function ShareButton({
  title = "OpenAI In a Box",
  description = "A self-hosted, AWS-optimized implementation of an OpenAI-compatible API",
  className = "",
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  // Get the current URL
  const getUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href
    }
    return ""
  }

  // Encode for sharing
  const encodedUrl = encodeURIComponent(getUrl())
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  // Share URLs
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(getUrl())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={`bg-blue-600 hover:bg-blue-700 text-white ${className}`}>
          <Share2 className="mr-2 h-4 w-4" /> Share This Article
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={() => window.open(twitterUrl, "_blank")}>
          <Twitter className="mr-2 h-4 w-4" /> Share on Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => window.open(facebookUrl, "_blank")}>
          <Facebook className="mr-2 h-4 w-4" /> Share on Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => window.open(linkedinUrl, "_blank")}>
          <Linkedin className="mr-2 h-4 w-4" /> Share on LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem onClick={copyToClipboard}>
          {copied ? (
            <>
              <Copy className="mr-2 h-4 w-4" /> Copied!
            </>
          ) : (
            <>
              <Link className="mr-2 h-4 w-4" /> Copy Link
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

