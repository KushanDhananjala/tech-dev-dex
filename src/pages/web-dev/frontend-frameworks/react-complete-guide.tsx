import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Star, Tag, User } from 'lucide-react';
import { motion } from 'framer-motion';

const ReactCompleteGuide = () => {
  return (
    <>
      <Head>
        <title>React: Complete Developer Guide - TechDevDex</title>
        <meta name="description" content="Master React from basics to advanced concepts including hooks, context, and performance optimization." />
        <meta name="keywords" content="React, JavaScript, frontend development, hooks, context, performance optimization" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/web-dev/frontend-frameworks" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Frontend Frameworks
            </Link>
          </div>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                    Featured Guide
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  React: Complete Developer Guide
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Master React from basics to advanced concepts including hooks, context, and performance optimization. This comprehensive guide covers everything you need to know to become a React expert.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>25 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>TechDevDex Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 1, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>React</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                <div className="mb-8">
                  <Image 
                    src="/images/web-dev/frontend-frameworks/react-guide.svg" 
                    alt="React Complete Guide" 
                    width={800} 
                    height={400} 
                    className="rounded-xl shadow-lg"
                  />
                </div>

                <h2>Introduction to React</h2>
                <p>
                  React is a powerful JavaScript library for building user interfaces, particularly single-page applications. 
                  Created by Facebook, React has become one of the most popular frontend frameworks due to its component-based 
                  architecture and efficient rendering.
                </p>

                <h2>Core Concepts</h2>
                <h3>Components</h3>
                <p>
                  React applications are built using components - reusable pieces of UI. Components can be functional or 
                  class-based, with functional components being the modern approach using hooks.
                </p>

                <h3>JSX</h3>
                <p>
                  JSX is a syntax extension that allows you to write HTML-like code in JavaScript. It makes React components 
                  more readable and easier to write.
                </p>

                <h3>Props and State</h3>
                <p>
                  Props are read-only data passed down from parent components, while state is internal data that can change 
                  over time. Understanding the difference is crucial for building dynamic applications.
                </p>

                <h2>React Hooks</h2>
                <p>
                  Hooks are functions that let you use state and other React features in functional components. The most 
                  commonly used hooks include:
                </p>

                <ul>
                  <li><strong>useState</strong> - Manage component state</li>
                  <li><strong>useEffect</strong> - Handle side effects</li>
                  <li><strong>useContext</strong> - Access context values</li>
                  <li><strong>useReducer</strong> - Manage complex state</li>
                </ul>

                <h2>Advanced Topics</h2>
                <h3>Performance Optimization</h3>
                <p>
                  React provides several tools for optimizing performance, including React.memo, useMemo, and useCallback. 
                  Understanding when and how to use these tools is essential for building efficient applications.
                </p>

                <h3>Context API</h3>
                <p>
                  The Context API allows you to share data across the component tree without prop drilling. It&apos;s perfect 
                  for global state management in smaller applications.
                </p>

                <h3>Custom Hooks</h3>
                <p>
                  Custom hooks allow you to extract component logic into reusable functions. This promotes code reuse 
                  and makes components more maintainable.
                </p>

                <h2>Best Practices</h2>
                <ul>
                  <li>Keep components small and focused</li>
                  <li>Use functional components with hooks</li>
                  <li>Implement proper error boundaries</li>
                  <li>Optimize re-renders with React.memo</li>
                  <li>Use TypeScript for better type safety</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  React is a powerful and flexible library that continues to evolve. By mastering the concepts covered 
                  in this guide, you&apos;ll be well-equipped to build modern, efficient React applications. Remember to 
                  practice regularly and stay updated with the latest React features and best practices.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default ReactCompleteGuide;
