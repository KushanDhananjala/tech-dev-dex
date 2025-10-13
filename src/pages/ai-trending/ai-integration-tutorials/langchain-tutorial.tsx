import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Brain, Zap, Code, Settings, Users, Star, Clock, TrendingUp, CheckCircle, ArrowRight, Terminal } from 'lucide-react';

const LangChainTutorial = () => {
  return (
    <>
      <Head>
        <title>LangChain Tutorial: Build Advanced AI Applications | TechDevDex</title>
        <meta name="description" content="Master LangChain framework for building sophisticated AI applications. Learn to create chatbots, document Q&A systems, and AI agents with our comprehensive tutorial." />
        <meta name="keywords" content="LangChain tutorial, AI framework, chatbot development, document Q&A, AI agents, LangChain Python, AI applications, machine learning framework" />
        <meta name="author" content="TechDevDex" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="LangChain Tutorial: Build Advanced AI Applications" />
        <meta property="og:description" content="Master LangChain framework for building sophisticated AI applications. Learn to create chatbots, document Q&A systems, and AI agents with our comprehensive tutorial." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://techdevdex.com/ai-trending/ai-integration-tutorials/langchain-tutorial" />
        <meta property="og:image" content="https://techdevdex.com/images/ai-ml/ai-integration-tutorials/langchain-tutorial.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LangChain Tutorial: Build Advanced AI Applications" />
        <meta name="twitter:description" content="Master LangChain framework for building sophisticated AI applications. Learn to create chatbots, document Q&A systems, and AI agents with our comprehensive tutorial." />
        <meta name="twitter:image" content="https://techdevdex.com/images/ai-ml/ai-integration-tutorials/langchain-tutorial.svg" />
        <link rel="canonical" href="https://techdevdex.com/ai-trending/ai-integration-tutorials/langchain-tutorial" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LangChain Tutorial: Build Advanced AI Applications",
            "description": "Master LangChain framework for building sophisticated AI applications. Learn to create chatbots, document Q&A systems, and AI agents with our comprehensive tutorial.",
            "author": {
              "@type": "Organization",
              "name": "TechDevDex"
            },
            "publisher": {
              "@type": "Organization",
              "name": "TechDevDex"
            },
            "datePublished": "2024-12-12",
            "dateModified": "2024-12-12",
            "image": "https://techdevdex.com/images/ai-ml/ai-integration-tutorials/langchain-tutorial.svg"
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/ai-trending/ai-integration-tutorials" className="text-blue-600 hover:text-blue-800">
                ← Back to AI Integration Tutorials
              </Link>
              <div className="text-sm text-gray-500">
                Published: December 12, 2024
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Updated Dec 2024</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">AI Framework</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Advanced AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              LangChain Tutorial: Build Advanced AI Applications
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Master LangChain framework for building sophisticated AI applications. Learn to create chatbots, document Q&A systems, and AI agents with our comprehensive tutorial.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>32 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>42,847 developers helped</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.9/5 rating</span>
              </div>
              <span>•</span>
              <span>AI/ML</span>
              <span>•</span>
              <span>Framework</span>
            </div>
            
            {/* Key Benefits */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                What You&apos;ll Master
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">LangChain Fundamentals</h4>
                    <p className="text-sm text-gray-600">Core concepts and architecture of LangChain</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Document Q&A Systems</h4>
                    <p className="text-sm text-gray-600">Build intelligent document question-answering systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">AI Agents</h4>
                    <p className="text-sm text-gray-600">Create autonomous AI agents with tools and memory</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Production Deployment</h4>
                    <p className="text-sm text-gray-600">Deploy LangChain applications to production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/images/ai-ml/ai-integration-tutorials/langchain-tutorial.svg"
              alt="LangChain Tutorial Guide"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Brain className="h-8 w-8 text-blue-600" />
                Why LangChain Matters
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                LangChain is a powerful framework for building applications with Large Language Models (LLMs). It provides a unified interface for working with different LLMs, memory systems, and tools, making it easier to build complex AI applications. This tutorial will guide you through building sophisticated AI applications with LangChain.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The LangChain Advantage</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5x</div>
                    <div className="text-sm text-gray-600">Faster development</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                    <div className="text-sm text-gray-600">Code reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">10x</div>
                    <div className="text-sm text-gray-600">More powerful apps</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Setting Up LangChain</h3>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Installation</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Install LangChain</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">pip install langchain</code>
                      <p className="text-sm text-gray-600 mt-1">Install the core LangChain package</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Install OpenAI</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">pip install openai</code>
                      <p className="text-sm text-gray-600 mt-1">Install OpenAI integration</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Install Vector Store</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">pip install chromadb</code>
                      <p className="text-sm text-gray-600 mt-1">Install vector database for embeddings</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Basic Setup</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Import LangChain</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">from langchain.llms import OpenAI<br/>from langchain.chains import LLMChain</code>
                      <p className="text-sm text-gray-600 mt-1">Import necessary LangChain components</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Initialize LLM</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">llm = OpenAI(temperature=0.7)</code>
                      <p className="text-sm text-gray-600 mt-1">Initialize your language model</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Environment Setup</h5>
                      <p className="text-sm text-gray-600 mt-1">Set up API keys and environment variables</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Building Document Q&A Systems</h3>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Document Processing</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Load Documents</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">from langchain.document_loaders import TextLoader<br/>loader = TextLoader("document.txt")</code>
                      <p className="text-sm text-gray-600 mt-1">Load and process your documents</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Text Splitting</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">from langchain.text_splitter import RecursiveCharacterTextSplitter</code>
                      <p className="text-sm text-gray-600 mt-1">Split documents into manageable chunks</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Create Embeddings</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">from langchain.embeddings import OpenAIEmbeddings</code>
                      <p className="text-sm text-gray-600 mt-1">Generate embeddings for semantic search</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Vector Store & Retrieval</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Vector Store</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">from langchain.vectorstores import Chroma</code>
                      <p className="text-sm text-gray-600 mt-1">Store embeddings in vector database</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Retrieval QA</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">from langchain.chains import RetrievalQA</code>
                      <p className="text-sm text-gray-600 mt-1">Create question-answering chain</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Query Processing</h5>
                      <p className="text-sm text-gray-600 mt-1">Process user queries and retrieve relevant documents</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Building AI Agents</h3>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Agent Components</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Tools</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">from langchain.tools import Tool</code>
                      <p className="text-sm text-gray-600 mt-1">Define tools for the agent to use</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Memory</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">from langchain.memory import ConversationBufferMemory</code>
                      <p className="text-sm text-gray-600 mt-1">Add memory to maintain conversation context</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Agent Initialization</h5>
                      <code className="block bg-gray-100 p-2 rounded text-sm mt-1">from langchain.agents import initialize_agent</code>
                      <p className="text-sm text-gray-600 mt-1">Initialize the agent with tools and memory</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Agent Types</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Zero-Shot Agent</h5>
                      <p className="text-sm text-gray-600 mt-1">Agent that can use tools without examples</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">ReAct Agent</h5>
                      <p className="text-sm text-gray-600 mt-1">Reasoning and Acting agent for complex tasks</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Self-Ask Agent</h5>
                      <p className="text-sm text-gray-600 mt-1">Agent that asks follow-up questions</p>
                    </div>
                  </div>
                </div>
              </div>

              <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Ready to Build Advanced AI Applications?
                </h2>
                <p className="text-lg text-gray-700 text-center mb-8">
                  By mastering LangChain, you&apos;ll be able to build sophisticated AI applications that can understand, process, and interact with complex data. Start with simple chains and gradually build more complex AI agents.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">5x</div>
                    <div className="text-sm text-gray-600">Faster Development</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
                    <div className="text-sm text-gray-600">Code Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">10x</div>
                    <div className="text-sm text-gray-600">More Powerful Apps</div>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/ai-trending/ai-integration-tutorials/vector-databases-guide" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Next: Vector Databases Guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>
            </section>
          </div>

          {/* Related Articles */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/ai-trending/ai-integration-tutorials/openai-api-integration" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">OpenAI API Integration</h4>
                <p className="text-gray-600">Master OpenAI API integration for AI applications.</p>
              </Link>
              <Link href="/ai-trending/ai-integration-tutorials/vector-databases-guide" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Vector Databases Guide</h4>
                <p className="text-gray-600">Master vector databases for AI applications.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LangChainTutorial;
