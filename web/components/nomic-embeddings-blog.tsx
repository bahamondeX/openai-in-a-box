import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Search, FileText, Network, Layers } from "lucide-react"
import ShareButton from "@/components/share-button"

export default function NomicEmbeddingsBlog() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text glow-text title-font">
          Nomic Embeddings: Revolutionizing Vector Representations for AI
        </h1>
        <p className="text-gray-500 dark:text-white mb-6">Published on March 17, 2025 • 10 min read</p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
            #VectorEmbeddings
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            #SemanticSearch
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            #Multimodal
          </span>
        </div>
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src="/nomic_bg.png"
            alt="Nomic Embeddings visualization showing vector space"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-gray-700 dark:text-gray-200">
          In the rapidly evolving landscape of artificial intelligence, vector embeddings have emerged as a foundational
          technology powering everything from semantic search to recommendation systems. Nomic Embeddings represents a
          significant leap forward in this domain, offering state-of-the-art multimodal vector representations that are
          transforming how machines understand and process information.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Understanding Vector Embeddings</h2>

        <p>
          At their core, vector embeddings are numerical representations of data (text, images, audio) in a
          high-dimensional space where semantic relationships are preserved. Unlike traditional keyword-based
          approaches, embeddings capture the meaning and context of information, allowing for more nuanced understanding
          and comparison.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
          <h4 className="font-bold mb-3">Example: Text Embedding Visualization</h4>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/nomic_distribution.png"
              alt="Vector embedding visualization showing semantic relationships"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4">
              <p className="text-white text-sm">
                Visualization of Nomic embeddings showing how semantically similar concepts cluster together in vector
                space
              </p>
            </div>
          </div>
        </div>

        <p>
          What sets Nomic Embeddings apart is their exceptional ability to capture nuanced semantic relationships across
          multiple modalities while maintaining computational efficiency. This makes them ideal for a wide range of
          applications requiring deep understanding of content.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Key Innovations in Nomic Embeddings</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <Card className="border-0 shadow-lg glassmorphic hover:glow-border">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Layers className="h-12 w-12 text-cyan-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Multimodal Architecture</h3>
                <p className="text-gray-500 dark:text-white">
                  Seamlessly processes and aligns text, images, and structured data in a unified vector space.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg glassmorphic hover:glow-border">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Network className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">High Dimensionality</h3>
                <p className="text-gray-500 dark:text-white">
                  1024-dimensional embeddings capture subtle semantic nuances while maintaining computational
                  efficiency.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg glassmorphic hover:glow-border">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Database className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Contextual Understanding</h3>
                <p className="text-gray-500 dark:text-white">
                  Advanced context window processing enables accurate representation of long documents and complex
                  relationships.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Technical Deep Dive</h2>

        <p>
          Nomic Embeddings are built on a sophisticated architecture that combines transformer-based encoding with
          contrastive learning techniques. The model processes input through several key stages:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
          <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-white">
            <li>
              <strong>Input Processing:</strong> Text is tokenized using a specialized tokenizer that handles multiple
              languages and technical terminology efficiently. Images are processed through a vision encoder that
              extracts hierarchical features.
            </li>
            <li>
              <strong>Contextual Encoding:</strong> A transformer-based architecture with 24 layers and 16 attention
              heads processes the tokenized input, generating context-aware representations.
            </li>
            <li>
              <strong>Dimensionality Mapping:</strong> The high-dimensional internal representations are mapped to a
              1024-dimensional vector space through a specialized projection layer.
            </li>
            <li>
              <strong>Normalization:</strong> Vectors are L2-normalized to ensure consistent comparison metrics across
              different types of content.
            </li>
          </ol>
        </div>

        <p>
          This architecture enables Nomic Embeddings to achieve state-of-the-art performance on benchmark tasks
          including:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="font-bold mb-3">MTEB Benchmark</h4>
            <div className="flex items-center justify-between mb-2">
              <span>Nomic Embeddings</span>
              <span className="font-bold">72.4%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-cyan-600 h-2.5 rounded-full" style={{ width: "72.4%" }}></div>
            </div>
            <div className="flex items-center justify-between mt-4 mb-2">
              <span>Previous SOTA</span>
              <span className="font-bold">68.7%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "68.7%" }}></div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="font-bold mb-3">BEIR Retrieval</h4>
            <div className="flex items-center justify-between mb-2">
              <span>Nomic Embeddings</span>
              <span className="font-bold">65.9%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "65.9%" }}></div>
            </div>
            <div className="flex items-center justify-between mt-4 mb-2">
              <span>Previous SOTA</span>
              <span className="font-bold">61.2%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "61.2%" }}></div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Practical Applications</h2>

        <p>The versatility of Nomic Embeddings enables a wide range of applications across industries:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <Search className="h-6 w-6 text-cyan-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Semantic Search</h3>
                <p className="text-gray-700 dark:text-white">
                  Nomic Embeddings power advanced search systems that understand the intent behind queries, not just
                  keywords. This enables users to find information based on concepts and meaning rather than exact term
                  matching.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <FileText className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Document Understanding</h3>
                <p className="text-gray-700 dark:text-white">
                  By converting documents into rich vector representations, Nomic Embeddings enable sophisticated
                  document analysis, classification, and comparison at scale, even across different languages and
                  formats.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">Real-World Implementation: RAG Systems</h3>

        <p>
          One of the most powerful applications of Nomic Embeddings is in Retrieval-Augmented Generation (RAG) systems.
          These systems combine the knowledge retrieval capabilities of vector databases with the generative abilities
          of large language models.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
          <h4 className="font-bold mb-3">RAG Architecture with Nomic Embeddings</h4>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/nomic_diagram.png"
              alt="RAG system architecture diagram"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-sm text-gray-700 dark:text-white">
            Diagram showing how Nomic Embeddings power the retrieval component of a RAG system, enabling more accurate
            and contextually relevant information retrieval.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Implementation Guide</h2>

        <p>Integrating Nomic Embeddings into your applications is straightforward. Here's how you can get started:</p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">1. Install the necessary packages:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                <code>{`pip install nomic transformers torch`}</code>
              </pre>
            </div>

            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">2. Generate embeddings for your content:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                <code>
                  {`import torch
from transformers import AutoTokenizer, AutoModel

# Load model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("nomic-ai/nomic-embed-text-v1")
model = AutoModel.from_pretrained("nomic-ai/nomic-embed-text-v1")

# Generate embeddings
def get_embeddings(texts):
    inputs = tokenizer(texts, padding=True, truncation=True, return_tensors="pt")
    with torch.no_grad():
        embeddings = model(**inputs).last_hidden_state[:, 0, :]
    return embeddings.numpy()

# Example usage
documents = [
    "Artificial intelligence is transforming industries",
    "Vector embeddings enable semantic search capabilities",
    "Nomic provides state-of-the-art embedding models"
]

document_embeddings = get_embeddings(documents)`}
                </code>
              </pre>
            </div>

            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">3. Perform semantic search:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                <code>
                  {`import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

def semantic_search(query, document_embeddings, documents, top_k=3):
    query_embedding = get_embeddings([query])
    similarities = cosine_similarity(query_embedding, document_embeddings)[0]
    top_indices = np.argsort(similarities)[::-1][:top_k]
    return [(documents[i], similarities[i]) for i in top_indices]

# Example search
results = semantic_search(
    "How can vector embeddings help with search?", 
    document_embeddings, 
    documents
)

for doc, score in results:
    print(f"Score: {score:.4f} | Document: {doc}")`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Integration with OpenAI In a Box</h2>

        <p>
          Nomic Embeddings are fully integrated into the OpenAI In a Box platform, providing a seamless experience for
          developers:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-white">
            <li>
              <strong>API Compatibility:</strong> Access Nomic Embeddings through the familiar OpenAI-compatible API
              interface
            </li>
            <li>
              <strong>Vector Store Integration:</strong> Built-in support for storing and querying Nomic embeddings with
              optimized indexing
            </li>
            <li>
              <strong>Hybrid Search:</strong> Combine keyword-based and semantic search for maximum retrieval
              effectiveness
            </li>
            <li>
              <strong>Scalable Architecture:</strong> Handle millions of embeddings with distributed vector storage and
              retrieval
            </li>
          </ul>
        </div>

        <p>Using Nomic Embeddings with OpenAI In a Box is as simple as making an API call:</p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
            <code>
              {`curl -X POST https://your-openai-box-instance.com/embeddings *
  -H "Content-Type: application/json" *
  -H "Authorization: Bearer $API_KEY" *
  -d '{
    "model": "nomic-embed-text-v1",
    "input": "Your text to embed goes here",
    "encoding_format": "float"
  }'`}
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Future Directions</h2>

        <p>
          The field of vector embeddings is evolving rapidly, and Nomic is at the forefront of several exciting
          developments:
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
          <h3 className="font-bold text-lg mb-2">Emerging Capabilities</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white">
            <li>
              <strong>Cross-modal reasoning:</strong> Enhanced ability to reason across text, images, and structured
              data
            </li>
            <li>
              <strong>Domain-specific embeddings:</strong> Specialized models for legal, medical, and scientific domains
            </li>
            <li>
              <strong>Temporal awareness:</strong> Embeddings that understand and represent time-based relationships
            </li>
            <li>
              <strong>Hierarchical embeddings:</strong> Multi-level representations that capture both fine and
              coarse-grained semantics
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 gradient-text title-font">Conclusion</h2>

        <p>
          Nomic Embeddings represent a significant advancement in the field of vector representations, offering
          unparalleled semantic understanding across multiple modalities. By integrating these embeddings into your
          applications through OpenAI In a Box, you can unlock powerful capabilities for search, recommendation,
          classification, and more.
        </p>

        <p>
          As the technology continues to evolve, we can expect even more sophisticated applications that leverage the
          rich semantic understanding provided by these embeddings, further blurring the line between human and machine
          comprehension of information.
        </p>

        <div className="flex justify-center my-10">
          <ShareButton
            title="Nomic Embeddings: Revolutionizing Vector Representations for AI"
            description="Explore how Nomic Embeddings are transforming semantic search and AI understanding with state-of-the-art vector representations."
          />
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
          <h3 className="font-bold text-xl mb-4">References</h3>
          <ul className="space-y-2 text-gray-700 dark:text-white">
            <li>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                Nomic AI Official Documentation
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                "Advances in Vector Embeddings for AI Applications" - Research Paper
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                MTEB Benchmark Results 2025
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

