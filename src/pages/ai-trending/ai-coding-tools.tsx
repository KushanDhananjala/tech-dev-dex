import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Brain, Star, Clock, User, Filter, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const AICodingTools = () => {
  // Sample content data
  const tools = [
    {
      slug: "github-copilot-complete-guide",
      title: "GitHub Copilot: Complete Developer Guide",
      description: "Master GitHub Copilot with advanced techniques, best practices, and real-world examples for maximum productivity.",
      image: "/images/posts/github-copilot-guide.svg",
      category: "AI Coding",
      rating: 5,
      readTime: "15 min",
      author: "TechDevDex Team",
      date: "2024-12-01",
    },
    {
      slug: "chatgpt-coding-mastery",
      title: "ChatGPT for Coding: Master Class",
      description: "Learn to use ChatGPT effectively for code generation, debugging, and learning new programming concepts.",
      image: "/images/posts/chatgpt-coding.svg",
      category: "AI Assistant",
      rating: 4,
      readTime: "18 min",
      author: "TechDevDex Team",
      date: "2024-11-28",
    },
    {
      slug: "amazon-codewhisperer-guide",
      title: "Amazon CodeWhisperer: AWS Integration",
      description: "Complete guide to Amazon CodeWhisperer with AWS services integration and security best practices.",
      image: "/images/posts/codewhisperer-guide.svg",
      category: "AI Coding",
      rating: 4,
      readTime: "12 min",
      author: "TechDevDex Team",
      date: "2024-11-20",
    },
    {
      slug: "tabnine-advanced-usage",
      title: "Tabnine: Advanced AI Code Completion",
      description: "Unlock the full potential of Tabnine with custom models, team collaboration, and enterprise features.",
      image: "/images/posts/tabnine-advanced.svg",
      category: "Code Completion",
      rating: 4,
      readTime: "14 min",
      author: "TechDevDex Team",
      date: "2024-11-15",
    },
    {
      slug: "cursor-ai-editor-guide",
      title: "Cursor: AI-First Code Editor Mastery",
      description: "Complete guide to Cursor editor with AI features, custom configurations, and workflow optimization.",
      image: "/images/posts/cursor-guide.svg",
      category: "AI Editor",
      rating: 5,
      readTime: "16 min",
      author: "TechDevDex Team",
      date: "2024-11-10",
    },
  ];

  return (
    <>
      <Head>
        <title>AI Coding Tools - TechDevDex</title>
        <meta name="description" content="Comprehensive guides and tutorials for AI-powered coding tools including GitHub Copilot, ChatGPT, and more." />
        <meta name="keywords" content="AI coding tools, GitHub Copilot, ChatGPT, AI development, programming assistants, code completion" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/ai-ml" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to AI & ML
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              AI Coding Tools
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Master AI-powered development tools with comprehensive guides and tutorials
            </p>
          </div>

          {/* Filter and Search (Placeholder) */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 w-full sm:w-auto">
              <Filter className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">Filter by: All</span>
            </div>
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search tools..."
                className="w-full sm:w-64 pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 dark:text-slate-400" />
            </div>
          </div>

          {/* Featured Tool (Example) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <Link href={`/ai-trending/ai-coding-tools/${tools[0].slug}`} className="block">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-purple-500/10 to-pink-600/10 flex items-center justify-center p-6">
                  <Image src={tools[0].image} alt={tools[0].title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                      Featured Guide
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(tools[0].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(5 - tools[0].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {tools[0].title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-5">
                    {tools[0].description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{tools[0].readTime} read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{tools[0].author}</span>
                    </div>
                    <span>{tools[0].date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* All Tools Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, idx) => (
              <motion.article
                key={tool.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/ai-trending/ai-coding-tools/${tool.slug}`} className="block">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-700/50 flex items-center justify-center p-4">
                      <Image src={tool.image} alt={tool.title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                          {tool.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(tool.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[...Array(5 - tool.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {tool.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow">
                        {tool.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mt-auto">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{tool.readTime} read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{tool.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AICodingTools;