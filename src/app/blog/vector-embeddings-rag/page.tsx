'use client';

import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowLeft, Code, Database, Search, Zap, Brain, FileText, MessageCircle } from 'lucide-react';

export default function VectorEmbeddingsRAG() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3 bg-[#fbfbf9] border border-[#e6e4dd] px-6 py-3 rounded-full">
              <Brain className="h-6 w-6 text-[#1f3a5f]" />
              <span className="text-[#1f3a5f] font-medium">Machine Learning</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Vector embeddings and RAG, explained from scratch
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            How text turns into numbers, why keyword search falls down, and what it actually takes to put a retrieval system into production.
          </p>
          
          <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-gray-500">
            <span>By Handy Hasan</span>
            <span>•</span>
            <span>25 min read</span>
            <span>•</span>
            <span>Advanced</span>
          </div>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div 
          className="bg-[#fbfbf9] border border-[#e6e4dd] rounded-lg p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-semibold text-[#1f3a5f] mb-4">What this covers</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• How text gets turned into numerical vectors</li>
            <li>• Why keyword search misses obvious matches, and what vector similarity does instead</li>
            <li>• Building a RAG system on top of a vector database</li>
            <li>• The patterns that show up when you take semantic search to production</li>
            <li>• Working code in Python, with embeddings and a vector store</li>
          </ul>
        </motion.div>

        {/* Introduction */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I was interviewing at a Melbourne AI startup a while back, and the conversation got to vector embeddings and RAG (Retrieval-Augmented Generation) pretty quickly.
            The question was: <em>"How would you build something that can search 10,000 technical documents and actually understand what's being asked?"</em>
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Plain keyword search doesn't get you there. Someone searches for one phrase, the document uses a synonym, and you return nothing. That gap is the whole reason embeddings and semantic search exist.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            So here's the path from text to numbers, why two pieces of text can be "close" mathematically, and what it takes to run a retrieval system that holds up under real traffic.
          </p>
        </motion.section>

        {/* Part 1: Vector Embeddings Explained */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Code className="h-8 w-8 text-[#1f3a5f] mr-3" />
            Part 1: Vector Embeddings Explained
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">What Are Vector Embeddings?</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Say you want a computer to know that "king" and "monarch" mean roughly the same thing. You can't just tell it. A computer deals in numbers, not meaning.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Embeddings get around that by turning text into a long list of numbers, arranged so that things with similar meaning end up near each other in that numeric space.
          </p>

          <div className="bg-[#fbfbf9] border-l-4 border-[#1f3a5f] p-6 mb-8">
            <h4 className="font-semibold text-gray-800 mb-2">A rough example</h4>
            <div className="space-y-2 text-gray-700 font-mono text-sm">
              <div>"king" → [0.2, 0.8, 0.1, 0.9, ...]</div>
              <div>"queen" → [0.3, 0.7, 0.2, 0.8, ...]</div>
              <div>"monarch" → [0.2, 0.9, 0.1, 0.7, ...]</div>
              <div>"pizza" → [0.9, 0.1, 0.8, 0.2, ...]</div>
            </div>
            <p className="text-gray-600 mt-3 text-sm">
              "king", "queen", and "monarch" land on similar numbers. "pizza" sits well off on its own. Real embeddings have hundreds of dimensions, not four, but the idea is the same.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">How Text Becomes Numbers</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Embedding models like OpenAI's text-embedding-ada-002, or open-source ones like Sentence Transformers, are neural networks trained on a lot of text. The training is what teaches them which numbers to assign.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-gray-800 mb-4">Python: creating embeddings</h4>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import openai
from sentence_transformers import SentenceTransformer
import numpy as np

# Method 1: OpenAI Embeddings (Paid, High Quality)
openai.api_key = "your-api-key"

def get_openai_embedding(text):
    response = openai.Embedding.create(
        input=text,
        model="text-embedding-ada-002"
    )
    return response['data'][0]['embedding']

# Method 2: Open Source Alternative (Free)
model = SentenceTransformer('all-MiniLM-L6-v2')

def get_sentence_embedding(text):
    return model.encode(text)

# Example usage
texts = [
    "Machine learning algorithms",
    "AI and deep learning",
    "Pizza recipe ingredients", 
    "Neural networks training"
]

embeddings = [get_sentence_embedding(text) for text in texts]
print(f"Embedding dimension: {len(embeddings[0])}")  # Usually 384-1536`}
            </pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Measuring Similarity</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Once you have vectors you can ask how close two of them are. Cosine similarity is the one you'll see most often. It measures the angle between two vectors and ignores their length, which is what you want here, because you care whether two things point the same direction, not how long the arrows are.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-gray-800 mb-4">Similarity calculation</h4>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

def calculate_similarity(text1, text2, model):
    # Get embeddings
    emb1 = model.encode([text1])
    emb2 = model.encode([text2])
    
    # Calculate cosine similarity
    similarity = cosine_similarity(emb1, emb2)[0][0]
    return similarity

# Example comparisons
model = SentenceTransformer('all-MiniLM-L6-v2')

print("ML vs AI:", calculate_similarity(
    "Machine learning algorithms", 
    "Artificial intelligence systems", 
    model
))  # ~0.85 (very similar)

print("ML vs Pizza:", calculate_similarity(
    "Machine learning algorithms", 
    "Pizza recipe ingredients", 
    model
))  # ~0.15 (not similar)`}
            </pre>
          </div>
        </motion.section>

        {/* Part 2: RAG Systems and Vector Databases */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Database className="h-8 w-8 text-[#1f3a5f] mr-3" />
            Part 2: RAG Systems & Vector Databases
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Problem with Traditional Search</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Keyword search matches strings, not meaning. Someone searches "machine learning performance optimization," your document says "improving AI model efficiency," and you return nothing. Same idea, different words, zero results. Anyone who's used a corporate wiki search box knows the feeling.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#fbfbf9] border border-[#e6e4dd] rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Where keyword search falls down</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Matches exact words, nothing else</li>
                <li>• Misses synonyms and related terms</li>
                <li>• No sense of context</li>
                <li>• Boolean queries get brittle fast</li>
                <li>• A typo and you're empty-handed</li>
              </ul>
            </div>

            <div className="bg-[#fbfbf9] border border-[#e6e4dd] rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">What vector search does instead</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Matches on meaning, not spelling</li>
                <li>• Finds related concepts you didn't name</li>
                <li>• Context comes along for free</li>
                <li>• Synonyms just work</li>
                <li>• Typos mostly don't matter</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">What is RAG?</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            RAG is less clever than it sounds. You don't retrain the model on your data. You search your documents for the bits that look relevant to the question, paste them into the prompt, and ask the LLM to answer using those. That's it. The model never "learned" your docs; it just got handed the right pages before answering.
          </p>

          <div className="bg-[#fbfbf9] border border-[#e6e4dd] rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-gray-800 mb-4">The RAG loop</h4>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Document Ingestion:</strong> Convert documents to vectors and store in vector database</li>
              <li><strong>2. Query Processing:</strong> User asks a question, convert to vector</li>
              <li><strong>3. Similarity Search:</strong> Find most relevant document chunks</li>
              <li><strong>4. Context Injection:</strong> Add retrieved context to LLM prompt</li>
              <li><strong>5. Generation:</strong> LLM generates answer based on retrieved context</li>
            </ol>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vector Database Options</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A vector database is just a store that's good at "find me the closest vectors to this one" over millions of rows. You can do it in Postgres with pgvector for a while, and honestly that's where I'd start. Once you outgrow that, the usual suspects:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Database</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Best For</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Pricing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Pinecone</td>
                  <td className="px-4 py-3 text-gray-700">Managed</td>
                  <td className="px-4 py-3 text-gray-700">Production, Easy setup</td>
                  <td className="px-4 py-3 text-gray-700">$70+/month</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Weaviate</td>
                  <td className="px-4 py-3 text-gray-700">Open Source</td>
                  <td className="px-4 py-3 text-gray-700">Self-hosted, Full control</td>
                  <td className="px-4 py-3 text-gray-700">Free</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Chroma</td>
                  <td className="px-4 py-3 text-gray-700">Open Source</td>
                  <td className="px-4 py-3 text-gray-700">Development, Prototyping</td>
                  <td className="px-4 py-3 text-gray-700">Free</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Qdrant</td>
                  <td className="px-4 py-3 text-gray-700">Open Source</td>
                  <td className="px-4 py-3 text-gray-700">High performance</td>
                  <td className="px-4 py-3 text-gray-700">Free/Paid</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Building a Simple RAG System</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Here's a small one end to end, using Chroma locally and OpenAI for the answer. It's enough to answer questions over a pile of company docs. It's also enough to show you where the real work hides, which is the chunking, not the clever part.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-gray-800 mb-4">A working RAG pipeline</h4>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import chromadb
import openai
from sentence_transformers import SentenceTransformer
import PyPDF2
import textwrap

class SimpleRAG:
    def __init__(self):
        # Initialize components
        self.client = chromadb.Client()
        self.collection = self.client.create_collection("documents")
        self.embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
        openai.api_key = "your-openai-key"
    
    def add_document(self, text, doc_id):
        """Add a document to the vector store"""
        # Split into chunks
        chunks = self.chunk_text(text, chunk_size=500)
        
        for i, chunk in enumerate(chunks):
            # Create embedding
            embedding = self.embedding_model.encode(chunk).tolist()
            
            # Store in vector database
            self.collection.add(
                embeddings=[embedding],
                documents=[chunk],
                ids=[f"{doc_id}_chunk_{i}"]
            )
    
    def chunk_text(self, text, chunk_size=500):
        """Split text into overlapping chunks"""
        words = text.split()
        chunks = []
        
        for i in range(0, len(words), chunk_size - 50):  # 50 word overlap
            chunk = " ".join(words[i:i + chunk_size])
            chunks.append(chunk)
        
        return chunks
    
    def search_relevant_docs(self, query, top_k=3):
        """Find most relevant document chunks"""
        query_embedding = self.embedding_model.encode(query).tolist()
        
        results = self.collection.query(
            query_embeddings=[query_embedding],
            n_results=top_k
        )
        
        return results['documents'][0]
    
    def generate_answer(self, query, context_docs):
        """Generate answer using OpenAI with retrieved context"""
        context = "\\n\\n".join(context_docs)
        
        prompt = f"""
        Based on the following context documents, answer the user's question.
        If the answer isn't in the context, say "I don't have enough information."
        
        Context:
        {context}
        
        Question: {query}
        
        Answer:
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=500,
            temperature=0.1
        )
        
        return response.choices[0].message.content
    
    def ask_question(self, query):
        """Complete RAG pipeline"""
        # 1. Retrieve relevant documents
        relevant_docs = self.search_relevant_docs(query)
        
        # 2. Generate answer with context
        answer = self.generate_answer(query, relevant_docs)
        
        return answer, relevant_docs

# Usage example
rag = SimpleRAG()

# Add some company documents
rag.add_document("""
Our company policy states that employees can work remotely 
up to 3 days per week. Remote work requests must be approved 
by direct managers and HR department.
""", "policy_001")

rag.add_document("""
The refund policy allows customers to return products within 
30 days of purchase. Digital products are non-refundable 
unless there are technical issues.
""", "policy_002")

# Ask questions
answer, sources = rag.ask_question(
    "Can employees work from home?"
)

print("Answer:", answer)
print("Sources:", sources)`}
            </pre>
          </div>
        </motion.section>

        {/* Enterprise Patterns and Production */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Zap className="h-8 w-8 text-[#1f3a5f] mr-3" />
            What changes when this hits production
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Where it actually gets used</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-[#e6e4dd] rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <FileText className="h-5 w-5 text-[#1f3a5f] mr-2" />
                Searching documents
              </h4>
              <p className="text-gray-700 mb-3">
                Lawyers pointing it at a few thousand case files so they can ask a question instead of grepping for the right clause by hand.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Looks like:</strong> "Find contracts with force majeure clauses that mention pandemics"
              </div>
            </div>

            <div className="bg-white border border-[#e6e4dd] rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <MessageCircle className="h-5 w-5 text-[#1f3a5f] mr-2" />
                Support answers
              </h4>
              <p className="text-gray-700 mb-3">
                A support bot that pulls from the help centre instead of making things up. When it works it deflects tickets. When the docs are wrong, so is the bot.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Looks like:</strong> "How do I set up SSO on an enterprise account?"
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Production Architecture</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The demo above is one process. In production it's a few moving parts, and most of the headaches are the boring ones: keeping the index in sync with the source docs, and what to do when the LLM call times out. Rough shape:
          </p>

          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mb-8">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
{`┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Load Balancer │    │  FastAPI Server │    │  Vector Database│
│                 │────▶│                 │────▶│  (Pinecone/     │
│                 │    │  - Embedding    │    │   Weaviate)     │
└─────────────────┘    │  - Retrieval    │    │                 │
                       │  - Generation   │    └─────────────────┘
                       └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐    ┌─────────────────┐
                       │  LLM Service    │    │  Document Store │
                       │  (OpenAI/Local) │    │  (S3/MinIO)     │
                       └─────────────────┘    └─────────────────┘`}
            </pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Performance Optimization</h3>
          
          <div className="space-y-6 mb-8">
            <div className="bg-[#fbfbf9] border-l-4 border-[#1f3a5f] p-6">
              <h4 className="font-semibold text-gray-800 mb-2">Latency</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Cache embeddings for queries you see over and over</li>
                <li>• Use approximate nearest neighbour search; exact is too slow at scale</li>
                <li>• Embed static documents once, not on every request</li>
                <li>• A smaller embedding model is often fine and a lot faster</li>
              </ul>
            </div>

            <div className="bg-[#fbfbf9] border-l-4 border-[#1f3a5f] p-6">
              <h4 className="font-semibold text-gray-800 mb-2">Scale</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Replicas if the read load gets heavy</li>
                <li>• Spend your time on chunking; it matters more than the database choice</li>
                <li>• Hybrid search (vector + keyword) catches what pure vectors miss</li>
                <li>• Keep tenants' data apart with routing, before someone leaks across them</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Monitoring and Evaluation</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Production RAG systems need continuous monitoring to ensure quality and performance.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-gray-800 mb-4">📊 Key Metrics to Track</h4>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`# Example monitoring code
import time
from dataclasses import dataclass
from typing import List

@dataclass
class RAGMetrics:
    query_latency: float
    retrieval_accuracy: float
    answer_relevance: float
    context_precision: float

class RAGMonitor:
    def __init__(self):
        self.metrics = []
    
    def track_query(self, query: str, answer: str, 
                   retrieved_docs: List[str], expected_answer: str = None):
        start_time = time.time()
        
        # Track latency
        latency = time.time() - start_time
        
        # Calculate retrieval accuracy (if ground truth available)
        accuracy = self.calculate_retrieval_accuracy(
            retrieved_docs, expected_docs
        ) if expected_answer else None
        
        # Store metrics
        metrics = RAGMetrics(
            query_latency=latency,
            retrieval_accuracy=accuracy,
            answer_relevance=self.score_relevance(answer, query),
            context_precision=self.score_context_precision(retrieved_docs)
        )
        
        self.metrics.append(metrics)
        
        # Alert if performance drops
        if latency > 2.0:  # 2 second threshold
            self.send_alert(f"High latency detected: {latency:.2f}s")
    
    def get_performance_summary(self):
        if not self.metrics:
            return None
            
        avg_latency = sum(m.query_latency for m in self.metrics) / len(self.metrics)
        avg_accuracy = sum(m.retrieval_accuracy for m in self.metrics if m.retrieval_accuracy) / len([m for m in self.metrics if m.retrieval_accuracy])
        
        return {
            "avg_latency": avg_latency,
            "avg_accuracy": avg_accuracy,
            "total_queries": len(self.metrics)
        }`}
            </pre>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Brain className="h-8 w-8 text-indigo-600 mr-3" />
            Key Takeaways
          </h2>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-indigo-900 mb-6">🎯 What We've Covered</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-indigo-800 mb-3">Vector Embeddings Fundamentals</h4>
                <ul className="space-y-2 text-indigo-700">
                  <li>• How text becomes numerical representations</li>
                  <li>• Semantic similarity through cosine distance</li>
                  <li>• Practical implementation with Python</li>
                  <li>• Embedding model choices and trade-offs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-indigo-800 mb-3">Production RAG Systems</h4>
                <ul className="space-y-2 text-indigo-700">
                  <li>• Vector database selection and architecture</li>
                  <li>• Complete RAG implementation pipeline</li>
                  <li>• Enterprise scaling and monitoring patterns</li>
                  <li>• Performance optimization strategies</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Vector embeddings and RAG systems represent a fundamental shift in how we build intelligent applications. 
            They enable semantic understanding that goes far beyond traditional keyword matching, opening up possibilities 
            for truly intelligent document search, customer support, and knowledge management systems.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            As we've seen, the technology is mature enough for production use, with robust tools and clear patterns emerging. 
            The key to success lies in understanding both the fundamentals and the practical engineering challenges of 
            scaling these systems in enterprise environments.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h4 className="font-semibold text-emerald-800 mb-3">🚀 Next Steps</h4>
            <p className="text-emerald-700 mb-4">
              Ready to build your own RAG system? Start with a simple prototype using the code examples above, 
              then gradually add production features like monitoring, caching, and scaling as your needs grow.
            </p>
            <p className="text-emerald-700">
              The future of enterprise software lies in systems that can understand and reason about human language - 
              and vector embeddings are the foundation that makes this possible.
            </p>
          </div>
        </motion.section>

        {/* Author Bio */}
        <motion.div 
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">HH</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Handy Hasan</h3>
              <p className="text-gray-600">Senior Software Engineer specializing in ML/AI systems and enterprise architecture. Currently building medical imaging platforms at 4DMedical.</p>
              <div className="flex space-x-4 mt-2">
                <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm">Portfolio</Link>
                <Link href="/experience" className="text-blue-600 hover:text-blue-800 text-sm">Experience</Link>
                <Link href="#contact" className="text-blue-600 hover:text-blue-800 text-sm">Contact</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
} 