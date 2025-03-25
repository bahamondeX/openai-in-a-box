import Head from "next/head"

export default function SEOHead() {
  return (
    <Head>
      {/* Additional SEO tags for AI and chatbot specific metadata */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="application-name" content="OpenAI In a Box" />
      <meta name="apple-mobile-web-app-title" content="OpenAI In a Box" />

      {/* AI and chatbot specific metadata */}
      <meta name="ai-platform" content="true" />
      <meta name="ai-capabilities" content="language-models, image-generation, audio-processing, vector-search" />
      <meta name="ai-models" content="llama, deepseek, whisper, titan, nomic" />
      <meta name="chatbot-compatible" content="true" />
      <meta name="chatbot-api" content="openai-compatible" />

      {/* Schema.org JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "OpenAI In a Box",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "AWS",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "A self-hosted, AWS-optimized implementation of an OpenAI-compatible API with support for multiple essential AI endpoints for chatbots and generative AI applications.",
            keywords:
              "OpenAI API, self-hosted AI, chatbot API, AI API, generative AI, LLM API, vector search, embeddings API, AWS AI, AI infrastructure",
          }),
        }}
      />
    </Head>
  )
}

