import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

const NodeVsPythonBackend = () => {
  return (
    <>
      <Head>
        <title>Node.js vs Python: Backend Development Showdown - TechDevDex</title>
        <meta name="description" content="Comparing Node.js and Python for backend development. Performance, scalability, use cases, and which one to choose for your project." />
        <meta name="keywords" content="Node.js, Python, backend development, server-side programming, comparison" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/reviews/app-comparisons" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to App Comparisons
            </Link>
          </div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Node.js vs Python: Backend Development Showdown
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Comparing Node.js and Python for backend development. Performance, scalability, and use cases.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TechDevDex Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>4.0 rating</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/reviews/app-comparisons/node-vs-python.svg"
                alt="Node.js vs Python Backend Comparison"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto prose prose-lg dark:prose-invert"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
              <h2>Backend Technology Comparison</h2>
              <p>Both Node.js and Python are excellent choices for backend development, but they excel in different scenarios.</p>
              
              <h3>Performance Characteristics</h3>
              <ul>
                <li><strong>Node.js:</strong> Single-threaded, event-driven, excellent for I/O intensive applications</li>
                <li><strong>Python:</strong> Multi-threaded, great for CPU-intensive tasks and data processing</li>
              </ul>

              <h3>Use Cases</h3>
              <ul>
                <li><strong>Node.js:</strong> Real-time applications, APIs, microservices</li>
                <li><strong>Python:</strong> Data science, machine learning, web scraping, automation</li>
              </ul>

              <h3>Ecosystem and Libraries</h3>
              <ul>
                <li><strong>Node.js:</strong> NPM ecosystem, Express.js, Socket.io</li>
                <li><strong>Python:</strong> Django, Flask, FastAPI, NumPy, Pandas</li>
              </ul>

              <h2>Conclusion</h2>
              <p>Choose Node.js for real-time applications and JavaScript consistency. Choose Python for data science, AI, and complex algorithms.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default NodeVsPythonBackend;
