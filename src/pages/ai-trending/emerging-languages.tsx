import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Brain, Clock, Filter, Search, Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

const EmergingLanguages = () => {
  // Sample content data
  const articles = [
    {
      slug: "mojo-programming-language",
      title: "Mojo: The Future of AI Programming",
      description: "Explore Mojo, the new programming language designed specifically for AI development with Python compatibility and superior performance.",
      image: "/images/ai-ml/emerging-languages/mojo-language.svg",
      category: "Programming Languages",
      rating: 5,
      readTime: "20 min",
      author: "TechDevDex Team",
      date: "2024-12-01",
    },
    {
      slug: "zig-systems-programming",
      title: "Zig: Modern Systems Programming",
      description: "Discover Zig, the systems programming language that focuses on memory safety, performance, and simplicity.",
      image: "/images/ai-ml/emerging-languages/zig-language.svg",
      category: "Systems Programming",
      rating: 4,
      readTime: "18 min",
      author: "TechDevDex Team",
      date: "2024-11-28",
    },
    {
      slug: "rust-ai-development",
      title: "Rust for AI Development",
      description: "Learn how Rust&apos;s memory safety and performance make it ideal for AI and machine learning applications.",
      image: "/images/ai-ml/emerging-languages/rust-ai.svg",
      category: "AI Development",
      rating: 4,
      readTime: "22 min",
      author: "TechDevDex Team",
      date: "2024-11-20",
    },
    {
      slug: "quantum-programming-languages",
      title: "Quantum Programming Languages",
      description: "Explore quantum programming languages like Q#, Cirq, and Qiskit for quantum computing development.",
      image: "/images/ai-ml/emerging-languages/quantum-languages.svg",
      category: "Quantum Computing",
      rating: 4,
      readTime: "16 min",
      author: "TechDevDex Team",
      date: "2024-11-15",
    },
    {
      slug: "domain-specific-languages",
      title: "Domain-Specific Languages (DSLs)",
      description: "Understanding DSLs like WebAssembly, Solidity, and Julia for specialized development domains.",
      image: "/images/ai-ml/emerging-languages/dsl-languages.svg",
      category: "Specialized Languages",
      rating: 4,
      readTime: "14 min",
      author: "TechDevDex Team",
      date: "2024-11-10",
    },
  ];

  return (
    <>
      <Head>
        <title>Emerging Programming Languages - TechDevDex</title>
        <meta name="description" content="Explore the latest programming languages designed for AI, machine learning, and modern development paradigms." />
        <meta name="keywords" content="programming languages, AI, machine learning, emerging tech, Mojo, Zig, Rust, development" />
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
              Emerging Programming Languages
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Discover the latest programming languages designed for AI, machine learning, and modern development
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
                placeholder="Search languages..."
                className="w-full sm:w-64 pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 dark:text-slate-400" />
            </div>
          </div>

          {/* Featured Article (Example) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <Link href={`/ai-trending/emerging-languages/${articles[0].slug}`} className="block">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-purple-500/10 to-pink-600/10 flex items-center justify-center p-6">
                  <Image src={articles[0].image} alt={articles[0].title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                      Featured Article
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(articles[0].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(5 - articles[0].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-5">
                    {articles[0].description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{articles[0].readTime} read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{articles[0].author}</span>
                    </div>
                    <span>{articles[0].date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* All Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/ai-trending/emerging-languages/${article.slug}`} className="block">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-700/50 flex items-center justify-center p-4">
                      <Image src={article.image} alt={article.title} width={300} height={200} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(article.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[...Array(5 - article.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-slate-300 text-slate-300 dark:fill-slate-600 dark:text-slate-600" />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mt-auto">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime} read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
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

export default EmergingLanguages;