import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Clock, User, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const IntelliJIDEAReview = () => {
  return (
    <>
      <Head>
        <title>IntelliJ IDEA: The Professional IDE - TechDevDex</title>
        <meta name="description" content="Deep dive into IntelliJ IDEA features, performance, and why it&apos;s the choice for enterprise development." />
        <meta name="keywords" content="IntelliJ IDEA review, Java IDE, enterprise development, IDE features, productivity tools" />
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
                  IntelliJ IDEA: The Professional IDE
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Deep dive into IntelliJ IDEA features, performance, and why it&apos;s the choice for enterprise development.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>10 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>TechDevDex Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 14, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Professional</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                <div className="mb-8">
                  <Image 
                    src="/images/posts/intellij-review.jpg" 
                    alt="IntelliJ IDEA Review" 
                    width={800} 
                    height={400} 
                    className="rounded-xl shadow-lg"
                  />
                </div>

                <h2>IntelliJ IDEA Overview</h2>
                <p>
                  IntelliJ IDEA is a powerful integrated development environment (IDE) developed by JetBrains. 
                  It&apos;s widely regarded as one of the best IDEs for Java development and supports numerous other languages.
                </p>

                <h2>Key Features</h2>
                <h3>Smart Code Assistance</h3>
                <p>
                  IntelliJ IDEA provides intelligent code completion and analysis:
                </p>
                <ul>
                  <li>Context-aware code completion</li>
                  <li>Advanced refactoring tools</li>
                  <li>Code inspection and analysis</li>
                  <li>Quick fixes and suggestions</li>
                </ul>

                <h3>Built-in Tools</h3>
                <p>
                  Comprehensive development tools included:
                </p>
                <ul>
                  <li>Version control integration</li>
                  <li>Database tools</li>
                  <li>Terminal and command line</li>
                  <li>HTTP client for API testing</li>
                </ul>

                <h2>Performance and Reliability</h2>
                <p>
                  IntelliJ IDEA is known for its stability and performance:
                </p>
                <ul>
                  <li>Fast startup times</li>
                  <li>Efficient memory usage</li>
                  <li>Reliable indexing</li>
                  <li>Stable plugin ecosystem</li>
                </ul>

                <h2>Enterprise Features</h2>
                <p>
                  Professional features for enterprise development:
                </p>
                <ul>
                  <li>Team collaboration tools</li>
                  <li>Code review integration</li>
                  <li>Project management features</li>
                  <li>Advanced debugging capabilities</li>
                </ul>

                <h2>Pricing and Licensing</h2>
                <p>
                  IntelliJ IDEA offers both free and paid versions:
                </p>
                <ul>
                  <li>Community Edition (free)</li>
                  <li>Ultimate Edition (paid)</li>
                  <li>Educational licenses</li>
                  <li>Enterprise subscriptions</li>
                </ul>

                <h2>Pros and Cons</h2>
                <h3>Pros</h3>
                <ul>
                  <li>Excellent code intelligence</li>
                  <li>Comprehensive toolset</li>
                  <li>Strong community support</li>
                  <li>Regular updates</li>
                </ul>

                <h3>Cons</h3>
                <ul>
                  <li>Can be resource-intensive</li>
                  <li>Steep learning curve</li>
                  <li>Paid version required for full features</li>
                  <li>Complex configuration options</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  IntelliJ IDEA is an excellent choice for professional Java development and enterprise projects. 
                  While it has a learning curve, the productivity gains make it worthwhile for serious developers.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default IntelliJIDEAReview;
