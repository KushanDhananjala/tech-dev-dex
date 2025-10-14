import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Star, Tag, User } from 'lucide-react';
import { motion } from 'framer-motion';

const WebStormReview = () => {
  return (
    <>
      <Head>
        <title>WebStorm: The JavaScript IDE - TechDevDex</title>
        <meta name="description" content="Complete review of WebStorm for frontend development, including React, Vue, and Angular support." />
        <meta name="keywords" content="WebStorm review, JavaScript IDE, frontend development, React IDE, Vue IDE, Angular IDE" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/reviews/software-reviews" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Software Reviews
            </Link>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                    IDEs
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  WebStorm: The JavaScript IDE
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Complete review of WebStorm for frontend development, including React, Vue, and Angular support.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>9 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>TechDevDex Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 12, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Frontend</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                <div className="mb-8">
                  <Image 
                    src="/images/posts/webstorm-review.svg" 
                    alt="WebStorm Review" 
                    width={800} 
                    height={400} 
                    className="rounded-xl shadow-lg"
                  />
                </div>

                <h2>WebStorm Overview</h2>
                <p>
                  WebStorm is a powerful IDE specifically designed for JavaScript development. 
                  It provides comprehensive support for modern frontend frameworks and tools.
                </p>

                <h2>Framework Support</h2>
                <h3>React Development</h3>
                <p>
                  Excellent React support:
                </p>
                <ul>
                  <li>JSX syntax highlighting</li>
                  <li>Component navigation</li>
                  <li>Props and state inspection</li>
                  <li>React-specific refactoring</li>
                </ul>

                <h3>Vue.js Support</h3>
                <p>
                  Comprehensive Vue.js features:
                </p>
                <ul>
                  <li>Single File Component support</li>
                  <li>Vue template syntax</li>
                  <li>Component analysis</li>
                  <li>Vue-specific debugging</li>
                </ul>

                <h3>Angular Integration</h3>
                <p>
                  Full Angular development support:
                </p>
                <ul>
                  <li>TypeScript integration</li>
                  <li>Angular CLI integration</li>
                  <li>Component and service navigation</li>
                  <li>Angular-specific refactoring</li>
                </ul>

                <h2>Key Features</h2>
                <p>
                  WebStorm offers powerful development features:
                </p>
                <ul>
                  <li>Intelligent code completion</li>
                  <li>Advanced debugging tools</li>
                  <li>Built-in terminal</li>
                  <li>Version control integration</li>
                </ul>

                <h2>Pros and Cons</h2>
                <h3>Pros</h3>
                <ul>
                  <li>Excellent JavaScript support</li>
                  <li>Great framework integration</li>
                  <li>Powerful debugging tools</li>
                  <li>Comprehensive plugin ecosystem</li>
                </ul>

                <h3>Cons</h3>
                <ul>
                  <li>Can be resource-intensive</li>
                  <li>Paid license required</li>
                  <li>Steep learning curve</li>
                  <li>Complex configuration</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  WebStorm is an excellent choice for serious JavaScript developers. 
                  Its comprehensive framework support and powerful features make it 
                  a top choice for frontend development.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default WebStormReview;
